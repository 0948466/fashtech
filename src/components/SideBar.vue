<template>
  <div class="sidebar">
    <ul class="sidebar__menu">
      <li>
        <router-link :to="{name:'home'}">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'imigize-token'}">
          Imigize Token
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'imigize-apps'}">
          Imigize Apps
        </router-link>
      </li>

      <li>
        <a
          href="#utility"
          @click.prevent="onLinkClick('#utility')">
          Utility
        </a>
      </li>
      <li>
        <router-link
          :to="{name:'vision'}">
          Vision
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name:'news'}">
          News
        </router-link>
      </li>

      <li>
        <router-link :to="{name:'team-and-partners'}">
          Team & Partners
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'advisors'}">
          Team Advisors
        </router-link>
      </li>
      <li>
        <a
          href="#road-map"
          @click="onLinkClick('#road-map')">
          Road Map
        </a>
      </li>

      <li>
        <a
          href="#investors"
          @click.prevent="onLinkClick('#investors')">
          {{ $t('breadcrumbs.investors') }}
        </a>
      </li>
      <li>
        <a>
          Translations
        </a>
        <ul class="sidebar__local-change">
          <li>
            <a
              v-for="localeItem in locales"
              :key="localeItem.lang"
              :class="(activeLocale === localeItem.lang) ? 'local-change__link_active' : ''"
              class="sidebar__local-change-link"
              @click.prevent="changeLocal(localeItem.lang)">
              {{ localeItem.translation }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
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
    name: 'SideBar',
    computed: {
      locales() {
        return locales
      },
      activeLocale() {
        return this.$i18n.locale
      },
    },
    methods: {
      changeLocal(lang) {
        this.$i18n.locale = lang
        document.querySelector('html')
          .setAttribute('lang', lang)
        try {
          localStorage.setItem('locale', lang)
        } catch (e) {
          console.log(e.message)
        }
      },
      onLinkClick(selector) {
        try {
          if (this.$route.name === 'home') {
            this.$scrollTo(document.querySelector(selector))
            this.$emit('onLinkClick')
          } else {
            this.$router.push({
              name: 'home',
              hash: `#${selector.slice(1)}`,
            })
          }
        } catch (e) {
          console.error(e.message)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    position: absolute;
    top: calc(100% + 3px);
    right: 0;
    padding: 2em 4em;
    min-width: 144px;
    min-height: 270px;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 20;
    text-align: left;
    @include w320-767 {
      max-height: calc(100vh - 90px);
      overflow-y: scroll;
    }

    @include w768-1299 {
      max-height: calc(100vh - 130px);
      overflow: auto;
    }
    &__menu {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a {
      display: block;
      margin-bottom: 0.5em;
      @include responsive-font-size(17);
      font-weight: normal;
      line-height: 1.8;
      letter-spacing: 2px;
      color: #bdbdbd;
      text-decoration: none;
      white-space: nowrap;
      &.router-link-exact-active,
      &:hover {
        position: relative;
        color: #32d0e7;
      }
    }
    &__local-change {
      padding: 0 7%;
    }
    &__local-change-link {
      text-transform: capitalize;
    }
  }
</style>
