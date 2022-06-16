<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <Modal id="blog-modal">
    <template #header>Blog details</template>
    <template #body>Modal Body
      <ActiveBlog />
    </template>
  </Modal>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Modal from './components/Modal.vue'
import ActiveBlog from './components/ActiveBlog.vue';
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState)
    };
  },
  components: { Modal, ActiveBlog }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
