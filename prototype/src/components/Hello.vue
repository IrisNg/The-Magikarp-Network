<template>
  <div>
    <h2 class="text-center">
      Hello From Component
    </h2>
    <button @click="fetchApi">
      Click to Fetch API!
    </button>
  </div>
</template>

<script>
  // import $ from "jquery";
  import axios from 'axios';

  export default {
    mounted() {
      console.log('component mounted?');
    },
    methods: {
      fetchApi() {
        axios
          .post('api/fetch.json')
          .then((res) => {
            console.log('ajax', res.data);
          })
          .catch((err) => {
            console.log('ajax err', err);
          });
      },
      // fetchApi() {
      //   $.ajax({
      //     method: "GET",
      //     url: "api/fetch.json",
      //     dataType: "json",
      //     data: {
      //       keyword: "keyword",
      //       take: "take"
      //     }
      //   })
      //     .done(function(response) {
      //       console.log("fetch!", response);
      //     })
      //     .fail(function(err) {});
      // }
    },
  };
</script>
