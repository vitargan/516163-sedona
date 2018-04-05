   var link = document.querySelector(".travel-date-btn");
   var popup = document.querySelector(".popup");
   var form = popup.querySelector("form");
   var arrival = popup.querySelector("[name=arrival-date]");
   var departure = popup.querySelector("[name=departure-date]");
   var adults = popup.querySelector("[name=adults]");
   var children = popup.querySelector("[name=children]");
        popup.classList.remove("popup-show");
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("popup-show");
        popup.classList.remove("popup-error");


        });
        form.addEventListener("submit", function (evt) {
          evt.preventDefault();
            if (!arrival.value || !departure.value || !adults.value || !children.value);
             popup.classList.add("popup-error");
            
             });
