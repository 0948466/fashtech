<template>
  <section
    id="utility"
    class="utility">
    <h2 class="utility__title">
      {{ $t('utility.title') }}
    </h2>

    <div class="utility__items">
      <UtilityItem
        v-for="(item, i) in $t('utility.items')"
        :key="item.title"
        :title="item.title"
        :text-top="item.textTop"
        :text-bottom="item.textBottom"
        :background-src="backgroundSrc[i]"
        :background-src-hover="backgroundSrcHover[i]"
        class="utility__item"
        @click.native="onUtilityItemClick(i)"
      />
    </div>
  </section>
</template>

<script>
  import UtilityItem from '@/components/UtilityItem.vue'
  import { modal } from '@/api/constants'

  import backgroundImage0 from '@/assets/img/utility-item/utility-item-background0.png'
  import backgroundImage1 from '@/assets/img/utility-item/utility-item-background1.png'
  import backgroundImage2 from '@/assets/img/utility-item/utility-item-background2.png'
  import backgroundImage3 from '@/assets/img/utility-item/utility-item-background3.png'
  import backgroundImage0Hover from '@/assets/img/utility-item/utility-item-background0-hover.png'
  import backgroundImage1Hover from '@/assets/img/utility-item/utility-item-background1-hover.png'
  import backgroundImage2Hover from '@/assets/img/utility-item/utility-item-background2-hover.png'
  import backgroundImage3Hover from '@/assets/img/utility-item/utility-item-background3-hover.png'

  export default {
    name: 'Utility',
    components: {
      UtilityItem,
    },
    data: () => ({
      backgroundSrc: [
        backgroundImage0, backgroundImage1, backgroundImage2, backgroundImage3,
      ],
      backgroundSrcHover: [
        backgroundImage0Hover, backgroundImage1Hover, backgroundImage2Hover, backgroundImage3Hover,
      ],
    }),
    mounted() {
      setTimeout(() => {
        this.preloadImg(this.backgroundSrcHover)
      }, 2000)
    },
    methods: {
      preloadImg(images) {
        images.forEach((image) => {
          const Img = new Image()
          Img.src = image
        })
      },
      onUtilityItemClick(i) {
        let view
        switch (i) {
          case 0:
            view = modal.FASHION_INDUSTRY
            break
          case 1:
            view = modal.ONLINE_SHOPPERS
            break
          case 2:
            view = modal.BUSINESS
            break
          case 3:
            view = modal.DEVELOPERS
            break
          default:
            return
        }
        this.$router.push({ query: { modal: view } })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .utility {
    @include sectionPadding;
    background: url("../assets/img/utility/wave-orange.png") no-repeat 50% 65%;
    &__title {
      @include titleSectionWithGradient;
    }
    &__items {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      max-width: 1160px;
      box-sizing: border-box;
      @media only screen and (max-width: 1240px) {
        flex-wrap: wrap;
        flex-grow: 1;
      }
    }
    &__item {
      cursor: pointer;
    }
  }
</style>
