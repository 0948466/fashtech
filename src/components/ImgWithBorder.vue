<template>
  <div class="img-with-border">
    <div class="img-with-border__inner">
      <div class="img-with-border__img-wrap">
        <img
          :src="imgSrc"
          :alt="imgAlt"
        >
        <div
          :style="lineStyle"
          class="img-with-border__line"/>
      </div>
    </div>
    <div class="img-with-border__social">
      <a
        v-if="linkLinkedIn"
        :href="linkLinkedIn"
        aria-label="LinkedIn"
        class="img-with-border__social__link img-with-border__social__link_linkedin"
        rel="noopener"
        target="_blank"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageWithBorder',
    props: {
      imgSrc: {
        default: false,
        type: [String, Boolean],
      },
      imgAlt: {
        default: 'Cooming soon',
        type: String,
      },
      lineSide: {
        default: 'left',
        type: String,
      },
      linkLinkedIn: {
        default: null,
        type: String,
      },
    },
    computed: {
      lineStyle() {
        return { [this.lineSide]: 0 }
      },
    },
  }
</script>

<style lang="scss" scoped>
  $lineWidth: 2px;
  $lineHeight: 76px;

  .img-with-border {
    position: relative;
    display: inline-flex;
    padding-bottom: calc(#{$lineHeight} - 17px - #{$lineWidth});
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("../assets/img/img-with-border/shadow-line.png") no-repeat;
    }
    &__inner {
      position: relative;
      padding: 17px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-top: $lineWidth solid #edfafa;
      border-bottom: $lineWidth solid #909294;
      &:before, &:after {
        content: "";
        position: absolute;
        background-image: linear-gradient(#edfafa 0%, #8f8f8f 10%, #bae5f2 45%,
          #757575 47%, #bababa 50%, #bababa 58%, #ffffff 61%, #ffffff 64%,
          #bababa 66%, #474747 70%, #919395 100%);
        top: -#{$lineWidth};
        bottom: -#{$lineWidth};
        width: #{$lineWidth};
      }
      &:before {
        left: -#{$lineWidth};
      }
      &:after {
        right: -#{$lineWidth};
      }
    }

    &__img-wrap {
      position: relative;
    }

    img,
    &__img-wrap {
      width: 260px;
      height: 255px;
    }
    &__line {
      position: absolute;
      top: 100%;
      width: 2px;
      height: $lineHeight;
      background-color: rgba(151, 151, 151, 0.36);
    }

    &__social {
      position: absolute;
      bottom: 6px;
      right: -3px;
      z-index: 1;
    }

    &__social__link {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #afafaf;
    }

    &__social__link_linkedin {
      background: url("../assets/img/icons/icon-linkedin.svg");
    }
  }
</style>
