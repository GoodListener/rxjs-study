import { from, of, map, filter, first } from 'rxjs'

const observer = {
  next: x => console.log(x),
  error: err => console.error(err),
  complete: () => console.log('done')
}

const observable = from([10, 20, 30])

observable.subscribe(observer)

of(1,2,3)
  .pipe(
    map(x => x * x),
    filter(x => x === 4),
    first()
  )
  .subscribe(observer)
