<template>
  <section class="video">
    <a
      ref="link"
      :href="videoLink"
      :style="{ backgroundImage: 'url(' + backgroundImage + ')', height}"
      class="video__link"
      @click.prevent="onLinkClick">
      <div
        :style="iconPlayStyle"
        :aria-label="title"
        class="video__icon-play"/>
    </a>
    <div
      ref="ytPlayer"
      class="ytPlayer"/>
    <h3 class="video__title">{{ title }}</h3>
    <p class="video__link-more">{{ link }}</p>
  </section>
</template>

<script>
  export default {
    name: 'VideoPlayer',
    props: {
      title: {
        default: null,
        type: String,
      },
      link: {
        default: null,
        type: String,
      },
      videoId: {
        required: true,
        type: String,
      },
      aspectRatio: {
        type: [String, Number],
        default: 0.73,
      },
      backgroundImage: {
        required: true,
        type: String,
      },
      update: {
        default: null,
        type: Boolean,
      },
    },
    data: () => ({
      height: 0,
    }),

    computed: {
      iconPlayStyle() {
        let style = {}

        if (this.colorIconPlay) {
          style = Object.assign(style, {
            borderColor: this.colorIconPlay,
            backgroundColor: this.colorIconPlay,
          })
        }

        return style
      },

      videoLink() {
        return `https://www.youtube.com/embed/${this.videoId}?rel=0`
      },
    },

    watch: {
      update(val) {
        if (val) {
          this.height = this.getLinkHeight()
        }
      },
    },

    mounted() {
      this.height = this.getLinkHeight()
      this.initVideoOpen()
    },
    methods: {
      onLinkClick() {
        this.$refs.link.style.display = 'none'
        this.onYouTubeIframeAPIReady()
      },

      getLinkHeight() {
        return `${this.$el.clientWidth * +this.aspectRatio || 280}px`
      },

      onYouTubeIframeAPIReady() {
        // eslint-disable-next-line
        new YT.Player(this.$refs.ytPlayer,
          {
            height: this.height,
            width: '100%',
            videoId: this.videoId,
            playerVars: {
              rel: 0,
            },
            events: {
              onReady: this.onPlayerReady,
            },
          },
)
      },

      onPlayerReady(event) {
        event.target.playVideo()
      },

      initVideoOpen() {
        const tag = document.createElement('script')

        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      },
    },
  }
</script>


<style scoped lang="scss">
    .video {
        position: relative;
        text-align: center;

        a:nth-child(2) {
            position: relative;

            &::after {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 2px;
                background: rgba(255, 255, 255, 0.3);
                content: "";
                opacity: 0;
                transition: opacity 0.2s, transform 0.2s;
                transform: translateY(8px);
            }

            &:hover::after,
            &:focus::after {
                opacity: 1;
                transform: translateY(0px);
            }
        }

        &__link {
            position: relative;
            display: block;
            background: no-repeat center;
            background-size: contain;
        }

        &__title {
            position: relative;
            padding-top: 0.8em;
            margin: 1em 0 0.5em;
            @include responsive-font-size(17);

            line-height: 1.22;
            letter-spacing: 0;
            text-align: right;
            color: #c0c0c0;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: $linearGradientVideo;
            }
        }

        &__link-more {
            @include responsive-font-size(17);

            line-height: 1.22;
            letter-spacing: 0;
            text-align: right;
            color: #004961;
        }

        &__icon-play {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            box-sizing: border-box;
            border: 2px solid #c2c2c2;
            border-radius: 100%;
            z-index: 1;
            background: transparent url("../assets/img/video-player/video-player-arrow.png")
            no-repeat center;
            background-size: 41%;
        }
    }
</style>
