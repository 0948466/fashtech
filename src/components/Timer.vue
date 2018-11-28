<template>
  <div class="timer">
    <p class="timer__title">
      Token-Sale Starts in
    </p>
    <div class="timer__item-wrap">
      <div class="timer__item">
        <div class="timer__number-wrap">
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ days[0] }}</span>
          </div>
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ days[1] }}</span>
          </div>
          <div
            v-if="days[2]"
            class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ days[2] }}</span>
          </div>
        </div>
        <p class="timer__text">days</p>
      </div>
      <div class="timer__points">
        :
      </div>

      <div class="timer__item">
        <div class="timer__number-wrap">
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ hours[0] }}</span>
          </div>
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ hours[1] }}</span>
          </div>
        </div>
        <p class="timer__text">hours</p>
      </div>

      <div class="timer__points">
        :
      </div>

      <div class="timer__item">
        <div class="timer__number-wrap">
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ minutes[0] }}</span>
          </div>
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ minutes[1] }}</span>
          </div>
        </div>
        <p class="timer__text">minutes</p>
      </div>

      <div class="timer__points">
        :
      </div>

      <div class="timer__item">
        <div class="timer__number-wrap">
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ seconds[0] }}</span>
          </div>
          <div class="timer__number">
            <div class="timer__number__background"/>
            <span>{{ seconds[1] }}</span>
          </div>
        </div>
        <p class="timer__text">seconds</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Timer',
    data: () => ({
      days: [0, 0],
      hours: [0, 0],
      minutes: [0, 0],
      seconds: [0, 0],
    }),
    beforeMount() {
      this.initDateTimer()
    },

    methods: {
      initDateTimer() {
        this.checkDateNowForPolyfill()
        this.intervalID = setInterval(() => {
          this.updateTimer()
        }, 1000)

        this.updateTimer()
      },

      updateTimer() {
        const timeNow = Date.now()
        const timeTokenSaleStart = Date.UTC(2019, 4, 5)
        const distance = timeTokenSaleStart - timeNow

        if (distance < 0) {
          this.clearInterval(this.intervalID)
          return
        }


        const timer = {
          days: `${Math.floor(distance / (1000 * 60 * 60 * 24))}`,
          hours: `${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`,
          minutes: `${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`,
          seconds: `${Math.floor((distance % (1000 * 60)) / 1000)}`,
        }

        this.days = this.splitToArray(timer.days)
        this.hours = this.splitToArray(timer.hours)
        this.minutes = this.splitToArray(timer.minutes)
        this.seconds = this.splitToArray(timer.seconds)
      },

      splitToArray(num) {
        const array = num.toString().split('')

        if (array.length < 2) {
          array.unshift(0)
        }

        return array
      },
      checkDateNowForPolyfill() {
        if (!Date.now) {
          Date.now = function now() {
            return new Date().getTime()
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .timer {
    width: 100%;
    max-width: 360px;
    box-sizing: border-box;

    &__title {
      margin-bottom: .3em;
      @include responsive-font-size(18);
      line-height: 1.5;
      color: #989898;;
      text-transform: uppercase;
      text-align: left;
    }

    &__item-wrap {
      display: flex;
      justify-content: space-between;
    }

    &__item {
      display: flex;
      flex-direction: column;
    }

    &__number-wrap {
      display: flex;
      margin-bottom: .5em;
    }

    $paddingTop: .4em;

    &__number {
      position: relative;
      @include responsive-font-size(32);
      @include linearGradient;
      padding: $paddingTop 2% 0;
      margin-right: 10px;
      min-width: 25px;
      box-sizing: border-box;
      color: #989898;
      z-index: 1;
      &:last-child {
        margin-right: 0;
      }
      span {
        position: relative;
        z-index: 1;
      }
    }

    &__number__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 51%;
      background: linear-gradient(to bottom, #1d1e21 0%, #1f2022 100%);
    }

    &__points {
      padding-top: calc(#{$paddingTop} + .1em;
      @include responsive-font-size(32);
      color: #989898;
    }

    &__text {
      @include responsive-font-size(15);
      line-height: 1.666;
      color: #989898;
      text-align: right;
    }
  }

</style>
