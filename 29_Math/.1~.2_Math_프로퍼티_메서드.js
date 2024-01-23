/**표준 빌트인 객체인 Math는 수학적인 상수와 함수를 위한 프로퍼티와 메서드를 제공한다
 * 
 * Math는 생성자 함수가 아니다. 따라서 Math는 정적 프로퍼티와 정적 메서드만 제공한다.
 */

//29.1 Math 프로퍼티
//=====================================================================
//29.1.1 Math.PI
//원주율 파이값을 반환한다
Math.PI; // 3.14159263589793

//========================================================================
//29.2 Math 메서드

//29.2.1 Math.abs

/*Math.abs메서드는 인수로 전달된 숫자의 절대값을 반환한다

절대값은 반드시 0 또는 양수 이어야 한다.

*/

Math.abs(-1);   //->1
Math.abs('-1'); //->1
Math.abs('');   //->0
Math.abs([]);   //->0
Math.abs(null); //->0
Math.abs(undefined);  //->NaN
Math.abs({});         //->NaN
Math.abs('string');   //->NaN
Math.abs();           //->NaN


// 29.2.2 Math.round

//Math.round 메서드는 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환한다.

//29-03
Math.round(1.4)   // -> 1
Math.round(1.6)   // -> 2
Math.round(-1.4)  // -> -1
Math.round(-1.6)  // -> -2
Math.round(1)     // -> 1
Math.round()      // -> NaN

// 29.2.3 Math.ceil

//Math.ceil 메서드는 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환한다.
//소수점 이하를 올림하면 더 큰 정수가 된다. 예를 들어 ,1.4의 소수점이하를 올림하면 2가되고
//-1.4의 소수점 이하를 올림하면 -1이 된ㄷ나

//29-03
Math.ceil(1.4)   // -> 2
Math.ceil(1.6)   // -> 2
Math.ceil(-1.4)  // -> -1
Math.ceil(-1.6)  // -> -1
Math.ceil(1)     // -> 1
Math.ceil()      // -> NaN

// 29.2.3 Math.floor

//Math.ceil의 반대개념인 플로어 메서드는 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환한다.
//소수점 이하를 내림하면 더 작은 정수가 된다. 예를 들어 ,1.4의 소수점이하를 내림하면 1가되고
//-1.4의 소수점 이하를 내림하면 -2이 된ㄷ나

//29-05
Math.floor(1.9)   // -> 1
Math.floor(9.1)   // -> 9
Math.floor(-1.9)  // -> -2
Math.floor(-9.1)  // -> -10
Math.floor(1)     // -> 1
Math.floor()      // -> NaN

// 29.2.3 Math.sqrt

//Math.sqrt 메서드는 인수로 전달된 숫자의 제곱근을 반환한다

//29-06
Math.sqrt(9)    // -> 3
Math.sqrt(-9)   // -> NaN
Math.sqrt(2)    // -> 1.414213562373095
Math.sqrt(1)    // -> -1
Math.sqrt(0)    // -> 0
Math.sqrt()     // -> NaN


//Math.random 메서드는 임의의 난수(랜덤 숫자)를 반환한다 메서드가 바환한 난수는 0에서 1미만의 실수도,
//즉 0은 포함되지만. 1은 포함되지 않는다

//29-06
Math.random(); // 0에서 1 미만의 랜덤 실수*0.8208720231391746)

/**
 * 1에서 10범위의 랜덤 정수 취득
 * 1) Math.random으로 0에서 1미만의 랜덤실수를 구한 다음, 10을 곱해 0에서 10 미만의 랜덤 실수를 구한다.
 * 2) 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 10범위의 랜덤 실수를 구한다.
 * 3) Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 떼어 버린 다음 정수를 반환한다.
 */

const random = Math.floor((Math.random() * 10) + 1);
console.log(random); //1에서 10 범위의 정수

Math.sqrt(9)    // -> 3
Math.sqrt(-9)   // -> NaN
Math.sqrt(2)    // -> 1.414213562373095
Math.sqrt(1)    // -> -1
Math.sqrt(0)    // -> 0
Math.sqrt()     // -> NaN


//Math.pow 메서드는 첫번째 인수를 밑으로 두번쨰 인수를 지수로 거듭제곱한 결과를 반환한다.
//29-08
Math.pow(2, 8);    // -> 256
Math.pow(2, -1);   // -> 0.5
Math.pow(2);    // -> NaN

//Math.pow 메서드는 ES7에서 도입된 지수 연산자 **와 기능이 동일하다

//29-09
//ES7 지수 연산자
2 ** 2 ** 2;   // -> 16
Math.pow(Math.pow(2, 2), 2); // -> 16

//29.2.7 Math.max
//Math.max 메서드는 인수 중에서 가장 큰 수를 반환한다. 인수가 전달되지 않으면 -Infinity를 반환한다.
//인수가 NaN이거나 Infinity이면 NaN을 반환한다.

//29-10
Math.max(1);       // -> 1
Math.max(1, 2);    // -> 2
Math.max(1, 2, 3); // -> 3
Math.max();        // -> -Infinity


//29.2.8 Math.min
//Math.min 메서드는 인수 중에서 가장 작은 수를 반환한다. 인수가 전달되지 않으면 Infinity를 반환한다.
//인수가 NaN이거나 Infinity이면 NaN을 반환한다.

//29-11
Math.min(1);       // -> 1
Math.min(1, 2);    // -> 1
Math.min(1, 2, 3); // -> 1
Math.min();        // -> Infinity

