$(document).ready(function() {
    setup_clicktip_floater();
});

function setup_clicktip_floater() {
    $('#floater-close img,.tooltip-loader').unbind('click');
    $('#floater-close img').click(
            function(){
                    if($('#floater').is(':visible')) {
                            $('#floater').fadeOut();
                            return false;
                    } else {
                            $('#floater').fadeIn();
                    }
            }
    );
    $('.tooltip-loader').click(
            function(e) {
                    theName=$(this).attr('id');
                   mylocation=$(this).attr('href');
                    e.preventDefault();
                    if(theName=='terms-txt') {
                        //e.preventDefault();
                         //pg='/wp-content/themes/pie_247/terms-signup.php';
                            pg = mylocation;
                            wh='t';
                            x='#terms-txt';
                    }
                    if(theName=='activate-terms-txt') {
                            pg='/wp-content/themes/pie_247/terms-signup.php';
                            wh='t';
                            x='#activate-terms-txt';
                    }
                    if(theName=='rescission-txt') {
                            pg='/wp-content/themes/pie_247/rescission.php';
                            wh='r';
                            x='#rescission-txt';
                    }
                    /*if(theName=='disclaimer') {
                            pg='/templates/guest/en/disclaimer-signup.html';
                            wh='d';
                            x='#disclaimer-txt';
                    }*/
                    if(pg) {
                            $.ajax({
                                    url: pg,
                                    success: function(data) {
                                                    $('#tos-text-flow').html(data);
                                            }
                                    });
                    }
                    offset = $(x).offset();
                    pos = $(x).position();
                    
                    $('#floater').css('top',offset.top-200);
                    $('#floater').css('left',pos.left - 100);
                    
                    if(!$('body > #floater').length) {
                        $('#floater').appendTo('body');
                    }

                    if($('#floater').is(':visible')) {
                            $('#floater').fadeOut();
                            return false;
                    } else {
                            $('#floater').fadeIn();
                    }
            }
    );
}

function printDiv(divName) {
	var printContents = document.getElementById(divName).innerHTML;
	var originalContents = document.body.innerHTML;
	document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = originalContents;
	window.close();
	setup_clicktip_floater();
}