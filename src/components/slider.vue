<template>
    <div id=le_slider>
        <div class="container ">
            <div class="slider">
                <figure class="spinner" id="spinner">
                    <span style= "float : left;" @click="gallerySpinLeft()">&lt;</span>
                    <div class="  image--previous"></div>
                    <div class="  image--current"></div>
                    <div class=" img image--next"></div> 
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "slider",
    data(){
        return {
          angle : 0
        }
    },
    methods: {
        gallerySpinLeft() {
            let imageCurrent = document.querySelector(".image--current")
            let imagePrevious = document.querySelector(".image--previous")
            let imageNext = document.querySelector(".image--next")
            
            imagePrevious.classList.replace( "image--previous", "image--next")
            imageCurrent.classList.replace( "image--current", "image--previous")
            imageNext.classList.replace( "image--next", "image--current") 
        }
      },
}

</script>

<style scoped>

.container{
    height: 500px;
    margin-bottom: 1%;
}
  
   .slider {
    perspective : 1200px;
    padding-top: 5%;
    border-bottom: solid black 1px;
    border-left: solid 1px black;
    border-right: solid 1px black;       
    width: 100%;
   }

   .spinner{
       transform-style: preserve-3d;
       height: 400px;
       transform-origin: 50% 50% -500px;
       transition : 2s;
       outline: solid 2px transparent;
        position: relative;
        left: 3.5%;
   }

   figure div {
       width: 400px;
       height: 300px;
       position: absolute;
       transform-origin: 50% 50% -500px;
       left: 31%
   }

   figure div:nth-child(1){transform : rotateY(0deg)}
   figure div:nth-child(2){transform : rotateY(-45deg)}
   figure div:nth-child(3){transform: rotateY(45deg)}
      
   span {
       font-size: 2em;
       font-weight: bold;
       cursor: pointer;
       margin-top: 10%;
   }
    .image--next{
        background: url('../assets/img/vachebleu.jpg') no-repeat;
        background-size: cover;
    } 
    .image--current{
        background: url('../assets/img/veron.png') no-repeat;
        background-size: cover;
    }.image--previous{
        background: url('../assets/img/veronDeux.jpg') no-repeat;
        background-size: cover;
    }
   
.img:hover
{
   transition: 1s ease-in-out;
   transform : scale(1.3);
    border: solid 2px black
}




</style>






























































