$("blockquote").each(function(index) {
  var quote_text = $(this).find("p").html();
  var url = "https://twitter.com/intent/tweet?text=" + quote_text + "&url=" + window.location.href + "&via=steve_coppin";
  var link = '<a href="' + encodeURI(url) + '">Tweet this <i class="fa fa-twitter-square" aria-hidden="true"></i></a>';
  $(this).append(link)
});
