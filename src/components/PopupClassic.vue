<template>
  <Popup @hide="onPopupHide">
    <div class="popup-border">
      <slot/>
    </div>
  </Popup>
</template>

<script>
  import Popup from '@/components/Popup.vue'

  export default {
    name: 'PopupClassic',
    components: { Popup },
    methods: {
      onPopupHide() {
        this.$store.commit('CHANGE_POPUP_CLASSIC_SHOW', false)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .popup-border {
    position: relative;
    background-color: $colorBody;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      height: 154px;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      border-right: 2px solid #fff;
    }

    &::after {
      content: '';
      position: absolute;
      top: 154px;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      height: calc(100% - 154px);
      background-color: rgba(0, 0, 0, 0.27);
      border-left: 2px solid #bababa;
      border-right: 2px solid #bababa;
      border-bottom: 2px solid #bababa;
    }
  }

</style>
