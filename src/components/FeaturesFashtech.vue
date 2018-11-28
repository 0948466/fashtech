<template>
  <section class="features-fashtech">
    <h2 class="features-fashtech__title">
      {{ $t('featuresFashtech.title') }}
    </h2>
    <p class="features-fashtech__text">
      {{ $t('featuresFashtech.text') }}
    </p>

    <ol class="features-fashtech__ol">
      <li>
        <span>{{ $t('featuresFashtech.list1') }}</span>
        <ol class="features-fashtech__ol2">
          <li>{{ $t('featuresFashtech.list1a') }}</li>
        </ol>
      </li>
      <li>
        <i18n
          path="featuresFashtech.list2"
          tag="span">
          <span>{{ $t('featuresFashtech.list2a') }}</span>
        </i18n>
      </li>
      <li>
        <i18n
          path="featuresFashtech.list3"
          tag="span">
          <span>{{ $t('featuresFashtech.list3a') }}</span>
        </i18n>
      </li>
    </ol>

  </section>
</template>

<script>
  export default {
    name: 'FeaturesFashtech',
  }
</script>

<style lang="scss" scoped>
  .features-fashtech {
    min-height: 70vh;
    padding: 4em 5%;
    position: relative;
    z-index: 5;
    &__title {
      position: relative;
      z-index: 1;
      @include titleFuturePopup;
    }
    &__text {
      position: relative;
      z-index: 1;
      @include textFuturePopup;
      margin-bottom: 1em;
      line-height: 1.588;
    }

    &__ol {
      margin-bottom: 1em;
      padding-left: 20px;
      list-style: decimal;
      text-align: left;
      li {
        margin-bottom: 1em;
        @include responsive-font-size(17);
        line-height: 1.47;
        color: #aec9cb;
        span {
          color: #59dce4;
          span {
            color: #aec9cb;
          }
        }
      }
    }

    &__ol2 {
      margin-bottom: 1em;
      padding-left: 20px;
      list-style: lower-alpha;
      text-align: left;
      li {
        @include responsive-font-size(17);
        line-height: 1.47;
        color: #aec9cb;
      }
    }
  }
</style>
