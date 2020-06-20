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
        <tr v-for="(week, weekIndex) in calendar" :key="weekIndex">
          <td v-for="day in week" :key="day">
            {{ day }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import dayjs from 'dayjs';

  export default {
    data() {
      return {
        calendar: [],
        daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      };
    },
    created() {
      let daysList = [];
      let daysInMonth = dayjs().daysInMonth();

      for (var i = 1; i <= daysInMonth; i++) {
        daysList.push(dayjs().date(i));
      }

      // console.log('daysList', daysList);
      // console.log('testing', daysList[0].get('day'));
      let startingDayOfWeek = daysList[0].get('day'); //sunday = 0, Saturday = 6

      // startingDayOfWeek= 3;
      let calendarList = [];
      for (var i = 0; i < startingDayOfWeek; i++) {
        calendarList.push('');
      }

      calendarList = [...calendarList, ...daysList];

      // console.log('calendarList', calendarList);
      let final = [];
      let holder = [];
      calendarList.forEach((day, index) => {
        holder.push(day);
        if ((index + 1) % 7 === 0) {
          final.push([...holder]);
          holder = [];
        }
      });

      final.push([...holder]);

      console.log('final', final);

      this.calendar = final.map((week) => {
        let formattedWeek = week.map((day) => {
          if (day) {
            return day.get('date');
          } else {
            return day;
          }
        });
        return formattedWeek;
      });

      console.log('data days', this.calendar);
    },
  };
</script>

<style lang="scss" scoped></style>
