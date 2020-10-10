function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "Gajah";
  else if (comp >= 0.34 && comp < 0.67) return "Orang";
  return "Semut"; // else 'semut
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "Gajah") return comp == "Orang" ? "MENANG!" : "KALAH!";
  if (player == "Orang") return comp == "Gajah" ? "KALAH!" : "MENANG";
  if (player == "Semut") return comp == "Orang" ? "KALAH!" : "MENANG!";
}

// const pGajah = document.querySelector('.Gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["Gajah", "Semut", "Orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) return (i = 0);
  }, 100);
}

// Looping dengan forEach untuk menyingkat kode
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

