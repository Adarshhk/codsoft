

function unhidePara(obj) {
    let x = obj.nextElementSibling;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }