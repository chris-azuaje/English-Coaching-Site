// jQuery Plugin

'use strict';

$().ready(function () {
  $('#contactMeForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      subject: {
        required: true,
      },
      comment: 'required',
    },
    messages: {
      name: {
        required: '*Please add a name',
        minlength: '*Name must be at least 2 characters long',
      },
      email: {
        required: '*Please add a valid email',
      },
      subject: {
        required: '*Please add a subject',
      },
      comment: {
        required: '*Please write a comment',
      },
    },
    errorElement: 'div',
  });
});
