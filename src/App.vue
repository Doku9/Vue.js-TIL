<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Data">Data</router-link> |
    <router-link to="/UserList">UserList</router-link> |
    <router-link to="/DataBinding">DataBinding</router-link> |
    <router-link to="/vending">vending</router-link> |
    <router-link to="/DataBindingHTML">DataBindingHTML</router-link> |
    <router-link to="/DataBindingInputText">DataBindingInputText</router-link> |
    <router-link to="/restaurant">restaurant</router-link> |
  </div>
  <router-view />
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
