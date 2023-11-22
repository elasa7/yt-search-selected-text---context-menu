chrome.contextMenus.create({
  id: "searchOnYouTube",
  title: "Search on YouTube",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "searchOnYouTube") {
    searchOnYouTube(info, tab);
  }
});

function searchOnYouTube(info, tab) {
  const selectedText = encodeURIComponent(info.selectionText);
  const searchUrl = `https://www.youtube.com/results?search_query=${selectedText}`;
  chrome.tabs.create({ url: searchUrl });
}
