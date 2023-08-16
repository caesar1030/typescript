class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything(['a', 'b']);

// 함수

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything(['a', 'b']);

class Car {
  print() {
    console.log('나는 차다');
  }
}

class House {
  print() {
    console.log('나는 집이다');
  }
}

interface Printable {
    print: ()=>void
}

function printHouserOrCars<T extends Printable>(arr: T[]): void {
    for (let i=0; i<arr.length; i+){
        arr[i].print()
    }
}


printHouserOrCars([1,new Car(),3,4])