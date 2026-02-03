const englishInput = document.getElementById("englishInput");
const idomaOutput = document.getElementById("idomaOutput");
const phrases = document.querySelectorAll(".phrase");
const enBtn = document.getElementById("enBtn");
const idBtn = document.getElementById("idBtn");

let direction = "EN_TO_ID";

// Dictionary
const dictionary = {
  "how are you doing": "abole",
  "thank you": "ainya",
  "good morning": "ngba ochi",
  "sorry": "ngba"
};

// Reverse dictionary (auto-generated)
const reverseDictionary = {};
for (let key in dictionary) {
  reverseDictionary[dictionary[key]] = key;
}

// Translation function
function translate(text) {
  if (direction === "EN_TO_ID") {
    return dictionary[text] || "⚠ Translation not available yet";
  } else {
    return reverseDictionary[text] || "⚠ Translation not available yet";
  }
}

// Live translation
englishInput.addEventListener("input", () => {
  const text = englishInput.value.toLowerCase().trim();
  idomaOutput.value = translate(text);
});

// Switch to English → Idoma
enBtn.addEventListener("click", () => {
  direction = "EN_TO_ID";
  enBtn.classList.add("active");
  idBtn.classList.remove("active");

  englishInput.placeholder = "Type in English...";
  idomaOutput.placeholder = "Idoma will appear here...";
  englishInput.value = "";
  idomaOutput.value = "";
});

// Switch to Idoma → English
idBtn.addEventListener("click", () => {
  direction = "ID_TO_EN";
  idBtn.classList.add("active");
  enBtn.classList.remove("active");

  englishInput.placeholder = "Type in Idoma...";
  idomaOutput.placeholder = "English will appear here...";
  englishInput.value = "";
  idomaOutput.value = "";
});

// Click common phrases
phrases.forEach(item => {
  item.addEventListener("click", () => {
    const en = item.dataset.en;

    if (direction === "EN_TO_ID") {
      englishInput.value = en;
      idomaOutput.value = dictionary[en];
    }
  });
});