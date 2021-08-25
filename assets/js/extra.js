$( ".blurry-text" )
    .mouseover(function() {
	$( this ).css({ 'color': 'Orange', 'text-shadow': '0 0 0 Orange' });
    })
    .mouseout(function() {
	$( this ).css({ 'color': 'Transparent', 'text-shadow': '0 0 5px Orange' });
    });