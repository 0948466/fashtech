<template>
  <div
    class="clients-platform">
    <h2 class="clients-platform__title">
      Clients of our platform today
    </h2>
    <p class="clients-platform__text">
      Great brands are already using IMIGIZE to get work done.
    </p>
    <div class="clients-platform__wrap">
      <a
        v-for="(item, i) in dataItems"
        :key="item.title"
        :href="item.link"
        target="_blank"
        rel="noopener"
        class="clients-platform__link"
        @mouseover="hoverEl = i"
        @mouseleave="hoverEl = null">
        <img
          :alt="item.title"
          :src="getImgSrc(item, i)">
      </a>
    </div>
  </div>
</template>

<script>
  import RunlabIcon from '@/assets/img/clients-platform/clients-icon-runlab.png'
  import RunlabIconHover from '@/assets/img/clients-platform/clients-icon-runlab-hover.png'
  import WildberriesIcon from '@/assets/img/clients-platform/clients-icon-wildberries.png'
  import WildberriesIconHover from '@/assets/img/clients-platform/clients-icon-wildberries-hover.png'
  import SportmasterIcon from '@/assets/img/clients-platform/clients-icon-sportmaster.png'
  import SportmasterIconHover from '@/assets/img/clients-platform/clients-icon-sportmaster-hover.png'
  import KeddoIcon from '@/assets/img/clients-platform/clients-icon-keddo.png'
  import KeddoIconHover from '@/assets/img/clients-platform/clients-icon-keddo-hover.png'
  import HeelysIcon from '@/assets/img/clients-platform/clients-icon-heelys.png'
  import HeelysIconHover from '@/assets/img/clients-platform/clients-icon-heelys-hover.png'
  import StrobbsIcon from '@/assets/img/clients-platform/clients-icon-strobbs.png'
  import StrobbsIconHover from '@/assets/img/clients-platform/clients-icon-strobbs-hover.png'
  import ConverseIcon from '@/assets/img/clients-platform/clients-icon-converse.png'
  import ConverseIconHover from '@/assets/img/clients-platform/clients-icon-converse-hover.png'
  import VansIcon from '@/assets/img/clients-platform/clients-icon-vans.png'
  import VansIconHover from '@/assets/img/clients-platform/clients-icon-vans-hover.png'
  import AntaIcon from '@/assets/img/clients-platform/clients-icon-anta.png'
  import AntaIconHover from '@/assets/img/clients-platform/clients-icon-anta-hover.png'
  import EccoIcon from '@/assets/img/clients-platform/clients-icon-ecco.png'
  import EccoIconHover from '@/assets/img/clients-platform/clients-icon-ecco-hover.png'


  const data = [
    {
      title: 'runlab',
      link: 'https://www.runlab.ru/',
      iconSrc: RunlabIcon,
      iconSrcHover: RunlabIconHover,
    },
    {
      title: 'wildberries',
      link: 'https://www.wildberries.ru/',
      iconSrc: WildberriesIcon,
      iconSrcHover: WildberriesIconHover,
    },
    {
      title: 'sportmaster',
      link: 'https://www.sportmaster.ru/',
      iconSrc: SportmasterIcon,
      iconSrcHover: SportmasterIconHover,
    },
    {
      title: 'keddo',
      link: 'http://keddo.com/',
      iconSrc: KeddoIcon,
      iconSrcHover: KeddoIconHover,
    },
    {
      title: 'heelys',
      link: 'https://heelys.com/',
      iconSrc: HeelysIcon,
      iconSrcHover: HeelysIconHover,
    },
    {
      title: 'strobbs',
      link: 'http://www.strobbs.ru/',
      iconSrc: StrobbsIcon,
      iconSrcHover: StrobbsIconHover,
    },
    {
      title: 'converse',
      link: 'https://www.converse.com/us/en_us/c/converse',
      iconSrc: ConverseIcon,
      iconSrcHover: ConverseIconHover,
    },
    {
      title: 'vans',
      link: 'https://www.vans.com',
      iconSrc: VansIcon,
      iconSrcHover: VansIconHover,
    },
    {
      title: 'anta',
      link: 'https://anta-sport.ru/',
      iconSrc: AntaIcon,
      iconSrcHover: AntaIconHover,
    },
    {
      title: 'ecco',
      link: 'https://www.ecco-shoes.ru/',
      iconSrc: EccoIcon,
      iconSrcHover: EccoIconHover,
    },
  ]

  export default {
    name: 'ClientsPlatform',
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
  .clients-platform {
    @include sectionPadding;
    margin: 0 auto;
    max-width: 1000px;
    &__title {
      @include titleSection2;
      margin-bottom: 2em;
    }

    $borderWidth: 300px;
    &__text {
      position: relative;
      padding-bottom: 1em;
      margin-bottom: 6em;
      @include responsive-font-size(19);
      color: #fff;
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: calc( -#{$borderWidth} / 2);
        width: $borderWidth;
        height: 2px;
        background: $linearGradient;
      }
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    &__link {
      margin: 0 20px 3em;
      display: block;
    }
  }

</style>
