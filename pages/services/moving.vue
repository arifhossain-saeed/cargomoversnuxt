<template>
  <div>
    <MovingSectionMain/>
    <MovingSectionProductsNsd/>
  </div>
</template>

<script>
  import MovingSectionMain from "../../components/services/moving/MovingSectionMain";
  import MovingSectionProductsNsd from "../../components/services/moving/MovingSectionProductsNsd";
  export default {
    name: "moving",
    components: {MovingSectionProductsNsd, MovingSectionMain}
  }
</script>

<style scoped>

</style>
