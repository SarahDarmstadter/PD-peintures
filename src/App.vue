<template>
  <div id="app">
    <div id="home"></div>
    <router-view/>
  </div>
</template>

<style lang="css">

  @font-face {
    font-family: 'CormorantGaramond-Regular';
    src: url('./assets/police/CormorantGaramond-Regular.ttf') format("trueType")
  }

  @font-face {
    font-family:'Prata-Regular';
    src: url('./assets/police/Prata/Prata-Regular.ttf') format("trueType");
  }

  *, ::before, ::after{
    box-sizing: border-box;
    margin:0;
    padding: 0
  }

  body{
    font-family: 'Prata-Regular';
  }


</style>