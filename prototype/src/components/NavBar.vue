<template>
  <div class="nav-bar">
    <ul class="nav-bar__links-list">
      <li v-for="link in links" :key="link.url">
        <router-link :to="link.url" active-class="active">
          <i :class="['icon', link.icon]" />
        </router-link>
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
          url: "/scheduler",
          icon: "icon-calendar"
        },
        {
          url: "/todo",
          icon: "icon-list-ol"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  left: 30px;
  top: 30%;
  z-index: 100;

  &__links-list {
    $linkSize: 40px;
    $initialColor: $black;
    $hoverColor: $blue;
    $duration: 0.2s;
    $initialCircleWidth: 2px;
    $hoverInnerWidth: 1.5px;
    $hoverOuterWidth: 5px;

    li {
      margin-bottom: 20px;
    }

    a {
      display: inline-block;

      &.active {
        cursor: default;
        i.icon:after {
          box-shadow: 0 0 0 3.5px $initialColor;
        }
      }

      &:not(.active):hover i.icon {
        //Outer circle
        box-shadow: 0 0 0 $hoverOuterWidth $hoverColor;

        color: $hoverColor;

        &:after {
          //Inner circle
          $hoverScale: 0.85;
          -webkit-transform: scale($hoverScale);
          -moz-transform: scale($hoverScale);
          -ms-transform: scale($hoverScale);
          transform: scale($hoverScale);

          opacity: 0.5;

          box-shadow: 0 0 0 $hoverInnerWidth $hoverColor;
        }
      }
    }
    i.icon {
      width: $linkSize;
      height: $linkSize;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      position: relative;
      z-index: 1;

      font-size: calc-em(22px);
      color: $initialColor;
      border-radius: 50%;

      -webkit-transition: box-shadow $duration;
      -moz-transition: box-shadow $duration;
      transition: box-shadow $duration, color $duration;

      &:after {
        //Initial circle
        content: "";
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        pointer-events: none;
        border-radius: 50%;
        box-shadow: 0 0 0 $initialCircleWidth $initialColor;

        -webkit-transition: -webkit-transform $duration, opacity $duration,
          box-shadow $duration;
        -moz-transition: -moz-transform $duration, opacity $duration,
          box-shadow $duration;
        transition: transform $duration, opacity $duration, box-shadow $duration;
      }
    }
  }
}
</style>
