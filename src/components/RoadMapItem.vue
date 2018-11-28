<template>
  <div
    :class="classItem"
    class="road-map-item"
  >
    <h3
      v-if="top"
      class="road-map-item__title-top"
    >
      <slot name="title-top"/>
    </h3>
    <div
      :class="classContent"
      class="road-map-item__content">
      <div class="road-map-item__content__background"/>
      <h3
        v-if="!top"
        class="road-map-item__title-bottom"
      >
        <slot name="title-bottom"/>
      </h3>
      <p
        :class="{'road-map-item__text_bottom': !top}"
        class="road-map-item__text"
      >
        <slot name="content"/>
      </p>
    </div>
    <div
      v-if="top"
      :class="{'road-map-item__line_bottom_show': lineShow}"
      class="road-map-item__line road-map-item__line_bottom"/>
    <div
      v-if="!top"
      :class="{'road-map-item__line_top_show': lineShow}"
      class="road-map-item__line road-map-item__line_top"/>
  </div>
</template>

<script>
  export default {
    name: 'RoadMapItem',
    props: {
      top: {
        type: Boolean,
        default: true,
      },
      active: {
        type: Boolean,
        default: false,
      },
      lineShow: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      classItem() {
        return {
          'road-map-item_top': this.top,
          'road-map-item_bottom': !this.top,
          'road-map-item_active': this.active,
        }
      },
      classContent() {
        return {
          'road-map-item__content_top': this.top,
          'road-map-item__content_bottom': !this.top,
          'road-map-item__content_active': this.active,
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  $lineHeightTop: 89px;
  $lineHeightBottom: 75px;

  .road-map-item {
    position: relative;

    display: flex;
    flex-direction: column;
    color: #fff;
    @include responsive-font-size(18px);
    text-align: left;
    user-select: none;
    &_top {
      padding-bottom: $lineHeightBottom;
      width: 210px;
      @include w320-767 {
        width: 160px;
      }
    }
    &_bottom {
      padding-top: $lineHeightTop;
      width: 205px;
      @include w320-767 {
        width: 150px;
      }
    }

    &__title-top {
      margin-bottom: .9em;
      font-weight: 600;
    }
    &__title-bottom {
      position: relative;
      margin-bottom: 1.5em;
      font-weight: 600;
    }

    $lineWidth: 2px;
    &__content {
      position: relative;
      flex-grow: 1;
      min-height: 250px;
      box-sizing: border-box;
      border-top: $lineWidth solid #edfafa;
      border-bottom: $lineWidth solid #909294;
      line-height: 1.395;
      letter-spacing: -0.015em;
      &_top {
        padding: 1em 4% 1em 8%;
      }
      &_bottom {
        padding: .8em 3% 1em 9%;
      }
      &_active {
        background: rgba(0, 162, 181, 0.17);
      }

      @include linearGradient;

      &__background {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70%;
        background-color: rgba(255, 255 ,255 ,0.05);
      }
    }

    &:hover &__content {
      box-shadow: 0 0 16.38px 1.62px rgba(255, 255, 255, 0.38) inset,
      0 0 16.38px 1.62px rgba(255, 255, 255, 0.38);
    }

    &__text {
      position: relative;
      color: #b2b2b2;
      &_bottom {
        color: #b2b2b2;
      }
    }

    &__line {
      position: absolute;
      left: 40%;
      width: 2px;
      background-color: rgba(255,255,255, 0.28);
      transition: height 3s ease-in;
      &_top {
        top:0;
        height: 0;
        &_show {
          height: $lineHeightTop;
        }
        &::after {
          content: '';
          position: absolute;
          top: -19px;
          left: -17px;
          width: 35px;
          height: 36px;
          background-image: url("../assets/img/road-map/arrow-point-top.png");
        }
      }
      &_bottom {
        bottom: 0;
        height: 0;
        &_show {
          height: $lineHeightBottom;
        }
        &::after {
          content: '';
          position: absolute;
          bottom: -19px;
          left: -17px;
          width: 35px;
          height: 36px;
          background-image: url("../assets/img/road-map/arrow-point-bottom.png");
        }
      }
    }

    &_active &__line_top::after,
    &:hover &__line_top::after {
      background-image: url("../assets/img/road-map/arrow-point-top-active.png");
    }

    &_active &__line_bottom::after,
    &:hover &__line_bottom::after {
      background-image: url("../assets/img/road-map/arrow-point-bottom-active.png");
    }
    }
</style>
