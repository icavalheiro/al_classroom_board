function createTable(){for(var t=$("table"),e=0;e<table.length;e++){var n=table[e],r="<tr>";r+="<td>"+n[0]+"</td>";for(var a=1;a<n.length;a++)r+='<td class="room-cell" id="'+e+"-"+a+'">'+n[a]+"</td>";r+="<tr>",t.append(r)}}function enableEditing(){function t(t){var e=t.find("textarea").val();t.remove("textarea");var n=t.attr("id").split("-");table[n[0]][n[1]]=e,-1==e.indexOf("\n")?t.text(e):t.html(e.split("\n").join("<br/>"))}function e(e){var n=e.attr("id").split("-"),r=table[n[0]][n[1]];e.empty(),e.append('<textarea type="textarea"/></textarea>'),e.find("textarea").focus().focusout(function(){currentElement=null,t($($(this).parent()))}).val(r)}$("html").on("click",function(n){var r=$(n.target);if(currentElement){if(currentElement.attr("id")==r.attr("id")||$(r.parent()).attr("id")==currentElement.attr("id"))return;t(currentElement),currentElement=null}r.hasClass("room-cell")&&(currentElement=r,e(r))})}var table=null,currentElement=null;$(document).ready(function(){table=[["8:30","","","","","","",""],["10:00","","","","","","",""],["13:00","","","","","","",""],["14:00","","","","","","",""],["15:30","","","","","","",""],["17:00","","","","","","",""],["18:30","","","","","","",""],["20:00","","","","","","",""]],createTable(),enableEditing()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2ljLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVRhYmxlIiwiZG9tVGFibGUiLCIkIiwiaSIsInRhYmxlIiwibGVuZ3RoIiwicm93IiwiaHRtbCIsImoiLCJhcHBlbmQiLCJlbmFibGVFZGl0aW5nIiwidGVybWluYXRlRWRpdGluZyIsImUiLCJpbnB1dFZhbHVlIiwiZmluZCIsInZhbCIsInJlbW92ZSIsImlkU3BsaXQiLCJhdHRyIiwic3BsaXQiLCJpbmRleE9mIiwidGV4dCIsImpvaW4iLCJpbml0aWF0ZUVkaXRpbmciLCJjdXJyZW50VGV4dCIsImVtcHR5IiwiZm9jdXMiLCJmb2N1c291dCIsImN1cnJlbnRFbGVtZW50IiwidGhpcyIsInBhcmVudCIsIm9uIiwiZWxlbWVudCIsInRhcmdldCIsImhhc0NsYXNzIiwiZG9jdW1lbnQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IkFBR0EsU0FBQUEsY0FFQSxJQUFBLElBREFDLEVBQUFDLEVBQUEsU0FDQUMsRUFBQSxFQUFBQSxFQUFBQyxNQUFBQyxPQUFBRixJQUFBLENBQ0EsSUFBQUcsRUFBQUYsTUFBQUQsR0FDQUksRUFBQSxPQUNBQSxHQUFBLE9BQUFELEVBQUEsR0FBQSxRQUNBLElBQUEsSUFBQUUsRUFBQSxFQUFBQSxFQUFBRixFQUFBRCxPQUFBRyxJQUNBRCxHQUFBLDZCQUFBSixFQUFBLElBQUFLLEVBQUEsS0FBQUYsRUFBQUUsR0FBQSxRQUVBRCxHQUFBLE9BRUFOLEVBQUFRLE9BQUFGLElBS0EsU0FBQUcsZ0JBQ0EsU0FBQUMsRUFBQUMsR0FDQSxJQUFBQyxFQUFBRCxFQUFBRSxLQUFBLFlBQUFDLE1BQ0FILEVBQUFJLE9BQUEsWUFDQSxJQUFBQyxFQUFBTCxFQUFBTSxLQUFBLE1BQUFDLE1BQUEsS0FDQWYsTUFBQWEsRUFBQSxJQUFBQSxFQUFBLElBQUFKLEdBRUEsR0FBQUEsRUFBQU8sUUFBQSxNQUNBUixFQUFBUyxLQUFBUixHQUVBRCxFQUFBTCxLQUFBTSxFQUFBTSxNQUFBLE1BQUFHLEtBQUEsVUFLQSxTQUFBQyxFQUFBWCxHQUNBLElBQUFLLEVBQUFMLEVBQUFNLEtBQUEsTUFBQUMsTUFBQSxLQUNBSyxFQUFBcEIsTUFBQWEsRUFBQSxJQUFBQSxFQUFBLElBQ0FMLEVBQUFhLFFBQ0FiLEVBQUFILE9BQUEsMENBQ0FHLEVBQUFFLEtBQUEsWUFBQVksUUFBQUMsU0FBQSxXQUNBQyxlQUFBLEtBQ0FqQixFQUFBVCxFQUFBQSxFQUFBMkIsTUFBQUMsYUFDQWYsSUFBQVMsR0FJQXRCLEVBQUEsUUFBQTZCLEdBQUEsUUFBQSxTQUFBbkIsR0FDQSxJQUFBb0IsRUFBQTlCLEVBQUFVLEVBQUFxQixRQUVBLEdBQUFMLGVBQUEsQ0FDQSxHQUFBQSxlQUFBVixLQUFBLE9BQUFjLEVBQUFkLEtBQUEsT0FDQWhCLEVBQUE4QixFQUFBRixVQUFBWixLQUFBLE9BQUFVLGVBQUFWLEtBQUEsTUFDQSxPQUVBUCxFQUFBaUIsZ0JBQ0FBLGVBQUEsS0FHQUksRUFBQUUsU0FBQSxlQUVBTixlQUFBSSxFQUNBVCxFQUFBUyxNQTdEQSxJQUFBNUIsTUFBQSxLQWtCQXdCLGVBQUEsS0FnREExQixFQUFBaUMsVUFBQUMsTUFBQSxXQUNBaEMsUUFDQSxPQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEtBQ0EsUUFBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxLQUNBLFFBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsS0FDQSxRQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEtBQ0EsUUFBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxLQUNBLFFBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsS0FDQSxRQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEtBQ0EsUUFBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxLQUVBSixjQUNBVSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRhYmxlID0gbnVsbDtcblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZSgpe1xuICAgIHZhciBkb21UYWJsZSA9ICQoJ3RhYmxlJyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRhYmxlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHJvdyA9IHRhYmxlW2ldO1xuICAgICAgICB2YXIgaHRtbCA9ICc8dHI+JztcbiAgICAgICAgaHRtbCArPSAnPHRkPicgKyByb3dbMF0gKyAnPC90ZD4nO1xuICAgICAgICBmb3IodmFyIGogPSAxOyBqIDwgcm93Lmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cInJvb20tY2VsbFwiIGlkPVwiJyArIGkgKyAnLScgKyBqICsgJ1wiPicrcm93W2pdKyc8L3RkPic7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSAnPHRyPic7XG5cbiAgICAgICAgZG9tVGFibGUuYXBwZW5kKGh0bWwpO1xuICAgIH1cbn1cblxudmFyIGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIGVuYWJsZUVkaXRpbmcoKXtcbiAgICBmdW5jdGlvbiB0ZXJtaW5hdGVFZGl0aW5nKGUpe1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGUuZmluZCgndGV4dGFyZWEnKS52YWwoKTtcbiAgICAgICAgZS5yZW1vdmUoJ3RleHRhcmVhJyk7XG4gICAgICAgIHZhciBpZFNwbGl0ID0gZS5hdHRyKCdpZCcpLnNwbGl0KCctJyk7XG4gICAgICAgIHRhYmxlW2lkU3BsaXRbMF1dW2lkU3BsaXRbMV1dID0gaW5wdXRWYWx1ZTtcblxuICAgICAgICBpZihpbnB1dFZhbHVlLmluZGV4T2YoJ1xcbicpID09IC0xKVxuICAgICAgICAgICAgZS50ZXh0KGlucHV0VmFsdWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBlLmh0bWwoaW5wdXRWYWx1ZS5zcGxpdCgnXFxuJykuam9pbignPGJyLz4nKSk7XG5cbiAgICAgICAgLypDb29raWVzLnNldCgnYWwtcm9vbXMtY29va2llJywgdGFibGUpOyovXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhdGVFZGl0aW5nKGUpe1xuICAgICAgICB2YXIgaWRTcGxpdCA9IGUuYXR0cignaWQnKS5zcGxpdCgnLScpO1xuICAgICAgICB2YXIgY3VycmVudFRleHQgPSB0YWJsZVtpZFNwbGl0WzBdXVtpZFNwbGl0WzFdXTtcbiAgICAgICAgZS5lbXB0eSgpO1xuICAgICAgICBlLmFwcGVuZCgnPHRleHRhcmVhIHR5cGU9XCJ0ZXh0YXJlYVwiLz48L3RleHRhcmVhPicpO1xuICAgICAgICBlLmZpbmQoJ3RleHRhcmVhJykuZm9jdXMoKS5mb2N1c291dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgdGVybWluYXRlRWRpdGluZygkKCQodGhpcykucGFyZW50KCkpKTtcbiAgICAgICAgfSkudmFsKGN1cnJlbnRUZXh0KTtcbiAgICB9XG5cblxuICAgICQoJ2h0bWwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGUudGFyZ2V0KTtcblxuICAgICAgICBpZihjdXJyZW50RWxlbWVudCl7XG4gICAgICAgICAgICBpZihjdXJyZW50RWxlbWVudC5hdHRyKCdpZCcpID09IGVsZW1lbnQuYXR0cignaWQnKVxuICAgICAgICAgICAgfHwgJChlbGVtZW50LnBhcmVudCgpKS5hdHRyKCdpZCcpID09IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0ZXJtaW5hdGVFZGl0aW5nKGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGVsZW1lbnQuaGFzQ2xhc3MoJ3Jvb20tY2VsbCcpKXtcblxuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgaW5pdGlhdGVFZGl0aW5nKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB0YWJsZSA9IC8qQ29va2llcy5nZXQoJ2FsLXJvb21zLWNvb2tpZScpIHx8Ki8gW1xuICAgICAgICBbICc4OjMwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJzEwOjAwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJzEzOjAwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJzE0OjAwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJzE1OjMwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJzE3OjAwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJzE4OjMwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJzIwOjAwJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddXG4gICAgXTtcbiAgICBjcmVhdGVUYWJsZSgpO1xuICAgIGVuYWJsZUVkaXRpbmcoKTtcbn0pOyJdfQ==
