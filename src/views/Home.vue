<template>
  <div class="home">
    <SliderCarousel/>
    <AddToImigize/>
    <SocialBtns/>
    <FuturesBlockchain/>
    <TokenizedEconomy/>
    <Utility/>
    <MvpAndWorkingProduct/>
    <RoadMap/>
    <ClientsPlatform/>
    <InvestorsPage/>
    <GetConnected/>
  </div>
</template>

<script>
  import SliderCarousel from '@/components/SliderCarousel.vue'
  import AddToImigize from '@/components/AddToImigize.vue'
  import SocialBtns from '@/components/SocialBtns.vue'
  import FuturesBlockchain from '@/components/FuturesBlockchain.vue'
  import TokenizedEconomy from '@/components/TokenizedEconomy.vue'
  import Utility from '@/components/Utility.vue'
  import MvpAndWorkingProduct from '@/components/MvpAndWorkingProduct.vue'
  import RoadMap from '@/components/RoadMap.vue'
  import ClientsPlatform from '@/components/ClientsPlatform.vue'
  import InvestorsPage from '@/components/InvestorsPage.vue'
  import GetConnected from '@/components/GetConnected.vue'

  export default {
    name: 'Home',
    metaInfo: {
      title: 'Blockchain of Fashion - FashTech IMIGIZE',
      titleTemplate: null,
    },
    components: {
      SliderCarousel,
      GetConnected,
      InvestorsPage,
      ClientsPlatform,
      AddToImigize,
      SocialBtns,
      FuturesBlockchain,
      TokenizedEconomy,
      Utility,
      MvpAndWorkingProduct,
      RoadMap,
    },
    created() {
      const { hash } = this.$route
      if (hash) {
        this.scrollToHash(hash)
      }
    },
    methods: {
      scrollToHash() {
        const el = document.querySelector(this.$route.hash)

        if (!el) {
          setTimeout(() => {
            this.scrollToHash(this.$route.hash)
          }, 200)
          return
        }
        this.$scrollTo(el, 10)
      },
    },
  }
</script>
