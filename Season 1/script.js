const scenes = [
    {
        dialogue: "Varsha looks at you with glowing red eyes. Despite being a demon, there's something familiar in her gaze.",
        choices: ["Talk to her gently", "Attack immediately"]
    },
    {
        dialogue: "You approach cautiously. Varsha seems to recognize you, but her demon instincts are strong.",
        choices: ["Try to reason", "Stay ready to fight"]
    },
    {
        dialogue: "Varsha smiles faintly, as if she remembers a bond from the past. You feel conflicted.",
        choices: ["Reach out", "Step back"]
    },
    {
        dialogue: "The original Demon Slayer Corps members are observing from afar. Tanjiro, Nezuko, Zenitsu, and Inosuke are ready to intervene if necessary.",
        choices: ["Join forces with them", "Go alone"]
    }
];

let currentScene = 0;

function nextScene(choiceIndex) {
    if (currentScene < scenes.length - 1) {
        currentScene++;
        updateScene();
    } else {
        document.getElementById("scene").innerHTML = "<p>The story has reached its first chapter end. More adventures await!</p>";
        document.getElementById("choices").style.display = "none";
    }
}

function updateScene() {
    const scene = scenes[currentScene];
    document.getElementById("dialogue").textContent = scene.dialogue;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    scene.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => nextScene(index);
        choicesDiv.appendChild(button);
    });
}

// Initialize first scene
updateScene();
