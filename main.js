import "./scss/main.scss";

console.log("하하");
// api ajax
let ajax = new XMLHttpRequest();
let container = document.getElementById("root");
let content = document.createElement("div");
let NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
let CONTENT_URL = "https://api.hnpwa.com/v0/item";

function getData(url) {
  ajax.open("GET", NEWS_URL, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];

  newsList.push("<ul>");

  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    newsList.push(
      `<li><a href="#${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a></li>`
    );
  }

  newsList.push("</ul>");
  container.innerHTML = newsList.join("");
}

// newsfeed 데이터 가져오기

function newsDetail() {
  // substr(시작값, 종료값) 쓰고싶은 위치값을 지정해서 찾아낸다.
  const id = location.hash.substr(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `<h1>${newsContent.title}</h1>
  
  <div>
    <a href="#">목록으로</a>
  </div>`;
}
function router() {
  const routePath = location.hash;
  if (routePath === "") {
    newsFeed();
  } else {
    newsDetail();
  }
}
window.addEventListener("hashchange", router);
router();
