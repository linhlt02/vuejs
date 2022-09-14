<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Add Product </b-button>

    <!-- <div class="mt-3">
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="(name, index) in submittedNames" :key="index">{{ name }}</li>
      </ul>
    </div> -->

    <b-modal id="modal-prevent-closing" ref="modal" title="Submit Your Name" @show="resetModal" @hidden="resetModal"
      @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Name">
          <b-form-input v-model="students.name" v-bind:class="{'is-valid': errors.name}" required></b-form-input>
          <div class="!default" @blur="validate()" v-if="errors.name">{{errors.name}}</div>
        </b-form-group>
        <b-form-group label="Price">
          <b-form-input v-model="students.price" required min="0"></b-form-input>

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
  props: {
    edit: {
      type: Object,
      default: null
    }
  },
  name: 'ProductView',

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

      name: '',
      nameState: null,
      submittedNames: [],

    }

  },
  watch: {
    edit() {
      if (this.edit) {
        this.students = Object.assign({}, this.edit)
      } else {
        this.students = {

        }
      }
    },
    // name(value) {
    //   // binding this to the data value in the name input
    //   this.name = value;
    //   this.validateName(value);
    // }
  },
  methods: {
    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity()
    //   this.nameState = valid
    //   return valid
    // },
    validate() {
      this.errors = {
        name: '',
        price: '',
        desc: ''
      }
      if (!this.students.name) {
        this.errors.name = 'products name is not null'
        console.log("abc ", this.errors.name)
      }
    },
    // save() {
    //   this.validate()
    //   console.log("abc ", this.validate())
    // },
    resetModal() {
      this.name = ''
      this.nameState = null
    },

    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.validate()) {
        // console.log("abc ", this.validate())
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    handleOk(bvModalEvent) {

      console.log(this.students)
      this.$emit("save", this.students)
      this.students = {
        id: '',
        name: "",
        price: "",
        desc: ""
      },
        // Prevent modal from closing
        bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
  }
}
</script>