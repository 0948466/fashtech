<template>
  <section
    id="team"
    class="team">
    <div class="container">
      <h2 class="team__title">{{ $t('team.title') }}</h2>
      <div class="team__wrap">
        <div
          v-for="(item, index) in $t('team.items')"
          :key="item.id"
          class="team__item">
          <h5
            ref="name"
            class="team__name">
            {{ item.name }}
          </h5>
          <p
            class="team__role"
            v-html="item.role"/>

          <p class="team__text">&nbsp;{{ item.text }}</p>
          <ImgWithBorder
            :img-src="getUrl(index)"
            :img-alt="item.name"
            :link-linked-in="item.linkLinkedIn"
          />
          <p class="team__text team__text_bottom">
            {{ item.experience }}
          </p>
        </div>
        <div class="team__item team__item_no-mobile" />
      </div>
    </div>
  </section>
</template>

<script>
  import ImgWithBorder from '@/components/ImgWithBorder.vue'
  import ImgTeam0 from '@/assets/img/team/team0.jpg'
  import ImgTeam1 from '@/assets/img/team/team1.jpg'
  import ImgTeam2 from '@/assets/img/team/team2.jpg'
  import ImgTeam3 from '@/assets/img/team/team3.jpg'
  import ImgTeam4 from '@/assets/img/team/team4.jpg'
  import ImgTeam5 from '@/assets/img/team/team5.jpg'
  import ImgTeam6 from '@/assets/img/team/team6.jpg'
  import ImgTeam7 from '@/assets/img/team/team7.jpg'
  import ImgTeam8 from '@/assets/img/team/team8.jpg'
  import ImgTeam9 from '@/assets/img/team/team9.jpg'
  import ImgTeam10 from '@/assets/img/team/team10.jpg'

  export default {
    name: 'Team',

    components: {
      ImgWithBorder,
    },
    data: () => ({
      showModal: false,
      activeItem: false,
      activeSrc: null,
      openName: null,
    }),

    methods: {
      getUrl(index) {
        switch (index) {
          case 0:
            return ImgTeam0
          case 1:
            return ImgTeam1
          case 2:
            return ImgTeam2
          case 3:
            return ImgTeam3
          case 4:
            return ImgTeam4
          case 5:
            return ImgTeam5
          case 6:
            return ImgTeam6
          case 7:
            return ImgTeam7
          case 8:
            return ImgTeam8
          case 9:
            return ImgTeam9
          case 10:
          return ImgTeam10
          default:
            return false
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @keyframes rotate-clockwise {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(120deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotate-counter-clockwise {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-120deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .team {
    position: relative;
    padding: 2em 4% 6em 4%;

    &__title {
      @include titleSection2;
      margin-bottom: 2.5em;
      text-transform: uppercase;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;
      max-width: 1440px;
      @include w320-767 {
        justify-content: center;
      }
    }

    &__item {
      position: relative;
      margin: 0 15px 4em;
      text-align: center;
      box-sizing: border-box;
      width: 100%;
      @include w768 {
        width: 426px;
        max-width: calc(33.33% - 30px);
      }

      @include w320-767 {
        width: 100%;
      }

      &_no-mobile {
        @include w320-767 {
          display: none;
        }
      }
    }

    &__name {
      position: relative;
      padding-left: 44px;
      padding-bottom: 3px;
      margin-bottom: 0.5em;
      @include responsive-font-size(18px);
      color: #dfdede;
      text-align: left;
      letter-spacing: -0.015em;
      &::after {
        content: '';
        position: absolute;
        top: calc(100% + 1px);
        left: 24%;
        width: 76%;
        height: 2px;
        background-color: #009fbc;
      }
    }

    &__role {
      font-weight: 400;
      @include responsive-font-size(18px);
      color: #00a6c4;
      text-align: right;
    }
    &__text {
      margin-bottom: 1.5em;
      @include responsive-font-size(18px);
      color: #b3b3b3;
      line-height: 1.4;
      text-align: right;
      letter-spacing: -0.015em;
      &_bottom {
        position: relative;
        padding-left: 30px;
        margin-bottom: 0;
        padding-top: 20px;
        width: 363px;
        box-sizing: border-box;
        line-height: 1.05;
        text-align: left;
        @include w320-767 {
          width: 100%;
        }
      ;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 97%;
          height: 2px;
          background-color: #009fbc;
        }
      }
    }
  }
</style>
