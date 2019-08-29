$(document).ready(function(){
    var today = new Date();
    var birthday = new Date("2001-09-23");
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if(age < 0){
        age = 0;
    }
    $('span.my-age').html(age + ' ' + 'years old');
});