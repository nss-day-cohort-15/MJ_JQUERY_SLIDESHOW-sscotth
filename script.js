$(document).ready(function () {
  var API_URL = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'

  $.getJSON(API_URL, function (res) {
    var images = res.data

    // dynamically add the images to the page
    images.forEach(function (img) {
      $('.images-container').append(`<img src="${img.images.original.url}" />`)
    })

    $('img').first().addClass('active')
  })

  $('.prev').click(function () {
    var activeImage = $('.active')
    var nextImage = activeImage.prev()

    activeImage.removeClass('active')
    nextImage.addClass('active')
  })

  $('.next').click(function () {
    var activeImage = $('.active')
    var nextImage = activeImage.next()

    activeImage.removeClass('active')
    nextImage.addClass('active')
  })
})
