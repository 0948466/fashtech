<template>
  <footer class="footer">
    <ul class="footer__links">
      <li>
        <a>Company</a>
      </li>
      <li>
        <a
          :href="getUrlBlog"
          target="_blank"
          rel="noopener">
          Blog
        </a>
      </li>
      <li>
        <a
          :href="getUrlContactUs"
          target="_blank"
          rel="noopener">
          Contact Us
        </a>
      </li>
      <li>
        <a>Press Kit</a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener">
          Privacy & Terms
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
      </li>
      <li>
        <a>Thought Paper</a>
      </li>
    </ul>
    <ul class="footer__social">
      <li>
        <a
          :href="getUrlFacebook"
          class="footer__social__link footer__social__link_fb"
          target="_blank"
          aria-label="facebook"
          rel="noopener"/>
      </li>
      <li>
        <a
          :href="getUrlTwitter"
          class="footer__social__link footer__social__link_tw"
          target="_blank"
          aria-label="twitter"
          rel="noopener"/>
      </li>
      <li>
        <a
          :href="getUrlTelegram"
          class="footer__social__link footer__social__link_tel"
          target="_blank"
          aria-label="telegram"
          rel="noopener"/>
      </li>
      <li>
        <a
          :href="getUrlVk"
          class="footer__social__link footer__social__link_vk"
          target="_blank"
          aria-label="vkontakte"
          rel="noopener"/>
      </li>
    </ul>
  </footer>
</template>

<script>
  import UrlJson from '@/api/url.json'
  import { WP_EN } from '@/api/url'
  import { modal } from '@/api/constants'

  export default {
    name: 'MainFooter',
    computed: {
      getUrlTelegram() {
        return UrlJson.chartTelegram
      },
      getUrlTwitter() {
        return UrlJson.twitter
      },
      getUrlFacebook() {
        return UrlJson.facebook
      },
      getUrlVk() {
        return UrlJson.vk
      },
      getUrlWP() {
        switch (this.$i18n.locale) {
          default: return WP_EN
        }
      },
      getUrlBlog() {
        switch (this.$i18n.locale) {
          case 'ru': return UrlJson.blogRu
          default: return UrlJson.blogEn
        }
      },
      getUrlContactUs() {
        return UrlJson.contactUs
      },
    },
    methods: {
      onWPClick() {
        this.$router.push({ query: { modal: modal.SUBSCRIBE_BY_EMAIL } })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: center;
    &__links,
    &__social {
      display: flex;
      a {
        display: block;
        padding: 0.5em 10px;
        color: #fff;
        text-decoration: none;
        text-align: left;
        &.router-link-exact-active {
          color: $color1;
        }
      }
    }
    &__social__link {
      width: 37px;
      height: 39px;
      box-sizing: border-box;
      background: center 35%  no-repeat;
      background-size: 45%;
      &_fb {
        background-image: url("../assets/img/icons/icon-fb.svg");
      }
      &_tw {
        background-image: url("../assets/img/icons/icon-tw.svg");
      }
      &_tel {
        background-image: url("../assets/img/icons/icon-tel.svg");
      }
      &_vk {
        background-image: url("../assets/img/icons/icon-vk.svg");
      }
    }
  }
</style>
