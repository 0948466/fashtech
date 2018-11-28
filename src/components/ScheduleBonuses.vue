<template>
  <section class="schedule-bonuses">
    <h2 class="schedule-bonuses__title">
      Token Sale schedule and bonuses
    </h2>
    <Timer class="schedule-bonuses__timer"/>
    <img
      class="schedule-bonuses__graphic"
      src="../assets/img/schedule-bonuses/graphic.png"
      alt="Graphic">
    <div class="schedule-bonuses__description">
      <p class="schedule-bonuses__description__text">
        <span class="schedule-bonuses__description__title">Implementation Plan:</span> IMZ FashTech
        cryptocurrency
      </p>
      <p class="schedule-bonuses__description__text">
        After launching the release version of the system, a fixed amount of 5,777,777,000 IMZ will
        be issued. They will be exchanged at a fixed exchange rate: 1 IMZ ERC20 = 1 IMZ EOS.
        IMZ FashTech token allows for the payment of goods and services in partner merchants of the
        IMZ Fashion Blockchain of Fashion system and can also be converted into ETH/EOS/USD at the
        open market, or at the IMZ FashTech liquidity contract.
        Tokens will be offered on a private placement whitelist subscription, effective as of 30th
        of October 2018.
      </p>

      <p class="schedule-bonuses__description__text">
        <span class="schedule-bonuses__description__title">Token Issue Volume:</span> 5,777,777,000
        (100%)
      </p>
      <p class="schedule-bonuses__description__text">
        <span class="schedule-bonuses__description__title">Token Sale Volume:</span> 1,588,888,886
        (27,5%)
      </p>
      <p class="schedule-bonuses__description__text">
        <span class="schedule-bonuses__description__title">Hard cap:</span> $100,000,000
      </p>
      <p class="schedule-bonuses__description__text">
        <span class="schedule-bonuses__description__title">Token price:</span> 1 IMZ = $0.06329114
        или 1 IMZ = 0.00027047 ETH, 1 ETH = 3,697.19996 IMZ (без
        учета бонусов),
      </p>
      <p class="schedule-bonuses__description__text">
        <span class="schedule-bonuses__description__title">Accepted forms of payment:</span> ETH,
        BTC, USD, CHF, EUR, GBP, DKK, SGD
      </p>
      <p class="schedule-bonuses__description__text">
        <span class="schedule-bonuses__description__title">Distribution of Tokens:</span>
        <br>
        · 30.00% - Reserve for liquidity/Market making
        <br>
        · 27.50% - Total for sale now/TGE/
        <br>
        · 3.50% - Advisers
        <br>
        · 4.00% - Bounty
        <br>
        · 3.00% - Marketing
        <br>
        · 20.00% - Management/Operation/Founders and Team/Bootstrap Activities
        <br>
        · 12.00% - Retained for the IMZ Fashtech Foundation, Bootstrap
      </p>

      <p class="schedule-bonuses__description__text">
        Liquidity (Exchanger) Smart Contract Launch 30th of October 2018.
      </p>
      <p class="schedule-bonuses__description__text">
        Major Exchanges Listing <b>15th of May 2020</b> for the security token and <b>15th of May
        2019</b> for the cryptocurrency.
      </p>
      <p class="schedule-bonuses__description__text">
        <span
          class="schedule-bonuses__description__title">The minimum amount of tokens purchase:</span>
        US$ 50,000.
      </p>
      <p class="schedule-bonuses__description__text">
        The members of IMZ FashTech-team are not allowed to distribute their tokens within the
        12three
        months after the Token Issue Date. After that period, all IMZ FashTech tokens of the team
        will
        be released for distribution in the amount of 20% of the tokens owned by a member of the IMZ
        FashTech team every month, so that 18 seven months after the Token Issue Date, all IMZ
        FashTech tokens owned by the members of the team are released from lock-up.
      </p>
      <p class="schedule-bonuses__description__text">
        It is also worth remembering that within the United States, a number of security tokens are
        offered under the Reg. D exemption, which allows for any particular offering to have a
        maximum of 2,000 accredited investors.
      </p>
    </div>

    <div class="schedule-bonuses__link-wrap">
      <a
        href="#"
        class="schedule-bonuses__link"
        target="_blank"
        rel="noopener"
        @click.prevent="onBtnClick">
        Sing up & Buy Tokens
      </a>
    </div>
  </section>
</template>

<script>
  import Timer from '@/components/Timer.vue'
  import UrlJson from '@/api/url.json'

  export default {
    name: 'ScheduleAndBonuses',
    components: {
      Timer,
    },
    computed: {
      getUrlSale() {
        return UrlJson.saleImigize
      },
    },
    methods: {
      onBtnClick() {
        this.$router.push({ query: { modal: 'subscribe-by-email' } })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .schedule-bonuses {
    padding: 3em 4% 2em;
    &__title {
      position: relative;
      padding-top: .12em;
      margin-bottom: 1.7em;
      @include responsive-font-size(24);
      font-weight: 400;
      line-height: 1.5;
      color: #0094a1;
      text-transform: uppercase;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 100px);
        width: 270px;
        height: 2px;
        background: $linearGradient;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 40%;
        width: 60%;
        height: 2px;
        background: $linearGradient2;
      }
    }

    &__timer {
      margin: 0 auto 4em;
    }

    &__graphic {
      margin: 0 auto 5em;
      width: 100%;
      max-width: 1150px;
    }

    &__description {
      margin: 0 auto 3em;
      max-width: 1150px;
    }

    &__description_right {
      display: flex;
      flex-direction: column;
      width: 49%;
    }

    &__description_right,
    &__description_left {
      width: 46%;
      text-align: left;
      @include w320-767 {
        width: 100%;
      }
    }

    &__description_left {
      padding-right: 5%;
    }

    &__description__title {
      color: #59dce4;
    }

    &__description__text {
      color: #949494;
      margin-bottom: 0.5em;
      @include responsive-font-size(18);
      line-height: 1.777;
      text-align: left;
    }

    &__description__text__span {
      position: relative;

      &::before {
        content: "*";
        position: absolute;
        top: -1px;
        left: -9px;
        width: 5px;
        height: 100%;
      }
    }

    &__link-wrap {
      text-align: center;
    }

    &__link {
      @include btnWithArrow;
    }
  }

</style>
