<template>
  <div
    :class="{'local-change_show-menu': !showTable}"
    class="local-change">
    <template v-if="showTable">
      <a
        v-for="localeItem in locales"
        :key="localeItem.lang"
        :class="(activeLocale === localeItem.lang) ? 'local-change__link_active' : ''"
        class="local-change__link"
        @click.prevent="changeLocal(localeItem.lang)">
        {{ localeItem.translation }}
      </a>
    </template>
    <ul
      v-else
      class="local-change__menu">
      <li>
        <a>Translations</a>
        <div class="local-change__submenu">
          <a
            v-for="localeItem in locales"
            :key="localeItem.lang"
            :class="(activeLocale === localeItem.lang) ? 'local-change__link_active' : ''"
            class="local-change__link local-change__link_submenu"
            @click.prevent="changeLocal(localeItem.lang)">
            {{ localeItem.translation }}
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  const locales = [
    {
      lang: 'en',
      translation: 'en',
    },
    {
      lang: 'zh',
      translation: '中文',
    },
    {
      lang: 'ko',
      translation: '한국어',
    },
    {
      lang: 'ja',
      translation: '日本語',
    },
    {
      lang: 'es',
      translation: 'esp',
    },
    {
      lang: 'ru',
      translation: 'ru',
    },
  ]

  export default {
    name: 'LocalChange',
    computed: {
      ...mapGetters(['windowWidth']),
      locales() {
        return locales
      },
      activeLocale() {
        return this.$i18n.locale
      },
      showTable() {
        return this.windowWidth > 1390
      },
    },
    methods: {
      changeLocal(lang) {
        this.$i18n.locale = lang
        document.querySelector('html').setAttribute('lang', lang)
        try {
          localStorage.setItem('locale', lang)
        } catch (e) {
          console.log(e.message)
        }
      },
    },
  }
</script>


<style scoped lang="scss">
  .local-change {
    display: flex;
    flex-basis: 195px;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 52px;
    align-items: safe center;
    &_show-menu {
      flex-basis: auto;
    }

    &__menu {
      display: flex;
      justify-content: space-around;
      align-self: stretch;

      li {
        position: relative;
        display: flex;
        align-items: stretch;
        color: gray;
        z-index: 15;
        cursor: pointer;
        &:hover {
          .local-change__submenu {
            display: block;
          }
        }
        > a {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0.5em 15px;
          overflow: hidden;
          box-sizing: border-box;
          @include responsive-font-size(17.5);
          color: #8e8e8e;
          text-decoration: none;
          text-align: left;
          white-space: nowrap;
          &.router-link-exact-active,
          &:hover {
            color: $color2;
          }

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
      }
    }

    &__submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 100%;
      @include siteBackgroundColor;
    }

    &__link {
      position: relative;
      padding: 6px;
      width: 65px;
      box-sizing: border-box;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 14px;
      color: #8e8e8e;
      text-transform: uppercase;
      cursor: pointer;
      &_submenu {
        display: block;
        width: 100%;
      }
      &_active {
        color: #eee;
      }
    }
  }
</style>

