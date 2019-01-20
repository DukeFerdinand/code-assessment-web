### Build Log 0
I reached the milestone of getting everything styled and rendering properly on the 1280 screen. The only weird thing I had to do was assume that these product titles would remain the same, because I pull in the images directly into the [ProductWrapper](/src/components/ProductWrapper.js) component. The only reason I had to do this is because we're not really serving images from a server. I'm assuming that if we had an API with image endpoints built in, we'd be throwing those in here in a different way than importing on the client side.

## Notes on Serving<a name="serving-note"></a>

Serving images also means we need to use some sort of web server (whether it be full blown nginx/apache or express/node), so if you'd like to test the built code, please install something like `serve` via `npm install -g serve`

Again, this would likely, and SHOULD likely, be handled differently based on whatever back end or DB you're serving from

### Notes on testing
I went ahead and added snapshot testing while I was updating the existing tests, because I feel this is a great practice. I did so just in case I modified a component I wasn't intending to, so the test suite would yell at me and tell me I did something inadvertently.

### Build Log 0 image
![[Build log 1 image]](/assets/build-log-0.png)