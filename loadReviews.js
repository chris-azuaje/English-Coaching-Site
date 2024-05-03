// AJAX Request

$('#review--btn').on('click', function () {
  $('#review--btn').addClass('review--btn-hide');
  $.ajax({
    type: 'get',
    url: 'reviews.json',
    beforeSend: function () {
      $('#reviews__container').html('Loading...');
    },
    timeout: 10000,
    dataType: 'json',
  })
    .done(function (data) {
      $('#reviews__container').html('');
      data.reviews.forEach(function (review) {
        $('#reviews__container').append(
          '<div class="review">' +
            '<div class="review__heading">' +
            '<p class="review--name">' +
            review.name +
            '</p>' +
            '<p class="review--date">' +
            review.date +
            '</p>' +
            '</div>' +
            '<p class="review--message">' +
            review.review +
            '</p>' +
            '</div>'
        );
      });
    })
    .fail(function (xhr, status, error) {
      alert('Error: ' + xhr.status + ' - ' + error);
    });
});
