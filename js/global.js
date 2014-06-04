/**
 * Created by dmarkovic on 02/06/14.
 */
jQuery(document).ready(function($) {
    setup_registration_form();
    setup_contact_form();
});

function setup_registration_form()
{
    $("#submit").click(function () {
        $("#registration").submit();
    });

    $("#registration").validate(
        {

            rules: {
                enrollerKeyCode: {
                    minlength: 2,
                    required: true
                },
                fname: {
                    minlength: 2,
                    required: true
                },
                lname: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                enrollerKeyCode:  {
                    required: "Please enter the sponsor key of the person who directed you here."
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

function setup_contact_form()
{
    $("#submit2").click(function () {
        $("#contact").submit();
    });

    $("#contact").validate(
        {
            rules: {
                cfname: {
                    minlength: 2,
                    required: true
                },
                clname: {
                    minlength: 2,
                    required: true
                },
                cemail: {
                    required: true,
                    email: true
                },
                cmessage: {
                    minlength: 2,
                    required: true
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