$(document).ready(function () {
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

// $(document).ready(function () {
//   $.ajax({
//     type: 'get',
//     url: 'portfolio.json',
//     beforeSend: function () {
//       $('#grid__container').html('Loading...');
//     },
//     timeout: 10000,
//     dataType: 'json',
//   })
//     .done(function (data) {
//       $('#grid__container').html('');
//       data.projects.forEach(function (project) {
//         $('#grid__container').append(
//           '<div class="card__wrapper">' +
//             '<img src="portfolio-images/' +
//             project.image +
//             '" alt="" class="card__img" />' +
//             '<div class="card__content">' +
//             '<h2>' +
//             project.name +
//             '</h2>' +
//             '<div class="card__content--features">' +
//             '<p>HTML, CSS, JS</p>' +
//             '<div class="card__features--type">' +
//             project.projectType +
//             '</div>' +
//             '</div>' +
//             '<p class="card__content-description">' +
//             project.description +
//             '</p>' +
//             '</div>' +
//             '</div>'
//         );
//       });
//     })
//     .fail(function (xhr, status, error) {
//       alert('Error: ' + xhr.status + ' - ' + error);
//     });
// });

console.log('Hello');
