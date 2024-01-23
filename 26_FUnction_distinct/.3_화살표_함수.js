/**
 * 화살표 함수(arrow function)는 function 키워드 대신 화살표(=>,fat arrow)를 사용하여 기존의
 * 함수 정의 방식보다 간략하게 함수를 정의 할 수 있다. 화살표 함수는 표현만 간략한 것이 아니라 내부동작도 
 * 기존의 함수보다 간략하다 특히 화살표 함수는 콜백 함수 내부에서 this가 전역 객체를 가리키는
 * 문제를 해결하기 위한 대안으로 유용하다.
 *  * 
 */

//26.3.1 화살표 함수 정의
//화살표 함수 정의 문법은 다음과 같ㅇ다

//함수 정의
//화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의해야 한다.
//호출방식은 기존 함수와 동일하다

//26-11
const multiply = (x,y) => x * y;
console.log(multiply(2, 3)); // ->6


//매개변수 선언
//매개변수가 여러 개인 경우 소괄호 안에() 매개변수를 선언한다

//26-12
//const arrow = (x, y) => { ... };

//매개 변수가 1개인 경우 소괄호 ()를 생략할 수 있다.

//26-13
//const arrow = x =>: {...};

//매개변수가 없는 경우 소괄호()를 생략할 수 없다.

//26-14
//const arrow = () => { ... };



/**
 * 함수 몸체 정의
 * -함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호{}를 생략할수있다
 * 이때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환된다.
 * 
 */
//26-15
//concise body
const power = x => x ** 2;
power(2); // -> 4 

//위 표현은 다음과 동일하다.
//block body
//const power = x =>{ return x ** 2; };


//함수 몸체를 감싸는 중괄호{}를 생략한 경우 함수 몸체 내부의 문이 표현식이 아닌 문이라면
//에러가 발생한다. 표현식이 아닌 문은 반환할 수 없기 때문이다.

//26-16
//const arrow = () const x = 1; //SyntaxError : unexpected token 'const'

//위 표현은 다음과 같이 해석된다.
//const arrow = () = { return const x = 1; };

//따라서 함수몸체가 하나의 문으로 구성된다 해도 함수몸체의 문이 표현식이 아닌문이라면
//중괄호를 생략할수없다.

//26-17
//const arrow = () => {const x = 1};
//객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호()로 감싸주어야한다.

//26-18
const create = (id, content) => ({ id, content });
create(1, 'JavaScript'); // -> {id: 1, content: "JavaScript"}

//위 표현은 다음과 동일하다
//const create = (id,content) => { return {id,content};};

//객체 리터럴을 소괄호()로 감싸지 않으면 객체 리터럴의 중괄호 {}를 함수 몸체를 감싸는 중괄호{}로 잘못 해석한다.


//26-19

//{ id, content }를 함수 몸체 내의 쉼표 연산자문으로 해석한다.
//const create = (id, content) => { id, content };
create(1, 'JavaScript'); // -> undefined



//함수 몸체가 여러 개의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 없다. 이때 반환값이 있따면
//명시적으로 반환해야한다.
//26-20
const sum = (a, b) => {
  const result = a + b;
  return result;
}


//화살표 함수도 즉시 실행 함수로(JIFE)로 사용할 수 있다.
//26-21
const person = (name => ({
  sayHi() { return `Hi? My name is ${name}.`}
}))('Lee')

/**
 * 화살표 함수도 일급 객체이므로 Array.prototype.map
 * Array.prototype.filter , Array.prototype.reduce같은 
 * 고차함수 (Higher-Order Function HOF)에 인수로 전달할 수 있다ㅇ
 * 이 경우 일반적인 함수 표현식 보다 표현이 간결하고 가독성이 좋다.
 * 
 */
//26-22
//ES5
// [1,2,3].map(function(v){
//   return v * 2;
// });

//ES6
let arr = [1,2,3].map(v => v * 2);   // -> [2,4,6];

/*
  이처럼 화살표 함수는 콜백 함수로서 정의할 때 유용하다. 화살표 함수는 표현만
  간략한 것만이 아니다. 화살표 함수는 일반 함수의 기능을 간략화 했으며
  \this도 편리하게 설계되었다. 일반 함수와 화살표 함수의 차이에 대해살펴보자
*/

//================26.3.2 화살표 함수와 일반 함수의 차이
//화살표 함수와 일반 함수의 차이는 다음과 같다

// 01. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.

//26-23
const foo = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
//new foo();  // TypeError: Foo is not a constructor

//화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토 타입고 생성하지 않는다.

//26/24
const Foo = () => {};
//화살표 함수는 prototype 프로퍼티가 없다.
Foo.hasOwnProperty('prototype'); // -> false


// 02. 중복된 매개변수 이름을 선언할 수 없다

//일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.

//26-25
function normal(a,a) { return a + a;}
console.log(normal(1,2)) //4
//단 , string mode 에서 중복된 매개변수 이름을 선언하면 에러가 발생한다.
//--26-26
'user strict';

function normal(a,a){return a+a};
//SyntaxEerror : Duplicate parameter name not allowed in this context

//화살표 함수에서도 중복된 매개변수 이름을 선언하면 에러가 발생한다.

//26-27
const arrow = (a, a) =>  a + a;
//SyntaxError : Duplicate parameter name not allowed in this context



//03. 화살표 함수는 함수 자체의 this, arguments, super, new, target 바인딩을 갖지 않는다

/**
 * 따라서 화살표 함수 내부에서 this, arguments, super, new.target을 참조하면 스코프 체인을 통해
 * 상위 스코프의 this, arguments, super, new.target을 참조한다/
 * 
 * 만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this, arguments , super, new.target
 * 바인딩이 없으므로 스코프 체인 상에서 가장 가까운 사우이 함수 중에서 화살표 함수가 아닌 함수의
 * this,argumensts,super,new.target을 참조한다.
 * 
 */


//26.3.3 this 

/**
 * 화살표 함수가 일반 함수와 구별되는 가장 큰 특징은 바로 this다, 그리고 화살표 함수는 다른 ㄴ함수의 인수로
 * 전달되어 콜백 함수로 사용되는 경우가 많다.
 * 
 * 화사라표 함수의 this는 일반함수의 this와 다르게 동작한다. 이는 "콜백 함수 내부의 this문제", 즉 콜백 함수 내부의
 * this가 외부 함수의 this와 다르기 때문에 발생하는 문제를 해결하기 위해 의도적으로 설계된 것이다 
 * "콜백 함수 내부의 this문제"에 대해 다시 한번 살펴보자.
 * 
 * 
 * 22장 "this"에서 살펴보았듯이 디스 바인딩은 함수의 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로
 * 결정된다 . 다시 말해. 함수를 정의 할 때 디스에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는
 * 지에 따라 디스에 바인딩할 객체가 동적으로 결정된다
 * 
 * 이때 주의할 것은ㅇ 일반 함수로서 호출되는 콜백 함수의 경우다 . 고차함수의 인수로 전달되어 고차함수 내부에서
 * 호출되는 콜백 함수도 중첩 함수라고 할수있다 . 주어진 배열의 각 요소에 접두어를 추가하는 다음 예제를 살펴보자.
 * 
 */


//26-28
class Prefixer {
  constructor(prefix){
    this.prefix = prefix;
  }

  add(arr){
    //add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
    //1.
    return arr.map(function(item){
      return this.prefix + item; //2.
      // -> TypeError : Cannot read property 'prefix' of undefined
    });
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition','user-select']));


/**
 * 위 예제를 실행했을 떄 기대하느 ㄴ결과는 '-webkit-transition','-webkit-user-select']다, 
 * 하지만 TypeError가 발생한다 그 이유에 대해 살펴보자.
 * 
 * 프로토타입 메서드 내부인 1.에서 디스는 메서드를 호출한 객체(위 예제의 경우 프리픽서객체)를 가리킨다
 * 그런데 Array.prototype.map의 인수로 전달한 콜백 함수의 내부인 2에서 디스는 언디파인을 가리킨다
 * 이는 맵 메서드가 콜백함수를 일반 함수로서 호출하기 떄문이다
 */

/** Array.prototype.map 메서드
 * 아직 살펴보지 않았지만 이 메서드는 배열을 순회하며 배열의 각 요소에 대하여 인수로 전달된 콜백 함수를
 * 호출한다. 그리고 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다 위 예제에서 맵메서드는 매개변수 
 * ar에 전달된 ['tramsotopm', 'user-select']를 순회하며 콜백함수의 아이템 매개변수에게 ar요소값을 전달
 * 하면서 콜백 함수를 요소 개수만큼 호출한다 그리고 콜백 함수의 반환 값들로 구성된 새로운 배열을 반환한다r
 * 
 */


/**
 * 22장 "this"에서 살펴보았듯이 일반 함수로서 호출되는 모든 함수 내부의 디스는 전역 객체를 가리킨다.
 * 그런데 클래스 내부의 모든 코드에는 strict mode가 암묵적으로 적용된다. 따라서 Array.prototype.map 메서드의 콜백 함수에도 
 * strict mode가 적용된다 일반함수로서 호출된 모든 함수 내부의 디스에는 전역객체가 스트릭모드에서는 아니라 
 * 언디파인이 바인딩되므로 일반 함수로서 호출되는 맵 메서드의 콜백함수 내부의 디스에는 언디파인드가 바인딩 된다
 * \
 * 이떄 발생하는 문제가 바로 콜백함수내부의 디스 문제 다 즉, 콜백함수의 2.디스 와 외부 함수의 1.디스 이 서로 다른
 * 값을 가리키고 있기 때문에 타입에러가 발생한것 이와 같은 콜백함수 내부의 디스 문제를 해결하기 위해 ES6이전에는
 * 다음과 같은 방법을 사용했다
 * 
 */

// 01. add 메서드를 호출한 prefixer 객체를 가리키는 this를 일단 회피시킨 후에 콜백 함수 내부에서 사용한다.

add(arr){
  //this 를 일단 회피시킨다
  const that = this;
  return arr.map(function(item){
    //this 대신 that 을 참조한다
    return that.prefix + ' ' + item;
  })
}


// 02. Array.prototype.map의 두번째 인수로 add 메서드를 호출한 prefixer객체를 가리키는 this를 전달한다
// ES5에서 도입된 Array.prototype.map은 "콜백 함수 내부의 this문제"를 해결하기 위해 두 번째 인수로 콜백 함수 내부에서 this로 
//사용할 객체를 전달할수있다

//26-30 .....
add(arr){
  return arr.map(function(item){
    return this.prefix +'  '+ item;
  }, this) //this 에 바인딩된 값이 콜백 함수의 this에 바인딩 된다
}
















// 26.5 매개변수 기본값
/**
 * 함수를 호출할 때 매개변수의 개수만큼 인수를 전달ㄷ하는 것이 바람직하지만 그렇지 않은 경우에도
 * 에러가 발생하지 않는다. 이는 자바스크립트 엔진이 매개변수의 개수와 인수의 개수를 체크하지 않기 때문이다.
 * 
 * 인수가 전달되지 않은 매개변수의 값은 undefined다. 이를 방치하면 다음 예제와 같이 의도치 않은 결과가 나올수있다.
 * 
 */

//26-57
 function sum(x, y){
  return x + y;
 }
console.log(sum(1))//NaN

//따라서 다음 예제와 같이 매개변수에 인수가 전달되었는지 확인하여 인수가 전달되지않은경우
//매개변수에 기본값을 할당할 필요가 있다. 즉, 방어 코드가 필요하다

//26-58
function sum(x, y){
  //
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1,2)); //3
console.log(sum(1));  //1



















