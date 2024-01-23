/**
 * ES6 이전 사양에는 메서드에 대한 명확한 정의가 없었다. 일반적으로 메서드는 객체에 바인딩된 함수를 일컫는 의미로 사용되었다. ES6 사양에서는 메서드에 대한 정의가 명확하게 규정되었다.
 ***** ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다**
 *  */
//26-05
const obj = {
  x: 1,
  //foo is method
  foo() { return this.x;},
  //bar에 바인ㄷ닝된 함수는 메서드가 아닌 일반 함수다
  bar: function() { return this.x; }  
  };
  console.log(obj.foo()); //1
  console.log(obj.bar()); //1

  //ES6 사양에서 정의한 메서드(이하 ES6 메서드)는 인스턴스를 생성할 수 없는 non-constructor다.
  //따라서 ES6 메서드는 생성자 함수로서 호출할 수 없다.

  //26-06
  //new obj.foo(); // -> TypeError: obj.foo is not a constructor
  new obj.bar(); // -> bar {}

  //ES6 메서드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.

  //26-07
  // obj.foo는 constructor가 아닌 ES6 메서드이므로 protype 프로퍼티가 없다.
  console.log(obj.foo.hasOwnProperty('prototype')); //-> false
  console.log(obj.bar.hasOwnProperty('prototype')); //-> true

  //참고로 표준 빌트인 객체가 제공하는 프로토타입 메서드와 정적 메서드는 모두non-constructor다.

  //26-08
  String.prototype.toUpperCase.prototype; // -> undefined;
  String.fromCharCode.prototype          //-> undefined;

  Number.prototype.toFixed.prototype    //->undifined;
  Number.isFinite.prototype;           //-> undifined;

  Array.prototype.map.prototype;      //-> undefined;
  Array.from.prototype;           // ->undefined;

  /**
   * ES6 메서드는 자신을 바인딩한 객체를 가리키는 매수 슬롯 [[HomeObject]]를 갖는다. super 참조는 
   * 내부 슬롯 [[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조하므로 내부 슬롯 홈오브젝트를 갖는
   * ES6 메선드는 수퍼 키워드를 사용할 수 있다.
   *    */

//예제 26-09
const base ={
  name: "Lee",
  sayHi() {
    return `Hi! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  //sayHi는 ES6의 메서드다, ES6 메서드는 [[HomeObject]]를 갖는다.
  //sayHi는 [[HomeObject]]는 sayHi가 바인딩된 객체인 derived를 가리키고
  //super는 sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킨다
  sayHi(){
    return `${super.sayHi()}. how are you doing?`;
  }
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?


//26-10
const derived2 = {
  __proto__:base,
  //sayHi는 ES6 메서드가 아니다.
  //따라서 sayHi [[HomdeObject]]를 갖지 않으므로 super 키워드를 사용할 수 없다.
  sayHi: function(){
    //SyntaxError: 'super' keyword unexpected here
    return `${super.sayHi()}. how are you doing`;
  }
}
/**
 * 이처럼 ES6 메서드는 본연의 기능(super)을 추가하고 의미적으로 맞지 않는 기능(constructor)
 * 는 제거 했다.따라서 메서드를 정의 할 때 프로퍼티 값으로 익명 함수 표현식을 할당하는
 * ES6 이전의 방식은 사용하지 않는 것이 좋다.
 */