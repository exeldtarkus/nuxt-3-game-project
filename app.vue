
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
  // created() {
  //   this.games = dataExample;
  // }
  async created() {
    const response = await axios.get('https://www.mmobomb.com/api1/games?platform=pc')
    console.log('response :>> ', response);
    this.games = response.data
  }
}



// export default {
//   async fetch() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/games')
//     console.log('response :>> ', response);
//     const result = await response.json()
//     return result;
//   },
//   data() {
//     return {
//       cards: [
//         {
//           title: 'dsaffsad',
//           image: 'https://via.placeholder.com/300x200.png?text=Card+1',
//           description: 'This is the description for Card 1'
//         },
//         {
//           title: 'Card 2',
//           image: 'https://via.placeholder.com/300x200.png?text=Card+2',
//           description: 'This is the description for Card 2'
//         },
//         {
//           title: 'Card 3',
//           image: 'https://via.placeholder.com/300x200.png?text=Card+3',
//           description: 'This is the description for Card 3'
//         }
//       ]
//     }
//   }
// }
</script>