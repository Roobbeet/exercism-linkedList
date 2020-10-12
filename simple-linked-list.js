//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SimpleLinkedList {

  constructor(input) {
    this.value = input;
    this.list = []; //init list array
    this.unshiftedList = []
    this.reversedUnshiftedList = [];
    this.selectedNumber = 0
  }

  add(nextValue) {
    // console.log(nextValue.number)
    return this.list.push(nextValue.number) //push the value, not class
  }

  get length() {
    return this.list.length;
  }

  get head() { //harus dibikin object soalnya head ini langsung baca valuenya
    //head adalah nilai terakhir array
    //harus return object dari head
    let headObj;
    if(this.list.length == 0) {
      return headObj = {
        value: null,
        next: null,
      }
    } else if (this.list.length > 0) {
      // console.log(this.list[0])
      return headObj = {
        // counterInit: 1,
        value:  this.list[this.list.length - 1],
        next: {
          value: this.list[this.list.length - 2],
          next: {
            value: this.list[this.list.length - 3],
            next: {
              value: this.list[this.list.length - 4],
            }
          }
        }
        //transversing
        // next: () => {
        //   this.counterInit = this.counterInit + 1
        //   // return this.value = this.list[this.list.length - this.counterInit];
        // }
      }
      // return headObj.value = this.list[0]
    }
  }

  toArray() {
    this.list.reverse()
    // this.reverse()
    // console.log(this.list)
    return this.list
  }

  reverse() {
    console.log(this.list)
    this.list.reverse().reverse()
    // this.list.reverse()
    // console.log(this.list)
    return this.list
  }

}
export class List extends SimpleLinkedList {
  constructor(input = null) {
    super();
    this.value = input.forEach(element => {
      this.list.push(element)
      // console.log(this.list)
    });
    this.next = this.list.lenght > 0 ? this.list : null;
  }
  
}

export class Element{
  constructor(number) {
    this.number = number
  }
  
}