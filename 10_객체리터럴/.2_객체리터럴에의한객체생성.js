/**
 * 씨쁠쁠이나 자바같은 클래스 기반 객체지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 키워드연산자와 함께 생성자를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성한다.
 */

/**
 * 인스턴스
 *
 * 인스턴스란 클래스에 의해 생성되어 ㅁ메모리에 저장된 실체를 말한다. 객체지향 프로그래밍에서 객체는 클래스와 인스턴스를 포함한 개념이다.
 * 클래스는 인스턴스를 생성하기 위한 템플릿의 역할을 한다. 인스턴스는 객체가 메모리에 저장되어 실제로 존재하는 것에 초점을 맞춘 용어다.
 */

/**
 * 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원한다
 *
 * -객체 리터럴
 * -Object 생성자 함수
 * -생성자 함수
 * -Object.create 메서드
 * -클래스(ES6)
 *
 * 이러한 객체 생성 방법 중에서 가장 일반적이고 간단한 방법은 객체 리터럴을 사용하는 방법이다
 */

/**
 *  객체 리터럴
 *
 * 객체 리터럴은 중괄호({...}) 내에 0개 이상의 프로퍼티를 정의한다. 프로퍼티는 키와 값으로 구성된다. 키는 프로퍼티 이름, 값은 프로퍼티에 할당된 데이터다.
 *
 *
 */

// 예제 10-01

const person = {
  name: "Lee",
  sayHello() {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: ƒ}

person.sayHello(); // Hello! My name is Lee.

/**
 * 객체 리터럴은 프로토타입을 지정할 수 없다. 따라서 객체 리터럴로 생성된 객체의 프로토타입은 Object.prototype이다.
 */

/**
 *
 * 객체 리터럴의 중괄호는 코드 블록으 ㄹ의미하지 않는데 주의하자 코드블록의 닫는 중괄호 뒤에는 세미콜론을 붙이지 않지만 객체 리터럴의 닫는 중괄호 뒤에는 세미콜론을 붙인다.
 *
 * 객체 리터럴은 자바스크립트의 유연함과 강력함을 대표하는 객체 생성 방식이다. 객체를 생성하기 위해 클래스를 먼저 정의하고 new연산자와 함께 생성자를 호출할 필요가 없다. 숫자 값이나 문자열을 만드는 것과 같이 단순하고 간편하게 객체를 생성할 수 있다.
 */
