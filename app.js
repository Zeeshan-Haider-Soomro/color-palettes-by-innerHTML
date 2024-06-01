function colorPalettes() {
  let mainBox = document.querySelector("#mainBox");
  let randomColors = [
    "#FF5733", // Orange-Red
    "#33FF57", // Lime Green
    "#3357FF", // Blue
    "#FF33A1", // Pink
    "#A133FF", // Purple
    "#33FFF5", // Cyan
    "#F5FF33", // Yellow
    "#FF8C33", // Orange
    "#8C33FF", // Violet
    "#33FF8C", // Light Green
    "#FF3333", // Red
    "#33FF33", // Green
    "#3333FF", // Dark Blue
    "#AFA533", // Amber
    "#33FFA5", // Aquamarine
    "#FF33F5", // Magenta
    "#33A5FF", // Sky Blue
    "#A5FF33", // Chartreuse
    "#FF3357", // Deep Pink
    "#5733FF", // Indigo
    "#FFB833", // Goldenrod
    "#33FFB8", // Mint
    "#FF33B8", // Hot Pink
    "#B833FF", // Medium Purple
    "#33B8FF", // Dodger Blue
    "#B8FF33", // Lime
    "#FF33FF", // Fuchsia
    "#33FFF0", // Electric Blue
  ];
  for (let i = 0; i < 28; i++) {
    mainBox.innerHTML += `<div style = "width : 172px; height : 172px; background-color :${randomColors[i]}; border: 2px solid white";> <h3 style = "display:flex;justify-content:center;align-items:center;height:100%" onclick="copied('${randomColors[i]}')"> ${randomColors[i]} </p></div>`

  }
}
colorPalettes()

function copied(zeeshan){
    navigator.clipboard.writeText(zeeshan)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Copied",
      showConfirmButton: false,
      timer: 1500
    });

}
