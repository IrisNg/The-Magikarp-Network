<template>
  <div class="scheduler">
    <carousel :per-page="1" :navigation-enabled="true" :pagination-enabled="false" :navigate-to="[range, false]">
      <slide v-for="monthId in months" :key="monthId">
        <calendar :month-id="monthId" />
      </slide>
    </carousel>
  </div>
</template>

<script>
  import dayjs from 'dayjs';

  import { Carousel, Slide } from 'vue-carousel';
  import Calendar from './Calendar.vue';

  export default {
    components: {
      Calendar,
      Carousel,
      Slide,
    },
    data() {
      return {
        months: [],
        range: 5, //Number of months to add before and after current month
      };
    },
    // watch: {
    //   months() {
    //     $('.scheduler__calendars').slick({
    //       initialSlide: this.range,
    //       infinite: false,
    //       appendArrows: $('.scheduler__arrows'),
    //       prevArrow: '<button class="scheduler__prev scheduler__arrow">< Previous Month</button>',
    //       nextArrow: '<button class="scheduler__next scheduler__arrow">Next Month ></button>'
    //     });
    //   },
    // },
    created() {
      let months = [],
        currentMonthIndexInYear = dayjs().get('month'); //0 = jan, 11 = december

      let range = this.range;

      for (let i = currentMonthIndexInYear - range; i <= currentMonthIndexInYear + range; i++) {
        let monthId = dayjs()
          .date(1)
          .month(i)
          .format('DD/MM/YYYY');

        months.push(monthId);
      }

      this.months = months;
    },
  };
</script>

<style lang="scss" scoped>
  .scheduler {
    margin: 10vh 60px 10vh 20px;

    .VueCarousel-navigation-button.VueCarousel-navigation-prev {
      top: 0;
    }
  }
</style>


<style lang="scss">
  .scheduler {
    .VueCarousel-navigation-button.VueCarousel-navigation-prev {
      top: 0;
    }
  }
</style>
