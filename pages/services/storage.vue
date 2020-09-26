<template>
  <div>
    <StorageSectionMain/>
    <StorageSectionProductsNsd/>
  </div>
</template>

<script>
  import StorageSectionMain from "../../components/services/storage/StorageSectionMain";
  import StorageSectionProductsNsd from "../../components/services/storage/StorageSectionProductsNsd";
  export default {
    name: "storage",
    components: {StorageSectionProductsNsd, StorageSectionMain}
  }
</script>

<style scoped>

</style>
