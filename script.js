$(document).ready(function () {
  // GET IMAGES FROM API AND DYNAMICALLY ADD THE IMAGES TO THE PAGE
  var API_URL = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'
  var imagesContainer = $('.images-container')

  $.getJSON(API_URL, function (res) {
    var images = res.data

    images.forEach(function (img) {
      var imgSrc = img.images.original.url
      var imgTitle = img.slug
        .split('-').slice(0, -1).join(' ') // 'abc-def-ghi-jkl' -> 'abc def ghi'

      // HTML STRING TO APPEND
      // var img = `
      //   <img
      //     src="${imgSrc}"
      //     title="${imgTitle}"
      //   />
      // `

      // OR BUILD ELEMENT TO APPEND
      var img = $('<img />')
        .attr('src', imgSrc)
        .attr('title', imgTitle)

      imagesContainer.append(img)
    })

    $('img').first().addClass('active')
  })

  // PREVIOUS IMAGE
  $('.prev').click(function () {
    var activeImage = $('img.active')
    var nextImage
      = activeImage.prev().length
      ? activeImage.prev()
      : $('img').last()

    activeImage.removeClass('active')
    nextImage.addClass('active')
  })

  // NEXT IMAGE
  $('.next').click(function () {
    var activeImage = $('img.active')
    var nextImage
      = activeImage.next().length
      ? activeImage.next()
      : $('img').first()

    activeImage.removeClass('active')
    nextImage.addClass('active')
  })
})
