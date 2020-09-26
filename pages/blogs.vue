<template>
  <div>
    <BlogsSectionMain/>
    <BlogsSectionLatestBlogs/>
  </div>
</template>

<script>
  import BlogsSectionMain from "../components/blogs/BlogsSectionMain";
  import BlogsSectionLatestBlogs from "../components/blogs/BlogsSectionLatestBlogs";
  export default {
    name: "blogs",
    components: {BlogsSectionLatestBlogs, BlogsSectionMain}
  }
</script>

<style scoped>

</style>
