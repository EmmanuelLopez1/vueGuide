<script setup>
defineProps({
  msg: {
    type: String,
    required: true
},
greet:{
    type: String,
    required: true
}
})
</script>

<template>
  <h1>Thi is paulo londra</h1>
  <h2>{{msg}}</h2>
  <div v-html="greet"></div>
</template>