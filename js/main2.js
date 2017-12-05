$(document).ready(function() {
    var e = 1;
    $(".openIt").click(function() {
        $(this).next(".profile_content").slideToggle("slow")
    });
    $(".contact_section").click(function() {
        if (e == 1) {
            initialize();
            e = 0
        }
        $(this).next(".profile_content").slideToggle("slow")
    });
    $(".jump_block").click(function() {
        if ($(this).hasClass("jump_menu")) {
            $(".profile_content").hide()
        }
        if ($(this).hasClass("jump_profile")) {
            $("#profile_id").slideToggle("slow")
        }
        if ($(this).hasClass("jump_resume")) {
            $("#resume_id").slideToggle("slow")
        }
        if ($(this).hasClass("jump_portfolio")) {
            $("#portfolio_id").slideToggle("slow")
        }
        if ($(this).hasClass("jump_contact")) {
            if (e == 1) {
                initialize();
                e = 0
            }
            $("#contact_id").slideToggle("slow")
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".jump_up").show()
        } else {
            $(".jump_up").hide()
        }
        $("#html5_meter:in-viewport").width("90%");
        $("#css3_meter:in-viewport").width("90%");
        $("#tb_meter:in-viewport").width("90%");
        $("#zf_meter:in-viewport").width("95%");
        $("#js_meter:in-viewport").width("80%");
        $("#jq_meter:in-viewport").width("90%");
        $("#php_meter:in-viewport").width("80%")
        $("#ajax_meter:in-viewport").width("90%");
        $("#gm_meter:in-viewport").width("75%");
        $("#wp_meter:in-viewport").width("90%");
        $("#ci_meter:in-viewport").width("95%");
        $("#sql_meter:in-viewport").width("85%");
    });
    $(".jump_up").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false
    });
    $("form").submit(function() {
        $("form :input").attr("disabled", true);
        var e = {
            name: $("#name").val(),
            email: $("#email").val(),
            con_message: $("#con_message").val()
        };
        $.ajax({
            type: "POST",
            url: "email.php",
            data: e,
            success: function(e) {
                if (e == 1) {
                    alert("You have entered an incorrect email-address.");
                    $("form :input").attr("disabled", false)
                }
                if (e == 2) {
                    alert("Mail sent. Thank you.");
                    $("form :input").attr("disabled", false);
                    document.getElementById("form1").reset()
                }
                if (e == 3) {
                    alert("Mail didn't go through. Something went wrong.");
                    $("form :input").attr("disabled", false)
                }
            }
        });
        return false
    });
    var t = $(window).width();
    if (t > 800) {
        $(".jump_icons").hover(function() {
            $(this).animate({
                left: "0px"
            }, 100)
        }, function() {
            $(this).animate({
                left: "-48px"
            }, 100)
        })
    }
    $("#Grid").mixitup();
    $(".fancybox").fancybox();
    $("img.lazy").lazyload()
});