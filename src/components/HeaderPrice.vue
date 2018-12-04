<template functional>
  <section class="header-price">
    <h2 class="header-price__title">
      FashTech IMIGIZE. Soon your IMZ coin will make a lot of
    </h2>

  </section>
</template>

<script>
  export default {
    name: 'HeaderPrice',
  }
</script>

<style lang="scss" scoped>
  .header-price{
    padding: 1.5em 0 1em;
    background: #03151d url("../assets/img/header-price/background-header-price.png")
    no-repeat center bottom;
    background-size: cover;
    @include w320-767 {
      display: none;
    }
   &__title {
     @include responsive-font-size(18);
     color: $color1;
   }
  }
</style>
