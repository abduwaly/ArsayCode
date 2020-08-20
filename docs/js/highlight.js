// adding this to highlight inline code block
// adding normal text for testing
// ما بىر تست خالاس
$(document).ready(function() {
    $('p code').each(function(i, inline) {
        hljs.highlightBlock(inline);
    });
  });

