<template>
  <section class="nbs-main">
    <div class="mainwraperab">

      <form id="msform" method="post" action="https://cargomoverscanada.com/free-quote/send">

        <fieldset>
          <h2 class="fs-title">Save up to 65% on your move</h2>
          <!-- <h3 class="fs-subtitle"></h3> -->
          <div class="row">
            <div class="col-lg-5 form-group">
              <div class="radio">Moving From :
                <label>
                  <input type="radio" name="moving_from" value="ca" checked="checked">Canada <span></span></label>
                <label><input type="radio" name="moving_from" value="us">USA <span></span></label>
              </div>
              <input type="text" name="from_location" id="from_location" class="form-control inn-s pac-target-input"
                     required="" placeholder="Enter a location" autocomplete="off">
              <input type="hidden" name="from_venue_city" id="from_venue_city">
              <input type="hidden" name="from_venue_postal_code" id="from_venue_postal_code">
              <input type="hidden" name="from_venue_state" id="from_venue_state">
              <input type="hidden" name="from_venue_country" id="from_venue_country">
            </div>
            <div class="col-lg-5 form-group">
              <div class="radio">Moving To :
                <label><input type="radio" name="moving_to" value="ca" checked="checked">Canada<span></span></label>
                <label><input type="radio" name="moving_to" value="us">USA<span></span></label>
              </div>
              <input type="text" name="to_location" id="to_location" class="form-control inn-s pac-target-input"
                     required="" placeholder="Enter a location" autocomplete="off">
              <input type="hidden" name="to_venue_city" id="to_venue_city">
              <input type="hidden" name="to_venue_postal_code" id="to_venue_postal_code">
              <input type="hidden" name="to_venue_state" id="to_venue_state">
              <input type="hidden" name="to_venue_country" id="to_venue_country">
            </div>
            <div class="col-lg-2 form-group">
              <label> &nbsp;</label>
              <button type="button" class="next btn btn-danger inn-b" style="margin-top: 15px;">Next <i
                class="fa fa-arrow-right"></i></button>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <h2 class="fs-title">I would like to move on…</h2>
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="hasDatepicker" id="datepicker">
                <div
                  class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi-2 ui-datepicker-multi"
                  style="width: 34em; display: block;">
                  <div class="ui-datepicker-group ui-datepicker-group-first">
                    <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left"><a
                      class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="Prev"><span
                      class="ui-icon ui-icon-circle-triangle-w">Prev</span></a>
                      <div class="ui-datepicker-title"><span class="ui-datepicker-month">September</span>&nbsp;<span
                        class="ui-datepicker-year">2020</span></div>
                    </div>
                    <table class="ui-datepicker-calendar">
                      <thead>
                      <tr>
                        <th scope="col" class="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
                        <th scope="col"><span title="Monday">Mo</span></th>
                        <th scope="col"><span title="Tuesday">Tu</span></th>
                        <th scope="col"><span title="Wednesday">We</span></th>
                        <th scope="col"><span title="Thursday">Th</span></th>
                        <th scope="col"><span title="Friday">Fr</span></th>
                        <th scope="col" class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td
                          class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                        <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">1</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">2</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">3</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">4</span></td>
                        <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">5</span></td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">6</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">7</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">8</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">9</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">10</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">11</span></td>
                        <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">12</span></td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">13</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">14</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">15</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">16</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">17</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">18</span></td>
                        <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">19</span></td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">20</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">21</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">22</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">23</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">24</span></td>
                        <td class=" ui-datepicker-unselectable ui-state-disabled "><span
                          class="ui-state-default">25</span></td>
                        <td
                          class=" ui-datepicker-week-end ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today"
                          data-handler="selectDay" data-event="click" data-month="8" data-year="2020"><a
                          class="ui-state-default ui-state-highlight ui-state-active ui-state-hover" href="#">26</a>
                        </td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="8"
                            data-year="2020"><a class="ui-state-default" href="#">27</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="8" data-year="2020"><a
                          class="ui-state-default" href="#">28</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="8" data-year="2020"><a
                          class="ui-state-default" href="#">29</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="8" data-year="2020"><a
                          class="ui-state-default" href="#">30</a></td>
                        <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td
                          class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="ui-datepicker-group ui-datepicker-group-last">
                    <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-right"><a
                      class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next"><span
                      class="ui-icon ui-icon-circle-triangle-e">Next</span></a>
                      <div class="ui-datepicker-title"><span class="ui-datepicker-month">October</span>&nbsp;<span
                        class="ui-datepicker-year">2020</span></div>
                    </div>
                    <table class="ui-datepicker-calendar">
                      <thead>
                      <tr>
                        <th scope="col" class="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
                        <th scope="col"><span title="Monday">Mo</span></th>
                        <th scope="col"><span title="Tuesday">Tu</span></th>
                        <th scope="col"><span title="Wednesday">We</span></th>
                        <th scope="col"><span title="Thursday">Th</span></th>
                        <th scope="col"><span title="Friday">Fr</span></th>
                        <th scope="col" class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td
                          class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                        <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">1</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">2</a></td>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">3</a></td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">4</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">5</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">6</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">7</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">8</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">9</a></td>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">10</a></td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">11</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">12</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">13</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">14</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">15</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">16</a></td>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">17</a></td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">18</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">19</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">20</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">21</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">22</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">23</a></td>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">24</a></td>
                      </tr>
                      <tr>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">25</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">26</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">27</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">28</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">29</a></td>
                        <td class=" " data-handler="selectDay" data-event="click" data-month="9" data-year="2020"><a
                          class="ui-state-default" href="#">30</a></td>
                        <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="9"
                            data-year="2020"><a class="ui-state-default" href="#">31</a></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="ui-datepicker-row-break"></div>
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" name="move_date" id="move_date">

          <!-- <input type="button" name="previous" class="previous btn btn-danger on-top-place" value="Previous" /> -->
          <button type="button" name="previous" class="previous btn btn-danger on-top-place"><i
            class="fa fa-arrow-left"></i> Previous
          </button>

        </fieldset>

        <fieldset>
          <h2 class="fs-title">Select property type</h2>
          <!-- <h3 class="fs-subtitle">Your presence on the social network</h3> -->


          <div class="row text-center property-bx" style="margin: 0px 150px;">
            <div class="col-lg-4 col-xs-12">
              <label>
                <input type="radio" name="property_type" value="House" class="styles-inp property-type-cls ">
                <img src="https://cargomoverscanada.com/UserImage/house.png"
                     style="width: 200px; padding:20% 20% 5% 20%;">
                <p>House</p>
              </label>
            </div>
            <div class="col-lg-4 col-xs-12">

              <label>
                <input type="radio" name="property_type" value="Apartment" class="styles-inp property-type-cls">
                <img src="https://cargomoverscanada.com/UserImage/apartment.png"
                     style="width: 200px; padding:20% 20% 5% 20%;">
                <p>Apartment</p>
              </label>
            </div>
            <div class="col-lg-4 col-xs-12">
              <label>
                <input type="radio" name="property_type" value="Commercial" class="styles-inp property-type-cls">
                <img src="https://cargomoverscanada.com/UserImage/business-building.png"
                     style="width: 200px; padding:20% 20% 5% 20%;">
                <p>Commercial</p>
              </label>
            </div>
          </div>

          <button type="button" name="previous" class="previous btn btn-danger on-top-place"><i
            class="fa fa-arrow-left"></i> Previous
          </button>
        </fieldset>

        <fieldset>
          <h2 class="fs-title">Select property size</h2>
          <!-- <h3 class="fs-subtitle">Your presence on the social network</h3> -->
          <div class="for_house_aprtment_bx text-center property-bx" style="margin: 0px 150px;">
            <div class="row">
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="STUDIO" class="styles-inp">
                  <div class="property-size property-size-cls"> STUDIO</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="1 bedroom" class="styles-inp">
                  <div class="property-size property-size-cls"> 1 bedroom</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="2 bedrooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 2 bedrooms</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="3 bedrooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 3 bedrooms</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="4 bedrooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 4 bedrooms</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="5+ bedrooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 5+ bedrooms</div>
                </label>
              </div>
            </div>
          </div>

          <div class="for_business_bx text-center" style="display: none; margin: 0px 150px;">
            <div class="row">
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="1 room" class="styles-inp">
                  <div class="property-size property-size-cls"> 1 room</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="2 rooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 2 rooms</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="3 rooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 3 rooms</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">


                <label>
                  <input type="radio" name="propery_size" value="4 rooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 4 rooms</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">
                <label>
                  <input type="radio" name="propery_size" value="5 rooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 5 rooms</div>
                </label>
              </div>
              <div class="col-lg-4 col-xs-6">

                <label>
                  <input type="radio" name="propery_size" value="6+ rooms" class="styles-inp">
                  <div class="property-size property-size-cls"> 6+ rooms</div>
                </label>
              </div>
            </div>


          </div>
          <button type="button" name="previous" class="previous btn btn-danger on-top-place"><i
            class="fa fa-arrow-left"></i> Previous
          </button>
        </fieldset>

        <fieldset>
          <h2 class="fs-title">Searching for movers in your area…..</h2>
          <div class="">
            <div class="progress" style="position: relative; margin: 100px 0px;">
              <div class="progress-bar progress-bar-striped indeterminate">
              </div>
            </div>
          </div>
          <button type="button" name="previous" class="previous btn btn-danger on-top-place"><i
            class="fa fa-arrow-left"></i> Previous
          </button>
        </fieldset>

        <fieldset>
          <h2 class="fs-title">Your quote is only a click away</h2>
          <div class="row">
            <div class="col-lg-3 col-xs-12 form-group">
              <label>Name</label>
              <input type="text" name="name" class="form-control inn-s" placeholder="Name">
            </div>
            <div class="col-lg-4 col-xs-12 form-group">
              <label>Email</label>
              <input type="text" name="email" class="form-control inn-s" placeholder="Email">
            </div>
            <div class="col-lg-3 col-xs-12 form-group">
              <label>Phone</label>
              <input type="text" name="phone" class="form-control inn-s" placeholder="xxx-xxx-xxxx" autocomplete="off">
            </div>
            <div class="col-lg-2 col-xs-12 form-group">
              <label> &nbsp;</label>
              <button name="next" class="user_info_btn btn btn-danger inn-b">
                Submit <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <button type="button" name="previous" class="previous btn btn-danger on-top-place"><i
            class="fa fa-arrow-left"></i> Previous
          </button>
        </fieldset>

        <fieldset>
          <h2 class="fs-title">Your quote is only a click away</h2>
          <div class="row text-center">
            <div class="col-xs-6">
              <label>Do you need storage?</label>
              <div class="radio form-group">
                <label><input type="radio" name="storage" value="Yes"> Yes <span></span></label>
                <label><input type="radio" name="storage" value="No" checked="checked"> No <span></span></label>
              </div>
            </div>
            <div class="col-xs-6">
              <label>Vehicle Transport?</label>
              <div class="radio">
                <label><input type="radio" name="transport" value="Yes"> Yes <span></span></label>
                <label><input type="radio" name="transport" value="No" checked="checked"> No <span></span></label>
              </div>
            </div>
          </div>

          <div class="vihcle_transport_box" style="display: none;">
            <div>
              <div class="row">
                <div class="col-lg-4 col-xs-4 form-group">
                  <label>Make</label>
                  <input type="text" name="make" id="make" class="form-control">
                </div>
                <div class="col-lg-4 col-xs-4 form-group">
                  <label>Model</label>
                  <input type="text" name="model" id="model" class="form-control">
                </div>
                <div class="col-lg-4 col-xs-4 form-group">
                  <label>Year</label>
                  <input type="text" name="year" id="year" class="form-control">
                </div>

                <div class="col-lg-12 text-center">
                  <label>Is the car in running condition? </label>
                  <div class="form-group radio">
                    <label><input type="radio" name="car_running_cond" value="Yes" checked="checked"> Yes <span></span>
                    </label>
                    <label><input type="radio" name="car_running_cond" value="No"> No <span></span></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" name="previous" class="previous btn btn-danger on-top-place"><i
            class="fa fa-arrow-left"></i> Previous
          </button>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="g-recaptcha-contact" data-sitekey="6LfibNYUAAAAAKE7KLMn8qe9dyAn9Ub3v6I-xisz"
                   id="RecaptchaField">
                <div style="width: 304px; height: 78px;">
                  <div>
                    <iframe
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfibNYUAAAAAKE7KLMn8qe9dyAn9Ub3v6I-xisz&amp;co=aHR0cHM6Ly9jYXJnb21vdmVyc2NhbmFkYS5jb206NDQz&amp;hl=en&amp;v=yXSLJBpiFoTYkexaPhFknpU7&amp;size=normal&amp;cb=h60hbq7a28iy"
                      width="304" height="78" role="presentation" name="a-6c2dmjjasy37" frameborder="0" scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                  </div>
                  <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
                            style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                </div>
              </div>
              <input type="hidden" class="hiddenRecaptcha" name="hiddenRecaptcha" id="hiddenRecaptcha">
              <div class="recaptcha-error"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 form-group text-center">
              <br>
              <input type="button" name="next" class="btn btn-danger request_submit_btn inn-b" value="GET FREE QUOTES"
                     style="width: 200px;">
            </div>
          </div>
        </fieldset>

      </form>

    </div>
  </section>
</template>

<script>
  export default {
    name: "SectionMain"
  }
</script>

<style>
  #msform {
    margin: 50px auto;
    position: relative;
    height: 500px;
    font-size: 17px;
    color: #fff
  }

  #msform fieldset {
    background: #fff;
    border: 0 none;
    border-radius: 3px;
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;
    background-color: #0072bc;
    border-radius: 10px;
    position: relative
  }

  #msform fieldset:not(:first-of-type) {
    display: none
  }

  .fs-title {
    text-transform: uppercase;
    color: #fff;
    margin: 20px 0;
    font-weight: 600;
    text-align: center
  }

  .fs-subtitle {
    font-weight: 400;
    color: #fff;
    margin-bottom: 20px;
    text-align: center
  }

  .ui-datepicker-inline {
    display: inline-block !important
  }

  #msform .styles-inp[type=radio] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0
  }

  #msform .styles-inp[type=radio] + img {
    cursor: pointer
  }

  #msform .styles-inp[type=radio]:checked + img {
    outline: 2px solid red
  }

  #msform .styles-inp[type=radio] + div.property-size {
    cursor: pointer
  }

  #msform .styles-inp[type=radio]:checked + div.property-size {
    outline: 2px solid red
  }

  .property-size {
    border: 1px solid #eee;
    width: 200px;
    height: 100px;
    background: #eee;
    border-radius: 27px;
    margin: 10px;
    color: #000;
    font-size: 24px;
    padding-top: 33px
  }

  .property-size:hover {
    border: 1px solid #880b17;
    width: 200px;
    height: 100px;
    background: #880b17;
    border-radius: 27px;
    margin: 10px;
    color: #fff
  }

  .progress-bar.indeterminate {
    position: relative;
    animation: progress-indeterminate 3s linear infinite
  }

  @keyframes progress-indeterminate {
    from {
      left: -25%;
      width: 25%
    }
    to {
      left: 100%;
      width: 25%
    }
  }

  .on-top-place {
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 5px
  }

  #msform .inn-s {
    height: 50px;
    font-size: 17px
  }

  #msform .inn-b {
    height: 50px;
    width: 100%;
    margin-top: 0;
    font-size: 18px;
    font-weight: 700
  }

  #msform .form-group {
    padding: 0 5px
  }

  #msform .vihcle_transport_box {
    margin: 0 15%
  }

  #msform .error {
    color: red
  }

  #msform .radio input[type=radio] {
    display: none
  }

  #msform .radio label:before {
    content: " ";
    display: inline-block;
    position: relative;
    top: 5px;
    margin: 0 5px 0 0;
    width: 20px;
    height: 20px;
    border-radius: 11px;
    border: 2px solid #fff;
    background-color: #fff
  }

  #msform .radio label {
    position: relative
  }

  #msform .radio label input[type=radio]:checked + span {
    border-radius: 11px;
    width: 9px;
    height: 9px;
    position: absolute;
    top: 11px;
    left: 26px;
    display: block;
    background-color: #880b17
  }
</style>
