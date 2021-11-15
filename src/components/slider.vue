<template>
    <div id=slider>
        <div class="container ">
            <div class="contour">
                <div class="slider d-flex flex-column">
                    <figure class="spinner d-flex justify-content-center" id="spinner">
                        <div class="image--previous"></div>
                        <div class="img image--current"></div>
                        <div class="image--next"></div> 
                    </figure>
                    <div class="arrows">
                        <svg @click="gallerySpinLeft" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arr" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                        <svg @click="gallerySpinRight" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                </div>
                </div> 
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
            
            imagePrevious.classList.replace("image--previous", "image--current")
            imageCurrent.classList.replace("image--current", "image--next")
            imageNext.classList.replace("image--next", "image--previous") 
        },
        gallerySpinRight() {
            let imageCurrent = document.querySelector(".image--current")
            let imagePrevious = document.querySelector(".image--previous")
            let imageNext = document.querySelector(".image--next")
            
            imagePrevious.classList.replace("image--previous", "image--next")
            imageCurrent.classList.replace("image--current", "image--previous")
            imageNext.classList.replace("image--next", "image--current") 
        }
      },
}

</script>

<style scoped>

   .slider {
    perspective : 1200px;
    padding-top: 4%;
    border-bottom: solid black 1px;
    border-left: solid 1px black;
    border-right: solid 1px black;       
    width: 100%;
    height: 450px;
   }

   .contour{
    border-bottom: solid black 1px;
    border-left: solid 1px black;
    border-right: solid 1px black;
    padding: 3px;
   }

   .spinner{
       transform-style: preserve-3d;
       width: 100%;
       transform-origin: 50% 50% -500px;
       transition : 2s;
       outline: solid 2px transparent;
       position: relative;
   }

   figure div {
       width: 400px;
       height: 300px;
       transform-origin: 50% 50% -500px;
   }
      
   .arrows {
        align-self: center;
        position: relative;
        top: 80%;
   }

   .arrows svg {
       cursor: pointer;
   }

   figure div:nth-child(1){
       transform : rotateY(-45deg);
       position: absolute;
       left: 35%;
    }   

   figure div:nth-child(2){
       transform : rotateY(0deg);
        position: absolute;
    }

   figure div:nth-child(3){
       transform : rotateY(45deg);
        position: absolute;
        right: 35%;
    }

    .image--current{
        background: url('../assets/img/vachebleu.jpg') no-repeat;
        background-size: cover;
    }

    .image--next{
        background: url('../assets/img/veron.png') no-repeat;
        background-size: cover;
    }
    
    .image--previous{
        background: url('../assets/img/veronDeux.jpg') no-repeat;
        background-size: cover;  
    }
   
    .img:hover{
        transition: 1s ease-in-out;
        transform : scale(1.3);
        border: solid 2px black
    }

@media screen and (max-width: 1399px){
    figure div:nth-child(1){
        left: 32%;
    }
    figure div:nth-child(3){
        right: 32%;
    }
    .span{
        left: 8%;
    }
}

@media screen and (max-width: 1200px) and (min-width: 992px){
    figure div:nth-child(1){
        left: 29%;
    }
    figure div:nth-child(3){
        right: 29%;
    }
    .span{
        left: 5%;
    }
}

@media screen and (max-width: 991px) and (min-width: 768px){

    .image--current{
        width: 300px;
    }
    .image--previous{
        width: 300px;
    }
    .image--next{
        width: 300px;
    }
    figure div:nth-child(1){
        left: 40%;
    }
    figure div:nth-child(3){
        right: 40%;
    }
    .span{
        left: 1%;
    }
}
   
</style>






























































