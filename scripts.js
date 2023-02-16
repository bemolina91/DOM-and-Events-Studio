function init() {
    const button = document.getElementById("takeoff");
    const paragraph = document.getElementById("flightStatus");
    const colorInBack = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");


    button.addEventListener('click', function () {
        if (window.confirm('Confirm that the shuttle is ready for takeoff')) {
            paragraph.innerHTML = 'Shuttle in flight.';
            colorInBack.style.backgroundColor = 'blue';
            height.innerHTML = 10000;
        }
    })

    landButton.addEventListener('click', function () {
        window.alert('The shuttle is landing. Landing gear engaged')
        paragraph.innerHTML = 'The shuttle has landed.';
        colorInBack.style.backgroundColor = 'green';
        height.innerHTML = 0;
    })

    missionAbortButton.addEventListener('click', function () {
        if (window.confirm('Confirm that you want to abort the mission')) {
            paragraph.innerHTML = 'Mission aborted.';
            colorInBack.style.backgroundColor = 'green';
            height.innerHTML = 0;
        }
    })
    
    upButton.addEventListener('click', function () {
        
        height.innerHTML = 10000;
    })
    
}


window.addEventListener("load", init);
