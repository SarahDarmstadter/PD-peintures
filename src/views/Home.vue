<template>
  <div class="home">
    <heading />
    <slider />
  </div>
</template>

<script>
// @ is an alias to /src
import heading from '../components/heading.vue'
import slider from '../components/slider.vue'

export default {
  name: 'Home',
  components: {
    heading,
    slider
  }
}
</script>
