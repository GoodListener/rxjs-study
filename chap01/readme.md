### chap01

---
#### observable

- Observavles is lazy push collection of multiple values.
- The following is an Observable that pushes the values 1, 2, 3 
immediately (synchronously) when subscribed, and the value 4 after 
one second has passed since the subscribe call, then completes:
```js
import { Observable } from 'rxjs'

const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  setTimeout(() => {
    subscriber.next(4)
    subscriber.complete()
  }, 1000)
})

observable.subscribe({
  next(x) {
    console.log('got value' + x)
  },
  error(err) {
    console.error(err)
  },
  complete() {
    console.log('done')
  }
})
```
To invoke the Observable and see these values, we need to subscribe to it.
