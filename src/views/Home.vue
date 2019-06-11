<template>
  <div class="home">
    <Heading title="Test project header"></Heading>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Heading from '@/components/Heading.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Heading
  }
}
</script>
