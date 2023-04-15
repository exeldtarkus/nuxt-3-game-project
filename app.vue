
<template>
<header class="bg-gray-800 py-4">
  <div class="container mx-auto px-4">
    <h1 class="flex justify-center text-white text-4xl font-bold">Find Your Best Game</h1>
  </div>
</header>
<div class="flex justify-center bg-gray-200">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="col-md-4" v-for="(card, index) in games" :key="index">
      <Card :image="card.thumbnail" :title="card.title" :description="card.short_description" /> 
    </div>
  </div>
</div>

</template>

<script lang="ts">
import axios from 'axios'
import dataExample from './dataExample.json'

export default {
  data() {
    return {
      games: []
    }
  },
  // created() { // uncomment this for sample
  //   this.games = dataExample;
  // }
  async created() {
    const response = await axios.get('https://www.mmobomb.com/api1/games?platform=pc')
    console.log('response :>> ', response);
    this.games = response.data
  }
}

</script>