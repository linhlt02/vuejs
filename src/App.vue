<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view></router-view>

    <p>Number of click: {{ count }}</p>
    <p>Number of double click: {{ double }}</p>
    <button @click="increment" class="btn-info">Click to increment</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    double() {
      return this.$store.getters.double;
    },
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
  increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-info{
  background-color: green;
    color: white;
    border: none;
    padding: 5px 20px;
    border-radius: 0.25rem;

}
</style>
