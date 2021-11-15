<template>
  
    <div id="home">
      <header> <heading /> </header>   
      <slider v-if="isDesktop()=== true"/>
      <slider-mobile v-if="isTablette()===true || isMobile()===true" />
      <footer> <page-bottom /> </footer>
    </div>

</template>

<script>
// @ is an alias to /src
import heading from '../components/heading.vue'
import slider from '../components/slider.vue'
import pageBottom from '../components/pageBottom.vue'
import sliderMobile from '../components/sliderMobile'

export default {
  name: 'Home',
  components: {
    heading,
    slider,
    sliderMobile,
    pageBottom
  },
  data(){
    return{
      
    }
  },
  methods : {
    isDesktop(){
      if(window.innerWidth >=768){
        return true
      }else {
        return false
      }
    },
    isTablette(){
      if(window.innerWidth <768 && window.innerWidth >=500){
        return true
      }else {
        return false
      }
    },
    isMobile(){
      if (window.innerWidth < 500){
        return true
      }else {
        return false
      }
    }
  },

}
</script>
<style>
  footer{
 position:fixed;
 bottom:0;
width: 100%
}
</style>