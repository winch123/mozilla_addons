
//document.body.style.border = "5px solid blue";

$.get(chrome.extension.getURL('content_scripts/avito_panel1.html'), function(res){
  $('body').append(res);
});

var mpUrl = "https://rem-mastera.ru/ajax?MarkPage";

function AvitoScan(){
  var ll = [];
  //var selector = ".b-tile__item-slot";
  //var selector = ".sc-1pkcrix-16";
  var selector = ".sc-1pkcrix-16";
  $(selector).each(function(){
    var link = $(this).find("a").attr("href");
    //console.log(link);
    //$(this).css({border:"solid blue"}).append("<div>"+link+"</div>");
    ll.push(link);
  });
  //console.log(ll);

  $.ajax({ url: mpUrl,
    type: 'post',
    data: {AvitoList: JSON.stringify(ll) },
    success: function(res){
      for (var key in res){
	console.log(res[key].source);
	//console.log(res[key].t_add);
	$("a[href^='"+res[key].source+"']").before("<div class='WinchComment'>"+res[key].t_add+"</div>").parent().css({border:"solid red 2px"});
      }
    },
  });
}

//console.log(window.location.href);
//console.log(document.title);
RequestURL(window.location.href, document.title);

function RequestURL(url, title){

  $.ajax(mpUrl, {
    type: 'post',
    data: {url:url, title:title },
    success: function(res){
      console.log('RequestURL', res);
      for (p in res)
	$('#aa_'+p).html(res[p]);
    }
  });

}
