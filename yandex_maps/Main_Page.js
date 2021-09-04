$(document).ready(function(){
	/*
	$('head').prepend(`<style>
#testexp-button{
	width:80px;
	height:80px;
	position:fixed;
	z-index:99999999;
	top:0px;
	right:0px;
	background-color:#000000;
	color:#ffffff
}
</style>`);
*/
	$('body').append(`<div id=testexp-button>sss</div>`);
  
	console.log(browser.runtime.getManifest())
	
	console.log(browser.tabs.query({active:true}))
});

/*
browser.runtime.onMessage(function(mes){
  console.info('runtime.onMessage', mes);  
});
*/

browser.runtime.onMessage.addListener(r => {
  console.log("Message from background script:", r);
  $.ajax(r.url, {
	type: 'POST',
	success: function(res) {
        console.log("server data:");
        //console.log(res.data.items);
        let i = 0;
        for (let item of res.data.items) {
            //console.log(item);
            $.ajax('https://hs.local/api/yandex_maps_firms_save', {
                type: 'POST',
                data: {
                    yandexData: {items: [item]},
                },
                success: function(ress) {
                    console.log(ress);
                },
            });
            i++;
        }
        console.log("было сделано " + i + " отправок");
	},
  });
  
  return Promise.resolve({response: "Hi from content script"});
});
