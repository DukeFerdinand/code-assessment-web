### Build log 1

Branch used: `doug-style-cart-component`

I reached the milestone of getting the cart completely styled up and hooked into the redux store. I went ahead and created a ui reducer (more on this [below](#ui-reducer)) to manage modal states or any other UI state I may need assuming this project was to become a real storefront application.

I also went ahead and took the liberty of showing the cart's subtotal and item count in the cart link. It was trickier than expected to get the cart's item total, as the `quantity` was nested further into the `Product` object than I'd like, but I feel I made it work [fairly well](/src/reducers/index.js#L33-40).

The only thing I'd really change about what I did would be the containerization on the cart. I'm not completely happy with how that is, but it's pretty great for an MVP like this. Again, if this were to go toward a live app, I'd change how that's laid out.


### Notes on UI reducer <a id="ui-reducer"></a>

I found out from past experiences using various state configurations (redux, no redux, mobx, redux-saga, etc.) that sending UI actions through redux and its middleware(s) makes for a WAY easier time trying to manage things like modal states or sidebar statuses. Using the modal example (such as the one I've used for the cart), you can programmatically open the modal from whatever actions/reactions you want, including API callbacks or user clicks (like I use here). Sending errors to a viewable container is obscenely simple this way, and makes my job far easier.

### Build log 1 pictures

![picture 1](/assets/build-log-1-1.png)
![picture 1](/assets/build-log-1-2.png)
![picture 1](/assets/build-log-1-3.png)
![picture 1](/assets/build-log-1-4.png)