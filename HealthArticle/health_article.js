var xhr = new XMLHttpRequest();
var url = "./health_article.json";
xhr.open("GET", url, true); // GET specifiy the http method for request , ture => indicate the request is asynchronous and it by default ture
xhr.responseType = "json"; // when the response arrive automatic covert it from json string to js object and save it in response

xhr.onload = function () {
  // when data successully loaded
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById("articles");

  articles.forEach((article) => {
    var articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    var title = document.createElement("h2");
    title.textContent = article.title;

    var description = document.createElement("p");
    description.textContent = article.description;

    var waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve: ";

    var waysList = document.createElement("ul");

    article.ways_to_achieve.forEach((way) => {
      var listItem = document.createElement("li");
      listItem.textContent = way;

      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";

    var benefitsList = document.createElement("ul");
    article.benefits.forEach((benifit) => {
      var listItem = document.createElement("li");
      listItem.textContent = benifit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
};

xhr.send();
