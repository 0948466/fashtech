<template>
  <div
    id="investors"
    class="investors-page">
    <div class="investors-page__content">
      <h2 class="investors-page__title">
        Investor’s page
      </h2>
      <div class="investors-page__wrap">
        <a
          v-for="(item, i) in data"
          :key="item.title"
          :class="{'investors-page__item_bottom': i > 3}"
          :href="item.link"
          target="_blank"
          rel="noopener"
          class="investors-page__item"
          @click="onWPClick(i, $event)">
          <p
            :class="{'investors-page__item__title_bottom': i > 3}"
            class="investors-page__item__title"
            v-html="item.title"/>
          <p
            v-if="item.release"
            class="investors-page__release">
            {{ item.release }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { modal } from '@/api/constants'
  import { WP_EN } from '@/api/url'

  const data = [
    {
      title: 'Whitepaper',
      link: WP_EN,
    },
    {
      title: 'Whitepaper in Simplified Chinese',
      release: 'rel.  20 Nov. 2018',
    },
    {
      title: 'Whitepaper in Korean',
      release: 'rel.  20 Nov. 2018',
    },
    {
      title: 'Whitepaper in Japanese',
      release: 'rel.  20 Nov. 2018',
    },
    {
      title: 'Investor<br>Presentation Deck',
      release: 'rel.  10 Nov. 2018',
    },
    {
      title: 'Investor Presentation Deck<br>in Simplified Chinese',
      release: 'rel.  20 Nov. 2018',
    },
    {
      title: 'Investor Presentation Deck<br>in Korean',
      release: 'rel.  20 Nov. 2018',
    },
    {
      title: 'Investor Presentation Deck<br>in Japanese',
      release: 'rel.  20 Nov. 2018',
    },
  ]

  export default {
    name: 'InvestorsPage',
    beforeMount() {
      this.data = data
    },
    methods: {
      onWPClick(i, e) {
        if (i !== 0) {
          return
        }
        e.preventDefault()
        this.$router.push({ query: { modal: modal.SUBSCRIBE_BY_EMAIL } })
      },
    },
  }
</script>


<style lang="scss" scoped>
  .investors-page {
    @include sectionPadding;
    background: url("../assets/img/investors-page/background-investors-page.png") no-repeat 50% 50%;
    &__content {
      margin: 0 auto;
      max-width: 1480px;
    }
    &__title {
      @include titleSection2;
      margin-bottom: 2em;
    }
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    &__item {
      position: relative;
      display: flex;
      min-width: 200px;
      max-width: 400px;
      flex-grow: 1;
      padding: 0 2% 46px;
      margin-bottom: 7em;
      background: url("../assets/img/investors-page/investors-page-item-background.png")
      no-repeat center;
      background-size: contain;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 30px;
        width: 41px;
        height: 28px;
        background: url("../assets/img/investors-page/icon-download.png") no-repeat;
        background-size: cover;

      }

      &_bottom {
        background: url("../assets/img/investors-page/investors-page-item-background-right.png")
        no-repeat center;
        &::after {
          background: url("../assets/img/investors-page/icon-download-bottom.png") no-repeat;
        }
      }

      &:hover {
        .investors-page__item__title {
          color: #dbdbdb;
        }
        &::after {
          background: url("../assets/img/investors-page/icon-download-hover.png") no-repeat;
        }
        &_bottom {
          &::after {
            background: url("../assets/img/investors-page/icon-download-bottom-hover.png")
            no-repeat;
          }
        }
      }
    }

    &__item__title {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 30px;
      min-height: 3em;
      width: 100%;
      @include responsive-font-size(19.35);
      line-height: 1.375;
      color: #c5c5c5;
      letter-spacing: -0.0015em;
      text-align: right;
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        background-image: linear-gradient(-90deg, #000000 0%, #6b6b6b 37%,
                #e8e8e8 40%, #969696 43%, #727272 47%, #5e5e5e 50%, #727272 53%,
                #c9c9c9 59%, #000000 80%, #000000 100%);
      }

      &_bottom {
        text-align: left;
        color: #78f0fb;
      }
    }

    &__release {
      position: absolute;
      bottom: 10px;
      right: calc(30px + 41px + 10px);
      @include responsive-font-size(14);
      color: rgba(142, 142, 142, .8);
    }
  }

</style>
