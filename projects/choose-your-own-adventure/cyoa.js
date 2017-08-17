var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    response = prompt("will you be sitting at dusk or dawn?");
} else if (response === "gaze") {
    response = prompt("Do you prefer the an eclipse or a blue moon with stars behind it");
} else {
    alert("go to sleep if you dont want to sit and gaze");
}
