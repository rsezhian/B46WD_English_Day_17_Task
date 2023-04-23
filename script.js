window.addEventListener("load", (event) => {
  console.log("your webpage is fully loaded");
  var myCountDText = document.getElementById("countdown-text");
  var myDiplayMsg = document.getElementById("disp-msg");
  myDiplayMsg.style.visibility = "hidden";

  myCountDText.innerHTML = "10";
  setTimeout(() => {
    myCountDText.innerHTML = "9";
    setTimeout(() => {
      myCountDText.innerHTML = "8";
      setTimeout(() => {
        myCountDText.innerHTML = "7";
        setTimeout(() => {
          myCountDText.innerHTML = "6";
          setTimeout(() => {
            myCountDText.innerHTML = "5";
            setTimeout(() => {
              myCountDText.innerHTML = "4";
              setTimeout(() => {
                myCountDText.innerHTML = "3";
                setTimeout(() => {
                  myCountDText.innerHTML = "2";
                  setTimeout(() => {
                    myCountDText.innerHTML = "1";
                    setTimeout(() => {
                      myCountDText.innerHTML = "0";
                      setTimeout(() => {
                        myCountDText.style.visibility = "hidden";
                        myDiplayMsg.style.visibility = "visible";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
