<template>
  <div class="home">
    <heading />
    <slider />
    <page-bottom />
  </div>
</template>

<script>
// @ is an alias to /src
import heading from '../components/heading.vue'
import slider from '../components/slider.vue'
import pageBottom from '../components/pageBottom.vue'

export default {
  name: 'Home',
  components: {
    heading,
    slider,
    pageBottom
  }
}
</script>
