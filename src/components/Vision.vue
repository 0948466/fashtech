<template>
  <section class="vision">
    <h2 class="vision__title">
      Vision
    </h2>

    <div class="vision__wrap">
      <VideoPlayer
        v-for="videoItem in videoData"
        :key="videoItem.videoId"
        :background-image="videoItem.background"
        :title="videoItem.title"
        :link="videoItem.link"
        :video-id="videoItem.videoId"
        :aspect-ratio="videoItem.aspectRatio"
        class="vision__video"
      />
    </div>
  </section>
</template>

<script>
  import VideoPlayer from '@/components/VideoPlayer.vue'

  import videoBackgroundNasdaq from '@/assets/img/video-player/video-background-nasdaq.jpg'
  import videoBackgroundPresentation from '@/assets/img/video-player/video-background-presentation.jpg'
  import videoBackgroundBlockchain from '@/assets/img/video-player/video-background-blockchain.jpg'
  import videoBackgroundImiscan from '@/assets/img/video-player/video-background-imiscan.jpg'
  import videoBackgroundInRunlab from '@/assets/img/video-player/video-background-in-runlab.jpg'

  const videoData = [
    {
      title: 'NASDAQ',
      videoId: 'avee_IJReXo',
      aspectRatio: 0.45,
      background: videoBackgroundNasdaq,
    },
    {
      title: 'Presentation',
      videoId: 'eNk1Q7nivTw',
      aspectRatio: 0.573,
      background: videoBackgroundPresentation,
    },
    {
      title: 'Blockchain',
      link: 'Team Interviews. View more',
      videoId: 'lwFyII4CPew',
      aspectRatio: 0.573,
      background: videoBackgroundBlockchain,
    },
    {
      title: 'Imiscan',
      videoId: 'Dl0bhpA7Ofk',
      aspectRatio: 0.573,
      background: videoBackgroundImiscan,
    },
    {
      title: 'Imigize in Runlab',
      link: 'About the project. View more',
      videoId: 'A8zTLjGzZbE',
      aspectRatio: 0.573,
      background: videoBackgroundInRunlab,
    },
  ]

  export default {
    name: 'Vision',
    components: { VideoPlayer },
    beforeMount() {
      this.videoData = videoData
    },
  }
</script>

<style lang="scss" scoped>
  .vision {
    padding: 3em 4% 5em;
    margin: 0 auto;
    max-width: 910px;
    &__title {
      @include titleSectionWithGradient;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @include w320-767 {
        justify-content: center;
      }
    }

    &__video {
      flex-basis: 45%;
      margin: 0 1% 2em;
      max-width: 372px;
      &:first-of-type {
        flex-basis: 100%;
        max-width: 100%;
      }
      @include w320-767{
        flex-basis: 100%;
      }
    }
  }
</style>
