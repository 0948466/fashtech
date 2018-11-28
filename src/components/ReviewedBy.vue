<template>
  <div
    class="reviewed-by">
    <h2 class="reviewed-by__title">
      Reviewed By
    </h2>
    <div class="reviewed-by__wrap">
      <a
        v-for="(item, i) in dataItems"
        :key="item.title"
        :href="item.link"
        target="_blank"
        rel="noopener"
        class="reviewed-by__link"
        @mouseover="hoverEl = i"
        @mouseleave="hoverEl = null">
        <div class="reviewed-by__item-wrap">
          <div class="reviewed-by__item__left">
            <div
              :style="{ backgroundImage: 'url(' + getImgSrc(item, i)+ ')',
                        backgroundSize: item.backgroundSize}"
              class="reviewed-by__img"/>
            <p class="reviewed-by__item__text">
              from {{ item.from }}
            </p>
          </div>
          <p class="reviewed-by__item__rating">
            {{ item.rating }}
          </p>
        </div>

      </a>
    </div>
</div></template>

<script>
  import IcoHolderIcon from '@/assets/img/reviewed-by/icoholder.png'
  import IcoHolderIconHover from '@/assets/img/reviewed-by/icoholder-hover.png'
  import IcoBenchIcon from '@/assets/img/reviewed-by/ico-bench.png'
  import IcoBenchIconHover from '@/assets/img/reviewed-by/ico-bench-hover.png'
  import IcoChartIcon from '@/assets/img/reviewed-by/ico-chart.png'
  import IcoChartIconHover from '@/assets/img/reviewed-by/ico-chart-hover.png'
  import TrackIcoIcon from '@/assets/img/reviewed-by/trackico.png'
  import IcoMarksIcon from '@/assets/img/reviewed-by/icomarks.png'
  import FoxicoIcon from '@/assets/img/reviewed-by/foxico.png'
  import CoinlauncherIcon from '@/assets/img/reviewed-by/coinlauncher.png'
  import FoundicoIcon from '@/assets/img/reviewed-by/foundico.png'
  import FoundicoIconHover from '@/assets/img/reviewed-by/foundico-hover.png'

  const data = [
    {
      title: 'icoholder',
      link: 'https://icoholder.com/en/ico/imigize-17543',
      iconSrc: IcoHolderIcon,
      iconSrcHover: IcoHolderIconHover,
      from: 5,
      rating: 3.7,
      backgroundSize: '40%',
    },
      {
          title: 'icobench',
          link: 'https://icobench.com/ico/imigize',
          iconSrc: IcoBenchIcon,
          iconSrcHover: IcoBenchIconHover,
          from: 5,
          rating: 3.8,
          backgroundSize: '70%',
      },
      {
          title: 'icochart',
          link: 'https://icochart.net/tokensale/the-imigize-service-blockchain',
          iconSrc: IcoChartIcon,
          iconSrcHover: IcoChartIconHover,
          from: 5,
          rating: 4.8,
          backgroundSize: '90%',
      },
      {
          title: 'trackico',
          link: 'https://www.trackico.io/ico/imigize/',
          iconSrc: TrackIcoIcon,
          iconSrcHover: TrackIcoIcon,
          from: 5,
          rating: 3.7,
          backgroundSize: '70%',
      },
      {
          title: 'icomarks',
          link: 'https://icomarks.com/ico/imigize',
          iconSrc: IcoMarksIcon,
          iconSrcHover: IcoMarksIcon,
          from: 10,
          rating: 7.6,
          backgroundSize: '80%',
      },
      {
          title: 'foxico',
          link: 'https://foxico.io/project/theimigizeserviceblockchain',
          iconSrc: FoxicoIcon,
          iconSrcHover: FoxicoIcon,
          from: 10,
          rating: 8,
          backgroundSize: '70%',
      },
      {
          title: 'coinlauncher',
          link: 'https://coinlauncher.io/imigize-ico',
          iconSrc: CoinlauncherIcon,
          iconSrcHover: CoinlauncherIcon,
          from: 10,
          rating: 7.7,
          backgroundSize: '90%',
      },
      {
          title: 'foundico',
          link: 'https://foundico.com/ico/the-imigize-service-blockchain.html',
          iconSrc: FoundicoIcon,
          iconSrcHover: FoundicoIconHover,
          from: 10,
          rating: 7.4,
          backgroundSize: '80%',
      },
  ]

  export default {
    name: 'ReviewedBy',
    data: () => ({
      hoverEl: null,
    }),
    beforeMount() {
      this.dataItems = data
    },
    methods: {
      getImgSrc(item, i) {
        return (i === this.hoverEl) ? item.iconSrcHover : item.iconSrc
        },
    },
  }
</script>


<style lang="scss" scoped>
  .reviewed-by {
    @include sectionPadding;
    margin: 0 auto;
    max-width: 1200px;
    &__title {
      @include titleSectionWithGradient;
      margin-bottom: 3em;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    &__link {
      margin: 0 25px 4em;
        padding-bottom: 45px;
      display: block;
      background: url("../assets/img/reviewed-by/background-item-reviewed.png") no-repeat bottom;
    }

    &__item-wrap {
      position: relative;
      padding-bottom: 0.5em;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        background: $linearGradient;
      }
    }

    &__item__left {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-right: 4%;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #00ffff;
      }
    }

    &__img {
      margin: 0 5px 5px;
      width: 140px;
      height: 60px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left bottom;
    }

    &__item__text {
      @include responsive-font-size(16);
      letter-spacing: 0;
      line-height: 1;
      color: #004a5c;
      white-space: nowrap;
    }

    &__item__rating {
      font-size: 24px;
      letter-spacing: 0.0625em;
      line-height: 0.6;
      color: #00d8ff;
    }
  }

</style>
