<template>
  <div
    class="utility-item"
    @mouseenter="hover=true"
    @mouseleave="hover=false">
    <h3 class="utility-item__title">
      {{ title }}
    </h3>
    <div class="utility-item__box__wrap">
      <div
        :style="getStyleBox"
        class="utility-item__box">
        <div class="utility-item__box__background"/>
        <div class="utility-item__box__inner">
          <p class="utility-item__text utility-item__text_top">
            {{ textTop }}
          </p>
          <p class="utility-item__text">
            {{ textBottom }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UtilityItem',
    props: {
      title: {
        type: String,
        default: null,
      },
      textTop: {
        type: String,
        default: null,
      },
      textBottom: {
        type: String,
        default: null,
      },
      backgroundSrc: {
        type: String,
        default: null,
      },
      backgroundSrcHover: {
        type: String,
        default: null,
      },
    },
    data: () => ({
      hover: false,
    }),
    computed: {
      getStyleBox() {
        const background = (this.hover) ? this.backgroundSrcHover : this.backgroundSrc
        return { backgroundImage: `url(${background})` }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .utility-item {
    display: flex;
    flex-direction: column;
    flex-basis: 210px;
    margin: 0 1.4%;
    box-sizing: border-box;
    text-align: left;
    @media only screen and (max-width: 1240px) {
      margin-bottom: 1em;
      flex-grow: 1;
    }

    &__box__wrap {
      display: flex;
      flex-grow: 1;
      &:hover {
        background-color: rgba(70, 70, 70, .14);
      }
    }

    &__box {
    @include linearGradient;
      padding: 0.7em 6% 1.5em;
      flex-grow: 1;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      &__background {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60%;
        background-color: rgba(3, 21 ,29 ,.57);
      }
    }

    &__box__inner {
      position: relative;
    }
    &__title {
      padding: 0 6%;
      @include responsive-font-size(19.35px);
      margin-bottom: 1em;
      font-weight: 400;
      color: $color2;
    }
    &__text {
      @include responsive-font-size(17px);
      line-height: 1.565;
      color: #fff;
      &_top {
        margin-bottom: 1.5em;

      }
    }
  }

</style>
