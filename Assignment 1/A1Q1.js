// 1. Call Stack & Event Loop

// A web page has a button that logs "Start", then uses setTimeout to log "Async Task", and finally logs "End".
//  Explain the execution order using Call Stack, Callback Queue, and Event Loop. 


When the button is clicked, JavaScript runs the code like this:

Call Stack

console.log("Start") runs first → prints Start

setTimeout() is sent to the browser and waits

console.log("End") runs next → prints End

Callback Queue

After the timeout, "Async Task" is kept in the Callback Queue

Event Loop

The Event Loop checks if the Call Stack is empty

When it is empty, it moves "Async Task" to the Call Stack

Final Output

Start
End
Async Task