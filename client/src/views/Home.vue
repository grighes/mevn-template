<template>
<div class="container mx-auto">
  <Spotlight />
  <div class="flex flex-wrap dogs">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-2 bg-grey-light" v-for="dog in dogs" :data-key="dog.id" :key="dog.id">
          {{dog.name}}
      </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Spotlight from '@/components/SpotlightImage.vue';

import '@/assets/styles/main.css';
import '@/assets/styles/home.scss';

export default {
  name: 'home',
  components: {
        Header,
        Spotlight
      },
  data() {
    return {
      dogs: [
        {
          id: 0,
          name: 'nome1'
        },
        {
          id: 1,
          name: 'nome1'
        },
        {
          id: 2,
          name: 'nome2'
        },
        {
          id: 3,
          name: 'nome3'
        },
        {
          id: 4,
          name: 'nome4'
        },
        {
          id: 5,
          name: 'nome5'
        },
        {
          id: 6,
          name: 'nome6'
        },
        {
          id: 7,
          name: 'nome7'
        },
        {
          id: 8,
          name: 'nome8'
        },
        {
          id: 9,
          name: 'nome9'
        },
        {
          id: 10,
          name: 'nome10'
        },
        {
          id: 11,
          name: 'nome11'
        }
      ]
    };
  }
};
</script>
