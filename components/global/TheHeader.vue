<template>
  <header id="header" class="stricky slideIn animated">
    <div class="thm-container clearfix">
      <div class="logo pull-left"><nuxt-link to="/"> <img
        src="https://cargomoverscanada.com/assets/front/images/logo.png" alt=""> </nuxt-link></div>
      <div class="header-info pull-right">
        <div class="info-box">
          <div class="icon-box no-border"><i class="icon icon-Timer"></i></div>
          <div class="text-box">
            <p class="highlighted">Mon - Sat 9.00 - 18.00</p>
            <p>Sunday Closed</p>
          </div>
        </div>
        <div class="info-box">
          <div class="icon-box"><i class="icon icon-Phone2"></i></div>
          <div class="text-box">
            <p class="highlighted">Call Us:</p>
            <p class="phone-number"><a href="tel:1-855-206-9407">1-855-206-9407</a></p>
          </div>
        </div>
        <!--  <div class="info-box search-box-wrapper">
           <div class="icon-box"> <i class="flaticon-search51"></i> </div>
           <form action="#" class="search-box-holder">
             <div class="search-box">
               <div class="form">
                 <input type="text" placeholder="Track Your Shipment">
                 <button type="submit"><span>GO</span></button>
               </div>
             </div>
           </form>
         </div> -->
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "TheHeader"
  }
</script>

<style scoped>

</style>
