const apiUrl = "";

$(document).ready(function () {
  $('.btn').on('click', function () {    
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = tabs[0].url;

      if(url.indexOf("https://meet.google.com/") != 0) {
        alert("https://meet.google.com/で実行してください！");
        return;
      }

      const meetUniqueId = url.replace("https://meet.google.com/", "").split("/")[0].split("?")[0];
      const message = $(this).text();

      $.ajax({
  	    type: "POST",
        url: apiUrl,
        cache: false,
        data: {"meet_unique_id" : meetUniqueId, "message" : message},
        dataType: 'text'
      }).done(function(data) {
        // 何もしない
      }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("エラーが発生しました： " + textStatus);
        alert(errorThrown);
      });
    });
  });
});