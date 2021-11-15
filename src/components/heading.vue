<template>
<div class="header">
  <div>
    <div class="container">
      <h1 class= "d-flex justify-content-center"> PIERRE DARMSTADTER </h1>
      <nav>
        <ul class ="d-flex align-items-center justify-content-center">
          <span class="span--bord"></span>
          <li><router-link class="nav__link" to="/artiste">L'artiste</router-link></li>
          <span></span>
          <li><router-link class="nav__link" to="/artiste">Les oeuvres</router-link></li>
          <span></span>
          <li><router-link class="nav__link" to="/artiste">Contact</router-link></li>
          <span class="span--bord"></span>
        </ul>          
      </nav>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

h1 {
margin-top: 3%;
font-size: 1.8em;
font-family: 'Prata-Regular';
}

.nav__link{
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 1.2em;
}

.nav__link:hover{
  font-weight: bold;
}

ul {
  list-style-type: none;
  width: 100%;
  padding: 0;
}

li {
  padding: 1%;
}

span {
  display: inline-block;
  height: 1px;
  background: black;
  width: 18%;
}

@media screen and (max-width: 1024px) {

  span{
    width: 14%;
  }
}

@media screen and (max-width: 650px){
  span {
    width: 10%;
  }

   .nav__link{
    font-size: 1em;
  }
}

@media screen and (max-width: 424px){
  h1{
    font-size: 1em;
  }

  .container{
    margin-top: 10%
  }
}




</style>
