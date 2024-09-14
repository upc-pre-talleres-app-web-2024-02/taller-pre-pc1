<script>

import {ChuckNorrisService} from "../services/chuckNorris.service.js";
import {Category} from "../model/category.entity.js";
import {Joke} from "../model/joke.entity.js";

export default {

  name: "joke-card",

  data() {
    return {
      categories: [],
      jokes: [],
      chuckNorrisService: new ChuckNorrisService(),
    }
  },

  methods: {

    buildResourcesListFromResponseData(categories) {
      return categories.map(response => new Category(response));
    },

    //Consumiendo la API de Chuck Norris para recolectar la lista de categorías
   getAllCategories(){
     this.chuckNorrisService.getAllCategories()
         .then(response =>{

           //Construyendo la lista de categorías a partir de la respuesta (response) de la API
           this.categories = this.buildResourcesListFromResponseData(response.data);

           //Recorriendo la lista de categorías para obtener los chistes de cada categoría
           this.categories.forEach(category => {
             //Metodo que obtiene los chistes de una categoría específica
             this.getAllJokeByCategory(category.name);
           });

           console.log("categorías de la api", this.categories);
         })
         .catch(error =>{
           console.log("Error al cargar las categorías", error);
         })
   },

    //Metodo que obtiene los chistes de una categoría específica
   getAllJokeByCategory(category){

     this.chuckNorrisService.getJokesByCategory(category)
         .then(response =>{

           this.jokes.push(new Joke(response.data, category));

           console.log("chistes de la api", this.jokes);

         })
         .catch(error =>{
           console.log("Error al cargar los chistes", error);
         })
   }

  },

  //Llamando al metodo que obtiene las categorías de la API de Chuck Norris (created() es lo primero que se ejecuta al cargar el componente)
  created() {
    this.getAllCategories();
  }

}
</script>

<template>

  <pv-card v-for="joke in jokes" :key="joke.id" style="width: 25rem; overflow: hidden; border: solid 4px; margin-bottom: 20px"  >
    <template #header>
      <img alt="user header" :src="joke.icon_url" />
    </template>
    <template #title>{{joke.id}}</template>
    <template #subtitle>{{joke.category}}</template>
    <template #content>
      <p>{{joke.value}}</p>
    </template>
  </pv-card>

</template>

<style scoped>

</style>