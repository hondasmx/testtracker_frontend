<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Testcase from './components/Testcase.vue'

export default {
  name: 'app',
  components: {Testcase},

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
