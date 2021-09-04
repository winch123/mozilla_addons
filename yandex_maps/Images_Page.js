$(document).ready(function(){
	// Разблокировка картинок
	let timeId1 = setTimeout(function bottomElemViewerFunc(){
		if($('._9AhH0').length == 0){
			timerId1 = setTimeout(bottomElemViewerFunc, 0);
		}else{
			$('._9AhH0').remove();
		}
	}, 0);

	new MutationObserver(function(mutationObject){
		// Видео-теги
		$('video').attr('controls', 'controls').css('z-index', '1');
	}).observe(document.body, {childList:true, subtree:true});
});
