  document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const cookies = JSON.parse(e.target.result);
        injectCookies(cookies);
      };
      reader.readAsText(file);
    }
  });
  
  async function injectCookies(cookies) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(chrome.cookies);
    cookies.forEach(function (cookie) {
        console.log(cookie)
        chrome.cookies.set({
          url: cookie["Host raw"],
          name: cookie["Name raw"],
          value: cookie["Content raw"],
          domain: "auth.hyperwriteai.com",
          path: cookie["Path raw"],
          secure:  cookie["Host raw"].startsWith("https"),
          httpOnly: cookie["HTTP only raw"]==="true",
          expirationDate: Number(cookie["Expires raw"])
        });
    })
  }
  