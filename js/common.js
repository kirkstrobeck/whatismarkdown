// Generated by CoffeeScript 1.6.2
(function() {
  $(document).ready(function() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    var text = marked($('.markdown').text());
    console.log(text);
    $('.markdown').html(text);
    
    return $('.markdown-container').fadeIn({
      start: function() {
        return $("h1").fitText();
      }
    });
  });

}).call(this);
