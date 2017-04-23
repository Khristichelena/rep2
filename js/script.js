var arr = [];
var timer = 5000;
function returnArr(divs) {
        for (var i = 0; i<divs.length; i++) {
            arr.push(divs[i].innerHTML);
        }    
}
returnArr($("div.block").toArray());

$(document).ready(function(){
    var total = arr.length - 1;
    for (var i = 0; i <= total; i++) {
        $('#box').append('<p class="sl" id="textBox'+i+'"></p>');
        var max = arr[i].length - 1;
        for (var j = 0; j <= max; j++) {
            $('#textBox'+i).append('<span style="transition: ' + Math.random()*3 + 's; transition-delay: ' + Math.random() + 's;">' + arr[i].charAt(j) + '</span>'); 
        };
    }; 

    var r = 0;
    $('#textBox' + r).addClass('active');
    
    
    var maxBox = $('#box > p').length;

    setInterval(function(){ 
        $('#textBox' + r).removeClass('active');
        r++;
        if (r == maxBox) {
            r = 0;
        }
        setTimeout(function(){ 
            $('#textBox' + r).addClass('active');
        }, 2000);
    }, timer);
});