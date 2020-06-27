<template>
  <td class="date">
    <div class="date__wrapper">
      <h3 class="date__date">
        {{ dateObj.date }}
      </h3>
      <ul>
        <li v-for="todo in list" :key="todo" class="date__todo">
          <input type="text" :value="todo">
        </li>
      </ul>
    </div>
  </td>
</template>

<script>
  import axios from 'axios';

  export default {
    props: {
      dateObj: {
        type: Object,
        default: function() {
          return { date: '', id: '' };
        },
      },
    },
    data() {
      return {
        list: [],
      };
    },
    created() {
      if (this.dateObj.id) {
        this.fetchList();
      }
    },
    methods: {
      async fetchList() {
        try {
          // const response = await axios.get(`api/schedules/${this.dateObj.id}.json`);
          const response = await axios.get(`api/date-${this.dateObj.date}.json`);
          if (response.data) {
            this.list = response.data.list;
          } else {
            this.list = [];
          }
        } catch (err) {
          console.log('error!', err);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .date {
    height: 12vh;
    vertical-align: top;
    text-align: left;
    padding: 5px;

&__wrapper {
  display: flex;
}
    &__date {
      margin: 0;

      font-weight: $default;
      font-size: calc-em(16px);
      display: inline-block;

      padding-right: 5px;
    }
    li {
      font-size: calc-em(12px);

      input {
        width: 100%;
        background: none;
        border: none;
        
      }
    }
  }
</style>
