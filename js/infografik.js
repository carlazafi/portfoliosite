document.querySelector("#Work").addEventListener("click", infoWork);
document.querySelector("#Hobby").addEventListener("click", infoHobby);
document.querySelector("#Funfact").addEventListener("click", infoFunfact);
document.addEventListener("click", (e) => {
  if (!e.target.closest("#Work, #Hobby, #Funfact, .info-text")) {
    clearInfo();
  }
});

function infoWork() {
  console.log("infoWork");
  document.querySelector(".info-text > h2").textContent = "Arbejde";
  document.querySelector(".placeholder").innerHTML = "<p>De seneste år har jeg beskæftiget mig med værtsskab i mange afarter. <br> Min baggrund rummer alt fra lærergerningen til lederskab, dyk ned i mit CV herunder</p>";
}

function infoHobby() {
  console.log("infoHobby");
  document.querySelector(".info-text > h2").textContent = "Hobby";
  document.querySelector(".placeholder").innerHTML =
    "<p>Jeg driver podcasten Queer Me Up som vært og skaber. <br> <a href='https://linktr.ee/queer.me.up?utm_source=linktree_profile_share&ltsid=7a1220ae-16e7-4cde-9fc3-82fefd6a8c2d' target='_blank' rel='noopener'>Lyt her</a></p>";
}

function infoFunfact() {
  console.log("infoFunfact");
  document.querySelector(".info-text > h2").textContent = "Fun fact";
  document.querySelector(".placeholder").innerHTML = "Jeg er hjertebarn og har et anatomisk hjerte tatoveret på venstre arm -tæt på hjertet";
}

function clearInfo() {
  document.querySelector(".info-text > h2").textContent = "";
  document.querySelector(".placeholder").innerHTML = "";
}
