document.addEventListener("DOMContentLoaded", () => {
  const URL = "https://api.spotify.com/v1/browse/featured-playlists";
  const ACCESSTOKEN = sessionStorage.getItem("token");
  console.log("ACCESSTOKEN", ACCESSTOKEN);

  fetch(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: ACCESSTOKEN
    }
  })
    .then(respons => respons.json())
    .then(resultat => {
      console.log("resultat", resultat);

      if (resultat.error) {
        createToken();
      } else {
        resultat.playlists.items.forEach(element => {
          /*  Template Variabler */
          // const container = document.getElementsByClassName("placeholder-wrapper");
          const container = document.getElementById("test");
          const template = document.getElementById("temp-placeholder");
          const clone = template.content.cloneNode(true);
          console.log("container", container);
          console.log("template", template);

          /* Erstatter data */
          clone.querySelector(".cover-placeholder").src = element.images[0].url;
          /* Tilføjer clone */
          container.appendChild(clone);
        });
      }
    });
});
