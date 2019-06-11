<<<<<<< HEAD
<template>
<div>
  <h1 :style="headingStyles">{{title}}</h1>
  <h3>hi</h3>
</div>

</template>

<script>
export default {
  data() {
    return {
      headingStyles: {
        color: this.color
      }
    };
  },
  props: ["title", "color"]
};
=======
<template>
<div>
  <h1 :style="headingStyles">{{title}}</h1>
  <h3>hi</h3>
</div>

</template>

<script>
export default {
  data() {
    return {
      headingStyles: {
        color: this.color
      }
    };
  },
  props: ["title", "color"]
};
>>>>>>> efd32db94f0a6387c08c3e551973c9c1ae9738c1
</script>