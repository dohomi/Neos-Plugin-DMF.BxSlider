$(function () {

    $.each($(".bxslider-wrap"), function (i, obj) {
        $data = $(obj).data();
console.log($data, obj,  $(obj).find(".bxslider"));
        $(obj).find(".bxslider").bxSlider(
            $data
        );
    });

});