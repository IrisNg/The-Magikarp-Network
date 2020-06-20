/* eslint-disable vue/max-attributes-per-line */ /* eslint-disable vue/max-attributes-per-line */
<template>
  <div class="scheduler">
    <div class="scheduler__calendars">
      <calendar v-for="monthId in months" :key="monthId" :month-id="monthId" />
    </div>
    <div class="scheduler__arrows" />
  </div>
</template>

<script>
  import $ from 'jquery';
  import slick from 'slick-carousel';
  import dayjs from 'dayjs';

  import Calendar from './Calendar.vue';

  export default {
    components: {
      Calendar,
    },
    data() {
      return {
        months: [],
        currentMonthIndex: 5,
      };
    },
    watch: {
      months() {
        $('.scheduler__calendars').slick({
          initialSlide: this.currentMonthIndex,
          infinite: false,
          appendArrows: $('.scheduler__arrows'),
          prevArrow: '<button class="scheduler__prev scheduler__arrow">< Previous Month</button>',
          nextArrow: '<button class="scheduler__next scheduler__arrow">Next Month ></button>'
        });
      },
    },
    created() {
      let remainingMonths = [],
        currentMonthIndex = dayjs().get('month');

      let range = this.currentMonthIndex;

      for (let i = currentMonthIndex - range; i <= currentMonthIndex + range; i++) {
        let monthId = dayjs()
          .date(1)
          .month(i)
          .format('DD/MM/YYYY');

        remainingMonths.push(monthId);
      }

      this.months = remainingMonths;
    },
  };
</script>

<style lang="scss" scoped>
  .scheduler {
    margin: 10vh 60px 10vh 20px;

    &__arrows {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
