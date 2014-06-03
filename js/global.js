/**
 * Created by dmarkovic on 02/06/14.
 */
jQuery(document).ready(function($) {
    setup_registration_form();
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
                email: {
                    required: true,
                    email: true
                },
                lname: {
                    minlength: 2,
                    required: true
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