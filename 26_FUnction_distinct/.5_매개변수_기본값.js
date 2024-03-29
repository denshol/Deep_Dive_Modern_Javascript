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

//ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할수있다
//26-59
function sum(x = 0, y = 0){
  return x + y;
}
console.log(sum(1,2)); //3
console.log(sum(1));  //1

//매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효하다

//26-60
function logName(name = 'Lee' ){
  console.log(name);
}

logName();         //Lee
logName(undefined);//Lee
logName(null);     //null

//Rest 파라미터에는 기본값을 지정할 수 없다

//26-61
function foo (...rest = []){
  console.log(rest);
}