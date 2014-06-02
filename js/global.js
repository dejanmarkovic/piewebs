/**
 * Created by dmarkovic on 02/06/14.
 */
jQuery(document).ready(function($) {
   // alert('global.js');
    setup_registration_form();
});

function setup_registration_form()
{
   // alert('setup_registration_form');

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
    /*  */
   /*  $("#commentForm").validate(); */
   /* $( "#registration" ).validate({
        rules: {
            fname: "required",
            lname: "required",
            email: {
                required: true,
                email: true
            }
        }

        ,
        messages: {
            fname: "Please enter your firstname",
            lname: "Please enter your lastname",
            email: "Please enter a valid email address"
        }

    });
    */




    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        }
    });

    // propose username by combining first- and lastname
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if(firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });

    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function() {
        topics[this.checked ? "removeClass" : "addClass"]("gray");
        topicInputs.attr("disabled", !this.checked);
    });

/*

    $( "#registration" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
    });
    */
/*
    jQuery('form#registration').submit(
        function(e){

            alert('form submit reg accepted' + reg_accepted);
            if(reg_accepted) {

                return true;
            }

            //console.log('inside Registration form Submit');
            e.preventDefault();

            var defaultKeyCode = false;


            var valid = jQuery('form#registration input, form#registration select').valid();

            if (valid) {

            }
        });
        */
}