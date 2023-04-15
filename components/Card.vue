<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base text-lg truncate">{{ description }} </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <div>
            <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Detail
            </button>

            <Modal v-if="showModal" :title="title" @close="showModal = false">
                <h3 class="text-base" style="padding: 10px;">Minimum Require System :</h3>
                <div class="border-t-2 border-gray-500"></div>
                <p>os        : {{ detailGame.minimum_system_requirements.os }}</p>
                <p>processor : {{ detailGame.minimum_system_requirements.processor }}</p>
                <p>memory    : {{ detailGame.minimum_system_requirements.memory }}</p>
                <p>storage   : {{ detailGame.minimum_system_requirements.storage }}</p>

                <h3 class="text-base" style="padding: 10px;">Description</h3>
                <div class="border-t-2 border-gray-500"></div>

                <div v-html="detailGame.description"></div>
            </Modal>
        </div>
        </div>
    </div>
    <hr>
</template>

<script lang="ts">
import Modal from './GameModal.vue'
import detailGameExample from '../dataDetailExample.json'
import axios from 'axios'

interface IDetailGame {
    id: number,
    title: string,
    thumbnail: string,
    status: string,
    short_description: string
    description: string
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string
    release_date: string
    profile_url: string
    minimum_system_requirements: {
        os: string
        processor: string
        memory: string
        graphics: string
        storage: string
    };
    screenshots: [];
}

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      detailGame: {},
    }
  },
//   created() {
//     this.detailGame = detailGameExample;
//   },
  async created() {
    const response = await axios.get('https://www.mmobomb.com/api1/game?id=1136')
    console.log('responseDetailGame :>> ', response);
    this.detailGame = response.data
  }
}
</script>