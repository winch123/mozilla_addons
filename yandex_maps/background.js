
browser.webRequest.onBeforeRequest.addListener(function(requestDetails) {
  	//console.log("Loading: ", requestDetails);
  }, {urls: ["<all_urls>"]}
);


browser.webRequest.onCompleted.addListener(function(responseDetails) {
  	//return;
  
  	if (responseDetails.url.indexOf('search') > -1) {
	  console.log("перехвачен запрос: ", responseDetails);
	  //console.log("response: ", responseDetails.url);
      
      /*
	  if (responseDetails.documentUrl.indexOf('moz-extension') === -1 ) {
		fetch(new Request(responseDetails.url) )
		  .then(response => {
			console.log(response);
		  }).catch(error => {
			console.error(error);
		  });
	  }
	  */
  
  	  if (responseDetails.tabId > -1) {
  	  		browser.tabs.sendMessage(responseDetails.tabId, {url: responseDetails.url})
			.then(response => {
      			console.log("Message from the content script:", response.response);
    		})
			.catch(error => {
			  	console.error(`Error: ${error}`);
			});
  	  }
	  
	}
  
  }, {urls: ["<all_urls>"]}
);
