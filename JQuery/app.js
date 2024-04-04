$(document).ready(function(){

    let button1 = $('<button>').attr('id', 'button1').text('Give Message!');
    button1.appendTo('body');

    $('#button1').click(function(){
        alert('Great Job!');
    });

    let submitButton = $('#submitButton');

    $(submitButton).click(function(){
        let userInput = $("#userInput").val();
        alert(userInput);
    });

    let div = $('#div');

    div.mouseover(function(){
        $('#div').css('background-color', 'red');
    });

    div.mouseout(function(){
        $('#div').css('background-color', 'white');
    });

    let p = $('<p>');
    p.text("Here is an example paragraph that was created purely in javaScript. If you click me I'll turn a random color!"); 
    $('body').append(p);

    function generateRandomNumber(){
        return Math.floor(Math.random() * 255 + 1);
    };

    p.click(function(){
        //p.css("color", "red");
        p.css('color', "rgb( " + generateRandomNumber() + "," + generateRandomNumber()+ "," + generateRandomNumber() +" )"); 
    });

    let button2 = $('<button>').text('Add Your Name');
    $('body').append(button2);
    let div2 = $('<div>');
    $('body').append(div2);

    button2.click(function(){
        let span = $('<span>');
        span.text('Josh Dunbar ');
        $(div2).append(span);
    });

    let button3 = $('#button3');
    let ul = $('ul');
    let li = $('<li>');
    $('body').append(button3);

    let friends = ['Amber', 'Anthony', 'Liv', 'Sloane', 'Mark', 'Dawn', 'Xan', 'Jay', 'Coard', 'Jeremy'];
    i=0;
    button3.click(function(){
        let li = $('<li>');
        li.addClass('li');
        $(ul).append(li);
        li.text(friends[i]);
        i++;
        if(i >= friends.length){
            i = 0;
        }
    });

});