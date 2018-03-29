$(document).ready(function () {

    var op = "shake";

    $('#lista').on('change', function () {
        op = this.value;
    })

    $("#button2").click(function () {
        $("#quadrado2").effect(op, 500);
    });
    $("#button").click(function () {
        var div = $("#quadrado");
        div.animate({
            margin: '0 0 0 550px',
            backgroundColor: '#3B3C3D'
        }, 800);
        div.animate({
            height: '300px',
            backgroundColor: '#E6567A'
        }, 1000);
        div.animate({
            width: '300px',
            backgroundColor: '#44B39D'
        }, 1000);
        div.animate({
            height: '100px',
            backgroundColor: '#BF4A67'
        }, 1000);
        div.animate({
            width: '100px',
            backgroundColor: '#47C9AF'
        }, 1000);
        div.animate({
            margin: '2px',
            backgroundColor: '#3B3C3D'
        }, 800);
    });


});