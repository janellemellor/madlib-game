
function fillInBlank() {

    const nounInputOne = document.getElementById('noun input one');
    const nounOutputOne = nounInputOne.value;
    nounOne.textcontent = nounOutputOne;

    const nounInputTwo = document.getElementById('noun input two');
    const nounOutputTwo = nounInputTwo.value;
    nounTwo.textContent = nounOutputTwo;

    const verbInputOne = document.getElementById('verb input one');
    const verbOutputOne = verbInputOne.value;
    verbOne.textContent = verbOutputOne;

    const nounInputThree = document.getElementById('noun input three');
    const nounOutputThree = nounInputThree.value
    nounThree.textContent = nounOutputThree;

    const verbInputTwo = document.getElementById('verb input two');
    const verbOutputTwo = verbInputTwo.value;
    verbTwo.textContent = verbOutputTwo;

    const nounInputFour = document.getElementById('noun input four');
    const nounOutputFour = nounInputFour.value;
    nounFour.textContent = nounOutputFour;

    const nounInputFive = document.getElementById('noun input five');
    const nounOutputFive = nounInputFive.value;
    nounFive.textContent = nounOutputFive;

    const nounInputSix = document.getElementById('noun input six');
    const nounOutputSix = nounInputSix.value;
    nounSix.textContent = nounOutputSix;

    const hidden = document.getElementById("hidden");
    if (hidden.style.display === "none") {
      hidden.style.display = "block";
    } else {
      hidden.style.display = "none";
    }
}

button.addEventListener('click', fillInBlank);

