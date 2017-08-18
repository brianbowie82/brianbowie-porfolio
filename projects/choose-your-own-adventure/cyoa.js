var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    alert ("You sit down on your thrown for the very first time to rule your kingdom");
    } else if(response === "gaze") {
    response = prompt("will you look up or down?");
} else {
  alert("Please type in a valid input! Refresh the page to try again.");
}

if(response === "up") {
  alert ("the eclipse is coming soon and you look up in awe to realize the majesty of the universe its a sign you're in the right place enjoy you already own the world you start to think about owning your first star!")

} else if(response === "down") {
  alert ("There's an eclipse in the sky. However your not bothered the sky will do what it does, but YOU have to rule the world so you look down at your kingdom to make a new decree")

} else {
    alert ("you wake up from your dream. sighing you realize how hot it is tonite in this tower. you get up to unlatch your window to let in some air. then you let down your hair somebodys screaming outside. why sit or gaze when you can go to sleep? Goodnight!");
}
