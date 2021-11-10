<template>
  <div id="app">
    <div id="home"></div>9
    <router-view/>
  </div>
</template>

<style lang="css">

  @font-face {
    font-family: 'CormorantGaramond-Regular';
    src: url('./assets/police/CormorantGaramond-Regular.ttf') format("trueType")
  }

  *, ::before, ::after{
    box-sizing: border-box;
    margin:0;
    padding: 0
  }

  body{
    font-family: 'CormorantGaramond-Regular';
  }


</style>