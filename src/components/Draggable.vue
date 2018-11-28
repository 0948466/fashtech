<template>
  <div class="draggable__wrap">
    <div
      class="draggable"
      @mousedown="startDrag"
      @touchstart="startDrag"
      @mousemove="onDrag"
      @touchmove="onDrag"
      @mouseup="stopDrag"
      @touchend="stopDrag"
      @mouseleave="stopDrag">
      <slot/>
    </div>
    <Arrow
      :active="!!resultTranslateX"
      :background-color="'#008198'"
      class="draggable__arrow draggable__arrow_left"
      @click="onArrowLeftClick"/>
    <Arrow
      :active="isArrowNextActive"
      :background-color="'#008198'"
      class="draggable__arrow draggable__arrow_right"
      @click="onArrowRightClick"/>
  </div>
</template>

<script>
  import Arrow from '@/components/Arrow.vue'

  const TRANSLATE_FROM_ARROW = 450

  export default {
    name: 'Draggable',
    components: {
      Arrow,
    },
    data: () => ({
      dragging: false,
      startX: 0,
      resultTranslateX: 0,
      slot: null,
      maxTransition: null,
    }),

    computed: {
      isArrowNextActive() {
        return this.maxTransition && this.resultTranslateX > this.maxTransition
      },
    },

    mounted() {
      this.slot = this.$slots.default[0].elm
      this.maxTransition = this.slot.offsetWidth - this.slot.scrollWidth
    },
    methods: {
      startDrag(e) {
        const event = e.changedTouches ? e.changedTouches[0] : e
        this.dragging = true
        this.startX = event.pageX
      },
      onDrag(e) {
        const event = e.changedTouches ? e.changedTouches[0] : e

        if (this.dragging) {
          this.translateX = event.pageX - this.startX
          const slotTranslate = this.translateX + this.resultTranslateX
          this.slotTranslateX(slotTranslate)
        }
      },
      stopDrag() {
        if (!this.dragging) return
        this.dragging = false
        this.resultTranslateX += this.translateX
      },
      slotTranslateX(slotTranslate) {
        let translateX = slotTranslate
        if (slotTranslate > 0) {
          this.resultTranslateX = 0
          this.translateX = 0
          translateX = 0
        }

        if (slotTranslate < this.maxTransition) {
          this.resultTranslateX = this.maxTransition
          this.translateX = this.maxTransition
          translateX = this.maxTransition
        }

        this.slot.style.transform = `translateX(${translateX}px)`
      },
      onArrowLeftClick() {
        this.slotTranslateX(this.resultTranslateX += TRANSLATE_FROM_ARROW)
      },
      onArrowRightClick() {
        this.slotTranslateX(this.resultTranslateX += -TRANSLATE_FROM_ARROW)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .draggable {
    position: relative;
    overflow: hidden;
    &__wrap {
      position: relative;
      padding: 0 3%;
    }
    &__arrow {
      position: absolute;
      top: 50%;
      &_left {
        left: 0;
      }
      &_right {
        right: 0;
        transform: rotate(-90deg);
      }
    }
  }
</style>
