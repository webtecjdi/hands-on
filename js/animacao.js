$(document).ready(function (){
    var div = $("#elemento");

    div.animate({
        margin: '0 0 0 450px',
        backgroundColor: '#3B3C3D',
        borderRadius: '50%',
    }, 2000);
    div.animate({
        backgroundColor: '#fd35a6',
    }, 2000);
    div.animate({
        width: '200px',
        height:'200px'
    }, 2000);
    div.animate({
        margin: '0px',
        borderRadius: '0'
    }, 2000);

});