let pusher;

const pusherAppKey = "";
const pusherAppCluster = "";
const pusherEventName = "";

pusher = new Pusher(pusherAppKey, {
  cluster: pusherAppCluster
});

let channel = pusher.subscribe('my-channel');
channel.bind(pusherEventName, function(data) {

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const url = tabs[0].url;
    const meetUniqueId = url.replace("https://meet.google.com/", "").split("/")[0].split("?")[0];

    if(data.meet_unique_id == meetUniqueId) {
      const message = data.message;
      // meetのIDが一致する場合のみ処理
      chrome.tabs.sendMessage(tabs[0].id, message, function (response){
        if (window.chrome.runtime.lastError) {
          console.log(window.chrome.runtime.lastError);
          alert("error");
        }
      });
    }
  });

});