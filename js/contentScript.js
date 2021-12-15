chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const clientHeight = document.documentElement.clientHeight;
    const textTop = Math.floor((clientHeight * 0.8) * Math.random());

    let p = document.createElement("p");
    p.innerHTML= request;
    p.classList.add("text");
    p.style.position = "fixed";
    p.style.top = `${ textTop }px`;
    p.style.zIndex = "9999999";

    document.body.appendChild(p);

    const textWidth = p.clientWidth;
    const clientWidth = document.documentElement.clientWidth;
    p.style.right = `-${ textWidth }px`;

    // 文字を動かすアニメーションの実行
    // 実行完了したら、作成した要素は削除    
    anime({
      targets: p,
      translateX: -(clientWidth+textWidth),
      duration: 5000,
      easing: "linear",
      complete: function(anim) {
        p.parentElement.removeChild(p);
      }
    });

    sendResponse();
  }
);
