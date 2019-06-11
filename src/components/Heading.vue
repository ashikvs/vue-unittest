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
</script>