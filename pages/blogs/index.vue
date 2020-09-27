<template>
  <div>
    <BlogsSectionMain/>
    <BlogsSectionLatestBlogs :posts="posts"/>
  </div>
</template>

<script>
  import BlogsSectionMain from "@/components/blogs/BlogsSectionMain";
  import BlogsSectionLatestBlogs from "@/components/blogs/BlogsSectionLatestBlogs";
  export default {
    name: "blogs",
    components: {BlogsSectionLatestBlogs, BlogsSectionMain},

    async asyncData ({ $content }) {
      const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
      return { posts }
    }
  }
</script>

<style scoped>

</style>
