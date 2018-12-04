<template>
  <section class="futures-blockchain">
    <div class="futures-blockchain__content">
      <h2 class="futures-blockchain__title">
        Futures: Blockchain in Fashion - FashTech IMIGIZE
        <br>
        Why It makes sense
      </h2>
      <div class="futures-blockchain__items-wrap">
        <div
          v-for="(item, i) in $t('futuresBlockchain.items')"
          :key="item.title"
          class="futures-blockchain__item">
          <h3
            class="futures-blockchain__item__title"
            v-html="item.title"/>
          <p
            class="futures-blockchain__item__text"
            v-html="item.text"/>
          <button
            class="futures-blockchain__btn"
            @click="onBtnClick(i)">
            {{ $t('futuresBlockchain.btn') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { modal } from '@/api/constants'

  export default {
    name: 'FuturesBlockchain',
    methods: {
      onBtnClick(i) {
        let view
        switch (i) {
          case 0:
            view = modal.FASH_TECH
            break
          case 1:
            view = modal.DEMOCRATIZATION
            break
          case 2:
            view = modal.DATA_STORE_BLOCKCHAIN
            break
          case 3:
            view = modal.TRUST_PROTOCOL
            break
          case 4:
            view = modal.DIRECT_ADS
            break
          default:
            return
        }
        this.$router.push({ query: { modal: view } })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .futures-blockchain {
    position: relative;
    @include sectionPadding;
    @include w320-767 {
      background: url("../assets/img/futures-blockchain/wave-for-futures-mobile.png")
      no-repeat 50% 10%;
    }
    @include w768 {
      background: url("../assets/img/futures-blockchain/wave-for-futures-desktop.png")
      no-repeat 50% 10%;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("../assets/img/futures-blockchain/spot.png") no-repeat 50% 60%;
      background-size: 100% 60%;
      z-index: 0;
    }
    &__content {
      position: relative;
      z-index: 1;
    }
    &__title {
      @include titleSectionWithGradient
    }

    &__items-wrap {
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 1240px) {
        flex-wrap: wrap;
        flex-grow: 1;
      }
    }

    &__item {
      flex-basis: 245px;
      margin: 0 1.5%;
      text-align: right;

      @media only screen and (min-width: 1241px) {
        &:first-child .futures-blockchain__item__title {
          justify-content: flex-end;
        }

        &:first-child .futures-blockchain__item__text {
          text-align: right;
        }

        &:last-child .futures-blockchain__item__title {
          justify-content: flex-start;
        }

        &:last-child .futures-blockchain__item__text {
          text-align: left;
          margin-bottom: 0;
        }
      }

      @media only screen and (max-width: 1240px) {
        margin-bottom: 1em;
        flex-grow: 1;
      }
    }

    &__item__title {
      position: relative;
      padding-bottom: 0.5em;
      margin-bottom: 0.8em;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 3em;
      @include responsive-font-size(18px);
      line-height: 1.5;
      color: $color1;
      letter-spacing: 0.015em;
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: $color2;
      }
    }

    &__item__text {
      margin-bottom: 1em;
      @include responsive-font-size(17px);
      line-height: 1.61;
      color: #fff;
      letter-spacing: 0.015em;
      text-align: justify;
    }

    &__btn {
      @include btnReadmore;
    }
  }

</style>
