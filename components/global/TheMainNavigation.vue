<template>
  <nav class="main-menu-wrapper stricky slideIn animated">
    <div class="thm-container menu-gradient ">
      <div class="clearfix">
        <div class="nav-holder pull-left">
          <div class="nav-header">
            <button><i class="fa fa-bars"></i></button>
          </div>
          <div class="nav-footer">
            <ul class="nav">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/about"> About Us </nuxt-link></li>
              <li class="has-submenu"><nuxt-link to="/services" class="dropdown-trigger">services
                <i class="menu-toggle fa fa-angle-down"></i>
                <button class="dropdown-expander"><i class="fa fa-bars"></i></button>
              </nuxt-link>
                <ul class="submenu">
                  <li><nuxt-link to="/services/moving">Moving</nuxt-link></li>
                  <li><nuxt-link to="/services/packing">Packing</nuxt-link></li>
                  <li><nuxt-link to="/services/storage">Storage</nuxt-link></li>
                </ul>
              </li>
              <!-- <li class="has-submenu">
                <a href="https://cargomoverscanada.com/services"> Services
                    <i class="menu-toggle fa fa-angle-down"></i>
                    <button class="dropdown-expander"><i class="fa fa-bars"></i>
                    </button>
                </a>
                <ul class="submenu">
                      <li><a href="https://cargomoverscanada.com/moving-services"> Moving</a></li>
                      <li><a href="https://cargomoverscanada.com/packing-services"> Packing</a></li>
                      <li><a href="https://cargomoverscanada.com/storage-services"> Storage</a></li>
                </ul>
              </li> -->
              <!-- <li> <a href="https://cargomoverscanada.com/testimonials">Testimonial</a> </li> -->
              <li><nuxt-link to="/faqs">Faq</nuxt-link></li>
              <li><nuxt-link to="/blogs">blog</nuxt-link></li>
              <li><nuxt-link to="/contactus">contact us</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="free-qoute-button pull-right"><a href="https://cargomoverscanada.com/free-quote">Get Free Quote</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "TheMainNavigation"
  }
</script>

<style scoped>

</style>
