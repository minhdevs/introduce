var container = document.querySelector("#main-container");
var spiner = document.querySelector("#spiner");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var link = document.querySelectorAll("#contacts a");
var follow = document.getElementById("follow");

// setTimeout(function () {
//   spiner.remove();
//   container.style.display = "block";
// }, 3000);

var isDark = false;

avatar.onclick = () => {
  if (!isDark) {
    follow.style.color = "#FFFFFF";
    container.style.background = "#1e1e1e";
    container.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
    username.style.color = "#FFFFFF";

    for (let i = 0; i < link.length; i++) {
      link[i].style.color = "#FFFFFF";
    }

    isDark = true;
  } else {
    follow.style.color = "#8f8e8e";
    container.style.background = "#FFFFFF";
    container.style.boxShadow = "0px 4px 0px 6px rgba(0, 0, 0, 0.1)";
    username.style.color = "#303030";

    for (let i = 0; i < link.length; i++) {
      link[i].style.color = "#303030";
    }

    isDark = false;
  }
};
