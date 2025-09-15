function playEpisode() {
  const scenes = [
    { id: "scene-cherry", delay: 0 },      // Peaceful fishing
    { id: "scene-night", delay: 4000 },    // Nightfall
    { id: "scene-tragedy", delay: 8000 },  // Family tragedy
    { id: "scene-battle", delay: 12000 },  // Obanai arrives
    { id: "scene-journey", delay: 16000 }  // Villan carries Varsha
  ];

  const villan = document.getElementById("villan");
  const varsha = document.getElementById("varsha");
  const obanai = document.getElementById("obanai");

  scenes.forEach((scene, index) => {
    setTimeout(() => {
      document.querySelectorAll(".scene").forEach(s => s.classList.add("hidden"));
      document.getElementById(scene.id).classList.remove("hidden");

      // Character actions
      if (index === 0) { // peaceful
        villan.style.opacity = "1";
      }
      if (index === 2) { // tragedy, Varsha demon
        varsha.classList.remove("hidden");
      }
      if (index === 3) { // Obanai battle
        obanai.classList.remove("hidden");
      }
      if (index === 4) { // journey
        obanai.style.opacity = "0";
        villan.style.transform = "translateX(50px)";
        varsha.style.transform = "translateX(-50px)";
      }

    }, scene.delay);
  });
}

window.onload = playEpisode;
