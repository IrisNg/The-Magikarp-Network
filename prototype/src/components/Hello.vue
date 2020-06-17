<template>
  <div>
    <h2 class="text-center">Hello From Component</h2>
    <button @click="fetchApi">Click to Fetch API!</button>
  </div>
</template>

<script>
// import $ from "jquery";

export default {
  mounted() {
    console.log("component mounted?");
  },
  methods: {
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
  }
};
</script>