<template>
  <div>
    <h1>Quản lí </h1>
    <ProductView />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price($)</th>
          <th scope="col">Desc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <th>{{item.id}}</th>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.desc}}</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  import ProductView from "./Product"
  export default {
    components: {
      ProductView
    },
    data() {
      return {
        list: [
          { id: 1, name: "Product A", price: "10", desc: "Blue" },
          { id: 2, name: "Product B", price: "5", desc: "Pink" },
          { id: 3, name: "Product C", price: "9", desc: "Green" }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>