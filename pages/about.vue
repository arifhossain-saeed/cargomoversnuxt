<template>
  <div>
    <AboutSectionMain/>
    <AboutSectionProductsNsd/>
  </div>
</template>

<script>
  import AboutSectionMain from "../components/about/AboutSectionMain";
  import AboutSectionProductsNsd from "../components/about/AboutSectionProductsNsd";
  export default {
    name: "about",
    components: {AboutSectionProductsNsd, AboutSectionMain}
  }
</script>

<style scoped>

</style>
