<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <img class="picture" :src="activeBlog.imgUrl" alt="">

            </div>
            <div> {{ activeBlog.title }}</div>
            <div v-for="c in comments" :key="c.id">
                <div class="bg-light">
                    {{ comments.body }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { commentsService } from '../services/CommentsService'

export default {
    setup() {
        return {
            activeBlog: computed(() => AppState.activeBlog),
            comments: computed(() => AppState.comments),
            async getComments() {
                try {
                    await commentsService.getComments()
                } catch (error) {
                    Pop.toast(error.message, 'error')
                    logger.log(error)
                }
            }
        }
    }
}
</script>




<style lang="scss" scoped>
.picture {

    height: 90vh;
    width: 90vh;
}
</style>