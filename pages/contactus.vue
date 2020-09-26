<template>
  <div>
    <ContactSectionMain/>
    <ContactSectionPageContent/>
  </div>
</template>

<script>
  import ContactSectionMain from "../components/contactus/ContactSectionMain";
  import ContactSectionPageContent from "../components/contactus/ContactSectionPageContent";
  export default {
    name: "contact",
    components: {ContactSectionPageContent, ContactSectionMain}
  }
</script>

<style scoped>

</style>
