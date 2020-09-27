<template>
  <div>
    <div class="main-df">
      <TheHeader/>
      <TheMainNavigation/>

      <Nuxt/>

      <!--<a id="calling_btn" href="tel:1-855-206-9407" title="1-855-206-9407"><i class="fa fa-phone"></i></a>-->
      <TheFooter/>
      <TheBottomBar/>
    </div>
    <script v-for="(item, index) in scripts" :key="index" :src="item.src"></script>
  </div>
</template>

<script>
  import TheFooter from "../components/global/TheFooter";
  import TheBottomBar from "../components/global/TheBottomBar";
  import TheMainNavigation from "../components/global/TheMainNavigation";
  import TheHeader from "../components/global/TheHeader";

  export default {
    components: {TheHeader, TheMainNavigation, TheBottomBar, TheFooter},
    data(){
      return {
        scripts: [
          { src:"https://cargomoverscanada.com/assets/front/plugins/jquery/jquery-1.11.3.min.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/bootstrap/js/bootstrap.min.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/jquery-ui-1.11.4/jquery-ui.min.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/owl.carousel-2/owl.carousel.min.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/jquery-appear/jquery.appear.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/jquery-countTo/jquery.countTo.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/jquery-validation/dist/jquery.validate.min.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/jquery.mixitup.min.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/fancyapps-fancyBox/source/jquery.fancybox.pack.js"},
          { src:"https://cargomoverscanada.com/assets/front/plugins/typed.js-master/dist/typed.min.js"},
          { src:"https://cargomoverscanada.com/assets/front/js/main.js"},
          { src: "https://cargomoverscanada.com/assets/js/jquery-input-mask-phone-number.min.js" },
          { src: "https://cargomoverscanada.com/assets/front/autocomplete.js" },
          { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSlhXQ8ixpBW6CLmCJWOIvQXmwzXwlbj4&v=3.exp&sensor=false&libraries=places" },
          { src: "https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit" }
        ],
      }
    }
  }
</script>

<style>
  .mainwraperab{
    top: 70% !important;
  }

  @media  screen and (max-width: 768px){
    .mainwraperab{
      top: 55% !important;
    }
  }
  #msform .radio label input[type='radio']:checked+span {
    border-radius: 11px;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 10px;
    left: 25px;
    display: block;
    background-color: #880b17;
  }

  @media  screen and (max-width: 425px){
    #msform .radio label input[type='radio']:checked+span {
      left: 5px;
    }
  }


  .help-block{
    color: red;
  }
  .recaptcha-error{
    color: red;
  }
</style>
