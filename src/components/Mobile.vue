<template>
  <section class="mobile">
    <h2 class="mobile__title">
      {{ $t('mobile.title') }}
    </h2>
    <div class="mobile__wrap">
      <div class="mobile__left">
        <img
          :src="srcImgPhone"
          class="mobile__left__img"
          alt="Cell phones">
      </div>
      <div class="mobile__right">
        <h4 class="mobile__right__title mobile__right__title_1">
          Download the free mobile app <span>imiscan</span>
        </h4>
        <p class="mobile__right__text">
          The app is currently available at Google Play
          and the App Store
        </p>

        <div class="mobile__link-wrap">
          <a
            :href="getUrlGooglePlay"
            target="_blank"
            rel="noopener"
            aria-label="google play"
            class="mobile__link mobile__link_google-play"/>
          <a
            :href="getUrlAppleStore"
            target="_blank"
            rel="noopener"
            aria-label="apple store"
            class="mobile__link mobile__link_apple-store"/>
        </div>

        <div class="mobile__wrap-2">
          <h4 class="mobile__right__title mobile__right__title_2">
            How to quickly learn to use the app
          </h4>
          <a
            :href="getUrlFaq"
            target="_blank"
            rel="noopener"
            class="mobile__btn">
            Read more
          </a>
        </div>
        <a
          :href="getUrlTelegram"
          target="_blank"
          rel="noopener"
          class="mobile__link-telegram">
          Any question on the app?
        </a>
      </div>
    </div>
  </section>
</template>

<script>
    import BackgroundPhoneEn from '@/assets/img/mobile/background-phone-en.png'
    import BackgroundPhoneRu from '@/assets/img/mobile/background-phone-ru.png'
    import UrlJson from '@/api/url.json'

    export default {
        name: 'Mobile',
        computed: {
            getUrlGooglePlay() {
              return UrlJson.googlePlay
            },
           getUrlAppleStore() {
            return UrlJson.appleStore
          },

          getUrlFaq() {
              return UrlJson.imigizeComFaq
          },
          getUrlTelegram() {
            return UrlJson.chartTelegram
          },
            srcImgPhone() {
                switch (this.$i18n.locale) {
                    case 'ru':
                        return BackgroundPhoneRu
                    default:
                        return BackgroundPhoneEn
                }
            },
        },
    }
</script>


<style scoped lang="scss">
  .mobile {
    position: relative;
    z-index: 1;
    padding: 3em 4% 2em;
    &__title {
      position: relative;
      padding-top: .12em;
      margin-bottom: 1.5em;
      @include responsive-font-size(24);
      font-weight: 400;
      line-height: 1.5;
      color: #0094a1;
      text-transform: uppercase;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 100px);
        width: 270px;
        height: 2px;
        background: $linearGradient;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: $linearGradient2;
      }
    }

    &__wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      @include w320-767 {
        flex-wrap: wrap;
      }
    }
    &__left {
      margin-right: 5%;
      width: 32%;
      @include w320-767 {
        margin: 0 auto;
        width: 70%;
      }
    }

    &__left__img {
      width: 100%;
      max-width: 535px;
      @include w320-767 {
        width: 70vw;
        height: 70vw;
      }
    }

    &__right {
      max-width: 380px;
      text-align: left;
    }

    &__link-wrap {
      display: flex;
      flex-direction: column;
      margin-bottom: 4em;
      @include w320-767 {
        align-items: center;
      }
    }

    &__link {
      @include linearGradient;
      width: 208px;
      height: 49px;
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: center;
      &_google-play {
        margin-bottom: 1em;
        background-image: url("../assets/img/mobile/google-play.png");
      }
      &_apple-store {
        background-image: url("../assets/img/mobile/appstore.png");
      }
    }

    &__right__title {
      position: relative;
      padding-left: 35px;
      @include responsive-font-size(18);
      letter-spacing: 0;
      line-height: 1.588;
      color: #949494;
      text-align: left;
      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 13px);
        left: 0;
        width: 27px;
        height: 24px;
        background: no-repeat center;
        background-size: contain;
        background-image: url("../assets/img/mobile/arrow1.png");
      }
      &_1 {
        margin-bottom: 1.5em;
      }
      &_2 {
        margin-bottom: .2em;
      }
      & span {
        color: #59dce4;
      }
    }

    &__right__text {
      margin-bottom: 2.5em;
      @include responsive-font-size(18);
      letter-spacing: 0;
      line-height: 1.5;
      color: #949494;
      text-align: left;
    }

    &__wrap-2 {
      display: inline-flex;
      flex-direction: column;
      margin-bottom: 2.5em;
    }

    &__btn {
      align-self: flex-end;
      @include responsive-font-size(17);
      line-height: 1.588;
      color: #5e5e5e;
      &:hover {
        color: $color1;
      }
    }

    &__link-telegram {
      display: inline-block;
      position: relative;
      padding-right: 50px;
      @include responsive-font-size(17);
      line-height: 1.588;
      color: #59dce4;
      font-style: italic;
      &::after {
        content: '';
        position: absolute;
        top: calc(50% - 13px);
        right: 0;
        width: 26px;
        height: 26px;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("../assets/img/icons/icon-tel.svg");
      }
      &:hover {
        &::after {
          background-image: url("../assets/img/icons/icon-telegram.svg");
        }
      }
    }
  }
</style>
