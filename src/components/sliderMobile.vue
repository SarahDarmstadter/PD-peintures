<template>
  <div id="slider_mobile" class="container">
    <div class="slides d-flex flex-column" v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler"  >
      <img class="slide active" src="../assets/img/veron.png" alt="veron">
      <img  class="slide" src="../assets/img/vacherouge.jpg" alt="vache rouge">
      <img class="slide" src="../assets/img/veronDeux.jpg" alt="veron deux">
    </div>
    <div class="cercles d-flex justify-content-center">
      <div class="cercle actif"></div>
      <div class="cercle"></div>
      <div class="cercle"></div>
    </div>

    <p @click="getcercles"> get cercles </p>
  </div>
</template>

<script>
export default {
    name : "sliderMobile",
    data(){
      return {
        index : 0,
      }
    },
    methods: {
       swipeLeftHandler(){
        console.log("swiiipe left ")
        let cercles = document.getElementsByClassName("cercle")
        let slides = document.querySelectorAll(".slide")
          if(this.index <2){
              cercles[this.index].classList.remove("actif")
              slides[this.index].classList.remove("active")
              this.index++;
              slides[this.index].classList.add("active")
              cercles[this.index].classList.add("actif")
          } else if(this.index === 2){
            slides[this.index].classList.remove("active");
            cercles[this.index].classList.remove("actif");
            this.index = 0;
            slides[this.index].classList.add("active")
            cercles[this.index].classList.add("actif")
          }
      },
     swipeRightHandler(){
        let cercles = document.getElementsByClassName("cercle")
        let slides = document.querySelectorAll(".slide")
          if(this.index >0){
              slides[this.index].classList.remove("active")
              cercles[this.index].classList.remove("actif")
              this.index--;
              slides[this.index].classList.add("active")
              cercles[this.index].classList.add("actif")
          } else if(this.index === 0){
            slides[this.index].classList.remove("active");
            cercles[this.index].classList.remove("actif");
            this.index = 2;
            slides[this.index].classList.add("active")
            cercles[this.index].classList.add("actif")
          }
     }, 
    
      

    }
}

</script>

  <style scoped>

  .container{
    margin-top: 10%;
  }
  
    .slides{
      position: relative;  
      width: 100%;
    }
    .slide{
      position: absolute;
      width: 100%;
      opacity:0;
      -webkit-transition: opacity 0.5s ease-in-out;
      -moz-transition: opacity 0.5s ease-in-out;
      -o-transition: opacity 0.5s ease-in-out;
      transition: opacity 0.5s ease-in-out; 
    }
    .active{
    opacity: 100%;
    } 
    .cercle{
      border: solid 1.5px black;
      border-radius: 34px;
      width: 10px;
      height: 10px;
      margin: 3px;
    }
    .cercles{
     position: relative;
     bottom: 35px;
      width: 100%;
    }
    .actif{
      background: black;
    }
  </style>