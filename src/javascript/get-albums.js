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
          /* variabel der indeholder den section hvor jeg vil have mit template vist */
          const container = document.getElementById("test-two");
          /*  Template Variabel */
          const template = document.getElementById("albums-placeholder");
          const clone = template.content.cloneNode(true);
          console.log("container", container);
          console.log("template", template);

          /* Erstatter data på min placeholder */
          clone.getElementById("album-test").src = element.images[0].url;
          /* Tilføjer clone */
          container.appendChild(clone);
        });

        var elem = document.querySelector(".main-carousel");

        new Flickity(elem, {
          // options
          cellAlign: "center",
          wrapAround: true,
          preventNextButtons: false,
          pageDots: false
        });

        /* placeholder bottoms*/
        resultat.playlists.items.forEach(element => {
          /* variabel der indeholder den section hvor jeg vil have mit template vist */
          const container = document.getElementById("test-three");
          /*  Template Variabel */
          const template = document.getElementById(
            "bottoms-albums-placeholder"
          );

          const clone = template.content.cloneNode(true);
          console.log("container", container);
          console.log("template", template);

          /* Erstatter data på min placeholder */
          clone.getElementById("bottom-album-test").src = element.images[0].url;
          clone.getElementById("songs-name").innerText = element.name;
          clone.getElementById("artist-name").innerText = element.type;
          clone.getElementById("number-of-songs").innerText =
            element.tracks.total;
          /* Tilføjer clone */
          container.appendChild(clone);
        });
      }
    });
});
