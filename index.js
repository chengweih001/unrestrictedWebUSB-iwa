
let device;
let config = 0;
let usbInterface = 0;

document.addEventListener('DOMContentLoaded', init);

function init() {
  var button = document.getElementById('myButton');
  button.addEventListener('click', onClick);
}

async function onClick() {
  clearLog();

  config = parseInt(document.querySelector("#config").value);
  usbInterface = parseInt(document.querySelector("#interface").value);

  if(!isValid(config) || !isValid(usbInterface)){
    log("Incorrect format for either configuration or interface, please input only digits.");
    return;
  }

  log("Requesting Device");
  navigator.usb.requestDevice({ filters: [{}] })
  .then( selectedDevice =>  {
    device = selectedDevice;
    log("Device name: " + device.productName);
    return device.open();
  })
  .then(() => {
    log("Device open result: OK");
    return device.selectConfiguration(config);
  })
  .then(() => {
    log(`Device selectConfiguration = ${config} result: OK`);
    return device.claimInterface(usbInterface);
  })
  .then(() => {
    log(`Device claimInterface = ${usbInterface} result: OK`);
  }).catch(error => log(error));
}


function log(line){
  document.querySelector("#log").textContent += line + "\n";
}

function clearLog(line){
  document.querySelector("#log").textContent = "";
}

function isValid(x){
  return typeof x === "number" && !isNaN(x) && x >= 0;
}
