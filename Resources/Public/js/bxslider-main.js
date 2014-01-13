$(function () {

    $.each($(".bxslider-wrap"), function (i, obj) {
        $data = $(obj).data();
        $(obj).find(".bxslider").bxSlider(
            $data
        );
    });

});