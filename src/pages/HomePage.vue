<template>
  <div class="row">
    <Blogs/>

  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import {blogsService} from "../services/BlogsService"
export default {
  setup(){
    onMounted(async () => {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.toast(error.message, 'error')
        logger.error(error)
      }
    })
    return {
      blogs: computed(() => AppState.blogs)

    }
  }
}
</script>


<style lang="scss" scoped>

</style>
