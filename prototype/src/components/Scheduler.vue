<template>
  <div class="scheduler">
    <carousel
      ref="schedulerCarousel"
      :per-page="1"
      :navigation-enabled="true"
      :pagination-enabled="false"
      :navigate-to="[range, false]"
      :navigation-prev-label="carouselPrevLabel"
      :navigation-next-label="carouselNextLabel"
      @pageChange="onPageChange"
    >
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

  function getPrevNextLabels(dayjsCurrentMonth) {
    let prevMonth = dayjsCurrentMonth.subtract(1, 'month').format('MMMM'),
      nextMonth = dayjsCurrentMonth.add(1, 'month').format('MMMM');

    let prevLabel = `<i class='icon icon-triangle-left'></i>${prevMonth}`,
      nextLabel = `${nextMonth}<i class='icon icon-triangle-right'></>`;

    return { prevLabel, nextLabel };
  }

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
        carouselNextLabel: '',
        carouselPrevLabel: '',
      };
    },
    created() {
      //Arrow labels
      const { prevLabel, nextLabel } = getPrevNextLabels(dayjs());
      this.carouselPrevLabel = prevLabel;
      this.carouselNextLabel = nextLabel;

      //Calendars in slides
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
    methods: {
      onPageChange(currentPage) {
        //Change arrow labels' months
        let dayjsCurrentMonth = dayjs(this.months[currentPage], 'DD/MM/YYYY');

        const { prevLabel, nextLabel } = getPrevNextLabels(dayjsCurrentMonth);

        let $prevButton = document.querySelector('.VueCarousel-navigation-prev'),
          $nextButton = document.querySelector('.VueCarousel-navigation-next');

        if ($prevButton && $nextButton) {
          //Cannot change prop labels, will reinstantiate carousel component again
          $prevButton.innerHTML = prevLabel;
          $nextButton.innerHTML = nextLabel;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .scheduler {
    margin: 10vh 60px 10vh 20px;
  }
</style>

<style lang="scss">
  .scheduler {
    .VueCarousel-navigation {
      position: relative;
      margin: 0 20px;
    }
    .VueCarousel-navigation-button {
      transform: none;
      display: inline-flex;
      align-items: flex-end;

      .icon {
        font-size: 20px;
      }
    }
    .VueCarousel-navigation-prev {
      left: -8px;

      .icon {
        padding-right: 5px;
      }
    }
    .VueCarousel-navigation-next {
      right: -8px;
      .icon {
        padding-left: 5px;
      }
    }
  }
</style>
