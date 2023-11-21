// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log("hereee")
//   console.log(chrome.cookies)
//   if (request.action === "injectCookies") {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       injectTheCookies(request.cookies)
//     });
//   }
// });

// async function injectTheCookies(cookies) {
//   // const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   // chrome.tabs.sendMessage(tab.id, { action: 'injectCookies', cookies: cookies });
//   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   console.log(tab.id)
//   cookies.forEach(function (cookie) {
//       console.log(cookie)
//       chrome.cookies.set({
//       url: tab.id.url,
//       name: cookie.name,
//       value: cookie.value,
//       domain: cookie.domain,
//       path: cookie.path,
//       secure: cookie.secure,
//       httpOnly: cookie.httpOnly,
//       expirationDate: cookie.expirationDate
//       });
//   })
// }
