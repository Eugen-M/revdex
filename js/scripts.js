$( document ).ready(function() {
    $('.company-info__overall-link').click(function(){
		$('.company-info__rate').toggle('slow')
        $(this).toggleClass('company-info__overall-link_active');
	});

});
