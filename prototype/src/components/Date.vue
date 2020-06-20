<template>
  <td class="date">
    {{ date.date }}
  </td>
</template>

<script>
  export default {
    props: {
      date:Object,
      default: {date: ''}
    },
  };
</script>

<style lang="scss" scoped></style>
