/**
 * Created by dmarkovic on 28/03/14.
 */
//reg_accepted = false;
jQuery(document).ready(function($) {


/*
        $(function() {
            $('.carousel').each(function(){
                $(this).carousel({
                    interval: 100000000000000
                });
            });
        });​
*/
    $('.carousel').carousel({
        interval: 100000000000000
    });



    /*sign up page*/
    setup_registration_form();
    setup_check_email_field();
    setup_check_sponsor_key();

    //ie is undefined if other browsers are used
    //console.log('ie ' + ie);

    if(ie != undefined && ie >= 9 )
    {
        qString = typeof(getQueryStringParameters) === 'function' ? getQueryStringParameters() : false;
        if(qString && qString.lang.length > 0) {
            $('a[href$="/"]:not(a[href*="lang="]):not(.no_translate a)').each(function() {
                $(this).attr('href',$(this).attr('href')+'?lang='+qString.lang);
            });
        }
        delete window.qString;
    }

    $('.close_ie_alert').click(function() {
        $('#reg-confirm').hide();
        $('#alert_old_ie-bg').hide();
    });


    /* Hide all 3 text's by default */
    $('#text1').hide();
    $('#text2').hide();
    $('#text3').hide();

    /* A B O U T   P A G E */
    /* Hover over the steps 1,2,3 */
    jQuery( ".ab_step1" ).hover(
        function() {
            $('#myModal').modal('show');
            $('#ab-modal-body1').show();
            hideAll();
        }, function() {
            //$('#myModal').modal('hide');
           // alert('step1 hover out');
        }
    );

    jQuery( ".ab_step2" ).hover(
        function() {
            $('#myModal2').modal('show');
            $('#ab-modal-body2').show();
            hideAll();
        }, function() {
            //alert('step2 hover out');
        }
    );

    jQuery( ".ab_step3" ).hover(
        function() {
            $('#myModal3').modal('show');
            $('#ab-modal-body3').show();
            hideAll();
        }, function() {
            //alert('step3 hover out');
        }
    );

    /* modal close button click's */
    $('#ab_close').click(function () {
        $('#myModal1').modal('hide');
    });

    $('#ab_close2').click(function () {
        $('#myModal2').modal('hide');
    });

    $('#ab_close3').click(function () {
        $('#myModal3').modal('hide');
    });

    /* modal read more */
    $('#ab_read_more1').click(function (e) {
        e.stopPropagation();

        $('#text1').show();
        $('#text2').hide();
        $('#text3').hide();
        $('#myModal').modal('hide');

        $target = $('#text1');
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
          //  window.location.hash = $target;
        });
    });

    $('#ab_read_more2').click(function (e) {
        e.stopPropagation();

        $('#text1').hide();
        $('#text2').show();
        $('#text3').hide();
        $('#myModal2').modal('hide');

        $target = $('#text2');
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
         //   window.location.hash = $target;
        });
    });

    $('#ab_read_more3').click(function (e) {
        e.stopPropagation();
        $('#text1').hide();
        $('#text2').hide();
        $('#text3').show();
        $('#myModal3').modal('hide');


        $target = $('#text3');
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
          //  window.location.hash = $target;
        });
    });


    /* 168   P A G E */
    /* Hover over the steps 1,2,3 */
    jQuery( ".one_step1" ).hover(
        function() {
            $('#myModal').modal('show');
            $('#ab-modal-body1').show();
            hideAll();
        }, function() {
            //alert('step1 hover out');
        }
    );

    jQuery( ".one_step2" ).hover(
        function() {
            $('#myModal2').modal('show');
            $('#ab-modal-body2').show();
            hideAll();
        }, function() {
            //alert('step2 hover out');
        }
    );

    jQuery( ".one_step3" ).hover(
        function() {
            $('#myModal3').modal('show');
            $('#ab-modal-body3').show();
            hideAll();
        }, function() {
            //alert('step3 hover out');
        }
    );

    /* Founders  P A G E */
    /* Hover over the steps 1,2,3 */
    jQuery( ".foun_step1" ).hover(
        function() {
            $('#myModal').modal('show');
            $('#ab-modal-body1').show();
            hideAll();
        }, function() {
            //alert('step1 hover out');
        }
    );

    jQuery( ".foun_step2" ).hover(
        function() {
            $('#myModal2').modal('show');
            $('#ab-modal-body2').show();
            hideAll();
        }, function() {
            //alert('step2 hover out');
        }
    );

    jQuery( ".foun_step3" ).hover(
        function() {
            $('#myModal3').modal('show');
            $('#ab-modal-body3').show();
            hideAll();
        }, function() {
            //alert('step3 hover out');
        }
    );


    function hideAll()
    {
        $('#text1').hide();
        $('#text2').hide();
        $('#text3').hide();
    }



});

function show_activation() {
    /*
    if(!$('#reg-confirm-bg').length) {
        $('body').append('<div id="reg-confirm-bg"></div>');
    }
    $('#reg-confirm-bg').unbind().show();
    $('#reg-confirm').hide();
    $('#activate-membership').remove();
    $('#reg-confirm-bg').hide();
    */
    $('#myModal2').modal('hide');
    $('#myModal').modal({
        backdrop: 'static',
        keyboard: false
    })

    $('#myModal').modal('show');
    $.ajax({
        url: '/wp-content/themes/pie247r2/activate.php',
        type: 'POST',
        data: $('form').serialize(),
        success: function(data) {
            $('#displayContent').append(data);
            /*
            $('#ab-modal-body1').html(data).show();
            */
            if(typeof setup_clicktip_floater == 'function') {
                setup_clicktip_floater();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}


function alert_old_ie()
{
    $('#reg-confirm').show();
    $('#alert_old_ie-bg').unbind().show();
}

function setup_check_sponsor_key ()
{
    //alert('setup_check_sponsor_key');

    $("#enrollerKeyCode").blur(function() {
        if ($("#enrollerKeyCode").val() != '')
        {
            jQuery.ajax({
                type : "post",
                url         : ajaxurl, // Location of the service
                data        : jQuery("form#registration").serialize() + '&action=ltp_check_sponsor_key',
                // contentType:"application/json; charset=utf-8",
                dataType:"json",
                success     : function(data, textStatus, jqXHR) {///On Success service with call
                    //   console.log("data ". data);
                    if(data.message === 0)
                    {
                        //alert('if');
                        $('#enrollerKeyCode_err').show();
                        $('#enrollerKeyCode_err').css('display', 'inline-block');
                        $('#enrollerKeyCode').addClass("error");
                        valid_sk = false;
                    }
                    else
                    {
                        // alert('else');
                        valid_sk =  true;
                        $('#enrollerKeyCode_err').hide();
                        $('#sponsors_welc').show();
                        // console.log('data.fname '. data.fname);
                        /// console.log('data.lname '.  data.lname);
                        //var sfullname = ;
                        //   console.log('sfullname ' + data.message);
                        //console.dir(data);
                        $('#sfullname').text(data.message + '\'s');
                        $('#skey').text($("#enrollerKeyCode").val());

                        //$("#enrollerKeyCode").val($("#enrollerKeyCode").val());
                    }
                },
                error:   function(data, textStatus, jqXHR) {///On error
                    //alert('error');
                    valid_sk = false;
                }//closing error
            })//closing ajax

        }//closing if
    })//closing blur
}

function setup_check_email_field ()
{
    //$("#email").focus
    $("#email").focus(function() {
        $("#email").val("");
        $('#email_err').hide();
    });

    $("#email").blur(function() {
        if ($("#email").val() != '')
        {
            jQuery.ajax({
                type : "post",
                url         : ajaxurl, // Location of the service
                data        : jQuery("form#registration").serialize() + '&action=pie247_validate_email',
                dataType: "json",
                success     : function(data, textStatus, jqXHR) {///On Success service with call
                    if(data.message === "Email in use")
                    {
                        $('#email_err').show();
                    }
                },
                error:   function(data, textStatus, jqXHR) {///On error
                    /*
                     console.log('ajax response inside');
                     console.log('data: ' + data);
                     console.log('textStatus: ' + textStatus);
                     console.log('jqXHR: ' + jqXHR);
                     */
                }//closing error
            })//closing ajax
        }//closing if
    })//closing blur
}

function start_confirmation_timer() {
    $('#form-timeout span').text('3:00').show();
    window.setTimeout('update_confirmation_timer()',1000);
}

function update_confirmation_timer() {
   // console.log('update timer');
    var curCounter = $('#form-timeout span').text();
    var minutes = curCounter.split(':')[0];
    var seconds = curCounter.split(':')[1];
    var delay = 100; //Animation delay in ms
    if(seconds < 1) {
        if(minutes < 1){
            if($('#myModal2').is(':visible'))
            {
                alert('Session expired. Registration incomplete! Please try again.');
            }
          /*  $('input#reg-confirm-cancel').click(); */
            $('#myModal2').modal('hide');

            $('#form-timeout span').text('').css('color','');

            reg_accepted = false;
            return false;
        }
        else {
            minutes --;
            seconds = 59;
        }
    }
    else {
        seconds --;
    }
    if(minutes < 1) {
        $('#form-timeout span').css('color','#B22222');
        if(seconds < 30) {
            $('#form-timeout span').fadeTo(delay,0.33).fadeTo(delay,0.66).fadeTo(delay,0.33).fadeTo(delay,1);
        }

    }

    seconds = seconds < 10 ? '0' + seconds : seconds;
    $('#form-timeout span').text(minutes + ':' + seconds);
    window.setTimeout('update_confirmation_timer()',1000);

    /*
    if($('#reg-confirm').css('display').toLowerCase() === 'none') {
        $('#form-timeout span').text('').css('color','');
        return false;
    }
    else {
        seconds = seconds < 10 ? '0' + seconds : seconds;
        $('#form-timeout span').text(minutes + ':' + seconds);
        window.setTimeout('update_confirmation_timer()',1000);
    }
    */
}

function nextField() {
    nextFieldValue = document.getElementById('country').value;
    if(nextFieldValue == 'AGO' || nextFieldValue == 'ATG' || nextFieldValue == 'ABW' || nextFieldValue == 'BHS' || nextFieldValue == 'BLZ' || nextFieldValue == 'BEN' || nextFieldValue == 'BWA' || nextFieldValue == 'BFA' || nextFieldValue == 'BDI' || nextFieldValue == 'CMR' || nextFieldValue == 'CAF' || nextFieldValue == 'COM' || nextFieldValue == 'COG' || nextFieldValue == 'COK' || nextFieldValue == 'CIV' || nextFieldValue == 'DJI' || nextFieldValue == 'DMA' || nextFieldValue == 'TMP' || nextFieldValue == 'GNQ' || nextFieldValue == 'ERI' || nextFieldValue == 'FJI' || nextFieldValue == 'ATF' || nextFieldValue == 'GMB' || nextFieldValue == 'GHA' || nextFieldValue == 'GRD' || nextFieldValue == 'GIN' || nextFieldValue == 'GUY' || nextFieldValue == 'HKG' || nextFieldValue == 'IRL' || nextFieldValue == 'JAM' || nextFieldValue == 'KEN' || nextFieldValue == 'KIR' || nextFieldValue == 'PRK' || nextFieldValue == 'MAC' || nextFieldValue == 'MWI' || nextFieldValue == 'MLI' || nextFieldValue == 'MRT' || nextFieldValue == 'MUS' || nextFieldValue == 'MSR' || nextFieldValue == 'NRU' || nextFieldValue == 'ANT' || nextFieldValue == 'PAN' || nextFieldValue == 'QAT' || nextFieldValue == 'LCA' || nextFieldValue == 'STP' || nextFieldValue == 'SAU' || nextFieldValue == 'SYC' || nextFieldValue == 'SLE' || nextFieldValue == 'SLB' || nextFieldValue == 'SOM' || nextFieldValue == 'ZAF' || nextFieldValue == 'SUR' || nextFieldValue == 'SYR' || nextFieldValue == 'TZA' || nextFieldValue == 'TKL' || nextFieldValue == 'TON' || nextFieldValue == 'TTO' || nextFieldValue == 'TVU' || nextFieldValue == 'ARE' || nextFieldValue == 'VUT' || nextFieldValue == 'YEM' || nextFieldValue == 'ZWE'){
        document.getElementById('ZipCodeLogic').innerHTML = '<p>&nbsp;</p>';
    } else {
        document.getElementById('ZipCodeLogic').innerHTML = '<div class="control-group"><label class="control-label" for="postalZip"><span style="font-size:12px; font-weight:bold; color: #d84632;">*</span> Zip/Postal</label><div class="controls"><input type="text" id="postalZip" value="" name="postalZip" tabindex="11"></div></div>';
    }
    return true;
}

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

// Registration
var reg_accepted = false;

function setup_registration_form(){

    var refferal_code = getURLParameter('member');
    if (refferal_code !== null && refferal_code !== 'null'){
        jQuery.cookie('ref_member', refferal_code, {expires: 30});
    } else {
        refferal_code = jQuery.cookie('ref_member');
    }

    /*
    if (refferal_code !== null && refferal_code !== 'null') {
        jQuery('#enrollerKeyCode').val(refferal_code);
    }
    */


    jQuery('form#registration').validate({
        rules: {
            enrollerKeyCode: {
                minlength: 2,
                required: true
            },
            fname: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            lname: {
                minlength: 2,
                required: true
            },
            password:{
                required: true,
                minlength: 5
            },
            password2: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            phone: {
                minlength: 2,
                required: true
            },
            address: {
                minlength: 2,
                required: true
            },
            city: {
                required: true
            },
            provState: {
                minlength: 2,
                required: true
            },
            postalZip:{
                required: function() { if( $("#country").val() == 'AGO' || $("#country").val() == 'ATG' || $("#country").val() == 'ABW' || $("#country").val() == 'BHS' || $("#country").val() == 'BLZ' || $("#country").val() == 'BEN' || $("#country").val() == 'BWA' || $("#country").val() == 'BFA' || $("#country").val() == 'BDI' || $("#country").val() == 'CMR' || $("#country").val() == 'CAF' || $("#country").val() == 'COM' || $("#country").val() == 'COG' || $("#country").val() == 'COK' || $("#country").val() == 'CIV' || $("#country").val() == 'DJI' || $("#country").val() == 'DMA' || $("#country").val() == 'TMP' || $("#country").val() == 'GNQ' || $("#country").val() == 'ERI' || $("#country").val() == 'FJI' || $("#country").val() == 'ATF' || $("#country").val() == 'GMB' || $("#country").val() == 'GHA' || $("#country").val() == 'GRD' || $("#country").val() == 'GIN' || $("#country").val() == 'GUY' || $("#country").val() == 'HKG' || $("#country").val() == 'IRL' || $("#country").val() == 'JAM' || $("#country").val() == 'KEN' || $("#country").val() == 'KIR' || $("#country").val() == 'PRK' || $("#country").val() == 'MAC' || $("#country").val() == 'MWI' || $("#country").val() == 'MLI' || $("#country").val() == 'MRT' || $("#country").val() == 'MUS' || $("#country").val() == 'MSR' || $("#country").val() == 'NRU' || $("#country").val() == 'ANT' || $("#country").val() == 'NIU' || $("#country").val() == 'PAN' || $("#country").val() == 'QAT' || $("#country").val() == 'RWA' || $("#country").val() == 'LCA' || $("#country").val() == 'STP' || $("#country").val() == 'SAU' || $("#country").val() == 'SYC' || $("#country").val() == 'SLE' || $("#country").val() == 'SLB' || $("#country").val() == 'SOM' || $("#country").val() == 'ZAF' || $("#country").val() == 'SUR' || $("#country").val() == 'SYR' || $("#country").val() == 'TZA' || $("#country").val() == 'TKL' || $("#country").val() == 'TON' || $("#country").val() == 'TTO' || $("#country").val() == 'TVU' || $("#country").val() == 'ARE' || $("#country").val() == 'VUT' || $("#country").val() == 'YEM' || $("#country").val() == 'ZWE') { return false; } else { return true; } } //Making Zip Code validation dependent on Country Selection. Now zip code will be required only for USA and Canada.
                //minlength: 3,
                //required: true
            },
            country: {
                required: true
            },
            terms: "required",
            rights: "required",
            bea: "required",
            dagr: "required",
            edign: "required"
        },
        messages: {
            enrollerKeyCode:  {
                required: "Please enter the sponsor key of the person who directed you here.<br />  NOTE: If you don't have a sponsor key, please click <a href='mailto:reghelp@pie247.com'>here</a> for help. "
            },
        }, /*<a href=\"/contact-us\">here</a> 0*/

        highlight: function(label) {
            jQuery(label).closest('.control-group').addClass('error');
        },
        success: function(label) {
            jQuery(label)
                .closest('.control-group').addClass('success');
        }
    });

    //console.log(' just before Registration form Submit');
    /* Registration form Submit */
    jQuery('form#registration').submit(
        function(e){

            // alert('form submit reg accepted' + reg_accepted);
            if(reg_accepted) {

                return true;
            }

            //console.log('inside Registration form Submit');
            e.preventDefault();

            var defaultKeyCode = false;

            /*if(jQuery('#enrollerKeyCode').val().length < 1) {
             jQuery('#enrollerKeyCode').val('1001');
             var defaultKeyCode = true;
             }*/

            var valid = jQuery('form#registration input, form#registration select').valid();

            if (valid) {

                //console.log('Valid input.');

                jQuery('.reg-error').hide();

                /*
                 jQuery.post(ajaxurl, jQuery("form#registration").serialize() + '&action=get_hash', function(data) {
                 //console.log('Step 1 - Back - ' + data);
                 jQuery('input[name="hash"]').val(data);
                 });
                 */

                jQuery.ajax(
                    {
                        url: ajaxurl,
                        type: 'post',
                        data: jQuery("form#registration").serialize() + '&action=onek_register',
                        dataType: 'json',
                        cache: false,
                        success: function(data, textStatus, jqXHR) {

                            //console.log(jqXHR.responseText);
                            //console.log('Step 1 - Back - ' + data);
                            //jQuery('input[name="hash"]').val(data);

                            //jQuery('form#registration input[name="hash"]').val(data.hash);
                            jQuery('form#registration input[name="token"]').val(data.token);


                            if(data.success) {

                                reg_accepted = true;

                                /*
                                var regconfirm = jQuery('#reg-confirm');
                                var regconfirmbg = jQuery('#reg-confirm-bg');
                                 */

                                /**/
                                var regconfirm = jQuery('#myModal2');

                                var regconfirmbg = jQuery('#reg-confirm-bg');

                                var postalZip = jQuery('input#postalZip').val();
                                if (typeof (postalZip  == "undefined"))
                                {
                                    postalZip ='';
                                }

                                // populate modal data
                                regconfirm.find('#reg-data-value-enroller').text(jQuery('input#enrollerKeyCode').val());
                                regconfirm.find('#reg-data-value-name').text(jQuery('input#fname').val()+' '+jQuery('input#lname').val());
                                regconfirm.find('#reg-data-value-email').text(jQuery('input#email').val());
                                regconfirm.find('#reg-data-value-phone').text(jQuery('input#phone').val());
                                regconfirm.find('#reg-data-value-address').html(jQuery('input#address').val()+' '+jQuery('input#city').val()+', '+jQuery('input#provState').val()+' '+postalZip+' '+jQuery('select[name=country] option:selected').text());
                                regconfirm.find('#reg-data-value-password').html('<em>hidden</em>');
                                start_confirmation_timer();

                                /*
                                regconfirmbg.show();
                                regconfirm.show();
                                   */

                                jQuery('#myModal2').modal({
                                    backdrop: 'static',
                                    keyboard: false
                                })


                                jQuery('#myModal2').modal('show');



                                /**/


                            } else {

                                reg_accepted = false;

                                if(data.field != '') {

                                    if(data.message === 'Email in use')
                                    {
                                        data.message='It looks like you have already created an account.  Instead of registering, please Login: if you have forgotten your password, please click on the "Forgot Password?';
                                    }

                                    jQuery('#'+data.field).closest('.control-group')
                                        .removeClass('success')
                                        .addClass('error')
                                        .find('.error')
                                        .html(data.message);

                                }
                                //console.log(data+' data');
                                jQuery('.reg-error').show();
                                jQuery('html, body').scrollTop(jQuery('.reg-error').offset().top - 30);

                                if(defaultKeyCode==true) {
                                    jQuery('#enrollerKeyCode').val('');
                                    delete window.defaultKeyCode;
                                }
                            }


                        },
                        error: function(jqXHR, errorText, errorThrown) {

                            console.log(jqXHR.responseText+' unexpected ajax error!');
                            jQuery('.reg-error').show().html('There was an unexpected error while processing your application. Please contact <a href="https://support.pie247.com/" target="_blank">support</a>.');
                            jQuery('html, body').scrollTop(jQuery('.reg-error').offset().top - 30);

                            if(defaultKeyCode==true) {
                                jQuery('#enrollerKeyCode').val('');
                                delete window.defaultKeyCode;
                            }
                        }
                    }
                );

            } else {

                //console.log('Invalid input / errors.');

                reg_accepted = false;

                jQuery('.reg-error').show().html('There was an error. Please see below.');
                jQuery('html, body').scrollTop(jQuery('.reg-error').offset().top - 30);

                if(defaultKeyCode==true) {
                    jQuery('#enrollerKeyCode').val('');
                    delete window.defaultKeyCode;
                }
            }

        }
    );

    // hook cancel action to modal edit button
    jQuery('#reg-confirm-cancel').click(
        function() {
            reg_accepted = false;
          ///  alert('reg-confirm-cancel reg_accepted' + reg_accepted);

           // alert('reg-confirm-cancel');

           /*jQuery('#reg-confirm, #reg-confirm-bg').hide();*/
            jQuery('#myModal2').modal('hide')
            jQuery('#reg-confirm input[type=checkbox]:checked').prop('checked', false);
        }
    );

    // hook confirm action to modal submit button
    jQuery('#reg-confirm-submit').click(
        function(e) {
            e.preventDefault();
         //   alert('reg confirm submit');
          /*  alert(jQuery('#reg-confirm input[type=checkbox]:checked').length);*/

            /*
            alert(jQuery("#myModal2").find("input:checked").length);
            alert(jQuery("#myModal2").find("input:checkbox").length);
            */
            if(jQuery("#myModal2").find("input:checked").length == jQuery("#myModal2").find("input:checkbox").length)
            {
             jQuery.ajax(
                    {
                        url: ajaxurl,
                        type: 'post',
                        data: jQuery("form#registration").serialize() + '&action=onek_confirm',
                        dataType: 'json',
                        cache: false,
                        success: function(data, textStatus, jqXHR) {
                            if(data.success) {
                                jQuery('#keyCode,#token').val(data.regkey);
                                //Run var debug_mode = true; command in chrome to activate 'debug_mode'
                                if(typeof debug_mode === 'undefined') {
                                    show_activation();
                                }
                                else {
                                    jQuery('form#onek-activate').submit();
                                }
                            } else {
                                alert(data.message);
                            }
                        },
                        error: function(jqXHR, errorText, errorThrown) {

                            //console.log(jqXHR.responseText);
                            alert('ERROR: '+errorText);

                        }
                    }
                );

            } else {

                alert('You must confirm your information by checking all of the checkboxes.');

            }
        }
    );
}


function activate_member(newKeyCode){
    //console.log('Step 5 - ' + newKeyCode);
    if (newKeyCode.indexOf('success:') > -1) {
        newKeyCode = newKeyCode.split(':');
        jQuery('input[name="keyCode"],input[name="token"]').val(newKeyCode[1]);
        jQuery('form#registration').submit();
    }
}