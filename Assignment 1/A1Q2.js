<!-- 2.Callback Queue

You are loading ads after page load using setTimeout.
 Why does the ad load after the main content even if the timeout is 0ms? -->

Even if setTimeout has 0 ms, the ad loads after the main content because:

    JavaScript first runs all normal (synchronous) code

    setTimeout sends the ad-loading code to the Callback Queue

    The Event Loop waits until the Call Stack is empty

    Only then the ad code is executed

So:
0ms does not mean immediate.
It means run after the current code finishes, which is why ads load after the main content.