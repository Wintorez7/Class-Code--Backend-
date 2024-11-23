import events from 'events'


const eventEmitter = new events()

eventEmitter.on("print", () => {
    console.log("print event")
})

function print1(){
    console.log("print Event")
}
eventEmitter.addListener("print1",print1)

// invoking the event
eventEmitter.emit("print")
eventEmitter.emit("print1")

// remove events
eventEmitter.removeListener("print",print1)
eventEmitter.emit("print1")

eventEmitter.removeAllListeners("print1")
eventEmitter.emit("print")
