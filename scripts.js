const convertButton = document.querySelector(".convert-button");
const currencySelect = document.getElementById("currency-select");
const currencySelectToConvert = document.getElementById("currency-to-convert");

currencySelect.addEventListener("change", changeCurrency);
currencySelectToConvert.addEventListener("change", changeCurrencyConvert);

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(
    ".currency-coin-to-converted"
  );
  const currencyValueConverted = document.querySelector(".currency-coin");

  const dolarToday = 4.99;
  const euroToday = 5.36;
  const libraToday = 6.25;
  const btcToday = 211358;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / btcToday);
  }

  currencyValueToConvert.innerHTML = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".img-currency-converted");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/eua.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImg.src = "./assets/brasil.png";
  }

  convertValues();
}

function changeCurrencyConvert() {
  const currencyToConvertName = document.getElementById(
    "currency-to-convert-frist-coin"
  );
  const currencyToConvertImg = document.querySelector(
    ".img-currency-to-convert"
  );

  if (currencySelectToConvert.value == "dolar1") {
    currencyToConvertName.innerHTML = "Dólar americano";
    currencyToConvertImg.src = "./assets/eua.png";
  }

  if (currencySelectToConvert.value == "euro1") {
    currencyToConvertName.innerHTML = "Euro";
    currencyToConvertImg.src = "./assets/euro.png";
  }

  if (currencySelectToConvert.value == "libra1") {
    currencyToConvertName.innerHTML = "Libra";
    currencyToConvertImg.src = "./assets/libra.png";
  }

  if (currencySelectToConvert.value == "bitcoin1") {
    currencyToConvertName.innerHTML = "Bitcoin";
    currencyToConvertImg.src = "./assets/bitcoin.png";
  }

  if (currencySelectToConvert.value == "real1") {
    currencyToConvertName.innerHTML = "Real";
    currencyToConvertImg.src = "./assets/brasil.png";
  }
}

convertButton.addEventListener("click", convertValues);
