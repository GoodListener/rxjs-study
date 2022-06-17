import {Observable, from, observable } from "rxjs";

const observable1 = new Observable(subscriber => {
  subscriber.next(1);

  setTimeout(() => {
    subscriber.next(2);
    subscriber.complete();
  }, 1000)
})

observable1.subscribe({
  next(x) { console.log(x) },
  error(err) { console.error(err) },
  complete() { console.log('done') }
})


const observable2 = new Observable(subscriber => {
  let index = 0;
  setInterval(() => {
    subscriber.next(index++)

    if (index === 10) {
      subscriber.complete()
    }
  }, 1000)
})

observable2.subscribe(value => console.log(value))

const observable3 = new Observable(subscriber => {
  let index = 0
  while (true) {
    subscriber.next(index++)

    if (index === 5) {
      subscriber.complete()
      break;
    }
  }
})

observable3.subscribe(i => console.log(i))

const observable4 = from([10, 20, 30])
const subscription = observable4.subscribe(x => console.log(x))
subscription.unsubscribe()

// plain javascript
function subscribe(subscriber) {
  const intervalId = setInterval(() => {
    subscriber.next('hi')
  }, 1000)

  return function unsubscribe() {
    clearInterval(intervalId)
  }
}

const unsubscribe = subscribe({next: (x) => console.log(x)})
unsubscribe()