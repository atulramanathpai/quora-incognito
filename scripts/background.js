chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if( tab.url.indexOf('https://www.quora.com') == 0 )
    chrome.pageAction.show(tabId);
} );
