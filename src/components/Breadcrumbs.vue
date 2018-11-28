<template>
  <section class="breadcrumbs">
    <LogoImigize
      v-if="isDesktop"
      class="breadcrumbs__logo-imigize"/>
    <ul
      v-if="!showMobile"
      class="breadcrumbs__menu">
      <li>
        <router-link :to="{name: 'imigize-token'}">
          Imigize Token
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'imigize-apps'}">
          Imigize Apps
        </router-link>
      </li>
      <li><a>Register Token</a></li>
      <li>
        <a
          href="#utility"
          @click.prevent="onLinkClick('#utility', $event)">
          Utility
        </a>
      </li>
      <li>
        <router-link :to="{name: 'vision'}">
          Vision
        </router-link>
        <div class="breadcrumbs__submenu">
          <router-link :to="{name: 'news'}">
            News
          </router-link>
        </div>
      </li>
      <li>
        <router-link
          :to="{name: 'team-and-partners'}">
          Team & Partners
        </router-link>
        <div class="breadcrumbs__submenu">
          <router-link :to="{name: 'advisors'}">
            Team Advisors
          </router-link>
        </div>
      </li>
      <li>
        <a
          href="#road-map"
          @click.prevent="onLinkClick('#road-map', $event)">
          Road Map
        </a>
      </li>
      <li>
        <a
          href="#investors"
          @click.prevent="onLinkClick('#investors', $event)">
          {{ $t('breadcrumbs.investors') }}
        </a>
      </li>
      <li>
        <a
          :href="getUrlWP"
          target="_blank"
          rel="noopener"
          @click.prevent="onWPClick">
          Whitepaper
        </a>
        <div class="breadcrumbs__submenu">
          <a
            target="_blank"
            rel="noopener">
            Thought Paper
          </a>
        </div>
      </li>
    </ul>
    <div
      v-if="showBuyTokens"
      class="breadcrumbs__link-wrap">
      <a
        class="breadcrumbs__link breadcrumbs__link_register"
        target="_blank"
        rel="noopener">
        {{ $t('breadcrumbs.buyTokens') }}
      </a>
      <a
        :href="getUrlTelegram"
        class="breadcrumbs__link breadcrumbs__link_telegram"
        target="_blank"
        rel="noopener">Chat</a>
    </div>
    <LocalChange
      v-if="!showMobile"
      class="breadcrumbs__local-change"/>
    <Sandwich
      v-if="showMobile"
      class="breadcrumbs__sandwich"/>
  </section>
</template>

<script>
  import { modal } from '@/api/constants'
  import { mapGetters } from 'vuex'
  import LogoImigize from '@/components/LogoImigize.vue'
  import LocalChange from '@/components/LocalChange.vue'
  import Sandwich from '@/components/Sandwich.vue'
  import UrlJson from '@/api/url.json'
  import { WP_EN } from '@/api/url'

  export default {
    name: 'Breadcrumbs',
    components: {
      LogoImigize,
      LocalChange,
      Sandwich,
    },
    data: () => ({
      baseUrl: process.env.BASE_URL,
    }),
    computed: {
      ...mapGetters([
        'isDesktop',
        'windowWidth',
      ]),
      getUrlTelegram() {
        return UrlJson.chartTelegram
      },
      getUrlSale() {
        return UrlJson.saleImigize
      },
      getUrlWP() {
        switch (this.$i18n.locale) {
          default:
            return WP_EN
        }
      },
      showMobile() {
        return this.windowWidth < 1300
      },
      showBuyTokens() {
        return this.showMobile && !window.PRERENDER_INJECTED
      },
    },

    methods: {
      onLinkClick(selector, event) {
        try {
          if (this.$route.name === 'home') {
            this.$scrollTo(document.querySelector(selector))
          } else {
            this.$router.push({
              name: 'home',
              hash: `#${selector.slice(1)}`,
            })
          }

          this.toggleActiveClass(event.target)
        } catch (e) {
          console.error(e.message)
        }
      },

      toggleActiveClass(link) {
        const ACTIVE_LINK = 'router-link-exact-active'
        link.classList.add(ACTIVE_LINK)
        setTimeout(() => {
          link.classList.remove(ACTIVE_LINK)
        }, 1500)
      },
      onWPClick() {
        this.$router.push({ query: { modal: modal.SUBSCRIBE_BY_EMAIL } })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    min-height: 52px;
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: $color1;
    }
    @include w768 {
      padding: 0 10px;
    }
    @include w320-1299 {
      justify-content: space-between;
    }
    &__logo-imigize {
      @include w320-767 {
        display: none;
      }
    }
    &__menu {
      display: flex;
      justify-content: space-around;
      align-self: stretch;
      @include w320-767 {
        display: none;
      }
      li {
        position: relative;
        display: flex;
        align-items: stretch;
        color: gray;
        z-index: 15;
        &:hover {
          .breadcrumbs__submenu {
            display: block;
          }
        }
        a {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0.5em 15px;
          overflow: hidden;
          box-sizing: border-box;
          @include responsive-font-size(17.5);
          color: #8e8e8e;
          text-decoration: none;
          text-align: left;
          white-space: nowrap;
          &.router-link-exact-active,
          &:hover {
            color: $color2;
          }

          &.router-link-exact-active {
            &::after {
              content: '';
              position: absolute;
              bottom: -7px;
              right: 15px;
              width: 14px;
              height: 14px;
              background-color: #00555d;
              transform: rotate(45deg);
            }
          }
        }
      }
    }

    &__submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 100%;
      @include siteBackgroundColor;
    }

    &__link-wrap {
      display: flex;
      align-items: center;
      margin-left: 10px;
      @include w768-1299 {
        margin-left: auto;
      }
    }

    &__link {
      padding: .45em 9px .35em;
      @include responsive-font-size(19);
      font-weight: 400;
      color: #fff;
      opacity: 1;
      transition: color 0s;
      border: 1px solid #fff;
      text-align: center;
      &_register {
        margin-right: 10px;
        &:hover {
          opacity: 1;
          background-color: #03cfe6;
          color: #fff;
          border-color: #03cfe6;
        }
      }

      &_telegram {
        padding-left: calc(0.5em + 20px);
        position: relative;
        color: #fff;
        border: none;
        &:hover {
          color: #03cfe6;
        }
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0.2em;
          margin-top: -10px;
          width: 20px;
          height: 20px;
          background: url('../assets/img/icons/icon-telegram.svg') no-repeat center;
        }
      }
    }
    &__local-change {
      flex-shrink: 0;
      @include w768-1299 {
        display: none;
      }
    }
    &__sandwich {
      @include w1300 {
        display: none;
      }
    }
  }
</style>
