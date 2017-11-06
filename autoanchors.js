(function($) {

	$.fn.autoAnchors = function(settings) {
    var defaults = {
      anchor: 'h2',
      title: '',
      numbering: true,
      numbering_anchor: true,
      target: '',
      offset: 0
    };

    var s    = $.extend(defaults, settings);
    var mcnt = 0;

    this.each(function() {
      mcnt++;

      var links = '<div class="autoanchors">';

      if (s.title) {
        links += s.title;
      }

      links += '<div class="list-group">';

      var cnt = 0;
      if ($(this).find(s.anchor).length > s.offset) {
        $(this).find(s.anchor).each(function() {
          cnt++;

          var id            = $(this).attr('id')
          var title         = $(this).text();
          var filteredtitle = title.replace(/[^a-zA-Z0-9\s]+/g,'').replace(/\s/g,'_');

          if (s.numbering) {
            title = '<span class="numbering">'+cnt+'</span>'+title;
            if(s.numbering_anchor) {
              $(this).html('<span class="numbering">'+cnt+'</span>'+$(this).html());
            }
          }

          links += '<div><a class="list-group-item angle-right" href="#'+id+'">'+title+'</a></div>';
        });
      }

      links += '</div></div>';

      if (cnt > 0){
        $(s.target).prepend(links);
      }
    });
    return this;
  };
})($);
