// Play Welcome Audio Automatically on First Click
window.addEventListener("load", function () {
    let audio = document.getElementById("welcomeAudio");

    document.body.addEventListener("click", function () {
        if (audio) {
            audio.play();
        }
    }, { once: true }); // Ensures it plays only once
});
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmiResult = document.getElementById("bmiResult");
    let bmiCategory = document.getElementById("bmiCategory");
    let bmiImage = document.getElementById("bmiImage");
    let welcomeAudio = document.getElementById("welcomeAudio"); // Get the welcome audio element

    if (weight === "" || height === "" || height == 0) {
        alert("Please enter a valid weight and height!");
        return;
    }

    // Stop and reset welcome audio
    if (welcomeAudio) {
        welcomeAudio.pause(); // Pause the audio
        welcomeAudio.currentTime = 0; // Reset to start
    }

    height = height / 100; // Convert cm to meters
    let bmi = (weight / (height * height)).toFixed(2);

    let category, imageSrc, audioElement;

    if (bmi < 18.5) {
        category = "Underweight";
        imageSrc = "images/underweight.jpeg";
        audioElement = document.getElementById("underweightAudio");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
        imageSrc = "images/normal.webp";
        audioElement = document.getElementById("normalAudio");
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        imageSrc = "images/excess.png";
        audioElement = document.getElementById("overweightAudio");
    } else {
        category = "Obese";
        imageSrc = "images/obese.avif";
        audioElement = document.getElementById("obeseAudio");
    }

    // Display result
    bmiResult.innerText = bmi;
    bmiCategory.innerText = category;

    // Display Image
    bmiImage.src = imageSrc;
    bmiImage.style.display = "block"; // Make image visible
    bmiImage.classList.add("fade-in");

    if (audioElement) {
        audioElement.play();
    }

    let speech = new SpeechSynthesisUtterance(`Your BMI is ${bmi}. You are categorized as ${category}.`);
    speechSynthesis.speak(speech);
}
