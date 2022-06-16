<template>
  <div class="container-fluid">
    <div class="row">

      <Blogs v-for="b in blogs" :key="b.id" :blog="b" />
    </div>

  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { blogsService } from "../services/BlogsService"
import Blogs from '../components/Blogs.vue'
export default {
  setup() {
    onMounted(async () => {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { Blogs }
}
</script>


<style lang="scss" scoped>
</style>
