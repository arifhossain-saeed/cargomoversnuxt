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
      const posts = await $content('posts').fetch()
      return { posts }
    },

    mounted(){
      console.log(this.posts)
    }
  }
</script>

<style scoped>

</style>
