<script>

import {defineComponent} from "vue";
import JokeCard from "./chuckNorris/components/joke-card.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";


export default defineComponent({
  components: {FooterContent, JokeCard}
})
</script>

<template>

  <H1> All jokes information </H1>

  <div>
    <joke-card></joke-card>
  </div>
  <div>
    <footer-content></footer-content>
  </div>


</template>

<style scoped>

</style>
