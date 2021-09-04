$(document).ready(function(){
	$('#testexp-button').on('click', function(){
		$(this).css('background-color', '#0000aa');
		$('#testexp-span').html(browser.runtime.getManifest().description + '<br/>Url of this page: ' + toString(browser.tabs.query({active: true})))
		console.log(browser.tabs.query({active: true}).url)
	})
})