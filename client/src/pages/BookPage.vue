<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <div class="col-12 p-0">
        <img alt="logo" width="100%" src="src\assets\img\3A Books Hero Image.png" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row" id="love-story-text">
          <div class="col-5"></div>
          <div class="col-3 mt-5" id="love-story-font">
            <p class="text-white text-center">Cowboy</p>
            <p class="text-white text-center">Romance</p>
          </div>
        </div>
      </div>




    </div>
    <div class="row">
      <div class="col-12 text-center">
        <span class="xxx-large">Lonely Cowboy Hearts Series</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3 text-center">
           <p><span class="rochester-font x-large">QR codes</span></p>
            <img src="src\assets\img\1-Homepage Pink QR Code Heart.png" width="100" >
          </div>
          <div class="col-3 text-center">
            <p><span>Romance novels with</span></p>
            <p><span>QR codes?</span></p>
            <p><span class="rochester-font x-large">What?</span></p>
          </div>
          <div class="col-3"></div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
// import { computed, onMounted } from 'vue';
// import { booksService } from '../services/BooksService'
// import { AppState } from '../AppState';
// import { useRoute } from 'vue-router';
// import Pop from '../utils/Pop';

export default {
  name: 'BookPage',
  // setup() {
  //   const route = useRoute()
  //   onMounted(async() => {
  //     try {
  //       await booksService.getAll(route.params.id)
  //     } catch (error) {
  //       Pop.toast('FAILED TO LOAD BOOK' + error, 'error')
  //     }
  //   })
  //   return {
  //     books: computed(() => AppState.books),

  //   }
  // }
}
</script>
<style>
#love-story-font {
  position: absolute;
  left: 1.5em;
  top: 3em;
  font-size: 500%;
  font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.5)
}

#love-story-text {
  position: relative;
  top: -40em;
}
</style>