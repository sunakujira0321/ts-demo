import World from './world'

const root = document.getElementById('root')
const world = new World('Hello World')
world.sayHello(root)

import callbackSample from './Asynchronousprocessing/callback'
import profileSample from './Asynchronousprocessing/profile'
// callbackSample()
// profileSample()
import asyncSample from './Asynchronousprocessing/async'
asyncSample()