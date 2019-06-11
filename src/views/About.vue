<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ul>
    <li :key="item" v-for="item in items">
      {{ item }}
    </li>
  </ul>

  </div>
</template>

<script>
export default {
  name:'about',
  data() {
    return {
      
    };
  },
  props: ['items']
};
</script>
