$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `
          <div class="MessageBox" data-message-id=${message.id}>
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
            <img class="Message-image" src="${message.image}">
          </div>
         `
       return html;
    } else {
      let html =
      `
        <div class="MessageBox" data-message-id=${message.id}>
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
      `
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.MessageBox:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.MessageField').append(insertHTML); 
        $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});