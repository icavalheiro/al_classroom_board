function createTable(){for(var t=$("table"),e=0;e<table.length;e++){var a=table[e],n="<tr>";n+="<td>"+a[0]+"</td>";for(var r=1;r<a.length;r++)a[r].indexOf("\n")>=0?n+='<td class="room-cell" id="'+e+"-"+r+'">'+a[r].split("\n").join("<br/>")+"</td>":n+='<td class="room-cell" id="'+e+"-"+r+'">'+a[r]+"</td>";n+="<tr>",t.append(n)}}function enableEditing(){function t(t){var e=t.find("textarea").val();t.remove("textarea");var a=t.attr("id").split("-");table[a[0]][a[1]]=e,-1==e.indexOf("\n")?t.text(e):t.html(e.split("\n").join("<br/>")),database(table)}function e(e){var a=e.attr("id").split("-"),n=table[a[0]][a[1]];e.empty(),e.append('<textarea type="textarea"/></textarea>'),e.find("textarea").focus().focusout(function(){currentElement=null,t($($(this).parent()))}).val(n)}$("html").on("click",function(a){var n=$(a.target);if(currentElement){if(currentElement.attr("id")==n.attr("id")||$(n.parent()).attr("id")==currentElement.attr("id"))return;t(currentElement),currentElement=null}n.hasClass("room-cell")&&(currentElement=n,e(n))})}function getEmptyTable(){return[["8:30","","","","","","",""],["10:00","","","","","","",""],["13:00","","","","","","",""],["14:00","","","","","","",""],["15:30","","","","","","",""],["17:00","","","","","","",""],["18:30","","","","","","",""],["20:00","","","","","","",""]]}function resetTable(){database(getEmptyTable()),location.reload()}function getDayWeekName(t){return["Sunday","Moonday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]}function getDayMonthName(t){return ordinal(t)}function getMinutesName(t){return t<10?"0"+t:t}function updateDate(){dot=!dot;var t=new Date,e=getDayWeekName(t.getDay()),a=t.getDate(),n=t.getHours(),r=n>12;r&&(n-=12);var l=t.getMinutes(),i=e+" "+getDayMonthName(a)+", "+n+(dot?":":'<span style="color:white">:</span>')+getMinutesName(l)+" "+(r?"PM":"AM");$("div.time").html(i)}var table=null,ordinal=require("ordinal"),currentElement=null;$(document).ready(function(){table=database()||getEmptyTable(),createTable(),enableEditing()});var dot=!1;updateDate(),setInterval(updateDate,1e3);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2ljLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVRhYmxlIiwiZG9tVGFibGUiLCIkIiwiaSIsInRhYmxlIiwibGVuZ3RoIiwicm93IiwiaHRtbCIsImoiLCJpbmRleE9mIiwic3BsaXQiLCJqb2luIiwiYXBwZW5kIiwiZW5hYmxlRWRpdGluZyIsInRlcm1pbmF0ZUVkaXRpbmciLCJlIiwiaW5wdXRWYWx1ZSIsImZpbmQiLCJ2YWwiLCJyZW1vdmUiLCJpZFNwbGl0IiwiYXR0ciIsInRleHQiLCJkYXRhYmFzZSIsImluaXRpYXRlRWRpdGluZyIsImN1cnJlbnRUZXh0IiwiZW1wdHkiLCJmb2N1cyIsImZvY3Vzb3V0IiwiY3VycmVudEVsZW1lbnQiLCJ0aGlzIiwicGFyZW50Iiwib24iLCJlbGVtZW50IiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJnZXRFbXB0eVRhYmxlIiwicmVzZXRUYWJsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0RGF5V2Vla05hbWUiLCJkYXlXZWVrIiwiZ2V0RGF5TW9udGhOYW1lIiwiZGF5TW9udGgiLCJvcmRpbmFsIiwiZ2V0TWludXRlc05hbWUiLCJtaW51dGVzIiwidXBkYXRlRGF0ZSIsImRvdCIsInRpbWUiLCJEYXRlIiwiZ2V0RGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsImlzUG0iLCJnZXRNaW51dGVzIiwicmVxdWlyZSIsImRvY3VtZW50IiwicmVhZHkiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBR0EsU0FBQUEsY0FFQSxJQUFBLElBREFDLEVBQUFDLEVBQUEsU0FDQUMsRUFBQSxFQUFBQSxFQUFBQyxNQUFBQyxPQUFBRixJQUFBLENBQ0EsSUFBQUcsRUFBQUYsTUFBQUQsR0FDQUksRUFBQSxPQUNBQSxHQUFBLE9BQUFELEVBQUEsR0FBQSxRQUNBLElBQUEsSUFBQUUsRUFBQSxFQUFBQSxFQUFBRixFQUFBRCxPQUFBRyxJQUNBRixFQUFBRSxHQUFBQyxRQUFBLE9BQUEsRUFDQUYsR0FBQSw2QkFBQUos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LCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGFibGUgPSBudWxsO1xyXG52YXIgb3JkaW5hbCA9IHJlcXVpcmUoJ29yZGluYWwnKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKCl7XHJcbiAgICB2YXIgZG9tVGFibGUgPSAkKCd0YWJsZScpO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRhYmxlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB2YXIgcm93ID0gdGFibGVbaV07XHJcbiAgICAgICAgdmFyIGh0bWwgPSAnPHRyPic7XHJcbiAgICAgICAgaHRtbCArPSAnPHRkPicgKyByb3dbMF0gKyAnPC90ZD4nO1xyXG4gICAgICAgIGZvcih2YXIgaiA9IDE7IGogPCByb3cubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBpZihyb3dbal0uaW5kZXhPZignXFxuJykgPj0gMClcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cInJvb20tY2VsbFwiIGlkPVwiJyArIGkgKyAnLScgKyBqICsgJ1wiPicrcm93W2pdLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIvPicpKyc8L3RkPic7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cInJvb20tY2VsbFwiIGlkPVwiJyArIGkgKyAnLScgKyBqICsgJ1wiPicrcm93W2pdKyc8L3RkPic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgKz0gJzx0cj4nO1xyXG5cclxuICAgICAgICBkb21UYWJsZS5hcHBlbmQoaHRtbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjdXJyZW50RWxlbWVudCA9IG51bGw7XHJcbmZ1bmN0aW9uIGVuYWJsZUVkaXRpbmcoKXtcclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZUVkaXRpbmcoZSl7XHJcbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBlLmZpbmQoJ3RleHRhcmVhJykudmFsKCk7XHJcbiAgICAgICAgZS5yZW1vdmUoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgdmFyIGlkU3BsaXQgPSBlLmF0dHIoJ2lkJykuc3BsaXQoJy0nKTtcclxuICAgICAgICB0YWJsZVtpZFNwbGl0WzBdXVtpZFNwbGl0WzFdXSA9IGlucHV0VmFsdWU7XHJcblxyXG4gICAgICAgIGlmKGlucHV0VmFsdWUuaW5kZXhPZignXFxuJykgPT0gLTEpXHJcbiAgICAgICAgICAgIGUudGV4dChpbnB1dFZhbHVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGUuaHRtbChpbnB1dFZhbHVlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIvPicpKTtcclxuXHJcbiAgICAgICAgZGF0YWJhc2UodGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYXRlRWRpdGluZyhlKXtcclxuICAgICAgICB2YXIgaWRTcGxpdCA9IGUuYXR0cignaWQnKS5zcGxpdCgnLScpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VGV4dCA9IHRhYmxlW2lkU3BsaXRbMF1dW2lkU3BsaXRbMV1dO1xyXG4gICAgICAgIGUuZW1wdHkoKTtcclxuICAgICAgICBlLmFwcGVuZCgnPHRleHRhcmVhIHR5cGU9XCJ0ZXh0YXJlYVwiLz48L3RleHRhcmVhPicpO1xyXG4gICAgICAgIGUuZmluZCgndGV4dGFyZWEnKS5mb2N1cygpLmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgdGVybWluYXRlRWRpdGluZygkKCQodGhpcykucGFyZW50KCkpKTtcclxuICAgICAgICB9KS52YWwoY3VycmVudFRleHQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKCdodG1sJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYoY3VycmVudEVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpZihjdXJyZW50RWxlbWVudC5hdHRyKCdpZCcpID09IGVsZW1lbnQuYXR0cignaWQnKVxyXG4gICAgICAgICAgICB8fCAkKGVsZW1lbnQucGFyZW50KCkpLmF0dHIoJ2lkJykgPT0gY3VycmVudEVsZW1lbnQuYXR0cignaWQnKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZUVkaXRpbmcoY3VycmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihlbGVtZW50Lmhhc0NsYXNzKCdyb29tLWNlbGwnKSl7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGluaXRpYXRlRWRpdGluZyhlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RW1wdHlUYWJsZSgpe1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBbICc4OjMwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgIFsnMTA6MDAnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgWycxMzowMCcsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcclxuICAgICAgICBbJzE0OjAwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgIFsnMTU6MzAnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgWycxNzowMCcsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcclxuICAgICAgICBbJzE4OjMwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgIFsnMjA6MDAnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ11cclxuICAgIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0VGFibGUoKXtcclxuICAgIGRhdGFiYXNlKGdldEVtcHR5VGFibGUoKSk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUgPSBkYXRhYmFzZSgpIHx8IGdldEVtcHR5VGFibGUoKTtcclxuICAgIGNyZWF0ZVRhYmxlKCk7XHJcbiAgICBlbmFibGVFZGl0aW5nKCk7XHJcbn0pO1xyXG5cclxudmFyIGRvdCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGF5V2Vla05hbWUoZGF5V2Vlayl7XHJcbiAgICB2YXIgbmFtZXMgPSBbXHJcbiAgICAgICAgJ1N1bmRheScsXHJcbiAgICAgICAgJ01vb25kYXknLFxyXG4gICAgICAgICdUdWVzZGF5JyxcclxuICAgICAgICAnV2VkbmVzZGF5JyxcclxuICAgICAgICAnVGh1cnNkYXknLFxyXG4gICAgICAgICdGcmlkYXknLFxyXG4gICAgICAgICdTYXR1cmRheSdcclxuICAgIF07XHJcbiAgICByZXR1cm4gbmFtZXNbZGF5V2Vla107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERheU1vbnRoTmFtZShkYXlNb250aCl7XHJcbiAgICByZXR1cm4gb3JkaW5hbChkYXlNb250aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1pbnV0ZXNOYW1lKG1pbnV0ZXMpe1xyXG4gICAgaWYobWludXRlcyA8IDEwKVxyXG4gICAgICAgIHJldHVybiAnMCcgKyBtaW51dGVzO1xyXG4gICAgcmV0dXJuIG1pbnV0ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURhdGUoKXtcclxuICAgIGRvdCA9ICFkb3Q7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgZGF5V2VlayA9IGdldERheVdlZWtOYW1lKHRpbWUuZ2V0RGF5KCkpO1xyXG4gICAgdmFyIGRheU1vbnRoID0gdGltZS5nZXREYXRlKCk7XHJcbiAgICB2YXIgaG91ciA9IHRpbWUuZ2V0SG91cnMoKTtcclxuICAgIHZhciBpc1BtID0gaG91ciA+IDEyO1xyXG4gICAgaWYoaXNQbSlcclxuICAgICAgICBob3VyIC09IDEyO1xyXG4gICAgdmFyIG1pbnV0ZXMgPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgICB2YXIgdGV4dCA9IGRheVdlZWsgKyAnICcgK1xyXG4gICAgZ2V0RGF5TW9udGhOYW1lKGRheU1vbnRoKSsgJywgJyArXHJcbiAgICBob3VyICsgKChkb3QpID8gJzonIDogJzxzcGFuIHN0eWxlPVwiY29sb3I6d2hpdGVcIj46PC9zcGFuPicpICsgXHJcbiAgICBnZXRNaW51dGVzTmFtZShtaW51dGVzKSArICcgJyArXHJcbiAgICAoKGlzUG0pID8gJ1BNJyA6ICdBTScpO1xyXG4gICAgJCgnZGl2LnRpbWUnKS5odG1sKHRleHQpO1xyXG59XHJcbnVwZGF0ZURhdGUoKTtcclxuc2V0SW50ZXJ2YWwodXBkYXRlRGF0ZSwgMTAwMCk7Il19
