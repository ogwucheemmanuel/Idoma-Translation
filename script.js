const englishInput = document.getElementById("englishInput");
const idomaOutput = document.getElementById("idomaOutput");
const phrases = document.querySelectorAll(".phrase");

const dictionary = {
  "how are you doing": "abole",
  "thank you": "ainya",
  "good morning": "ngba ochi",
  "sorry": "ngba"
};

// Live translation
englishInput.addEventListener("input", () => {
  const text = englishInput.value.toLowerCase().trim();
  idomaOutput.value = dictionary[text] || "⚠ Translation not available yet";
});

// Click phrase to translate
phrases.forEach(item => {
  item.addEventListener("click", () => {
    const en = item.dataset.en;
    englishInput.value = en;
    idomaOutput.value = dictionary[en];
  });
});