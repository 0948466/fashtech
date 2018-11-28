<template >
  <transition name="popup">
    <section
      ref="popup"
      :class="{'popup_flex-start': flexStart}"
      class="popup"
      @click="onPopupClick">
      <div class="popup__content">
        <div
          ref="popupContentInner"
          class="popup__content-inner">
          <slot/>
          <button
            v-if="withClose"
            :background-color="'#0abfca'"
            class="popup__close"
            @click="popupHide">
            Close
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

  export default {
    name: 'Popup',
    props: {
      withClose: {
        type: Boolean,
        default: true,
      },
    },
    data: () => ({
      flexStart: null,
    }),
    mounted() {
      this.disableBodyScroll()

      setTimeout(() => {
        this.addPaddingBody()
      }, 0)

      this.isFlexStart()
      document.addEventListener('keyup', this.onKeyUp)
    },

    destroyed() {
      clearAllBodyScrollLocks()
      document.removeEventListener('keyup', this.onKeyUp)
      setTimeout(() => {
        this.removePaddingBody()
      }, 0)
    },
    methods: {
        ...mapMutations([
          'CHANGE_POPUP_SHOW',
        ]),
      onKeyUp(e) {
        if (e.key === 'Escape') this.popupHide()
      },
      popupHide() {
        this.enableBodyScroll()
        if (this.$store.getters.popupShow) {
          this.CHANGE_POPUP_SHOW(false)
        } else {
          this.$emit('hide')
        }
        this.$router.push({ query: null })
      },

      onPopupClick(event) {
        const CLASS_CONTENT = this.$refs.popup.classList[0]
        const targetClassName = event.target.classList[0]

        if (targetClassName === CLASS_CONTENT) {
          this.popupHide()
        }
      },

      disableBodyScroll() {
        this.targetEl = document.querySelector('.popup')
        disableBodyScroll(this.targetEl)
      },

      enableBodyScroll() {
        enableBodyScroll(this.targetEl)
      },

      isFlexStart() {
        if (!this.$refs.popupContentInner || !this.$refs.popupContentInner.clientHeight) {
          setTimeout(() => {
            this.isFlexStart()
          }, 20)
          return
        }

        this.flexStart = this.$refs.popupContentInner.offsetHeight > this.$refs.popup.offsetHeight
      },
      addPaddingBody() {
        if (document.body.offsetHeight > window.innerHeight) {
          document.body.style.paddingRight = this.getScrollWidht()
          const header = document.querySelector('.main-header')
          if (header) header.style.paddingRight = this.getScrollWidht()
        }
      },
      removePaddingBody() {
        document.body.style.paddingRight = ''
        const header = document.querySelector('.main-header')
        if (header) header.style.paddingRight = ''
      },
      getScrollWidht() {
        const div = document.createElement('div')

        div.style.overflowY = 'scroll'
        div.style.width = '50px'
        div.style.height = '50px'

        div.style.visibility = 'hidden'

        document.body.appendChild(div)
        const scrollWidth = div.offsetWidth - div.clientWidth
        document.body.removeChild(div)
        return scrollWidth ? `${scrollWidth}px` : ''
      },
    },
  }
</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      background: rgba(0, 0, 0, .6);
      transition: opacity .3s ease;
    overflow: auto;
    z-index: 16;

    &_flex-start {
       align-items: flex-start;
    }

    &__content {
      position: relative;
      margin: 0;
      width: 100%;
      max-width: 1195px;
      min-width: 320px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      background-color: transparent;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      @include w768 {
        @include linearGradient;
        padding: 1em 1.4%;
        transition: all .3s ease;
      }
    }

    &__content-inner {
      position: relative;
      width: 100%;
    }

    @include w768 {
      &-enter, &-leave {
        opacity: 0;
      }

      &-enter &__content,
      &-leave &__content {
        transform: scale(1.1);
      }
    }

    &__close {
      position: absolute;
      top: 14px;
      left: 100%;
      margin-left: -40px;
      width: 23px;
      height: 23px;
      font-size: 0;
      background-color: transparent;
      border: 0;
      outline: 0;
      cursor: pointer;
      z-index: 15;
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background: #6f7579;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
</style>
