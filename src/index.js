const element = document.getElementById('content');
fetch('/api/greeting')
  .then(response => {
    return response.json();
  })
  .then(json => {
    element.innerHTML = "Server IP <b>" + json.serverIp + "</b>, client ip <b>" 
      + json.clientIp + "</b>" + " - " + json.content;
  })

