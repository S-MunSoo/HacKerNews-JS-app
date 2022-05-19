import "./scss/main.scss";

console.log("하하");
// api ajax
let newsURL = "https://api.hnpwa.com/v0/news/1.json";
let ajax = new XMLHttpRequest();
ajax.open("GET", newsURL, false);
ajax.send();
const newsFeed = JSON.parse(ajax.response);
console.log(newsFeed);

// newsfeed 데이터 가져오기
const ul = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  let li = document.createElement("li");
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}
document.getElementById("root").appendChild(ul);
