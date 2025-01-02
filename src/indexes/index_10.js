// Cbs in microtask queues are executed in between the execution of cbs in the timer queue
// Timer queue cbs are executed in FIFO order
// Timer queue is not a queue but a min heap data structure
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
  console.log("this is setTimeout 2");
  Promise.resolve().then(() =>
    console.log("This is Promise.resolve from the setTimeout")
  );
  process.nextTick(() =>
    console.log("This is the inner nextTick in the setTimeout")
  );
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

// All cbs in nextTick queue are executed before cbs in promise queue (in the microtask queue of the event loop)
Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
Promise.resolve().then(() => {
  Promise.resolve().then(() => console.log("This is Promise.resolve 2"));
  process.nextTick(() =>
    console.log("This is the inner nextTick in the Promise")
  );
});
Promise.resolve().then(() => console.log("This is Promise.resolve 3"));

process.nextTick(() => console.log("This is process.nextTick 1"));
process.nextTick(() => {
  console.log("This is process.nextTick 2");
  process.nextTick(() =>
    console.log("This is the inner nextTick in the nextTick")
  );
});
process.nextTick(() => console.log("This is process.nextTick 3"));
