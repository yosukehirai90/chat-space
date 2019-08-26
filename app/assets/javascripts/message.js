$(() => {
  function buildHTML(message) {

    var image = message.image.url ? `<img src="${message.image.url}" class="message__image">`: "";

    var html = `<div class="message message_id="${message.message_id}">
                    <h3 class="message__name">${message.user_name}</h3>
                    <p class="message__date">${message.created_at}</p>
                    <p class="message__content">${message.content}</p>
                    ${image}
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      $('.chat').append(buildHTML(data));
      $('.input-box__text').val("");

      $('.chat').animate({
        scrollTop: $('.chat')[0].scrollHeight
      },200);
      $('input-box__field-send').val("");
      $("form")[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    setTimeout(function() {
      $(".form__send-btn").prop('disabled', false)
    }, 1000);
  });
});