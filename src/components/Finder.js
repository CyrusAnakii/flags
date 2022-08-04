import flagArray from "../MasterList";

function Finder() {
  let result = flagArray.map((a) => a.image);
  result.forEach((image) => {
    var img = document.createElement("img");
    img.src = image;
    document.body.appendChild(img);
  });
}

export default Finder;
