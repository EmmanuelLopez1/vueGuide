<script setup>
// import myOwnComponent from "./components/myOwnComponent.vue"
import Reactivo from "./components/Reactivo.vue"
import PropiedadesCalculadas from "./components/PropiedadesCalculadas.vue"
import EnlacesClasesEstilos from "./components/EnlacesClasesEstilo.vue"
import ListRendering from "./components/ListRendering.vue"
</script>

<script>
/*export default {
  data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'title'
    },
    mult:5*2,
    upercase: (text)=>{return text.toUpperCase()},
    setName: (n)=>{return n},
    show:1,
    url:"https://www.youtube.com/",
    click: ()=>{alert("click")}
  }
}
}
*/
</script>

<template>
  

  <!--  
  <section> 
  <myOwnComponent msg="leone con flow"/>
    <myOwnComponent greet="<h1>Hello world</h1>"></myOwnComponent>
    <h2 v-bind="objectOfAttrs">big ligas</h2>
    <p>sum:{{1+2}}</p>
    <p v-html="mult"></p>
    <p>funcion: {{upercase("saludos")}}</p>
    <h1 v-html="globalTitle"></h1>
    <p v-if="show === 1">Ahora me ves</p>
    <a v-bind:href="url" target="_blank">Go to youtube</a>
    <button v-on:click="click">click me</button>
    <form>
      <button v-on:click.prevent="click">btn form</button>
    </form>
  </section>
  -->

<!--
  <Reactivo/>
  <PropiedadesCalculadas/>  
  <EnlacesClasesEstilos/>
-->

  <ListRendering/>
</template>

// El trabajo de una directiva es aplicar actualizaciones de forma reactiva al DOM

<style>
@import './assets/base.css';
.title{
  color:red;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
