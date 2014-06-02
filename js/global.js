/**
 * Created by dmarkovic on 02/06/14.
 */
jQuery(document).ready(function($) {
    alert('global.js');
    setup_registration_form();
});

setup_registration_form()
{
    alert('setup_registration_form');
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
            messages: {
                enrollerKeyCode:  {
                    required: "Please enter the sponsor key of the person who directed you here.<br />  NOTE: If you don't have a sponsor key, please click <a href='mailto:reghelp@pie247.com'>here</a> for help. "
                }
            },

            highlight: function(label) {
                jQuery(label).closest('.control-group').addClass('error');
            },
            success: function(label) {
                jQuery(label)
                    .closest('.control-group').addClass('success');
            }
        });
}