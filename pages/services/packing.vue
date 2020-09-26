<template>
  <div>
    <PackingSectionMain/>
    <PackingSectionProductsNsd/>
  </div>
</template>

<script>
  import PackingSectionMain from "../../components/services/packing/PackingSectionMain";
  import PackingSectionProductsNsd from "../../components/services/packing/PackingSectionProductsNsd";
  export default {
    name: "packing",
    components: {PackingSectionProductsNsd, PackingSectionMain}
  }
</script>

<style scoped>

</style>
