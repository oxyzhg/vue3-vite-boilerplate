<template>
  <h1>about page</h1>
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: 'About',

  setup() {
    onMounted(() => {
      console.log('about mounted');
    });

    return {};
  },
};
</script>
