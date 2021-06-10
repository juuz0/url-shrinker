window.onload = () => {

 function Clipboard_CopyTo(param) {
    var tempInput = document.createElement("input");
    tempInput.value = param;
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    document.execCommand("copy");
    Copy.value = "Copied :D"
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#Copy').onclick = function() {
    Clipboard_CopyTo(link.href);
  }

}