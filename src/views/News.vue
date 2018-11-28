<template>
  <section class="news">
    <h2 class="news__title">News</h2>
    <SliderTemplate
      ref="slider"
      :slides="slides"
      class="news__slider"
      @changedCurrantPage="onChangedCurrentPage"/>
    <h3 class="news__title2">
      Imigize News | <span>imigize.com</span>
    </h3>
    <p
      class="news__text">
      {{ title }}
    </p>
    <p
      class="news__text news__text_2"
      v-html="text"/>

    <div class="news__link-wrap">
      <a
        :href="href"
        class="news__link"
        target="_blank"
        rel="noopener">
        Read more...
      </a>
    </div>

    <p
      class="news__date">
      {{ date }}
      <span
        class="news__arrow news__arrow_pre"
        @click="slidePre"/>
      <span
        class="news__arrow news__arrow_next"
        @click="sliderNext"/>
    </p>
  </section>
</template>

<script>
  import SliderTemplate from '@/components/SliderTemplate.vue'
  import Img0 from '@/assets/img/news/21_09_18.jpg'
  import Img1 from '@/assets/img/news/26_10_18.jpg'

  const slides = [
    {
      title: 'Sportmaster shoes will be available for contactless fitting on the Internet',
      text: 'In the coming days, about 1000 models will be registered in the FashTech Imigize platform' +
        '<br>' +
        'and they will create “digital passports”, which will include a detailed description of' +
        'the goods, 3D photos, 3D models of internal volumes and comfort profiles of the models.',
      href: 'https://blog.imigize.ru/?p=890&lang=en',
      date: '26.10.2018',
      html: `<img src="${Img1}" alt="Sportmaster"/>`,
    },
    {
      title: 'Imigize at MICAM Milano',
      text: 'Representatives of Imigize held working meetings with European<br>' +
        'shoe brands during a visit to the footwear industry\'s leading international trade fair MICAM' +
        'in Milan on 16th -19th of Sept.',
      href: 'https://blog.imigize.ru/?p=853&lang=en',
      date: '21.09.2018',
      html: `<img src="${Img0}" alt="MICAM Milano"/>`,
    },
  ]

  export default {
    name: 'News',
    metaInfo: {
      title: 'News',
    },
    components: { SliderTemplate },
    data: () => (
      {
        title: null,
        text: null,
        date: null,
      }),
    beforeMount() {
      this.slides = slides
      this.title = this.slides[0].title
      this.text = this.slides[0].text
      this.href = this.slides[0].href
      this.date = this.slides[0].date
    },
    methods: {
      sliderNext() {
        this.$refs.slider.slideNext()
      },
      slidePre() {
        this.$refs.slider.slidePre()
      },
      onChangedCurrentPage(currentPage) {
        if (!this.slides[currentPage]) return
        this.title = this.slides[currentPage].title
        this.text = this.slides[currentPage].text
        this.href = this.slides[currentPage].href
        this.date = this.slides[currentPage].date
      },
    },
  }
</script>

<style lang="scss" scoped>
  .news {
    padding: 3em 0 5em;
    &__title {
      @include titleSectionWithGradient;
    }
    &__slider {
      img {
      margin-bottom: 1.5em;
      width: 100%;
      }
    }
    &__title2 {
      position: relative;
      padding-top: 3em;
      margin-bottom: 2.3em;
      @include responsive-font-size(21);
      line-height: 1.5;
      color: #0094a1;
      text-transform: uppercase;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 25%;
        width: 55%;
        height: 2px;
        background: $linearGradient;
      }
      span {
        color: #848484;
      }
    }
    &__text {
      margin: 0 auto 1em;
      max-width: 950px;
      @include responsive-font-size(19);
      line-height: 1.333;
      color: #d6d6d6;
      &_2 {
        color: #7c7c7c;
      }
    }
    &__link-wrap {
      margin-bottom: 2em;
    }
    &__link {
      @include responsive-font-size(19);
      line-height: 1.5;
      color: #10696c;
      &:hover {
        color: #0abfca;
      }
    }

    &__date {
      display: inline-block;
      padding: 0 40px;
      position: relative;
      @include responsive-font-size(19);
      line-height: 1.333;
      color: #626262;
    }

    &__arrow {
      position: absolute;
      top: calc(50% - 34px / 2);
      width: 15px;
      height: 34px;
      cursor: pointer;
      background: url("../assets/img/icons/arrow-right.png") center no-repeat;
      background-size: contain;
      &:hover {
        background-image: url("../assets/img/icons/arrow-right-hover.png");
      }


      &_pre {
        left: 0;
        transform: rotate(180deg);
      }

      &_next {
        right: 0;
      }
    }
  }
</style>

<style lang="scss">
  .news {
    .slider-wrapper {}
    &__slider.slider-container {
      height: auto;
      img {
        margin-bottom: 1.5em;
        width: 100%;
      }
    }
  }
</style>
