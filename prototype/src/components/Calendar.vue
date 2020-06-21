<template>
  <div class="calendar">
    <p>{{ monthYear }}</p>
    <table>
      <thead>
        <th v-for="dayName in daysOfWeek" :key="dayName">
          {{ dayName }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(week, weekIndex) in calendarTable" :key="weekIndex">
          <date v-for="date in week" :key="date.id" :date="date" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  import customParseFormat from 'dayjs/plugin/customParseFormat';

  import Date from './Date.vue';
  dayjs.extend(customParseFormat);

  function getRenderObj(dateObj, index) {
    return dateObj ? { id: dateObj.format('DD/MM/YYYY'), date: dateObj.get('date') } : { id: `empty-${index}`, date: '' };
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

    // console.log('datesList', datesList);

    //Format list into table format [[dayjsObjs in week 1], [week 2], ...]
    let { table } = datesList.reduce(
      (acc, dateObj, index) => {
        acc.holder.push(getRenderObj(dateObj, index));

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
    components: {
      Date,
    },
    props: {
      monthId: String,
    },
    data() {
      return {
        calendarTable: [],
        // daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthYear: '',
      };
    },
    created() {
      let dayjsMonthObj = dayjs(this.monthId, 'DD/MM/YYYY');

      this.monthYear = dayjsMonthObj.format('MMMM YYYY');
      this.calendarTable = getCalendarTable(dayjsMonthObj);
    },
  };
</script>

<style lang="scss" scoped>
  .calendar {
    padding: 0 20px;
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th,
    td {
      border: 1px solid $black;
    }

    th {
      height: 50px;
      text-align: center;
    }
    td {
      height: 60px;
      vertical-align: top;
      text-align: left;
      padding: 1%;
    }
  }
</style>
