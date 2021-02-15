<template>
  <div id="digit">
    <Segment v-for="signals in segments" :key=signals :signals=signals />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { sprintf } from 'sprintf-js'
import sleep from 'sleep-promise'
import Segmenter7 from '../src/segmenter7'
import Segment from './components/Segment.vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      segmenter: undefined
    }
  },
  async mounted () {
    for (let i = 0; i <= 100; i++) {
      this.segmenter = new Segmenter7(sprintf('%03d', i))
      await sleep(25)
    }
  },
  components: {
    Segment
  },
  computed: {
    segments () {
      return this.segmenter && this.segmenter.segments()
    }
  }
})
</script>

<style>
div#digit {
  display: inline;
}
</style>
