<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing class="btn-info"
      >Add Product
    </b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.prevent="handleSubmit">
        <b-form-group label="Name">
          <b-form-input
            v-model="students.name"
            v-bind:class="{ 'is-valid': errors.name }"
            required
            @blur="validate()"
          ></b-form-input>
          <div class="feeback" v-if="errors.name">
            {{ errors.name }}
          </div>
        </b-form-group>

        <b-form-group label="Price">
          <b-form-input
            v-model="students.price"
            v-bind:class="{ 'is-valid': errors.price }"
            required
            min="0"
            @blur="validate()"
          ></b-form-input>
          <div class="feeback" v-if="errors.price">
            {{ errors.price }}
          </div>
        </b-form-group>

        <b-form-group label="Desc">
          <b-form-input v-model="students.desc"></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    edit: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      errors: {
        name: "",
        price: "",
        desc: "",
      },
      students: {
        name: "",
        price: "",
        desc: "",
      },

      name: "",
      nameState: null,
      submittedNames: [],
    };
  },
  watch: {
    edit() {
      if (this.edit) {
        this.students = Object.assign({}, this.edit);
      } else {
        this.students = {};
        
      }
    },
  },
  methods: {
    validate() {
      this.errors = {
        name: "",
        price: "",
        desc: "",
      };
      if (!this.students.name) {
        this.errors.name = "product name is not null";
        return false;
      }
      if (!this.students.price) {
        this.errors.price = "product price is not null";
        return false;
      }
      return true;
    },
    // save() {
    //   this.validate()
    //   console.log("abc ", this.validate())
    // },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleSubmit() {
      console.log(2222);
      // Exit when the form isn't valid
      // Push the name to submitted names
      this.submittedNames.push(this.name);
    },
    handleOk(bvModalEvent) {
      console.log(1111);
      if (this.validate() === false) {
        bvModalEvent.preventDefault();
        return;
      } else {
        this.$emit("save", this.students);
        (this.students = {
          name: "",
          price: "",
          desc: "",
        }),
          // Trigger submit handler
          this.handleSubmit();
        // Prevent modal from closing
        //bvModalEvent.preventDefault();
      }
    },
  },
};
</script>
<style scoped>
.feeback {
  color: #dc3545;
}
.btn-info {
  background-color: green;
  color: white;
  border: none;
  padding: 5px 20px;
  border-radius: 0.25rem;
}
</style>