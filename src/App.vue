<template>
  <div id="app">
    <MainHeader/>
    <router-view class="content"/>
    <MainFooter v-if="isDesktop"/>
    <PopupClassic v-if="popupClassicShow">
      <component :is="popupClassicView"/>
    </PopupClassic>
    <Popup v-if="popupShow">
      <component :is="popupView"/>
    </Popup>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  import MainHeader from '@/components/MainHeader.vue'
  import MainFooter from '@/components/MainFooter.vue'
  import PopupClassic from '@/components/PopupClassic.vue'
  import Popup from '@/components/Popup.vue'
  import ServicePopup from '@/api/service-popup'

  export default {
    name: 'App',
    metaInfo: {
      title: 'FashTech IMIGIZE',
      titleTemplate: '%s | Blockchain of Fashion',
    },
    components: {
      MainHeader,
      MainFooter,
      PopupClassic,
      Popup,
    },

    computed: {
      ...mapGetters([
        'isMobile',
        'isDesktop',
        'popupView',
        'popupShow',
        'popupClassicView',
        'popupClassicShow',
      ]),
    },

    watch: {
      $route() {
        this.openPopup()
      },
    },

    beforeMount() {
      this.CHANGE_WINDOW_WIDTH(window.innerWidth)
    },

    mounted() {
      this.openPopup()
      window.addEventListener('resize', this.onWindowResizeThrottler, false)
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResizeThrottler)
    },
    methods: {
      ...mapMutations([
        'CHANGE_WINDOW_WIDTH',
        'CHANGE_POPUP_VIEW',
        'CHANGE_POPUP_CLASSIC_VIEW',
      ]),
      openPopup() {
        if (!this.$route.query.modal) {
          this.$store.commit('CHANGE_POPUP_CLASSIC_SHOW', false)
          return
        }
        const { view, classicView } = ServicePopup.switchModal(this.$route)
        if (classicView) {
          this.$store.commit('CHANGE_POPUP_CLASSIC_VIEW', view)
        } else {
          this.$store.commit('CHANGE_POPUP_VIEW', view)
        }
      },
      onLinkClick(selector) {
        try {
          if (this.$route.name === 'home') {
            this.$scrollTo(document.querySelector(selector))
          } else {
            this.$router.push({
              name: 'home',
              hash: `#${selector.slice(1)}`,
            })
          }
        } catch (e) {
          console.error(e.message)
        }
      },
      onWindowResizeThrottler() {
        if (!this.resizeTimeout) {
          this.resizeTimeout = setTimeout(() => {
            this.resizeTimeout = null
            this.onWindowResizeHandler()
          }, 200)
        }
      },

      onWindowResizeHandler() {
        this.CHANGE_WINDOW_WIDTH(window.innerWidth)
      },
    },
  }
</script>

<style lang="scss">
  @import "./scss/reset";
  @import "./scss/fonts";
  @import "./scss/mixinRespFontBody";

  body {
    @include siteBackgroundColor;
  }

  #app {
    position: relative;
    font-family: 'AGOptCyrillic', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @include responsiveFont(18px, 8px);
    text-align: center;
    color: #2c3e50;

    display: flex;
    flex-direction: column;
    padding-top: 116px;
    max-width: 1920px;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    @include siteBackgroundColor;
    @include w320-767 {
      padding-top: 52px;
    }
  }

  .content {
    margin-bottom: auto;
  }
</style>
