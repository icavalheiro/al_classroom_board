var table = null;


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