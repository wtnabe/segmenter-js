<template>
<svg width="60" height="120" viewBox="0 -20 60 140">
    <polygon points="10,0 50,0 40,10 20,10 10,0" :stroke="s[0]['color']" :fill="s[0]['color']" :class="s[0]['class']" />
    <polygon points="55,5 45,15 45,35 55,45" :stroke="s[1]['color']" :fill="s[1]['color']" :class="s[1]['class']" />
    <polygon points="55,55 45,65 45,85 55,95" :stroke="s[2]['color']" :fill="s[2]['color']" :class="s[2]['class']" />
    <polygon points="10,100 20,90 40,90 50,100" :stroke="s[3]['color']" :fill="s[3]['color']" :class="s[3]['class']" />
    <polygon points="5,55 15,65 15,85 5,95" :stroke="s[4]['color']" :fill="s[4]['color']" :class="s[4]['class']" />
    <polygon points="5,5 15,15 15,35 5,45" :stroke="s[5]['color']" :fill="s[5]['color']" :class="s[5]['class']" />
    <polygon points="10,50 15,45 45,45 50,50 45,55 15,55" :stroke="s[6]['color']" :fill="s[6]['color']" :class="s[6]['class']" />
  </svg>
</template>

<script>
export default {
  props: {
    signals: Array
  },
  computed: {
    s () {
      return this.signals.map((e) => {
        return e ? {
          class: 'signal-on',
          color: 'black'
        } : {
          class: 'signal-off',
          color: '#90a48b'
        }
      })
    }
  }
}
</script>

<style scoped>
svg {
  background: #9db196;
}
</style>
