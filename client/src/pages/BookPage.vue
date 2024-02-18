<template>
    <div class="container-fluid bg-white">
      <div class="row">
        <div class="clo-12 my-5">
          <h1 class="text-center">Lonely Cowboy Hearts Series</h1>
          {{ books }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { computed, onMounted } from 'vue';
import { booksService } from '../services/BooksService'
import { AppState } from '../AppState';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop';

  export default {
    name: 'BookPage',
    setup() {
      const route = useRoute()
      onMounted(async() => {
        try {
          await booksService.getAll(route.params.id)
        } catch (error) {
          Pop.toast('FAILED TO LOAD BOOK' + error, 'error')
        }
      })
      return {
        books: computed(() => AppState.books),

      }
    }
  }
  </script>