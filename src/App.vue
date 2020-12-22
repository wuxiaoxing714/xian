<template>
  <div id="app">
    <my-header></my-header>
    <my-dh></my-dh>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a:link {
  text-decoration: none;
}
</style>
