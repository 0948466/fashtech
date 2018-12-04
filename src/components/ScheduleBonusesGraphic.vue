<template functional>
  <section class="graphic">
    <div class="graphic__item">
      <p class="graphic__item__price">
        $ 10243
      </p>

      <div class="graphic__box">
        Individual
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ScheduleBonusesGraphic',
  }
</script>

<style lang="scss" scoped>
  .graphic {

    &__item {

     }

     &__item__price {
    @include responsive-font-size(19);
       line-height: 1.5;
        color: #797979;
      }
    &__box {
      @include responsive-font-size(16);
      @include linearGradient(1px);
      padding: 0 4px;
      width: 150px;
      line-height: 1.5;
      color: #ccc;
      text-align: right;
    }
  }
</style>
