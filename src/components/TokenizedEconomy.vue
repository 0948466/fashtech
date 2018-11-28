<template>
  <section class="tokenized-economy">
    <div class="tokenized-economy__content">
      <h2 class="tokenized-economy__title">
        Tokenized Economy
      </h2>
      <div class="tokenized-economy__wrap">
        <div class="tokenized-economy__items-wrap">
          <div class="tokenized-economy__item">
            <h3 class="tokenized-economy__item__title">
              {{ $t('tokenizedEconomy.item1.title') }}
            </h3>
            <p class="tokenized-economy__item__text">
              {{ $t('tokenizedEconomy.item1.text') }}
            </p>
            <button
              class="tokenized-economy__btn"
              @click="onBtnClick('FeaturesFashtech')">
              {{ $t('tokenizedEconomy.btn') }}
            </button>
          </div>
          <div class="tokenized-economy__item">
            <h3
              class="tokenized-economy__item__title"
              v-html="$t('tokenizedEconomy.item2.title')"/>
            <p class="tokenized-economy__item__text">
              {{ $t('tokenizedEconomy.item2.text') }}
            </p>
            <button
              class="tokenized-economy__btn"
              @click="onBtnClick('SecurityToken')">
              {{ $t('tokenizedEconomy.btn') }}
            </button>
          </div>
        </div>
        <div class="tokenized-economy__ellipse">
          <p class="tokenized-economy__ellipse__text">Tokenized Economy</p>
        </div>
        <div class="tokenized-economy__items-wrap">
          <div class="tokenized-economy__item">
            <h3 class="tokenized-economy__item__title">
              {{ $t('tokenizedEconomy.item3.title') }}
            </h3>
            <p class="tokenized-economy__item__text">
              {{ $t('tokenizedEconomy.item3.text2') }}
              <br>
              {{ $t('tokenizedEconomy.item3.text3') }}
              <br>
              {{ $t('tokenizedEconomy.item3.text4') }}
              <br>
              {{ $t('tokenizedEconomy.item3.text5') }}
              <br>
              {{ $t('tokenizedEconomy.item3.text6') }}
            </p>
            <button
              class="tokenized-economy__btn"
              @click="onBtnClick('EquityAllocation')">
              {{ $t('tokenizedEconomy.btn') }}
            </button>
          </div>
          <div class="tokenized-economy__item">
            <h3 class="tokenized-economy__item__title">
              {{ $t('tokenizedEconomy.item4.title') }}
            </h3>
            <p class="tokenized-economy__item__text">
              {{ $t('tokenizedEconomy.item4.text1') }}
              <br>
              {{ $t('tokenizedEconomy.item4.text2') }}
              <br>
              {{ $t('tokenizedEconomy.item4.text3') }}
              <br>
              {{ $t('tokenizedEconomy.item4.text4') }}
            </p>
            <button
              class="tokenized-economy__btn"
              @click="onBtnClick('AllocationFunds')">
              {{ $t('tokenizedEconomy.btn') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { modal } from '@/api/constants'

  export default {
    name: 'TokenizedEconomy',
    methods: {
      onBtnClick(i) {
        let view
        switch (i) {
          case 'EquityAllocation':
            view = modal.EQUITY_ALLOCATION
            break
          case 'FeaturesFashtech':
            view = modal.FEATURES_FASHTECH
            break
          case 'SecurityToken':
            view = modal.SECURITY_TOKEN
            break
          case 'AllocationFunds':
            view = modal.ALLOCATION_FUNDS
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
  .tokenized-economy {
    @include sectionPadding;
    @include w768 {
      position: relative;
      background: url("../assets/img/tokenized-economy/background-tokenized-economy.png")
      no-repeat 50% 40%;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/img/tokenized-economy/srots.png") no-repeat 50% 140%;
      }
    }
    @media only screen and (max-width: 1240px) {
      background-position: 50% 0;
      &::after {
        background-position: 50% 0;
      }
    }
    &__content {
      position: relative;
      z-index: 1;
    }
    &__title {
      @include titleSectionWithGradient;
    }

    &__wrap {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      @media only screen and (max-width: 1240px) {
        flex-wrap: wrap;
        flex-grow: 1;
      }
    }

    &__items-wrap {
      display: inline-flex;
      justify-content: space-between;
      flex-direction: column;
      flex-basis: 375px;
      margin: 0 4%;
    }

    &__item {
      flex-basis: 245px;
      margin: 0 1.5% 6em;
      text-align: right;
      &:last-of-type {
        margin-bottom: 0;
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
      @include responsive-font-size(19px);
      line-height: 1.286;
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

    &__ellipse {
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: center;
      margin: 2em 0;
      width: 311px;
      height: 311px;
      flex-shrink: 0;
      background: url("../assets/img/tokenized-economy/ellipse.png") no-repeat center;
      background-size: contain;
      @media only screen and (max-width: 1240px) {
        order: -1;
        width: 100%;
      }
    }

    &__ellipse__text {
      @include responsive-font-size(21px);
      color: #dfdede;
    }

    &__btn {
      @include btnReadmore;
    }
  }

</style>
