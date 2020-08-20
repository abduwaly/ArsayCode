// adding this to highlight inline code block
// adding normal text for testing
$(document).ready(function() {
    $('p code').each(function(i, inline) {
        hljs.highlightBlock(inline);
    });
  });

