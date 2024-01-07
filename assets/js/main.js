//to get this ip address (152.58.214.27) from this url: https://ipv4.icanhazip.com/

let ipAddressEl = document.getElementById("ip");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(xhr.responseText);
    ipAddressEl.textContent = xhr.responseText;
  }
};

xhr.open(
  "GET",
  "https://cors-anywhere.herokuapp.com/https://ipv4.icanhazip.com/"
);
xhr.send();
