<template>
  <div>
    <h1>Quản lí</h1>
    <ProductView :edit="sanpham" @save="clickAdd" />
    <!-- <ValidateView  /> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price($)</th>
          <th scope="col">Desc</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <th>{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.desc }}</td>
          <td>
            <button
              v-b-modal.modal-prevent-closing
              class="btn-primary"
              @click="clickEdit(item)"
            >
              Edit
            </button>
            <button @click="clickDelete(index)" class="btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductView from "./Product";
// eslint-disable-next-line no-unused-vars
import ValidateView from "./Validate.vue";

export default {
  components: {
    ProductView,
    // eslint-disable-next-line vue/no-unused-components
    ValidateView,
  },
  created() {
    // console.log('11111111111')
  },
  methods: {
    clickAdd(item) {
      let index = this.list.findIndex((c) => c.id === item.id);
      if (index >= 0) {
        this.list.splice(index, 1, item);
        // console.log("delete")
      } else {
        alert("Add product susses");
        this.list.push(item);
        // console.log("adđ")
      }
      return;
    },
    clickDelete(index) {
      alert("Delete product susses");

      this.list.splice(index, 1);
    },
    clickEdit(itemEdit) {
      this.sanpham = itemEdit;
    },
  },
  data() {
    return {
      sanpham: {},
      list: [
        { id: 1, name: "Product A", price: "10", desc: "Blue" },
        { id: 2, name: "Product B", price: "5", desc: "Pink" },
        { id: 3, name: "Product C", price: "9", desc: "Green" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn-primary {
  background-color: blue;
  color: white;
  border: none;
  padding: 5px 20px;
  border-radius: 0.25rem;
  margin-right: 10px;
}
.btn-danger {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 20px;
  border-radius: 0.25rem;
}
</style>