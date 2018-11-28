<template>
  <div class="social-buttons">
    <div class="social-buttons__icons">
      <a
        v-for="(item, i) in dataItems"
        :key="item.name"
        :href="item.link"
        target="_blank"
        rel="noopener"
        class="social-buttons__item"
        @mouseover="hoverEl = i"
        @mouseleave="hoverEl = null"
      >

        <div
          :style="getBackground(item, i)"
          class="social-buttons__icon"/>
        <p class="social-buttons__name">
          {{ item.name }}
        </p>
      </a>
    </div>
    <div class="social-buttons__link-wrap">
      <a
        target="_blank"
        rel="noopener"
        class="social-buttons__link">
        See Docs on GitHub
      </a>
      <Arrow
        class="social-buttons__arrow"
        background-color="#00aebe"/>
    </div>
  </div>
</template>

<script>
  import Arrow from '@/components/Arrow.vue'
  import UrlJson from '@/api/url.json'

  import IconLine from '@/assets/img/social-buttons/social-icons-line.png'
  import IconLineGrey from '@/assets/img/social-buttons/social-icons-line-grey.png'
  import IconWeChat from '@/assets/img/social-buttons/social-icons-wechat.png'
  import IconWeChatGrey from '@/assets/img/social-buttons/social-icons-wechat-grey.png'
  import IconMessanger from '@/assets/img/social-buttons/social-icons-messanger.png'
  import IconMessangerGrey from '@/assets/img/social-buttons/social-icons-messanger-grey.png'
  import IconSlack from '@/assets/img/social-buttons/social-icons-slack.png'
  import IconSlackGrey from '@/assets/img/social-buttons/social-icons-slack-grey.png'
  import IconKik from '@/assets/img/social-buttons/social-icons-kik.png'
  import IconKikGrey from '@/assets/img/social-buttons/social-icons-kik-grey.png'
  import IconTelegram from '@/assets/img/social-buttons/social-icons-telegram.png'
  import IconTelegramGrey from '@/assets/img/social-buttons/social-icons-telegram-grey.png'
  import IconPinterest from '@/assets/img/social-buttons/social-icons-pinterest.png'
  import IconPinterestGrey from '@/assets/img/social-buttons/social-icons-pinterest-grey.png'
  import IconInstagram from '@/assets/img/social-buttons/social-icons-instagram.png'
  import IconInstagramGrey from '@/assets/img/social-buttons/social-icons-instagram-grey.png'
  import IconTwitter from '@/assets/img/social-buttons/social-icons-twitter.png'
  import IconTwitterGrey from '@/assets/img/social-buttons/social-icons-twitter-grey.png'
  import IconLinkedIn from '@/assets/img/social-buttons/social-icons-linkedin.png'
  import IconLinkedInGrey from '@/assets/img/social-buttons/social-icons-linkedin-grey.png'

  const data = [
    {
      name: 'Line',
      iconSrc: IconLineGrey,
      iconSrcHover: IconLine,
      link: UrlJson.lineMe,
    },
    {
      name: 'WeChat',
      iconSrc: IconWeChatGrey,
      iconSrcHover: IconWeChat,
    },
    {
      name: 'Messenger',
      iconSrc: IconMessangerGrey,
      iconSrcHover: IconMessanger,
    },
    {
      name: 'Slack',
      iconSrc: IconSlackGrey,
      iconSrcHover: IconSlack,
    },
    {
      name: 'Kik',
      iconSrc: IconKikGrey,
      iconSrcHover: IconKik,
    },
    {
      name: 'Telegram',
      iconSrc: IconTelegramGrey,
      iconSrcHover: IconTelegram,
      link: UrlJson.chartTelegram,
    },
    {
      name: 'Pinterest',
      iconSrc: IconPinterestGrey,
      iconSrcHover: IconPinterest,
      link: UrlJson.pinterest,
    },
    {
      name: 'Instagram',
      iconSrc: IconInstagramGrey,
      iconSrcHover: IconInstagram,
    },
    {
      name: 'Twitter',
      iconSrc: IconTwitterGrey,
      iconSrcHover: IconTwitter,
      link: UrlJson.twitter,
    },
    {
      name: 'Linkedin',
      iconSrc: IconLinkedInGrey,
      iconSrcHover: IconLinkedIn,
      link: UrlJson.linkedIn,
    },
  ]

  export default {
    name: 'SocialBtns',
    components: { Arrow },
    data: () => ({
      hoverEl: null,
    }),
    beforeMount() {
      this.dataItems = data
    },
    methods: {
      getBackground(item, i) {
        return {
          backgroundImage: `url(${(i === this.hoverEl) ? item.iconSrcHover : item.iconSrc})`,
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .social-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 4% 7.5em;
    background-color: $color3;
    &__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @include w1920 {
        padding-left: 220px;
      }
    }

    &__item {
      margin: 0 7px;
      &:hover {
        .social-buttons__name {
          transition: color .5s;
          color: #fff;
        }
      }
    }

    &__icon {
      width: 90px;
      height: 80px;
      background-position: center ;
      background-repeat: no-repeat;
    }

    &__name {
      @include responsive-font-size(17.94);
      color: #646262;
    }

    &__link-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 1em 10px 0 10px;
      width: 220px;
    }

    &__link {
      @include responsive-font-size(18);
      color: #00aebe;
    }

    &__arrow {
      transform: rotate(-90deg);
    }
  }
</style>
