import React from "react";
import "./Page.css";

export default function Page({
  photos,
  year,
  setYear,
  isFetching,
  isFetchingError
}) {
  return (
    <div>
      <div className="Page__btn-container">
        <button
          disabled={isFetching}
          className="Page__btn-set-year"
          onClick={event => setYear(+event.target.innerHTML)}
        >
          2014
        </button>
        <button
          disabled={isFetching}
          className="Page__btn-set-year"
          onClick={event => setYear(+event.target.innerHTML)}
        >
          2015
        </button>
        <button
          disabled={isFetching}
          className="Page__btn-set-year"
          onClick={event => setYear(+event.target.innerHTML)}
        >
          2016
        </button>
        <button
          disabled={isFetching}
          className="Page__btn-set-year"
          onClick={event => setYear(+event.target.innerHTML)}
        >
          2017
        </button>
        <button
          disabled={isFetching}
          className="Page__btn-set-year"
          onClick={event => setYear(+event.target.innerHTML)}
        >
          2018
        </button>
      </div>
      {isFetching ? (
        <p> Загрузка фотографий</p>
      ) : isFetchingError ? (
        <p>Ошибка загрузки</p>
      ) : (
        <p>
          {" "}
          У Тебя {photos.length ? photos.length : 0} фотографий за {year} год
        </p>
      )}
    </div>
  );
}
