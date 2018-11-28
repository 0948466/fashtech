<template>
  <section
    id="international-advisors"
    class="advisors">
    <div class="container">
      <h2 class="advisors__title">{{ $t('advisors.title') }}</h2>
      <div class="advisors__wrap">
        <div
          v-for="item in items"
          :key="item.id"
          class="advisors__item"
          @click.prevent="openPopup(item)">
          <div
            v-if="!item.name"
            class="advisors__item advisors__item_no-mobile"/>
          <template v-else>
            <div class="advisors__item__title-wrap">
              <h5
                ref="name"
                class="advisors__name">
                {{ item.name }}
              </h5>
              <p class="advisors__role">{{ item.role }}</p>
            </div>

            <p class="advisors__text">&nbsp;{{ item.text }}</p>
            <p class="advisors__text-city">&nbsp;{{ item.city }}</p>
            <ImgWithBorder
              :img-src="getUrl(item)"
              :img-alt="item.name"
            />
            <p class="advisors__text advisors__text_bottom">
              {{ item.textHover }}
            </p>
          </template>
        </div>
        <!--<div class="advisors__item advisors__item_no-mobile"></div>-->
      </div>
    </div>
  </section>
</template>

<script>
  import { modal } from '@/api/constants'
  import ImgWithBorder from '@/components/ImgWithBorder.vue'
  import ImgWong from '@/assets/img/advisors/advisor-wong.jpg'
  import ImgZiv from '@/assets/img/advisors/advisor-ziv.jpg'
  import ImgHiley from '@/assets/img/advisors/advisor-hiley.jpg'
  import ImgBrizendine from '@/assets/img/advisors/advisor-brizendine.jpg'
  import ImgDarmaki from '@/assets/img/advisors/advisor-darmaki.jpg'
  import ImgChow from '@/assets/img/advisors/advisor-chow.jpg'
  import ImgSmetannikov from '@/assets/img/advisors/advisor-smetannikov.jpg'
  import ImgIgor from '@/assets/img/advisors/advisor-igor.jpg'

  export default {
    name: 'Advisors',
    metaInfo: {
      title: 'Advisors',
    },
    components: {
      ImgWithBorder,
    },
    computed: {
      items() {
        return this.$i18n.t('advisors.items')
      },
    },
    methods: {
      openPopup(item) {
        if (!item.textBig1) {
          return
        }
        this.$router.push({ query: { modal: modal.ADVISOR_PROFILE, name: item.id } })
      },

      getUrl(item) {
        switch (item.id) {
          case 'William_Wong':
            return ImgWong
          case 'Avishai_Ziv':
            return ImgZiv
          case 'Robert_Hiley':
            return ImgHiley
          case 'Sean_Brizendine':
            return ImgBrizendine
          case 'Saeed_Hareb_Al_Darmaki':
            return ImgDarmaki
          case 'Victor_Chow':
            return ImgChow
          case 'Max_Smetannikov':
            return ImgSmetannikov
          case 'Igor_Galburt':
            return ImgIgor
          default:
            return false
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @keyframes rotate-clockwise {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(120deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotate-counter-clockwise {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-120deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .advisors {
    position: relative;
    padding: 2em 4% 6em 4%;

    &__title {
      @include titleSection2;
      margin-bottom: 2.5em;
      text-transform: uppercase;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;
      max-width: 1440px;
      @include w320-767 {
        justify-content: center;
      }
    }

    &__item {
      position: relative;
      margin: 0 15px 4em;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
      width: 100%;
      @include w768 {
        width: 426px;
        max-width: calc(33.33% - 30px);
      }

      @include w320-767 {
        width: 100%;
      }

      &_no-mobile {
        @include w320-767 {
          display: none;
        }
      }
    }

    &__item__title-wrap {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding-left: 44px;
      padding-bottom: 3px;
      margin-bottom: 0.5em;
      &::after {
        content: '';
        position: absolute;
        top: calc(100% + 1px);
        left: 24%;
        width: 76%;
        height: 2px;
        background-color: #009fbc;
      }
    }

    &__name {
      width: 47%;
      @include responsive-font-size(18);
      color: #dfdede;
      text-align: left;
      letter-spacing: -0.015em;
    }

    &__role {
      font-weight: 400;
      @include responsive-font-size(18);
      color: #00a6c4;
      text-align: right;
    }
    &__text {
      @include responsive-font-size(18);
      color: #b3b3b3;
      line-height: 1.4;
      text-align: right;
      letter-spacing: -0.015em;
      &_bottom {
        position: relative;
        padding-left: 30px;
        margin-bottom: 0;
        padding-top: 20px;
        width: 363px;
        box-sizing: border-box;
        line-height: 1.05;
        text-align: left;
        @include w320-767 {
          width: 100%;
        }
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 97%;
          height: 2px;
          background-color: #009fbc;
        }
      }
    }
    &__text-city {
      margin-bottom: 1.5em;
      @include responsive-font-size(18);
      color: #b3b3b3;
      line-height: 1.4;
      text-align: right;
      letter-spacing: -0.015em;
    }
  }
</style>
