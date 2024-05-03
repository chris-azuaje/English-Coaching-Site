// jQuery Plugin

'use strict';

$().ready(function () {
  $('#country_selector').countrySelect({
    defaultCountry: 'us',
    defaultStyling: 'inside',
    responsiveDropdown: true,
    localizedCountries: null,
  });
});
