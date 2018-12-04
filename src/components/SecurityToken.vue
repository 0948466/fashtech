<template functional>
  <section class="security-token">
    <h2 class="security-token__title">
      {{ parent.$i18n.t('securityToken.title') }}
    </h2>
    <p class="security-token__text">
      {{ parent.$i18n.t('securityToken.text1') }}
    </p>
    <p class="security-token__text">
      {{ parent.$i18n.t('securityToken.text2') }}
    </p>

    <ol class="security-token__ol">
      <li v-html="parent.$i18n.t('securityToken.list1')"/>
      <li v-html=" parent.$i18n.t('securityToken.list2')"/>
    </ol>

    <p
      class="security-token__text"
      v-html="parent.$i18n.t('securityToken.text3')"/>
    <p
      class="security-token__text"
      v-html="parent.$i18n.t('securityToken.text4')"/>
    <p
      class="security-token__text"
      v-html="parent.$i18n.t('securityToken.text5')"/>
  </section>
</template>

<script>
  export default {
    name: 'EquityAllocation',
  }
</script>

<style lang="scss" scoped>
  .security-token {
    @include popupPadding;
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
        color: #59dce4;
      }
    }
  }
</style>
