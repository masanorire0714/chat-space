$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageField" data-message-id=${message.id}>
          <div class="MessageBox">
            <div class="message-info">
             <div class="message-info__name">
                ${message.user_name}
              </div>
              <div class="message-info__date">
                ${message.created_at}
              </div>
            </div>
            <div class="message-text">
              <div class="message-text__main">
                <p class="Message__content">
                  ${message.content}
                </p>
                <img class="Message-image" src="${message.image}">
              </div>
            </div>
          </div>
         </div>`
       return html;
     } else {
      let html =
      `<div class="MessageField" data-message-id=${message.id}>
        <div class="MessageBox">
          <div class="message-info">
            <div class="message-info__name">
              ${message.user_name}
            </div>
            <div class="message-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message-text">
            <div class="message-text__main">
              <p class="Message__content">
                ${message.content}
              </p>
              <img class="Message-image" src="${message.image}">
            </div>
          </div>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageField').append(html);
      $('.list-message').animate({ scrollTop: $('.list-message')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
});