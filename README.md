# Redux Mini Sprint

## Topics
  * Immutability in JavaScript
  * Actions
  * Reducers
  * The central store
  * Connecting React components to Redux

![alt text](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966)

In this mini sprint, you'll first get some practiced with objects and arrays with an `immutiable` context and then you'll be eased in the code base of a small Redux application. The application itself is a counter, with increment and decrement buttons. 

Start by working in the `immutable.js` file. Work through the problems in there with a partner.

The increment button should increment the counter by 1. Conversely, the decrement button should decrement the counter by 1. The aim of this mini sprint is to familiarize you with the overarching data flow pattern of Redux, as well as exposing you to how Redux is typically hooked up to a React application. 

To run the mini sprint code, `npm install` inside of the root directory, then `npm start`. You'll see that the application isn't working. There are a couple of spots that you'll need to fill in in the application in order to get it to function. These spots are in `reducers/index.js`, `actions/index.js`, and `components/Counter.js`. 

The code is pretty heavily commented in order to try to clear up everything that is going on with the code that is provided for you. There is a decent amount of boilerplate when it comes to setting up a Redux application and hooking it up to React components, but the benefits that Redux gives you when it comes to predictability and simplicity of your data flow are worth it, especially when your application scales out and becomes much larger.

Take your time walking around the code base. There are lots of informative little tidbits in the comments that you won't want to miss. I highly encourage you to look at every file first before trying to write any code. 

If you end up finishing quickly, you'll see there's a few extra credit prompts at the top of the `Counter.js` component file. Feel free to take a stab at implementing those. Or, you could take a look at the awesome Redux documentation [here](http://redux.js.org/docs/basics/).

Good luck and have fun!