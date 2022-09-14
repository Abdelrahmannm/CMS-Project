$(document).ready(function () {

    $('#selectAllBoxes').click(function (event) {

        if (this.checked) {

            $('.checkBoxes').each(function () {

                this.checked = true;

            });

        } else {

            $('.checkBoxes').each(function () {

                this.checked = false;

            });

        }

    });

});

$(document).ready(function () {
    $('#summernote').summernote({
        height: 200
    });
});


var div_box = "<div id='load-screen'><div id='loading'></div></div>";
$("body").prepend(div_box);
$('#load-screen').delay(300).fadeOut(600, function(){
    $(this).remove();
});


function users_online_load(){
    $.get("functions.php?onlineusers=result",function(data){
        $(".usersonline").text(data);
    })
}
setInterval(function(){
    users_online_load();
},500);

