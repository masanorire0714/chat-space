$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageField">
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
              </div>
            </div>
          </div>
         </div>`
       return html;
     } else {
      let html =
      `<div class="MessageField">
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
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});