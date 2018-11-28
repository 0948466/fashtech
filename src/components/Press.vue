<template>
  <div
    class="press">
    <h2 class="press__title">
      In The Press
    </h2>
    <div class="press__wrap">
      <a
        v-for="(item, i) in dataItems"
        :key="item.title"
        :href="item.link"
        target="_blank"
        rel="noopener"
        class="press__link"
        @mouseover="hoverEl = i"
        @mouseleave="hoverEl = null">
        <img
          :alt="item.title"
          :src="getImgSrc(item, i)">
      </a>
    </div>
</div></template>

<script>
  import MediumIcon from '@/assets/img/press/icon-press-medium.png'
  import MediumIconHover from '@/assets/img/press/icon-press-medium-hover.png'
  import IrishIcon from '@/assets/img/press/icon-press-irish.png'
  import UtbIcon from '@/assets/img/press/icon-press-utb.png'
  import UtbIconHover from '@/assets/img/press/icon-press-utb-hover.png'
  import MeIcon from '@/assets/img/press/icon-press-me.png'
  import CcnIcon from '@/assets/img/press/icon-press-ccn.png'
  import BitcoinIcon from '@/assets/img/press/icon-press-bitcoin-warrior.png'
  import BitcoinIconHover from '@/assets/img/press/icon-press-bitcoin-warrior-hover.png'
  import CryptoconsultingIcon from '@/assets/img/press/icon-press-cryptoconsulting.png'
  import NewscryptoIcon from '@/assets/img/press/icon-press-newscrypto.png'
  import NewscryptoIconHover from '@/assets/img/press/icon-press-newscrypto-hover.png'
  import BibossIcon from '@/assets/img/press/icon-press-biboss.png'
  import BibossIconHover from '@/assets/img/press/icon-press-biboss-hover.png'
  import Biz360Icon from '@/assets/img/press/icon-press-biz360.png'
  import Biz360IconHover from '@/assets/img/press/icon-press-biz360-hover.png'
  import GolosIcon from '@/assets/img/press/icon-press-golos-beta.png'
  import GolosIconHover from '@/assets/img/press/icon-press-golos-beta-hover.png'


  const data = [
    {
      title: 'medium',
      link: 'https://medium.com/@jilliangodsil/making-ill-fitting-online-shoe-purchases-a-thing-of-the-past-b46bd06ad08f',
      iconSrc: MediumIcon,
      iconSrcHover: MediumIconHover,
    },
    {
      title: 'irishtechnews',
      link: 'https://irishtechnews.ie/making-ill-fitting-online-shoe-purchases-a-thing-of-the-past/amp/',
      iconSrc: IrishIcon,
      iconSrcHover: IrishIcon,
    },
    {
      title: 'usethebitcoin',
      link: 'https://usethebitcoin.com/imigize-service-blockchain-prepares-revolution-online-stores/',
      iconSrc: UtbIcon,
      iconSrcHover: UtbIconHover,
    },
    {
      title: 'themerkle',
      link: 'https://themerkle.com/imigize-service-blockchain-will-become-a-revolution-in-the-online-clothing-and-footwear-market/',
      iconSrc: MeIcon,
      iconSrcHover: MeIcon,
    },
    {
      title: 'ccn',
      link: 'https://www.ccn.com/online-market-need-blockchain/',
      iconSrc: CcnIcon,
      iconSrcHover: CcnIcon,
    },
    {
      title: 'bitcoinwarrior',
      link: 'https://bitcoinwarrior.net/2018/01/blockchain-and-footwear-and-clothes-online-market-transformation/',
      iconSrc: BitcoinIcon,
      iconSrcHover: BitcoinIconHover,
    },
    {
      title: 'cryptoconsulting',
      link: 'http://cryptoconsulting.info/2018/news/the-online-clothes-and-footwear-market-is-waiting-to-change/',
      iconSrc: CryptoconsultingIcon,
      iconSrcHover: CryptoconsultingIcon,
    },
    {
      title: 'cryptofreeguide',
      link: 'http://cryptofreeguide.com/?p=3724',
      iconSrc: NewscryptoIcon,
      iconSrcHover: NewscryptoIconHover,
    },
    {
      title: 'beboss',
      link: 'https://www.beboss.ru/journal/persons/117-ocifrovannye-nogi-kak-zalog-razvitiya-onlayn-prodazh',
      iconSrc: BibossIcon,
      iconSrcHover: BibossIconHover,
    },
    {
      title: 'biz360',
      link: 'https://biz360.ru/materials/kak-ustroen-servis-beskontaktnoy-primerki-obuvi',
      iconSrc: Biz360Icon,
      iconSrcHover: Biz360IconHover,
    },
    {
      title: 'golos',
      link: 'https://golos.io/imigize/@kamillagoldman/onlain-rynok-odezhdy-i-obuvi-zhdet-peremen',
      iconSrc: GolosIcon,
      iconSrcHover: GolosIconHover,
    },
  ]

  export default {
    name: 'Press',
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
  .press {
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
      margin: 0 20px 3em;
      display: block;
    }
  }

</style>
