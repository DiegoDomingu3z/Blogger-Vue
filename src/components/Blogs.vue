<template>



    <div class="col-3 ">
        <div class="bg-white elevation-3 p-5 selectable" @click="setActive">
            <img class="img-fluid" :src="blog.imgUrl" />
            <div>{{ blog.title }}</div>
            <div>{{ blog.body }}</div>
        </div>
    </div>



    <Modal>

    </Modal>


</template>


<script>
import { Modal } from 'bootstrap'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
    props: { blog: { type: Object, required: true } },
    setup(props) {
        return {
            setActive() {
                blogsService.setActive(props.blog)
                Modal.getOrCreateInstance(
                    document.getElementById('blog-modal')
                ).show()
                logger.log(AppState.activeBlog, 'setting active')
            }
        }
    }
}
</script>


<style lang="scss" scoped>
</style>