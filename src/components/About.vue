<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h2>About Something...</h2>
</template>

<script>
import Vue from 'vue'

//    // define a mixin object
// var myMixin = {
//   created: function () {
//     this.hello()
//   },
//   methods: {
//     hello: function () {
//       console.log('hello from mixin!')
//     }
//   }
// }

// // define a component that uses this mixin
// var Component = Vue.extend({
//   mixins: [myMixin]
// })

// // eslint-disable-next-line no-unused-vars
// var component = new Component() 
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  }
})

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
export default {

}
</script>