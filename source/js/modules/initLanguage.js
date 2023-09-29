const btnLang = document.querySelector(".btn--language");
const btnText = btnLang.querySelector('span');

const initLanguage = () => {
  btnLang.addEventListener('click', (e) => {
    e.preventDefault();


    if (btnText.textContent === "EN") {
      btnText.textContent = "RU";
    } else {
      btnText.textContent = "EN";

    }
  })
}

window.initLanguage = initLanguage;
export {initLanguage}
