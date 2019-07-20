// 1. Message

// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp(1000);

// $('#flashMessage').hide().slideDown(1000).delay(3000).slideUp(1000);

// 2. Post Behaviour
// const title = $('.blogTitleInput').text();
// console.log(title);

// const title = 'My First Blog Post';
// const content = 'This is the content of my <strong>first</strong> blog post. Tada.';

// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').html(content);

$('#flashMessage').hide()

$('#previewButton').click(() => {
  const title = $('#blogTitleInput').val()
  const content = $('#blogContentInput').val()

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

  $('#flashMessage').slideDown(1000).delay(3000).slideUp(1000);
});

// My First Blog Post
// This is my first blog. In this article, you will find tips and tricks for writing an article that is engaging.