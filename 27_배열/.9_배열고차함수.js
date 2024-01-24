/**
 * 고차 함수(Higher-order function)는 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다.
 * 자바스크립트의 함수는 일급 객체이므로 값처럼 인수로 전달할 수 있으며 반환할 수도있다. 
 * 고차함수는 외부 상태 변경이나 가변(mutable) 데이터를 피하고 불변성(Immutability)을 지향하는 
 * 함수형 프로그래밍에 기반을 두고 있다.
 * 
 * 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 **조건문과 반복문을 제거**하여
 * 복잡성을 해결하고 **변수 사용을 억제**하여 상태 변경을 피하려는 프로그래밍 패러다임이다.
 * 
 * 조건문과 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성을 해치고,
 * 변수는 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될수있기떄문이다.
 * 
 * 함수형 프로그래밍은 결국 **순수 함수를 통해 부수 효과를 최대한 억제**
 * 하여 오류를 피하고 프로그램의 안정성을 높이려는 노력이다.
 * 
 * 자바스크립트는 고차 함수를 다수 지원한다. 특히 배열은 매우 유용한 고차 함수를 다수 제공한다. 
 * 배열 고차 함수는 활용도가 높고 유연성이 좋아 자주 사용되므로 반드시 숙지해야한다.
 * 
 */

// 27.9.1 Array.prototype.sort
// Array.prototype.sort 메서드는 배열의 요소를 정렬한다. 원본 배열을 직접 변경한다.
// Array.prototype.sort 메서드는 아래의 알고리즘에 따라 배열의 요소를 정렬한다.
// 1. 배열을 요소의 타입에 따라 오름차순으로 정렬한다.
// 2. 배열의 요소가 모두 숫자 타입이라면 요소 값을 문자열로 변환하고, 비교 연산자를 사용하여 오름차순으로 정렬한다.
// 3. 배열의 요소가 모두 문자열 타입이라면 유니코드 코드 포인트를 비교 연산자를 사용하여 오름차순으로 정렬한다.
// 4. 배열의 요소가 모두 객체 타입이라면 객체의 참조값을 비교 연산자를 사용하여 오름차순으로 정렬한다.
// 5. 위의 경우가 아니라면 undefined를 반환한다.

// 예제 27-87
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

//sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// 한글 문자열인 요소도 오름차순으로 정렬 된다.
// 예제 27-88
const fruits2 = ['바나나', '오렌지', '사과'];

// 오름차순(ascending) 정렬
fruits2.sort();

//sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits2); // [ '바나나', '사과', '오렌지' ]

//sort 메서드는 기본적으로 오름차순으로 요소를 정렬한다. 따라서 내림차순으로 요소를 정렬하려면 
//sort 메서드 호출 후 reverse 메서드를 호출하면 된다.




// 예제 27-89
const fruits3 = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascemding) 정렬
fruits3.sort();

//sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits3); // [ 'Orange', 'Banana', 'Apple' ]

// 내림차순(descending) 정렬
fruits.reverse();

console.log(fruits3); // [ 'Apple', 'Banana', 'Orange' ]

// 문자열 요소로 이루어진 배열의 정렬은 아무런 문제가 없다. 하지만 숫자 요소로 이루어진 배열의 정렬은
//주의가 필요하다 . 다음 예제를 살펴보자.

// 예제 27-90
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();

//숫자 요소들로 이루어진 배열은 의도한 대로 정렬되지 않는다.
console.log(points); // [ 1, 10, 100, 2, 25, 40, 5 ]

/**
 * sort 메서드는 기본 정렬 순서는 유니코드 코드 포인트 순서를 따른다. 배열의 요소가 숫자 타입이라 할지라도
 * 배열의 요소를 일시적으로 문자열로 변환한 후, 유니코드 코드 포인트 순서에 따라 정렬한다.
 * 
 * 예를들어, 문자열 '1'의 유니코드 코드 포인트는 U+0031, 문자열 '2'의 유니코드 코드 포인트는 U+0032다.
 * 이처럼 문자열'1'의 유니코드 코드 포인트가 문자열 '2'의 유니코드 코드 포인트보다 앞서므로 
 * 문자열 배열 ['2', '1']을 sort 메서드로 정렬하면 ['1', '2']가 된다. sort 메서드는
 * 배열의 요소를 일시적으로 문자열로 변환한 후 정렬하므로 숫자 배열 [2, 1]을 sort 메서드로 정렬해도 
 * ['1', '2']가 된다.
 */


// 예제 27-91
['2', '1'].sort(); // ["1", "2"]
[2, 1].sort();  // [1, 2]


/**
 * 하지만 문자열'10'의 유니코드 코드 포인트는 U+0031U+0030이다. 따라서 문자열 배열 ['2', '10']을
 * sort 메서드로 정렬하면 문자열 '10'의 유니코드 포인트 U+0031U+0030이 
 * 문자열 '2'의 유니코드 코드 포인트 U+0032보다 앞서므로 ['10', '2']가 된다.
 * sort 메서드는 배열의 요소를 일시적으로 문자열로 변환한 후 정렬하므로 숫자 배열 [2, 10]을 sort 메서드로 정렬해도
 * ['10', '2']가 된다.
 */

// 예제 27-92
['2', '10'].sort(); // ["10", "2"]
[2, 10].sort(); // [10, 2]

/*
따라서 숫자 요소를 정렬할 때는 sort 메서드 **정렬 순서를 정의하는 비교 함수를 인수로 전달**해야한다.
비교 함수는 양수나 음수 또는 0을 반환한다. 이때 반환값이 0보다 작은 경우, 첫 번째 인수를 앞으로 정렬하고,
반환값이 0보다 큰 경우, 두 번째 인수를 앞으로 정렬한다. 반환값이 0인 경우, 순서를 변경하지 않는다.
*/

// 예제 27-93
const points2 = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열을 오름차순으로 정렬하는 비교 함수, 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort((a, b) => a - b);
console.log(points2); // [ 1, 2, 5, 10, 25, 40, 100 ]

//숫자 배열에서 최소/최대값 취득
console.log(points2[0], points2[points2.length - 1]); // 1 100

// 숫자 배열을 내림차순으로 정렬하는 비교 함수, 반환값이 0보다 작은 경우, b를 우선하여 정렬한다.
points.sort((a, b) => b - a);
console.log(points2); // [ 100, 40, 25, 10, 5, 2, 1 ]

//숫자 배열에서 최소/최대값 취득
console.log(points2[points2.length - 1], points2[0]); // 1 100

//객체를 요소로 갖는 배열을 정렬하는 예제는 다음과 같다.

// 예제 27-94
const todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' }
];

// 비교 함수
function compare(key) {
  //프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
  //비교 함수는 양스/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할수있다
  return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

// id를 기준으로 정렬
todos.sort(compare('id'));
console.log(todos);
/*
[
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
  { id: 4, content: 'JavaScript' }
]
*/


// content를 기준으로 정렬
todos.sort(compare('content'));
console.log(todos);
/*
[
  { id: 2, content: 'CSS' },
  { id: 1, content: 'HTML' },
  { id: 4, content: 'JavaScript' }
]
*/


/*
sort 메서드의 정렬 알고리즘

sort 메서드는 quicksort알고리즘을 사용했었다. quicksort알고리즘은 동일한 값의 요소가 중복되어 있을때 초기 순서와
변경 될수있는 불안정한 정렬 알고리즘으로 알려있다.ECMAScript 2019(ES10) timsort알고리즘으로 변경되었다.
*/



// 27.9.2 Array.prototype.forEach
/**
 * 앞에서 살펴보았듯이 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직내에 존재하는
 * **조건문과 반복문**을 제거하여 복잡성을 해결하고 
 * **변수 사용을 억제**하여 상태 변경을 피하려는 프로그래밍 패러다임이다.
 * 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성을 해치고,
 * 특히 for 문은 반복을 위한 변수를 선언해야 하며, 조건식과 증감식으로 이루어져 있어서 
 * 함수형 프로그래밍이 추구하는 바와 맞지 않다.
 * 
 */

// 예제 27-95
const numbers = [1, 2, 3];
  const pows = [];

  //for 문으로 배열 순회
  for(let i = 0; i < numbers.length; i++){
    pows.push(numbers[i] ** 2);
  }

  console.log(pows); // [ 1, 4, 9 ]

  /**
   *  forEach 메서드는 for 문을 대체할 수 있는 고차함수다. forEach 메서드는 자신의 내부에서
   * 반복문을 실행한다. 즉, forEach 메서드는 반복문을 추상화한 고차 함수로서 내부에서 반복문을 
   * 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다
   * for 문으로 구현된 위 예제를 forEach 메서드로 구현하면 다음과 같다.
   *    *    */

// 예제 27-96
const numbers2 = [1, 2, 3];
const pows2 = [];

//forEach 메서드로 배열 순회
numbers2.forEach(item => pows2.push(item ** 2));
console.log(pows2); // [ 1, 4, 9 ]

/**
 * 위 예제의 경우 forEach 메서드를 배열 numbers2의 모든요소를 순회하면서 콜백 함수를 반복 호출한다.
 * numbers2의 요소가 3개이므로 콜백 함수는 3번 호출된다. 이 때 콜백함수를 호출하는 
 * forEach 메서드는 콜백 함수에 인수를 전달할수 있다
 * 
 *  forEach 메서드는 콜백 함수는 forEach 메서드를 호출한 배열의 요소값과 인덱스, 메서드를 호출한 배열 자체
 * 즉 this를 순차적으로 전달받을 수 있다 다시말해 forEach메서드는 콜백함수를 호출할때 3개의 인수 즉
 * 메서드를 호출한 배열의 요소값과 인덱스, 메서드를 호출한 배열(디스) 자체를 순차적으로 전달한다.
 */

// 예제 27-97

[1,2,3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/

/**
 * JSON.stringfy 메서드
 * 
 * JSON.stringify 메서드는 객체를 JSON 형식의 문자열로 변환한다. 
 *  위 예제에서는 배열을 JSON 형식의 문자열로 변환하여 출력하기 위해 JSON.stringify 메서드를 사용했다.
 *  
 *  */

// forEach 메서드는 원본 배열(this)을 변경하지 않는다. 하지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.


// 예제 27-98

const numbers3 = [1, 4, 9];

//forEach 메서드는 원본 배열을 변경하지 않는다. 하지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
// 콜백 함수의 세 번째 매개변수 arr은 메서드를 호출한 배열 numbers3 자체를 가리킨다.
// 따라서 콜백 함수에서 배열 numbers3를 직접 변경할 수 있다.

numbers3.forEach((item, index, arr) => { arr[index] = item ** 2});
console.log(numbers3); // [ 1, 16, 81 ]

// forEach 메서드는 빈 배열에는 호출할 수 없다. forEach 메서드는 호출한 배열의 요소를 순회하면서
// 콜백 함수를 호출하는 고차 함수이므로 호출한 배열이 없다면 콜백 함수를 호출할 대상이 없다.
// 따라서 빈 배열에는 forEach 메서드를 호출할 수 없다.


// forEach 메서드는 언제나 undefined를 반환한다. 따라서 forEach 메서드를 호출한 결과를 변수에 할당하면
// 변수의 값은 언제나 undefined다.
// 예제 27-99
const result = [1,2,3].forEach(console.log);
console.log(result); // undefined


// forEach 메서드는 두번째 인수로 forEach 메서드 내부에서 this로 사용할 객체를 전달할 수 있다.
//다음 예제를 살펴보자.

// 예제 27-100
class Numbers {
  numberArray = [];
  multiply(arr) {
    arr.forEach(function (item) {
      //TypeError: Cannot read property 'numberArray' of undefined
      this.numberArray.push(item * item);
    });
  }
}

const numbers4 = new Numbers();
numbers4.multiply([1,2,3]);

/**
 * forEach 메서드의 콜백 함수는 일반 함수로 호출되므로 콜백 함수 내부에서 this를 사용하면 undefined다.
 * this가 전역 객체가 아닌 undefined인 이유는 클래스 내부의 모든 코드에는 암묵적으로 strict mode가 적용되기 때문이다.
 *  
 *  forEach 메서드의 콜백 함수 내부의 this와 multiply 메서드 내부의 this를 일치시키려면 
 *  forEach 메서드의 두 번째 인수로 forEach 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달하면 된다.
 *  이 객체는 콜백 함수의 this와 일치하게 된다.
 * 
 *  
 */

// 예제 27-101
class Numbers2 {
  numberArray = [];
  multiply(arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);
    }, this); // forEach 메서드의 두 번째 인수로 forEach 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달한다.
  }
} 

const numbers5 = new Numbers2();
numbers5.multiply([1,2,3]);
console.log(numbers5.numberArray); // [1,4,9]

/**
 *  더 나은 방법은 화살표 함수를 사용하는 것이다. 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
 *  따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.즉,multiply 메서드 내부의 this를 그대로 참조한다.
 *  
 */



// 예제 27-102
class Numbers3 {
  numberArray = [];
  multiply(arr){
    // 화살표 함수 내부에서 this를 참조하면  상위 스코프의 this를 그대로 참조한다.
    arr.forEach(item => this.numberArray.push(item * item));
  }
}

const numbers6 = new Numbers3();
numbers6.multiply([1,2,3]);
console.log(numbers6.numberArray); // [1,4,9]

//forEach 메서드의 동작을 이해하기 위해 forEach메서드의 폴리필, 다음 예제를 살펴보자.

// 예제 27-103
if(!Array.prototype.forEach){
  Array.prototype.forEach = function(callback, thisArg){
    //
    thisArg = thisArg || window;
    for(let i = 0; i < this.length; i++){
      callback.call(thisArg, this[i], i, this);
    }
  };
}
 


// 27.9.3 Array.prototype.filter
/**
 * 
 * filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달된 콜백 함수를 반복 호출한다.
 * 이때 **콜백 함수의 반환값이 true인 요소만을 모아서 새로운 배열을 반환**한다.
 * 이떄 원본배열은 변경되지 않는다.
 * 즉, 배열의 요소 중에서 콜백 함수의 반환값이 true인 요소만을 모아 새로운 배열을 반환한다.
 * 즉 배열의 요소 중에서 콜백 함수를 통해 정의한 조건을 만족하는 요소만을 모아서 새로운 배열을 반환한다.
 * 
 * 
 */

// 예제 27-110
// 숫자로 이루어진 배열의 요소 중에서 짝수인 요소만을 모아서 새로운 배열을 반환한다.

[1,2,3,4,5].filter(item => item % 2===0); // [,2,4]
//1은 2로 나눈 나머지가 1이므로 true로 평가된다. 따라서 새로운 배열에 1이 추가된다.

// 숫자로 이루어진 배열의 요소 중에서 홀수인 요소만을 모아서 새로운 배열을 반환한다.
[1,2,3,4,5].filter(item => item % 2); // [1,3,5]

// 빈 배열은 언제나 빈 배열을 반환한다.
[].filter(item => item % 2); // []


/**
 * forEach,map메서드와 마찬가지로 필터메서드는 자신을 호출한 배열의 모든 요소를 순회하면서
 * 인수로 전달받은 콜백 함수를 반복 호출한다. forEach 메서드는 언제나 undefined를 반환한다.
 * map 메서드는 콜백 함수의 반환값으로 구성된 새로운 배열을 반환한다.
 * filter 메서드는 콜백 함수의 반환값이 true인 요소만을 모아서 새로운 배열을 반환한다.
 * 
 * filter 메서드는 자신을 호출한 배열에서 필터링 조건을 만족하는 특정 요소만
 * 추출하여 새로운 배열을 만들고 싶을 때 사용한다. 위예제에서  필터메서드에 콜백함수는
 * 요소값을 2로 나눈 나머지를 반환한다 이떄 반환값이 트루 즉 홀수인 요소만 추출하여새로운 배열을 만든다
 * 따라서 필터 메서드가 생성하여 반환한 새로운 배열의 렝스 프로퍼티 값은 필터 메서드를 호출한 배열의 렝스
 * 렝스 프로퍼티값과 같거나 작다.
 *  * 
 */

// 예제 27-111
// 필터 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1,2,3,4,5].filter((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
  return item % 2 === 0;
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3,4,5]
요소값: 2, 인덱스: 1, this: [1,2,3,4,5]
요소값: 3, 인덱스: 2, this: [1,2,3,4,5]
요소값: 4, 인덱스: 3, this: [1,2,3,4,5]
요소값: 5, 인덱스: 4, this: [1,2,3,4,5]
*/

//필터 메서드는 자신을 호출한 배열에서 특정 요소를 제거하기 위해 사용할 수도 있다

// 예제 27-112
 class Users {
  constructor(){
    this.users = [
      {id: 1, name: 'Lee'},
      {id: 2, name: 'Kim'},
      {id: 3, name: 'Choi'},
    ];
    
  }
 }

 //요소 추출
 findById(id){
  //id가 일치하는 사용자만 반환한다.
  return this.users.filter(user => user.id === id);
 };

 //요소 제거
 remove(id) {
  //id가 일치하지 않는 사용자를 제거 한다
  this.users = this.users.filter(user => user.id !== id);
 };

 const users = new Users();

 let user = users.findById(1);
  console.log(user); // [{id: 1, name: 'Lee'}]

  //id가 1인 사용자를 제거한다.
  users.remove(1);

  user = users.findById(1);

  console.log(user); // []

/**
 * filter 메서드를 사용해 특정 요소를 제거할 경우 특정 요소가 중복되어 있다면 중복된
 * 요소가 모두 제거된다,. 특정 요소를 하나만 제거하려면 인덱스오브메서드를 통해 특정 요소의 인덱스를 취득한다음 
 * 스플라이스 메서드를 사용한다.
 * 
 * 
 */

// 27.9.5 Array.prototype.reduce
/*
reduce 메서드는 자신을 호출한 배열을 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값을 다음 순회 시에 콜백ㅎ 함수의 첫번쨰 인수로 전달하면서 ㅇ콜백함수를 호출하여 
**하나의 결과값을 만들어 반환**한다 이떄 원본 배열은 변경되지 않는다


reduce 메서드는 첫번째 인수로 콜백함수 두번쨰 인수로 초기값을 전달받는다. 
reduce 메서드의 콜백 함수엔,ㄴ 4개의 인수, 초기값 또는 콜백함수의 이전반환값, reduce 메서드를 호출한 배열의 요소값과 인덱스, reduce메서드를 호출한 배열 자체 즉 this 가 전달된다

다음예제를 살펴보자 예제의 reduce 메서드의 콜백 함수는 2개의 인수, 즉 
콜백 함수와 초기값 0을 전달받아 자신을 호춣한 배열의 모든 요소를 누적한 결과를 반환한다.
*/

// 예제 27-113
//1부터 4까지 누적합을 구한다.
const sum = [1,2,3,4].reduce((accumulator, currentValue, index, array)=>
accumulator + cuurrentValue,0);

console.log(sum); // 10
//reduce 메서드의 콜백함수는 4개의 인수를 전달받아 배열의 length만큼 총4회 호출된다.이때 콜백 함수로 전달되는 인수와 콜백 함수의 반환값은 다음과 같다

//=================평균 구하기
// 예제 27-114
const values = [1,2,3,4,5,6];

const average = values.reduce((acc, cur, i, { length }) => {
  // 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다
  return i === length - 1 ? (acc + cur) / length : acc + cur;
},0);
console.log(average); // 3.5

//===============최대값 구하기
// 예제 27-115
const values2 = [1,2,3,4,5];

const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5

//최대값 구할 떄는 리듀스메서드 보다 매스맥스메서드를 사용하는 방법이 더 직관적이다

Math.max(...values2); // 5
// var max = Math.max.apply(null, values2); // 5

//==================요소의 중복 횟수 구하기

// 예제 27-116
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
  // 첫 ㅡ번쨰 순회 시 acc는 초기값인 {} 이고 cur은 첫 번쨰 요소인 console.error("'banana'다",'banana'다)
  // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당된다.
  //만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화 console.error('한다',한다)
acc[cur] = (acc[cur] || 0) + 1;
return acc;
}, {});
// 콜백 함수는 총5번 호출되고 다음과 같이 결과값을 반환한다
// {banana: 1}
// {banana: 1, apple: 1}
// {banana: 1, apple: 1, orange: 1}
// {banana: 1, apple: 1, orange: 2}
// {banana: 1, apple: 2, orange: 2}
console.log(count); // {banana: 1, apple: 2, orange: 2}








 

// 27.9.6 Array.prototype.some
/**
 * some 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다.
 *  이떄 메소드는 콜백 함수의 반환값이 단 한번이라도 참이면 트루 모두 거짓이면 false를 반환한다.
 * 즉, 배열의 요소중에서 콜백 함수의 반환값이 단 한번이라도 참이면 true를 반환하고, 모두 거짓이면 false를 반환한다.
 * 즉 배열의 요소중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개이상 존재하는지 확인
 * 하여 그결과를 불리언 타입으로 반환한다. 단 메서드를 호출한 배열이 빈배열인 경우
 * 언제나 false를 반환하므로 주의
 * 
 * 
 */

// 예제 27-128
// 숫자로 이루어진 배열의 요소 중에서 10보다 큰 요소가 1개 이상 존재하는지 확인
[1,2,3,4,5].some(item => item > 10); // false

// 숫자로 이루어진 배열의 요소 중에서 3보다 큰 요소가 1개 이상 존재하는지 확인
[1,2,3,4,5].some(item => item > 3); // true

// 빈 배열은 언제나 false를 반환한다.
[].some(item => item > 3); // false

// some 메서드는 두 번째 인수로 some 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
// 이 객체는 콜백 함수의 this와 일치하게 된다. 더 나은 방법은 화살표 함수를 사용하는 것이다.
// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.


 //27.9.7 Array.prototype.every
  /**
   * every 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다.
   * 이때 메서드는 콜백 함수의 반환값이 모두 참이면 true를 반환하고, 거짓이 하나라도 있으면 false를 반환한다.
   * 즉, 배열의 요소중에서 콜백 함수의 반환값이 모두 참이면 true를 반환하고, 거짓이 하나라도 있으면 false를 반환한다.
   * 즉 배열의 요소중에 콜백 함수를 통해 정의한 조건을 모두 만족하는지 확인하여 그 결과를 불리언 타입으로 반환한다.
   * 단 메서드를 호출한 배열이 빈 배열인 경우 언제나 true를 반환하므로 주의
   * 
   * 
   */
  
  
  // 예제 27-129
  // 숫자로 이루어진 배열의 요소 중에서 10보다 큰 요소가 모두 존재하는지 확인
  [1,2,3,4,5].every(item => item > 10); // false

  // 숫자로 이루어진 배열의 요소 중에서 3보다 큰 요소가 모두 존재하는지 확인
  [1,2,3,4,5].every(item => item > 3); // false

  // 빈 배열은 언제나 true를 반환한다.
  [].every(item => item > 3); // true

  // every 메서드는 두 번째 인수로 every 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.



//27.9.8 Array.prototype.find
/*
 ES6에서 도입된 find메서드는 자신을 호출한 배열의 요소를ㄹ 순회하면서 인수로 전달된 콜백 함수를
 호출하여 반환값이 true인 첫 번째 요소를 반환한다. 즉, 콜백 함수의 반환값이 true인 요소를 찾으면 즉시 검색을 종료하고
  해당 요소를 반환한다. 만약 콜백 함수의 반환값이 모두 false라면 undefined를 반환한다.
 
  forEach, map, filter 메서드와 마찬가지로 find 메서드도 콜백 함수는 find 메서드를 호출한
  요소값과 인덱스, find 메서드를 호출한 배열 자체 디스 를 순차적으로 전달받는다. 
*/

// 예제 27-130
 const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
 ]

  // id가 2인 요소를 검색
  users.find(user => user.id === 2); // { id: 2, name: 'Kim' }

  /**
   *  filter 메서드는 콜백 함수의 반환값이 true인 모든 요소를 추출하여 새로운 배열을 반환한다.
   *  filter 메서드 반환값이 언제나 배열이다. 하지만 find 메서드는 콜백 함수의 반환값이 
   *  true인 첫 번째 요소를 반환한다. 
   *  따라서 find 메서드의 배열이 아닌 해당 요소값이다.
   *  
   */

// 예제 27-131
// filter 메서드는 배열을 반환한다.
[1,2,2,3].filter(user => user.id === 2); // [ 2,2 ]

// find 메서드는 요소값을 반환한다.
[1,2,2,3].find(user => user.id === 2); // 2

/**
 *  forEach, map, filter 메서드와 마찬가지로 find 메서드의 두 번쨰 인수로 find 메서드 콜백함수 내부에서
 *  this로 사용할 객체를 전달할 수 있다. 이 객체는 콜백 함수의 this와 일치하게 된다.
 *  더 나은 방법은 화살표 함수를 사용하는 것이다. 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
 * 
 */

//27.9.9 Array.prototype.findIndex
/**
 * ES6에서 도입된 findIndex 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여
 * 반환값이 true인 첫 번째 요소의 인덱스를 반환한다. 즉, 콜백 함수의 반환값이 true인 요소를 찾으면 즉시 검색을 종료하고
 *  해당 요소의 인덱스를 반환한다. 만약 콜백 함수의 반환값이 모두 false라면 -1을 반환한다.
 * 
  * forEach, map, filter 메서드와 마찬가지로 findIndex 메서드도 콜백 함수는 findIndex 메서드를 호출한 
 *  요소값과 인덱스, findIndex 메서드를 호출한 배열 자체 디스 를 순차적으로 전달받는다.
 */


// 예제 27-132
const users2 = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// id가 2인 요소의 인덱스를 검색
users2.findIndex(user => user.id === 2); // 1

// name이 'Park'인 요소의 인덱스를 검색
users2.findIndex(user => user.name === 'Park'); // 3

// 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 다음과 같이 콜백 함수를 추상화할수잇다.
  function predicate(key, value) {
    // key는 value를 기억하는 클로저를 반환
    return item => item[key] === value;
  }
 
  // id가 2인 요소의 인덱스를 검색
  users2.findIndex(predicate('id', 2)); // 1

  // name이 'Park'인 요소의 인덱스를 검색
  users2.findIndex(predicate('name', 'Park')); // 3

  
  /**
   *  forEach, map, filter 메서드와 마찬가지로 
   * findIndex 메서드의 두 번째 인수로 findIndex 메서드 콜백함수 내부에서
   *  this로 사용할 객체를 전달할 수 있다. 이 객체는 콜백 함수의 this와 일치하게 된다.
   *  더 나은 방법은 화살표 함수를 사용하는 것이다. 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
   *
   * /
   * 
   * 
   */


// 27.9.10 Array.prototype.flatMap

// ES10(ECMAScript 2019)에서 도입된 flatMap 메서드는 map 메서드를 통해 생성된 새로운 배열을 평탄화한다.
// flatMap 메서드는 map 메서드와 flat 메서드를 순차적으로 실행한 것과 같다.

// 예제 27-133
const arr = ['hello', 'world'];

// map과 flat을 순차적으로 실행
console.log(arr.map(x => x.split('')).flat()); 
// [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]

// flatMap은 map을 통해 생성된 새로운 배열을 평탄화한다.
console.log(arr.flatMap(x => x.split('')));
// [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]

/**
 * 단,flatMap 메서드는 flat 메서드처럼 인수를 전달하여 평탄화 깊이를 지정할 수는 없고 1단계만
 * 평탄화한다.map 메서드를 통해 생성된 중첩 배열의 평탄화 깊이를 지정해야하면 flatMap 메서드를 사용하지말고,
 *  map 메서드와 flat 메서드를 사용해야한다.
 *  
 */

// 예제 27-134
const arr2 = ['hello', 'world'];

//flatMap은 1단계만 평탄화한다.
arr.flatMap((str, index) => [index, [str, str.length]]);
// [[0, ['hello', 5]], [1, [ 'world', 5 ]]] => [0, ['hello', 5], 1, [ 'world', 5 ]]


  //평탄화 깊이를 지정해야하면 flatMap 메서드를 사용하지말고, map 메서드와 flat 메서드를 각각 호출한다.
  arr.map((str, index) => [index, [str, str.length]]).flat(2);
  // [[0, ['hello', 5]], [1, [ 'world', 5 ]]] => [0, 'hello', 5, 1, 'world', 5]

 