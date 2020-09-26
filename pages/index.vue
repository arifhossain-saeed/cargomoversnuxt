<template>
  <div>
    <IndexSectionMain/>
    <IndexSectionAboutInfo/>
    <IndexSectionWelcomeServices/>
    <IndexSectionCallToAction/>
    <IndexSectionFaq/>
    <IndexSectionRequestQuote/>
    <IndexSectionLatestBlogs/>
    <IndexSectionFactCounter/>
    <IndexSectionFooterTop/>
  </div>
</template>

<script>
  import IndexSectionMain from "../components/index/IndexSectionMain";
  import IndexSectionAboutInfo from "../components/index/IndexSectionAboutInfo";
  import IndexSectionWelcomeServices from "../components/index/IndexSectionWelcomeServices";
  import IndexSectionCallToAction from "../components/index/IndexSectionCallToAction";
  import IndexSectionFaq from "../components/index/IndexSectionFaq";
  import IndexSectionRequestQuote from "../components/index/IndexSectionRequestQuote";
  import IndexSectionLatestBlogs from "../components/index/IndexSectionLatestBlogs";
  import IndexSectionFactCounter from "../components/index/IndexSectionFactCounter";
  import IndexSectionFooterTop from "../components/index/IndexSectionFooterTop";
  export default {
    components: {
      IndexSectionFooterTop,
      IndexSectionFactCounter,
      IndexSectionLatestBlogs,
      IndexSectionRequestQuote,
      IndexSectionFaq,
      IndexSectionCallToAction, IndexSectionWelcomeServices, IndexSectionAboutInfo, IndexSectionMain}
  }
</script>

<style>
</style>
