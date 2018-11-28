<template>
  <section
    v-if="item"
    class="advisor-profile">
    <div class="advisor-profile__top">
      <div class="advisor-profile__left">
        <ImageWithBorder
          :img-src="src"
          line-side="right"/>
        <div class="advisor-profile__social">
          <a
            :href="item.linkTwitter"
            class="advisor-profile__social__link advisor-profile__social__link-linkedin"
            target="_blank"/>
        </div>
      </div>
      <div class="advisor-profile__right">
        <div class="advisor-profile__title-wrap">
          <h5
            ref="name"
            class="advisor-profile__name">
            {{ item.name }}
          </h5>
          <p class="advisor-profile__role">{{ item.role }}</p>
        </div>
        <div class="advisor-profile__text-wrap">
          <p
            v-if="item.text"
            class="advisor-profile__text">{{ item.text }}</p>
        </div>
        <p
          v-if="item.textBig1"
          class="advisor-profile__text-big"
          v-html="item.textBig1"/>
      </div>
    </div>
    <p
      v-if="item.textBig2"
      class="advisor-profile__text-bottom"
      v-html="item.textBig2"/>
  </section>
</template>

<script>
  import ImageWithBorder from '@/components/ImgWithBorder.vue'
  import ImgWong from '@/assets/img/advisors/advisor-wong.jpg'
  import ImgZiv from '@/assets/img/advisors/advisor-ziv.jpg'
  import ImgHiley from '@/assets/img/advisors/advisor-hiley.jpg'
  import ImgBrizendine from '@/assets/img/advisors/advisor-brizendine.jpg'
  import ImgDarmaki from '@/assets/img/advisors/advisor-darmaki.jpg'
  import ImgChow from '@/assets/img/advisors/advisor-chow.jpg'
  import ImgSmetannikov from '@/assets/img/advisors/advisor-smetannikov.jpg'
  import ImgIgor from '@/assets/img/advisors/advisor-igor.jpg'

  export default {
    name: 'AdvisorProfile',
    components: { ImageWithBorder },
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    computed: {
      item() {
        return this.$i18n.t('advisors.items').find(item => item.id.toLowerCase() === this.id.toLowerCase())
      },
      src() {
        return this.getUrl(this.item)
      },
    },
    methods: {
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
  .advisor-profile {
    padding: 1em 5%;
    @include linearGradient2;

    &__top {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      position: relative;
      z-index: 1;
    }

    &__left {
      margin-bottom: 2em;
      width: 30%;
      min-width: 300px;
      @include w320-767 {
        width: 100%;
      }
    }

    &__social {
      display: flex;
      justify-content: flex-end;
      margin-top: -28px;
      @include w320-767 {
        margin-right: 28%;
      }

      @include w768 {
        margin-right: 51px;
      }
    }

    &__social__link {
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 50px;
      z-index: 1;
    }

    &__social__link-twitter {
      margin-right: 20px;
      mask-image: url("../assets/img/popupAdvicors/icon-twitter.svg");
      mask-repeat: no-repeat;
      mask-size: contain;
      background-color: #1982c4;
    }

    &__social__link-linkedin {
      background: url("../assets/img/popupAdvicors/icon-linkedin.svg");
    }

    &__title2 {
      margin-top: 1em;
      @include responsive-font-size(17px);
      line-height: 1.5;
      font-weight: 600;
      color: #51555a;
    }

    &__link {
      margin-bottom: 0.5em;
      @include responsive-font-size(15px);
      line-height: 1.3;
      color: #575e5e;

      &:hover {
        color: #02c3d8;
      }
    }

    &__right {
      padding-top: 20px;
      width: 50%;
      min-width: 300px;
      text-align: left;
      @include w320-767 {
        width: 100%;
        text-align: justify;
      }
    }

    &__title-wrap {
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
      @include responsive-font-size(18px);
      color: #dfdede;
      text-align: left;
      letter-spacing: -0.015em;
    }

    &__role {
      font-weight: 400;
      @include responsive-font-size(18px);
      color: #00a6c4;
      text-align: right;
    }

    &__text {
      margin-bottom: 1em;
      @include responsive-font-size(19px);
      line-height: 1.64;
      color: #888c8c;
      font-size: 19px;
      font-weight: 400;
    }

    &__text-big {
      margin-bottom: 1em;
      @include responsive-font-size(17px);
      color: #48abcf;
      font-weight: 400;
      line-height: 1.64;
    }

    &__text-bottom {
      position: relative;
      z-index: 1;
      margin-top: 1.4em;
      margin-bottom: 1em;
      @include responsive-font-size(14px);
      color: #59dce4;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      @include w320-767 {
        text-align: justify;
      }
    }
  }
</style>
