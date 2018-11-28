<template>
  <div
    ref="road-map-content"
    class="road-map-content">
    <div class="road-map-content__inner">
      <div class="road-map-content__top">
        <RoadMapItem
          v-for="item in $t('roadMapContent.top')"
          :key="item.content"
          :line-show="lineShow"
          class="road-map-content__item">
          <template slot="title-top">
            {{ item.title }}
          </template>
          <template
            slot="content">
            <span v-html="item.content"/>
          </template>
        </RoadMapItem>
      </div>
      <div class="road-map-content__line"/>
      <div class="road-map-content__bottom">
        <RoadMapItem
          v-for="item in $t('roadMapContent.bottom')"
          :top="false"
          :active="item.active"
          :key="item.content"
          :line-show="lineShow"
          class="road-map-content__item">
          <template slot="title-bottom">
            {{ item.title }}
          </template>
          <template slot="content">
            <span v-html="item.content"/>
          </template>
        </RoadMapItem>
      </div>
    </div>
  </div>
</template>

<script>
  import RoadMapItem from '@/components/RoadMapItem.vue'

  export default {
    name: 'RoadMapContent',
    components: {
      RoadMapItem,
    },
    data: () => ({
      lineShow: false,
    }),

    mounted() {
      window.addEventListener('scroll', this.onWindowScrollThrottler)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onWindowScrollThrottler)
    },

    methods: {
      onWindowScrollHandler() {
        if (!this.$refs['road-map-content']) return
        const { top, bottom } = this.$refs['road-map-content'].getBoundingClientRect()

        if (top < 300 && bottom > 200) {
          this.lineShow = true
          window.removeEventListener('scroll', this.onWindowScrollThrottler)
        }
      },
      onWindowScrollThrottler() {
        if (!this.scrollTimeout) {
          this.scrollTimeout = setTimeout(() => {
            this.scrollTimeout = null
            this.onWindowScrollHandler()
          }, 200)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .road-map-content {
    @include w320-767 {
      overflow-x: scroll;
    }
    &__inner {
      width: 2070px;
      cursor: pointer;
      @include w320-767 {
        width: 1660px;
      }
    }
    &__top {
      display: flex;
      padding-left: 10px;
    }

    &__item {
      flex-shrink: 0;
    }

    &__top &__item {
      margin-left: 32px;
    }
    &__top &__item:nth-child(3) {
      width: 221px;
      @include w320-767 {
        width: 160px;
      }
    }
    &__top &__item:nth-child(4) {
      margin-left: 92px;
    }

    &__bottom {
      display: flex;
      padding-left: 65px;
    }
    &__bottom &__item {
      margin-left: 29px;
    }

    &__bottom &__item:nth-child(6) {
      width: 221px;
      @include w320-767 {
        width: 160px;
      }
    }

    &__line {
      width: 100%;
      height: 2px;
      background-color: #c4c4c4;
    }
  }
</style>
