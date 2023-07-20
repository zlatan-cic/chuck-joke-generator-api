const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("btn-joke");

const generateJoke = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function() {
    if(this.readyState === 4) {
      if(this.status === 200){
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerText = "Something Went Wrong .·´¯`(>▂<)´¯`·.  "
      }
    }
  }

  xhr.send()

};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
