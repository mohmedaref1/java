function like(postid) {
    jQuery(document).ready(function ($) {

        $.ajax({
            type: 'post',
            url: base_url + "/application/functions/forms.controller.php?request=add_like",
            data: {id: postid},
            success: function (res) {
                var json_res = jQuery.parseJSON(res);
                console.log(res);

                if (json_res.status == 'success') {
                    var val = parseInt($('.likes-' + postid).html());
                    $('.likes-' + postid).html(val + 1 + ' <i class="fa fa-thumbs-down"></i>');
                    $('.likes-' + postid).attr('onclick', 'unlike("' + postid + '")');

                } else {
                    $.Notification.notify(json_res.status, 'bottom left', json_res.status, json_res.msg);
                }
            }
        });

    });

}
function unlike(postid) {
    jQuery(document).ready(function ($) {

        $.ajax({
            type: 'post',
            url: base_url + "/application/functions/forms.controller.php?request=remove_like",
            data: {id: postid},
            success: function (res) {
                var json_res = jQuery.parseJSON(res);
                console.log(res);

                if (json_res.status == 'success') {
                    var val = parseInt($('.likes-' + postid).html());
                    $('.likes-' + postid).html(val - 1 + ' <i class="fa fa-thumbs-up"></i>');
                    $('.likes-' + postid).attr('onclick', 'like("' + postid + '")');

                } else {
                    $.Notification.notify(json_res.status, 'bottom left', json_res.status, json_res.msg);
                }
            }
        });

    });

}
function register(data) {
    jQuery(document).ready(function ($) {

        $.ajax({
            type: 'post',
            url: base_url + "/application/functions/forms.controller.php?request=register",
            data: data,
            success: function (res) {
                var json_res = jQuery.parseJSON(res);
                console.log(res);
                $.Notification.notify(json_res.status, 'bottom left', json_res.status, json_res.msg);
                if (json_res.status == 'success') {
                    $('#reg-form')[0].reset();
                }
            }
        });

    });

}
function login(data) {
    jQuery(document).ready(function ($) {

        $.ajax({
            type: 'post',
            url: base_url + "/application/functions/forms.controller.php?request=login",
            data: data,
            success: function (res) {
                var json_res = jQuery.parseJSON(res);
                console.log(res);
                $.Notification.notify(json_res.status, 'bottom left', json_res.status, json_res.msg);
                if (json_res.status == 'success') {
                    window.setTimeout(function () {

                        // Move to inbox page after 2 sec
                        window.location.href = window.location;
                    }, 1000);
                }
            }
        });

    });

}
function recover_password(data) {
    jQuery(document).ready(function ($) {

        $.ajax({
            type: 'post',
            url: base_url + "/application/functions/forms.controller.php?request=forget",
            data: data,
            success: function (res) {
                var json_res = jQuery.parseJSON(res);
                console.log(res);
                $.Notification.notify(json_res.status, 'bottom left', json_res.status, json_res.msg);
                if (json_res.status == 'success') {
                    $('#recover-form')[0].reset();
                    window.setTimeout(function () {

                        // Move to inbox page after 2 sec
                        window.location.href = window.location;
                    }, 1000);
                }
            }
        });

    });

}
function change_password(data) {
    jQuery(document).ready(function ($) {
        if ($('#password_captcha').val() !== $('#captcha-password').val()) {
            $.Notification.notify('error', 'bottom left', 'error', 'Incorrect Captcha');
            return;
        } else if ($('#NewPassword').val() !== $('#ConfirmNewPassword').val()) {
            $.Notification.notify('error', 'bottom left', 'error', 'Confirm Password not matching');
            return;
        }
        $.ajax({
            type: 'post',
            url: base_url + "/application/functions/forms.controller.php?request=change_pass",
            data: data,
            success: function (res) {
                var json_res = jQuery.parseJSON(res);
                console.log(res);
                $.Notification.notify(json_res.status, 'bottom left', json_res.status, json_res.msg);
                if (json_res.status == 'success') {
                    $('#pass')[0].reset();
                }
            }
        });

    });
}
function change_email(data) {
    jQuery(document).ready(function ($) {
        if ($('#email_captcha').val() !== $('#captcha-email').val()) {
            $.Notification.notify('error', 'bottom left', 'error', 'Incorrect Captcha');
            return;
        }
        $.ajax({
            type: 'post',
            url: base_url + "/application/functions/forms.controller.php?request=change_email",
            data: data,
            success: function (res) {
                var json_res = jQuery.parseJSON(res);
                console.log(res);
                $.Notification.notify(json_res.status, 'bottom left', json_res.status, json_res.msg);
                if (json_res.status == 'success') {
                    $('#email_change')[0].reset();
                }
            }
        });
    });
}
jQuery(document).ready(function ($) {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
});