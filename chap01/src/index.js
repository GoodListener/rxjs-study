import {Observable} from "rxjs";

const observable = new Observable(subscriber => {
  subscriber.next(1);

  setTimeout(() => {
    subscriber.next(2);
    subscriber.complete();
  }, 1000)
})

observable.subscribe({
  next(x) { console.log(x) },
  error(err) { console.error(err) },
  complete() { console.log('done') }
})

