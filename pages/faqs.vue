<template>
  <div>
    <FaqSectionMain/>
    <FaqSectionPageContent/>
  </div>
</template>

<script>
  import FaqSectionMain from "../components/faqs/FaqSectionMain";
  import FaqSectionPageContent from "../components/faqs/FaqSectionPageContent";
  export default {
    name: "faq",
    components: {FaqSectionPageContent, FaqSectionMain}
  }
</script>

<style scoped>

</style>
