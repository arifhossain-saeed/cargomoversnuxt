<template>
  <div>
    <ServicesSectionMain/>
    <ServicesSectionProductsNsd/>
  </div>
</template>

<script>
  import ServicesSectionMain from "../../components/services/ServicesSectionMain";
  import ServicesSectionProductsNsd from "../../components/services/ServicesSectionProductsNsd";
  export default {
    name: "index",
    components: {ServicesSectionProductsNsd, ServicesSectionMain}
  }
</script>

<style scoped>

</style>
