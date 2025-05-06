select = window[select_symbol];
if (select) {
    let option = document.createElement("option");
    let text = document.createTextNode("Hello");
    option.appendChild(text);
    select.appendChild(option);
  } else {
    console.log("The select element was not found.");
  }