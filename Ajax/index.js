var http = new XMLHttpRequest();
http.open('GET', 'https://api.withserve.com/v1/workflows/4f134d03-14ee-43b8-8745-f723ccc092cc?apiKey=68f3a736-d7d3-40f1-b16a-00527da4966c', true);
http.send();
http.onreadystatechange = function() {
    if (this.readyState == 4) {
        renderLessons(JSON.parse(this.responseText));
    }
}

function renderLessons(lessons) {
    for(var lessons of lessons) {
        console.log(lessons);
    }
}
