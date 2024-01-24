//26.4.1 기본문법
/**
 *  Rest 프라미터(나머지 매개변수)는 매개변수 이름 앞에 세 개의 점 ...을 붙여서 정의한 매개변수를 의미한다. Rest파라미터는 함수에 전달된 인수들의 목록을 배열로 번달받ㄴ든다,.
 * *
 */

//26-49
function foo(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.\
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

//일반 매개변수와 Rest 파라미터는 함께 사용할수 있다 이때 함수에 전달된 인ㄷ수들은 매개변수와 Rest 파라미터에 순차적으로 할당된다
//26-50
function foo(param, ...rest) {
  console.log(param); //1
  console.log(rest); //[2,3,4,5]
}

foo(1, 2, 3, 4, 5);

//Rest 파라미터는 반드시 마지막 파라미터이어야 한다. 그렇지 않으면 에러가 발생한다
//26-51
function foo(...rest, param) {
  console.log(rest);
  console.log(param);
}

foo(1, 2, 3, 4, 5); //SyntaxError: Rest parameter must be last formal parameter

//26.4.2 Rest 파라미터와 arguments 객체
/**
 *  ES5에서는 함수를 정의할 때 매개변수의 개수를 확정할 수 없는 가변 인자 함수의 경우 매개변수를 통해 인수를 전달받는 것이 불가능하므로
 * arguments 객체를 사용해서 인수를 전달받았다. arguments 객체는 함수 내부에서 지역 변수처럼 사용된다. arguments 객체는 함수를 호출할 때 전달된 인수들의 목록을 담고있는 순회 가능한 유사 배열 객체이다.
 
 */

//26-54
// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
function sum() {
  //가변 인자 함수는 함수 내부에서 arguments 객체를 통해 인수를 전달받는다.
  console.log(arguments);
}

sum(1,2); //length:2, 0:1, 1:2

/*
 하지만 arguments 객체는 유사 배열 객체이므로 배열 메서드를 사용할 수 없다. 따라서 배열 메서드를 사용하려면 Function.prototype.apply 메서드를 사용하여 arguments 객체를 배열로 변환해야한다.
*/

//26-55
function sum(){
  //arguments 객체를 배열로 변환
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur){
    return pre + cur;
  }, 0);
}

//ES6에서는 Rest 파라미터를 사용하여 가변 인자 함수의 인수 목록을 배열로 직접 전달받을수있다. 이를 통해 객체를 배열로 변환하는 번거로움을 피할수잇다

//26-56
function sum(...args){
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1,2,3,4,5)); //15

 /**
  * 함수와 ES6 메서드는 Rest 파라미터와 arguments 객체를 모두 사용할 수 있다. 하지만 화살표함수는  함수 자체의 this 바인딩을 갖지 않으므로 arguments 객체를 사용할 수 없다. 
  *따라서 화살표 함ㄴ수로 가변 인자 함수를 구현해야 할떄는 반드시 Rest 파라미터를 사용해야한다. 
  */





