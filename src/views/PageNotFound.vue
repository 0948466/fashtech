<template>
  <div class="page-not-found">
    <div class="page-not-found__content">
      <h2 class="page-not-found__title">
        {{ $t('pageNotFound.title') }}
      </h2>
      <router-link
        :to="{name: 'home'}"
        class="page-not-found__link">
        {{ $t('pageNotFound.linkToHome') }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound',
  }
</script>

<style lang="scss" scoped>
    .page-not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 200px);
        text-align: center;
        &__title {
            margin-bottom: 3em;
            @include responsive-font-size(20);
            color: #636363;
        }
        &__link {
            @include responsive-font-size(18);
            color: #636363;
            text-decoration: underline;
        }
    }

</style>
