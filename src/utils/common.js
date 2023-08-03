export function getQueryString(name) {
    console.log("process.env.",process.env);
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

// export const fpPromise = new Promise((resolve, reject) => {
//     const script = document.createElement('script')
//     script.onload = resolve
//     script.onerror = reject
//     script.async = true
//     script.src = 'https://cdn.jsdelivr.net/npm/'
//       + '@fingerprintjs/fingerprintjs@3/dist/fp.min.js'
//     document.head.appendChild(script)
//   }).then(() => FingerprintJS.load())
 
  