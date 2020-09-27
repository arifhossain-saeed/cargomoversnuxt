<template>
  <div>
    <DetailSectionMain/>
    <DetailSectionPostDetail/>
  </div>
</template>

<script>
    import DetailSectionMain from "../../components/blogs/detail/DetailSectionMain";
    import DetailSectionPostDetail from "../../components/blogs/detail/DetailSectionPostDetail";
    export default {
        name: "_slug",
      components: {DetailSectionPostDetail, DetailSectionMain}
    }
</script>

<style scoped>

</style>
