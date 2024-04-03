document.addEventListener('DOMContentLoaded', function(){

    let button1 = document.createElement('button');
    let buttonTextNode = document.createTextNode('Give Message');
    button1.appendChild(buttonTextNode);
    document.body.appendChild(button1);

    button1.addEventListener('click', function(){
        alert('Great Job!');
    });

    let submitButton = document.querySelector('#submitButton');
    let submitText = document.getElementById('userInput');
    let inputValue = submitText.value; 

    submitButton.addEventListener('click', function(){
        let inputValue = submitText.value; 
        alert(inputValue);
    });

    let div = document.getElementById('div');

    div.addEventListener('mouseover', function(){
        div.style.backgroundColor = 'red';
    });

    div.addEventListener('mouseout', function(){
        div.style.backgroundColor = 'white';
    });

    let p = document.createElement('p');
    p.textContent = "Here is an example paragraph that was created purely in javaScript. If you click me I'll turn a random color!";
    document.body.appendChild(p);

    function generateRandomNumber(){
        return Math.floor(Math.random() * 255 + 1);
    };

    p.addEventListener('click', function(){
        //p.style.color = 'red';
        p.style.color = "rgb( " + generateRandomNumber() + "," + generateRandomNumber()+ "," + generateRandomNumber() +" )"; 
    });

    let button2 = document.createElement('button');
    let div2 = document.createElement('div');
    button2.id = 'button2';
    button2.textContent = 'Add your name';
    div2.id = 'div2';
    document.body.appendChild(button2);
    document.body.appendChild(div2);

    button2.addEventListener('click', function(){
        let span = document.createElement('span');
        span.className = 'span';
        span.textContent = 'Josh Dunbar ';
        div2.appendChild(span);
    });

    let button3 = document.getElementById('button3');
    let ul = document.getElementById('ul');
    let li = document.createElement('li');
    document.body.appendChild(button3);

    let friends = ['Amber', 'Anthony', 'Liv', 'Sloane', 'Mark', 'Dawn', 'Xan', 'Jay', 'Coard', 'Jeremy'];
    i = 0;
    button3.addEventListener('click', function(){
        let li = document.createElement('li');
        li.className = 'li';
        ul.appendChild(li);
        li.textContent = friends[i];
        i++;
        if(i >= friends.length){
            i = 0;
        }
    });

});