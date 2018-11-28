<template>
  <router-link
    :to="{name: 'home'}"
    class="logo-imigize"/>
</template>

<script>
  export default {
    name: 'LogoImigize',
  }
</script>

<style scoped lang="scss">
  .logo-imigize {
    position: relative;
    display: block;
    width: 200px;
    min-height: 20px;
    background: url("../assets/img/logoImigize/logo-fashtech-imigize.png") no-repeat center;
    background-size: contain;
    overflow: hidden;
    &.router-link-exact-active {
      &::after {
        content: '';
        position: absolute;
        bottom: -7px;
        right: 15px;
        width: 14px;
        height: 14px;
        background-color: #00555d;
        transform: rotate(45deg);
      }
    }
  }
</style>
