<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">How to Play</router-link> |
      <router-link to="/quiz">Quiz</router-link> -->
    </div>
    <router-view/>
    <p class="mt-5 text-center">&copy; 2020 | Created with love by <a href="https://github.com/iqbaltaufiq">Iqbal Taufiq</a> | Powered by <a href="https://vuejs.org">Vue</a></p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
