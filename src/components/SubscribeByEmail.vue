<template>
  <section class="subscribe-by-email">
    <h2 class="subscribe-by-email__title">
      BE One OF THE FIRST
    </h2>
    <p class="subscribe-by-email__text">
      Blockchain of Fashion is currently in beta. Enter in your email below and we'll get in touch
      when we're ready to give you access
    </p>
    <form
      v-if="showForm"
      class="subscribe-by-email__form"
      @submit="onFormSubmit">
      <label class="subscribe-by-email__label">
        <input
          :value="emailValue"
          class="subscribe-by-email__input"
          type="email"
          required
          placeholder="Enter YOUR Email address"
          @change="onInputChange">
      </label>
      <button class="subscribe-by-email__btn">
        Stay update
      </button>
    </form>
    <p
      v-if="showError"
      class="subscribe-by-email__error">
      An error occurred, please try again later.
    </p>
    <p
      v-if="showLoading"
      class="subscribe-by-email__loading">
      Loading...
    </p>
    <p
      v-if="showSuccess"
      class="subscribe-by-email__success">
      Success!
    </p>
  </section>
</template>

<script>
  import MailService from '@/api/mailService'

  export default {
    name: 'SubscribeByEmail',
    data: () => ({
      emailValue: null,
      showLoading: false,
      showError: false,
      showSuccess: false,
    }),
    computed: {
      showForm() {
        return !this.showError && !this.showLoading && !this.showSuccess
      },
    },
    methods: {
      onInputChange(e) {
        this.emailValue = e.target.value
      },
      onFormSubmit(e) {
        e.preventDefault()

        this.showLoading = true
        this.sendEmail(this.emailValue)
      },
      sendEmail(value) {
        const subject = 'Request from the Fashtech'
        const text = `BE One OF THE FIRST: Email: ${value}`
        MailService.sendEmail(subject, text)
          .then((myBlob) => {
            this.showLoading = false
            if (!myBlob) {
                this.onError()
                return
              }
            this.showSuccess = true
          })
        },
      onError() {
        this.showError = true
      },
    },
  }
</script>

<style lang="scss" scoped>
  .subscribe-by-email {
    position: relative;
    padding: 4em 12%;
    z-index: 1;
    &__title {
      margin-bottom: 2em;
      @include responsive-font-size(22);
      letter-spacing: -0.0015em;
      color: #fff;
    }

    &__text {
      @include textFuturePopup;
      margin-bottom: 3em;
      line-height: 1.58;
      text-align: center;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__label {
      margin-bottom: 1em;
    }

    &__input {
      position: relative;
      @include input;
      &::placeholder {
        color: #59dce4;
      }
    }
    &__btn {
      @include btn2;
    }

    &__loading,
    &__error,
    &__success {
      color: $color2;
    }
  }
</style>
