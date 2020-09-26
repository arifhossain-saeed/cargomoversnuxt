<template>
  <section class="sec-padding contact-page-content">
    <div class="thm-container">
      <div class="sec-title">
        <h2><span>Get in touch</span></h2>
        <p>WE'D LOVE TO HEAR FROM YOU</p>
      </div>
      <div class="row">
        <div class="col-lg-12 form-group">

        </div>
      </div>
      <div class="row">
        <div class="col-md-7 col-sm-6 col-xs-12 pull-left">
          <!-- class="contactus-form contactus-page"  -->
          <form class="contact-form contact-page" action="https://cargomoverscanada.com/contact/save" role="form" method="post" id="contact_form" novalidate="novalidate">
            <p>
              <input type="text" placeholder="Name" name="name" value="">

            </p>
            <p>
              <input type="text" placeholder="Email" name="email" value="">

            </p>
            <p>
              <input type="text" placeholder="Subject" name="subject" value="">

            </p>
            <p>
              <textarea name="message" placeholder="Message"> </textarea>

            </p>
            <p>
            </p><div id="gogle-recaptch"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfibNYUAAAAAKE7KLMn8qe9dyAn9Ub3v6I-xisz&amp;co=aHR0cHM6Ly9jYXJnb21vdmVyc2NhbmFkYS5jb206NDQz&amp;hl=en&amp;v=yXSLJBpiFoTYkexaPhFknpU7&amp;size=normal&amp;cb=70schonbpdjz" width="304" height="78" role="presentation" name="a-w9hh2mjh9uql" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
            <div class="recaptcha-error"></div>
            <p></p>

            <button type="submit" class="thm-btn">Submit Now <i class="fa fa-arrow-right"></i></button>
          </form>
          <br>
          <br>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 pull-right">
          <div class="contact-info">
            <ul>
              <li>
                <div class="icon-box"> <i class="icon icon-Pointer"></i> </div>
                <div class="content">
                  <p> <strong>Cargo Movers Canada</strong><br>
                    683 10 St SW #208, Calgary, AB T2P 5G3, Canada</p>
                </div>
              </li>
              <li>
                <div class="icon-box"> <i class="icon icon-Plaine"></i> </div>
                <div class="content">
                  <p>info@CargoMoversCanada.com</p>
                </div>
              </li>
              <li>
                <div class="icon-box"> <i class="icon icon-Phone2"></i> </div>
                <div class="content">
                  <p>(403) 768-0480<br>
                    1-855-206-9407</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.304783393328!2d-114.08862208471047!3d51.04745985204866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f329d078c9f%3A0xb5cddacb06187f41!2sCargo+Movers+Canada!5e0!3m2!1sen!2sin!4v1564418260908!5m2!1sen!2sin" style="border: 0;" width="100%" height="450" frameborder="0"></iframe>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ContactSectionPageContent"
  }
</script>

<style scoped>

</style>
