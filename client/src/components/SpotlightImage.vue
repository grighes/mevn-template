<template>
<div class="custom">
  <parallax fixed="false" speedFactor="0.15">
    <img src="../assets/img/teste.jpg" alt="very cool bg">
  </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy';
import '@/assets/styles/spotlight.scss'
export default {
  name:'Spotlight',
  props: {},
  components: {
    Parallax
  }
};
</script>

<style lang="scss" scoped>
</style>
