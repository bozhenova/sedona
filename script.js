"use strict";

(function() {
  var link = document.querySelector(".write-us.btn");
  var popup = document.querySelector(".modal-feedback");
  var overlay = document.getElementById("overlay");

  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var username = popup.querySelector("[name=username]");
  var email = popup.querySelector("[name=email]");
  var feedback = popup.querySelector("[name=feedback]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("active");
    if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("active");
  });

  form.addEventListener("submit", function(evt) {
    if (!username.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.code === "Escape") {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("active");
      }
    }
  });

  overlay.addEventListener("click", function(evt) {
    if (overlay.classList.contains("active")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("active");
    }
  });
})();
