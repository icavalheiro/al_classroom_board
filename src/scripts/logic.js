var table = null;
var ordinal = require('ordinal');

function createTable(){
    var domTable = $('table');
    for(var i = 0; i < table.length; i++){
        var row = table[i];
        var html = '<tr>';
        html += '<td>' + row[0] + '</td>';
        for(var j = 1; j < row.length; j++){
            if(row[j].indexOf('\n') >= 0)
                html += '<td class="room-cell" id="' + i + '-' + j + '">'+row[j].split('\n').join('<br/>')+'</td>';
            else
                html += '<td class="room-cell" id="' + i + '-' + j + '">'+row[j]+'</td>';
        }
        html += '<tr>';

        domTable.append(html);
    }
}

var currentElement = null;
function enableEditing(){
    function terminateEditing(e){
        var inputValue = e.find('textarea').val();
        e.remove('textarea');
        var idSplit = e.attr('id').split('-');
        table[idSplit[0]][idSplit[1]] = inputValue;

        if(inputValue.indexOf('\n') == -1)
            e.text(inputValue);
        else
            e.html(inputValue.split('\n').join('<br/>'));

        database(table);
    }

    function initiateEditing(e){
        var idSplit = e.attr('id').split('-');
        var currentText = table[idSplit[0]][idSplit[1]];
        e.empty();
        e.append('<textarea type="textarea"/></textarea>');
        e.find('textarea').focus().focusout(function(){
            currentElement = null;
            terminateEditing($($(this).parent()));
        }).val(currentText);
    }


    $('html').on('click', function(e){
        var element = $(e.target);

        if(currentElement){
            if(currentElement.attr('id') == element.attr('id')
            || $(element.parent()).attr('id') == currentElement.attr('id'))
                return;

            terminateEditing(currentElement);
            currentElement = null;
        }

        if(element.hasClass('room-cell')){

            currentElement = element;
            initiateEditing(element);
        }
    });
}

function getEmptyTable(){
    return [
        [ '8:30', '', '', '', '', '', '', ''],
        ['10:00', '', '', '', '', '', '', ''],
        ['13:00', '', '', '', '', '', '', ''],
        ['14:00', '', '', '', '', '', '', ''],
        ['15:30', '', '', '', '', '', '', ''],
        ['17:00', '', '', '', '', '', '', ''],
        ['18:30', '', '', '', '', '', '', ''],
        ['20:00', '', '', '', '', '', '', '']
    ];
}

function resetTable(){
    database(getEmptyTable());
    location.reload();
}

$(document).ready(function () {
    table = database() || getEmptyTable();
    createTable();
    enableEditing();
});

var dot = false;

function getDayWeekName(dayWeek){
    var names = [
        'Sunday',
        'Moonday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return names[dayWeek];
}

function getDayMonthName(dayMonth){
    return ordinal(dayMonth);
}

function getMinutesName(minutes){
    if(minutes < 10)
        return '0' + minutes;
    return minutes;
}

function updateDate(){
    dot = !dot;
    var time = new Date();
    var dayWeek = getDayWeekName(time.getDay());
    var dayMonth = time.getDate();
    var hour = time.getHours();
    var isPm = hour > 12;
    if(isPm)
        hour -= 12;
    var minutes = time.getMinutes();

    var text = dayWeek + ' ' +
    getDayMonthName(dayMonth)+ ', ' +
    hour + ((dot) ? ':' : '<span style="color:white">:</span>') + 
    getMinutesName(minutes) + ' ' +
    ((isPm) ? 'PM' : 'AM');
    $('div.time').html(text);
}
updateDate();
setInterval(updateDate, 1000);