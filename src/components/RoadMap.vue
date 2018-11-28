<template>
  <section
    id="road-map"
    class="road-map"
  >
    <h2 class="road-map__title">RoadMap</h2>
    <Draggable v-if="!isMobile">
      <RoadMapContent class="road-map__content"/>
    </Draggable>
    <RoadMapContent
      v-else
      class="road-map__content"/>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Draggable from '@/components/Draggable.vue'
  import RoadMapContent from '@/components/RoadMapContent.vue'

  export default {
    name: 'RoadMap',
    components: {
      RoadMapContent,
      Draggable,
    },
    computed: {
      ...mapGetters(['isMobile']),
    },
  }
</script>

<style lang="scss" scoped>
.road-map {
  position: relative;
  @include sectionPadding;
  width: 100%;
  @include siteBackgroundColor;
  box-sizing: border-box;

  &__title {
    @include titleSection;
    margin-bottom: 2em;
  }

  &__content {
    padding: 1em 0;
    transition: all 0.5s ease-out 0s;
  }
}
</style>
