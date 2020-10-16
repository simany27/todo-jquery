const h1 = $('<h1></h1>').text('To Do:').css({'padding-left': '4em'});
const input = $('<input/>');
input.attr({
    type : 'text',
    placeholder : 'new item',
    autofocus : true
});
input.css({'margin-left': '1em'});
const button = $('<button></button>').text('Add New Item');
const ol = $('<ol></ol>');
ol.css({
    'margin-top': '1em',
    'font-weight': 'bold'
});
$('#root').text('Add New Item:').prepend(h1).append(input, button, ol);

input.on('keyup', function (event) {
    if(event.key == 'Enter'){
        addItem();
    }
});
button.on('click', addItem);

function addItem() {
    const text = input.val().trim();
    if (text) {
        const li = $('<li></li>').text(text);
        const buttonX = $('<button></button>').text('X').css({'margin': '1em'});
        li.append(buttonX);
        ol.append(li);
        input.val('');
        buttonX.on('click', del);
    }
}

function del() {
    $(this).parent().remove();
}

