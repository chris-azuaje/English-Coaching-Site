'use strict';

$().ready(function () {
  // $('#accordion').accordion();
  $('#contactMeForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
        // accept: '[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}',
      },
      subject: {
        required: true,
      },
      comment: 'required',
    },
    messages: {
      name: {
        required: 'Please add a name',
        minlength: 'Name must be at least 2 characters long',
      },
    },
  });
});
