<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
      increment(){
          this.count++
      }
  },
  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    // `this` refers to the component instance.
    console.log(this.count) // => 1

    // data can be mutated as well
    this.increment()
    console.log(this.count) // => 1
  }
}
</script>

<template>
  <button @click="increment">sumar</button>
  <h2 v-html="count"></h2>
</template>