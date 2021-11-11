<template>
    <div id="bottom__page">
        <div class="container ">
                <div class="contact">
                    <router-link to="/contact">Contact</router-link>
                    <p class="name">Pierre Darmstadter</p>
                    <p class="mail">pierre.darmstadter@gmail.com</p>
                </div>
                <div class="copyright">
                    <p class="droit">Tous droits réservés.</p>
                    <p>Ne pas reutiliser sans mentionner l'artiste</p>
                </div>
        </div>
    </div>
</template>

<style scoped>
   .container
   {
       display: flex;
   }

   .contact{
       margin-left: 5px;
       margin-top: 10px;
       line-height: 0.8em
   }
   .contact p{
       margin-bottom: 5px;
   }
   .contact a{
       text-decoration:  none;
       color: black;
   }
   .contact a:hover{
       font-weight: bold;
   }
   .name{
       margin-top: 5px;
   }

   .copyright{
       margin-left: 30px;
       font-weight: bold;
       display: flex;
       margin-top: 10px;
   }
   .copyright p {
       margin-right: 8px;
   }

</style>