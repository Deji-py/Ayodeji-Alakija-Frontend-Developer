import React, { useEffect, useState } from "react";

function topHeadLines() {
  const [articles, setArticles] = useState([]);
  const apiKey = "f412a9fb823e443ab293446c59ca18a4";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const qInTitle = "education";
  const from = "2023";
  const url = `${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
  const request = new Request(url);

  fetch(request)
    .then((response) => response.json())
    .then((news) => {
      setArticles(news);
    })
    .catch((error) => {
      console.log(error);
    });
  return { articles };
}

export default topHeadLines;
