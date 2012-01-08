$(document).ready(function() {
    $('#boastful').boastful();
});


function findEntries(q) {
    var matches = [];
    var rq = new RegExp(q, 'im');
    for (var i = 0; i < entries.length; i++) {
	var entry = entries[i];
	var title = $(entry.getElementsByTagName('title')[0]).text();
	var link = $(entry.getElementsByTagName('link')[0]).attr('href');
	var content = $(entry.getElementsByTagName('content')[0]).text();            
	if (rq.test(title) || rq.test(link) || rq.test(content)) {
            var updated = prettyDate(xmlDateToJavascriptDate($(entry.getElementsByTagName('updated')[0]).text()));
            matches.push({'title':title, 'link':link, 'date':updated});
	}
    }
    var html = '<h3 style="text-align:center; margin-bottom:40px;"><a href="#" onclick="window.location.hash=\'\'; return false;"><img style="height:8px; margin:3px 3px;" src="/images/closelabel.png" /></a> Search Results for "'+htmlEscape(q)+'"</h3><div id="results">';
    for (var i = 0; i < matches.length; i++) {
	var match = matches[i];
	html += '<div class="results_row"><div class="results_row_left"><a href="'+match.link+'">'+htmlEscape(match.title);
	html += '</a></div><div class="results_row_right">'+match.date+'</div><div style="clear:both;"></div></div>';
    }
    html += '</div>';
    $('#content').html(html);
}
            
$('#search_form').submit(function(e) {
	var query = $('#query').val();                    
	window.location.hash = 'search='+escape(query.replace(/\s/g, '+'));
	e.preventDefault();
    });
            
$(window).bind('hashchange', function(e) {                
	var query = $.param.fragment();
	if (/[#]*search=(.*)/.test(query)) {
	    query = $.param.fragment().replace('+', ' ').replace('search=', '');
	    $('#query').val(query);
	    if (query) {
		if (oldhtml == null) {
		    oldhtml = $('#content').html(); 
		}
		$('#content').html('<div id="loader"></div>');
		$('#query').blur().attr('disabled', true);
		if (entries == null) {
		    $.ajax({url:'/atom.xml?r='+(Math.random()*99999999999), dataType:'xml', success: function(data) {
				entries = data.getElementsByTagName('entry');
				findEntries(query);
			    } });
		} else {
		    findEntries(query);
		}
		$('#query').blur().attr('disabled', false);
	    }
	} else {
	    if (oldhtml == null) {
		oldhtml = $('#content').html(); 
	    }
	    $('#content').html(oldhtml);
	    $('#query').blur();
	    oldhtml = null;
	}
    });
            
$(window).trigger( 'hashchange' );
});