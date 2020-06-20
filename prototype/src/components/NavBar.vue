<template>
  <div class="nav-bar">
    <ul class="nav-bar__links-list">
      <li v-for="link in links" :key="link.url">
        <a :href="link.url">
          <i :class="['icon', link.icon]" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            url: '/scheduler',
            icon: 'icon-calendar',
          },
          {
            url: '/todo',
            icon: 'icon-list-ol',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: fixed;
    left: 30px;
    top: 30%;

    &__links-list {
      i.icon {
        font-size: calc-em(90px);

        // @include centering-the-unknown();
      }
    }
  }
</style>
