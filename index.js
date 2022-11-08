let response = JSON.parse(localStorage.getItem("unsplashData"));
let imgBody = document.getElementsByClassName("Pinterest_ImageBody");

function displayList() {

  let imgDiv = "";
  console.log(response);
  imgBody[0].innerHTML = "";

  for (var i = 0; i < response.length; i++) {
    imgBody[0].innerHTML += `
        <div class="imgDiv"><img src="${response[i].urls.small_s3}"/></div>
        `;
        console.log(response[i].height)
      }

  console.log(imgBody[0]);
}

displayList();

// <div class="imgDiv"><img src="${response[i].urls.small_s3}"/></div>
