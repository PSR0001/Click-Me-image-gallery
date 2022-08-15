let video

function setup() {
    createCanvas(400, 700);
    video = createCapture(VIDEO);
    // video.size(300, 300);
    video.hide()
    let lat, lon;

    const button = document.getElementById('submit');

    button.addEventListener('click', async event => {
        const mood = document.getElementById('mood').value;
        const name = document.getElementById('name').value;
        const desc = document.getElementById('desc').value;
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
        const data = { lat, lon,name, mood,desc, image64 };
        // console.log(data);
        const options = {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    });

    if ('geolocation' in navigator) {
        // console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            // console.log(lat, lon);
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = lon;
        });
    } else {
        console.log('geolocation not available');
    }
}


function draw() {


    image(video, 0, 0, width, width * video.height / video.width);
    var can = document.getElementById('defaultCanvas0')

    let video123 = document.getElementById('video123').appendChild(can)
    can.style.position = 'absolute';
    can.style.top = "10px";
    can.style.left = "10px";
    can.style.borderRadius = "10px";

}

