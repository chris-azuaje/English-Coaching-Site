// jQuery-UI

'use strict';

$().ready(function () {
  let icons = {
    header: 'ui-icon-circle-arrow-e',
    activeHeader: 'ui-icon-circle-arrow-s',
  };

  $('#accordion').accordion({
    heightStyle: 'content',
    collapsible: true,
    icons: icons,
  });
});
