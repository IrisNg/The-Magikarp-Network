/* eslint-disable vue/max-attributes-per-line */ /* eslint-disable vue/max-attributes-per-line */
<template>
  <div class="scheduler">
    <p>Scheduler</p>
    <table>
      <thead>
        <th v-for="dayName in daysOfWeek" :key="dayName">
          {{ dayName }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(week, weekIndex) in calendarTable" :key="weekIndex">
          <td v-for="date in week" :key="date.id">
            {{ date.date || '' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import dayjs from 'dayjs';

  function getRenderObj(dateObj) {
    return dateObj ? { id: dateObj.format('DD/MM/YYYY'), date: dateObj.get('date') } : '';
  }

  function getCalendarTable(dayjsMonthObj) {
    let datesList = [],
      numDaysInMonth = dayjsMonthObj.daysInMonth(); //eg 31

    //Generate dayjs obj for each day in the month
    for (let i = 1; i <= numDaysInMonth; i++) {
      datesList.push(dayjsMonthObj.date(i));
    }

    let startingDayOfWeek = datesList[0].get('day'); //sunday = 0, Saturday = 6
    // startingDayOfWeek= 3;

    //Fill beginning until 1st day of the month is on the correct day of week
    for (let i = 0; i < startingDayOfWeek; i++) {
      datesList.unshift('');
    }

    console.log('datesList', datesList);

    //Format list into table format [[dayjsObjs in week 1], [week 2], ...]
    let { table } = datesList.reduce(
      (acc, dateObj, index) => {
        acc.holder.push(getRenderObj(dateObj));

        let isLastDayOfWeek = (index + 1) % 7 === 0,
          isLastItem = index === datesList.length - 1;

        if (isLastDayOfWeek || isLastItem) {
          acc.table.push([...acc.holder]);
          acc.holder = [];
        }

        return acc;
      },
      { table: [], holder: [] }
    );

    return table;
  }

  export default {
    data() {
      return {
        calendarTable: [],
        daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      };
    },
    created() {
      let remainingMonths = [];
      let currentMonthIndex = dayjs().get('month')
      for (let i=currentMonthIndex; i < 12; i++) {
        remainingMonths.push(i)
      }
      console.log('remain', remainingMonths)
      this.calendarTable = getCalendarTable(dayjs());

      console.log('injected calendarTable', this.calendarTable);
    },
  };
</script>

<style lang="scss" scoped></style>
