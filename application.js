let frame = document.getElementById("Iframe");

frame.onload = function() {
    frame.style.height =
    frame.contentWindow.document.body.scrollHeight + 'px';

    frame.style.width = 
    frame.contentWindow.document.body.scrollWidth + 'px';
}