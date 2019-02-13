$(document).ready(function(){
    $(".card-header").hide();
    $(".links").removeClass("preload");
    $('[data-toggle="tooltip"]').tooltip();
    // $.fx.off = false;
});

function showCard(caller) {
    $(".show-btn").each(function() { hideCard(this); });

    var cardbody = $(caller).parent().parent().parent();
    var cardhead = cardbody.siblings(".card-header");
    cardhead.show(500);
    cardhead.find(".nav-tabs li:eq(1) a").tab('show');
    var col = cardbody.parents(".mb-5");
    col.toggleClass("col-xl-4 col-md-6 col-md-12");
    setTimeout(function() {
        $('html, body').animate({ scrollTop: col.offset().top }, 500);
    }, 300)

    caller.text = "Hide";
    caller.onclick = function() { hideCard(caller); };
}

function hideCard(caller) {
    var cardhead = $(caller).parent().parent().parent().siblings(".card-header");
    cardhead.hide(500);
    cardhead.find(".nav-tabs a:first").tab('show');
    $(caller).parents(".mb-5").removeClass("col-md-12");
    $(caller).parents(".mb-5").addClass("col-md-6");
    $(caller).parents(".mb-5").addClass("col-xl-4");
    caller.text = "Details";
    caller.onclick = function() { showCard(caller); };
}

function openVideos() {
    // console.log("?");
    $("#w-vid").tab('show');
}

function zoom(caller) {
    var imgName = $(caller).children("img").attr("src");
    $("#photo-modal").show();
    $("#photo-modal").children("img").attr("src", imgName);
}

function unzoom() {
    $("#photo-modal").hide();
}