<template>
    <div class="about container-fluid my-5">
      <div class="row">
        <div class="clo-12 my-5">
          <div class="row">
            <div class="col-4 my-5 px-5">
              <h1 class="border ps-4 py-3 elevation-1 rounded bg-info text-light">This is the Blog page</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <BlogsThread :blogs="blogs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState";
import BlogsThread from "../components/BlogsThread.vue";
import { blogsService } from "../services/BlogsService";
import Pop from "../utils/Pop";
  export default {
    name: "BlogPage",
    components: { BlogsThread },
    props: {
      blogs: {
            type: Object,
            required: true
        }
    },
    setup() {
      onMounted(async() => {
        try {
          await blogsService.getAll()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      })
      return {
        blogs: computed(() => AppState.blogs)
      }
    }
}
  </script>