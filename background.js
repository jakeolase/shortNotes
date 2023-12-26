let color = "#f4f4f4";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log(`Default background color set to ${color}`);
})