const run = new Run({
    network: 'test',
    owner: 'cUEhBajVDrSV13KVCbzhKyCUCGWFyKF6eoReNKtbyxeFf7kWa8zD',
    purse: 'cNCjpiJus94eSsYEjgbwgotnGecxxLUACzNXAtSrYnHtN1YQzG1t'
  })
run.trust('*')

//Query String
function getUrlVars() {
  var vars = {}
  var str = window.location.href
  var ha = str.includes("#")
  if(ha){
    var haIndex = str.indexOf("#")
    str = str.slice(0,haIndex)
  }
  var res = str.replace("%26", "&")
  var res = res.replace("%3D","=")
  var parts = res.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value
  })
  return vars
}

//Copy to Clipboard
function copyTextToClipboard(text) {
  const hiddenInput = document.body.appendChild(document.createElement('input'))
  hiddenInput.value = text
  hiddenInput.select()
  hiddenInput.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand('copy')
  document.body.removeChild(hiddenInput)
}

