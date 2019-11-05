"use strict";

var searchOpen = document.querySelector(".search__open-btn");
var searchForm = document.querySelector(".search-form");
var checkIn = searchForm.querySelector("[name=check-in]");

if (searchOpen) {
  if (searchForm) {
    searchForm.classList.add("search-form--hide");
  }

  searchOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form--hide");
    searchForm.classList.toggle("search-form--show");
    checkIn.focus();
  });
}
