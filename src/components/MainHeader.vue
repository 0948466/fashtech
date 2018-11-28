<template>
  <header class="main-header">
    <div class="main-header__inner">
      <HeaderPrice
        v-if="isDesktop"
        class="main-header__header-price"/>
      <Breadcrumbs/>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HeaderPrice from '@/components/HeaderPrice.vue'
  import Breadcrumbs from '@/components/Breadcrumbs.vue'

  export default {
    name: 'MainHeader',
    components: {
      HeaderPrice,
      Breadcrumbs,
    },
    computed: {
      ...mapGetters([
        'isDesktop',
      ]),
    },
  }
</script>

<style lang="scss" scoped>
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    @include siteBackgroundColor;
    z-index: 15;
    &__inner {
      margin: 0 auto;
      max-width: 1920px;
      box-sizing: border-box;
    }
    &__header-price {
      @include w320-767 {
        display: none;
      }
    }
  }
</style>
