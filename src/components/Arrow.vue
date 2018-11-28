<template>
  <div
    :style="styleArrow"
    class="arrow"
    @click="onArrowClick">
    <div class="arrow__top">
      <div
        :style="styleLine"
        class="arrow__line"/>
    </div>
    <div class="arrow__bottom">
      <div
        :style="styleLine"
        class="arrow__line"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Arrow',
    props: {
      size: {
        default: '40px',
        type: String,
      },
      active: {
        default: true,
        type: Boolean,
      },
      degree: {
        default: 45,
        type: Number,
      },
      lineSize: {
        default: '60%',
        type: String,
      },
      lineBold: {
        default: '1px',
        type: String,
      },
      backgroundColor: {
        default: 'grey',
        type: String,
      },
    },

    computed: {
      styleArrow() {
        return {
          width: this.size,
          height: this.size,
          opacity: this.active ? 1 : 0.2,
          cursor: this.active ? 'pointer' : 'default',
        }
      },
      styleLine() {
        return {
          backgroundColor: this.backgroundColor,
          width: this.lineSize,
          height: this.lineBold,
          transform: `rotate(-${this.degree}deg) translate(-50%, -50%)`,
        }
      },
    },
    methods: {
      onArrowClick() {
        if (this.active) {
          this.$emit('click')
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
.arrow {
  position: relative;
  transform: rotate(90deg);
  &__top,
  &__bottom {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
  }
  &__top {
    transform: translate(-50%, -50%) scale(-1, 1);
    .arrow__line {
      left: 64%;
    }
  }
  &__bottom {
    transform: translate(-50%, -50%);
    .arrow__line {
      left: 63%;
    }
  }
  &__line {
    position: absolute;
    top: 34%;
  }
}
</style>
