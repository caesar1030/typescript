// No overload matches this call.
// Overload 1 of 4, '(target: {}, source: T): {} & T', gave the following error.
// Argument of type 'T' is not assignable to parameter of type '{}'.
// Overload 2 of 4, '(target: object, ...sources: any[]): any', gave the following error.

import { UserProps } from './User';

// Argument of type 'T' is not assignable to parameter of type 'object'.ts(2769)
export class Attributes<T extends Object> {
  constructor(private data: T) {}

  // 리턴타입이 T 객체의 프로퍼티 타입들에 대응되기 위해
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// const attrs = new Attributes<UserProps>({ id: 5, age: 20, name: 'asdf' });

// const id = attrs.get('id');
// const name = attrs.get('name');
