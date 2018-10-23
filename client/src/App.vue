<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import '@/assets/styles/main.css';

export default {
  name: 'home',
  components: {
    Header
  }
};
</script>


<style lang="scss">
</style>
