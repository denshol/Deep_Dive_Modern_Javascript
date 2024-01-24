/**
 * Set 객체는 중복되지 않는 유일한 값들의 집합이다.
 *
 * Set 객체는 이터러블이다. 따라서 스프레드 문법의 대상으로 사용할 수 있다.
 *
 * Set 객체는 배열과 유사하지만 다음과 같은 차이가 있다.
 *
 *  동일한 값을 중복하여 포함할수 없다.
 *  요소의 순서에 의미가 없다.
 *  인덱스로 요소에 접근할 수 없다.
 *
 * 이러한 Set 객체의 특성은 수학적 집합의 특성과 일치한다. Set은 수학적 집합을 구현하기 위한 자료구조다.따라서 Set을 통해 교집합,합집합,차집합,여집합 등을 구현할 수 있다.
 *
 */

// 37.1.1 Set 객체의 생성
//Set 객체는 Set 생성자 함수로 생성한다. Set생성자 함수에 인수를 전달하지 않으면 빈 Set 객체가 생성된다.

// 예제 37-01
const set = new Set();
console.log(set); // Set(0) {}

//**Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성한다. 이때 이터러블의 중복된 값을 Set 객체에 요소로 저장되지 않는다. */

// 예제 37-02
const set1 = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(set1); // Set(5) {1,2,3,4,5}

const set2 = new Set("hello");
console.log(set2); // Set(4) {'h','e','l','o'}

//중복을 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
// 예제 37-03
//배열의 중복 요소 제거
const uniq = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2,1,3,4]

//Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
const uniq = (array) => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2,1,3,4]

// 37.1.2 Set 객체의 요소 개수 확인
// Set 객체의 요소 개수를 확인하기 위해서는 Set.prototype.size 프로퍼티를 참조한다.

// 예제 37-04
const { size } = new Set([1, 2, 3, 4, 5]);
console.log(size); // 5

/**
 * Size프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자프로퍼티다 따라서 size 프로퍼티에 숫자를 할당하여 set 객체의 요소 개수를 변경할 수 없다.
 */

// 예제 37-05
const set = new Set([1, 2, 3, 4, 5]);

console.log(Object.getOwnPropertyDescriptor(Set.prototype, "size"));

// size 프로퍼티에 숫자를 할당하여 set 객체의 요소 개수를 변경할 수 없다.
set.size = 10; // 무시된다.
console.log(set.size); // 5

// 37.1.3 Set 객체의 요소 추가
// Set.prototype.add 메서드를 사용하여 Set 객체에 요소를 추가한다. Set.prototype.add 메서드는 추가된 Set 객체를 반환한다.

// 예제 37-06
const set = new Set();
console.log(set); // Set(0) {}

set.add(1);
console.log(set); // Set(1) {1}

//add 메서드는 새로운 요소가 추가된 Set 객체를 반환한다. 따라서 add 메서드를 호출한 후에 add메서드를 연속적으로 호출할수있다.

// 예제 37-07
const set = new Set();

set.add(1).add(2);
console.log(set); // Set(2) {1,2}

// Set 객체에 이미 존재하는 요소를 추가하면 무시된다.에러가 발생하지는 않는다.

// 예제 37-08
const set = new Set();

set.add(1).add(2).add(2);
console.log(set); // Set(2) {1,2}

/**
 *  일치 비교 연산자에 ===을 사용하면 NaN과 NaN을 다르다고 평가한다. 하지만 Set 객체는 NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다. +0과 -0은 일치 비교 연산자 ===와 마찬가지로 같다고 평가하여 중복 추가를 허용하지 않는다.
 *
 *
 */

// 예제 37-09
const set = new Set();

console.log(NaN === NaN); // false
console.log(+0 === -0); // true

// Set 객체는 NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
set.add(NaN).add(NaN);
console.log(set); // Set(1) {NaN}

// Set 객체는 +0과 -0을 같다고 평가하여 중복 추가를 허용하지 않는다.
set.add(0).add(-0);
console.log(set); // Set(2) {NaN,0}

// Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 가 있다.

// 예제 37-10
const set = new Set();

set
  .add(1)
  .add("a")
  .add(true)
  .add(undefined)
  .add(null)
  .add({})
  .add([])
  .add(function () {});

console.log(set); // Set(8) {1,'a',true,undefined,null,{},[],function(){}}

// 37.1.4 Set 객체의 요소 존재 여부 확인
// Set.prototype.has 메서드를 사용하여 Set 객체에 특정 요소가 존재하는지 확인할 수 있다. Set.prototype.has 메서드는 존재하면 true, 존재하지 않으면 false를 반환한다.

// 예제 37-11
const set = new Set([1, 2, 3]);

console.log(set.has(2)); // true
console.log(set.has(4)); // false

// 37.1.5 Set 객체의 요소 삭제
// Set.prototype.delete 메서드를 사용하여 Set 객체의 요소를 삭제할 수 있다. Set.prototype.delete 메서드는 삭제에 성공하면 true, 실패하면 false를 반환한다.
//delete 메서드에는 인덱스가 아니라 삭제하려는 요소값을 인수로 전달해야한다. set객체는 순서에 의미가 없다 다시말해 배열과 같이 인덱스를 갖지않는다.

// 예제 37-12
const set = new Set([1, 2, 3]);

//요소 2를 삭제한다.
set.delete(2);
console.log(set); // Set(2) {1,3}

//요소 1을 삭제한다.
set.delete(1);
console.log(set); // Set(1) {3}

//존재하지 않는 요소를 삭제하면 실패한다.에러없이 무시된다.

// 예제 37-13
const set = new Set([1, 2, 3]);

//존재하지 않는 요소 4를 삭제한다.
set.delete(4);
console.log(set); // Set(3) {1,2,3}

//delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환한다. 따라서 Set.prototype.add 메서드와 달리 연속적으로 호출할 수 없다.

// 예제 37-14
const set = new Set([1, 2, 3]);

//delete는 삭제 성공 여부를 나타내는 불리언 값을 반환한다.
set.delete(1).delete(2); // TypeError: Cannot read property 'delete' of false

// 37.1.6 Set 객체의 요소 일괄 삭제
// Set.prototype.clear 메서드를 사용하여 Set 객체의 모든 요소를 일괄 삭제할 수 있다.

// 예제 37-15

const set = new Set([1, 2, 3]);

set.clear();
console.log(set); // Set(0) {}

// 37.1.7 Set 객체의 요소 순회
/**
 *  Set 객체의 요소를 순회하려면 Set.prototype.forEach 메서드를 사용한다. Set.prototype.forEach 메서드는 콜백 함수를 인수로 전달받는다. 콜백 함수는 3개의 인수를 전달받는다.
 *
 * -첫번쨰 인수 : 현재 순회 중인 요소값
 * -두번쨰 인수 : 현재 순회 중인 요소값
 * -세번쨰 인수 : 현재 순회 중인 Set 객체
 *
 *  첫 번쨰 인수과 두 번쨰 인수는 같은 값이다. 이처럼 동작하는 이유는 Array.prototype.forEach 메서드와 인터페이스를 통일하기 위함이며 다른 의미는 없다. Array.prototype.forEach 메서드의 콜백 함수는 두 번째 인수로 현재 순회 중인 요소의 인덱스를 전달 받는다. 하지만 Set 객체는 순서에 의미가 없어 배열과 같이 인덱스를 갖지 않는다.
 *
 *
 *
 *
 */

// 예제 37-16
const set = new Set([1, 2, 3]);

set.forEach((v) => console.log(v)); // 1 2 3

// 37.1.8 Set 객체를 배열로 변환
// Set 객체를 배열로 변환하기 위해서는 스프레드 문법을 사용하면 된다.

// 예제 37-17
const set = new Set([1, 2, 3]);

// 스프레드 문법을 사용하여 Set 객체를 배열로 변환한다.
const array = [...set];
console.log(array); // [1,2,3]

// 37.1.9 Set 객체를 이터러블로 변환
// Set 객체는 이터러블이다. 따라서 for...of 문으로 순회할 수 있다.

// 예제 37-18
const set = new Set([1, 2, 3]);

for (const v of set) {
  console.log(v); // 1 2 3
}

// 37.1.10 Set 객체를 객체로 변환

//37.2 Map
//**Map 객체는 키와 값의 쌍으로 이루어진 컬렉션**이다. Map 객체는 **객체와 유사**하지만 다음과 같은 차이가 있다.

/**
 *    구분              객체          Map객체
 * 키로 사용할 수 있는 값|문자열 또는 심벌값|객체를 포함한 모든 값
 * 이터러블           X              O
 * 요소 개수 확인     Object.keys()   Map.prototype.size
 *
 *
 *
 *
 *
 *
 */

//37.2.1 Map 객체의 생성
//Map 객체는 Map 생성자 함수로 생성한다. Map 생성자 함수에 인수를 전달하지 않으면 빈 Map 객체가 생성된다.

// 예제 37-19
const map = new Map();
console.log(map); // Map(0) {}

//Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다. 이때 이터러블의 중복된 키를 Map 객체에 요소로 저장되지 않는다.

// 예제 37-20
const map1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(map1); // Map(2) {"key1" => "value1", "key2" => "value2"}

const map2 = new Map([1, 2]); // TypeError: Found non-callable @@iterator

//Map 생성자 함수의 인수로 전달한 이터러블에 중복된 키를 갖는 요소가 존재하면 값이 덮어 써진다.
//따라서 Map 객체에는 중복된 키를 갖는 요소가 존재하지 않는다.

// 예제 37-21
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key1", "value3"],
]);
console.log(map); // Map(2) {"key1" => "value3", "key2" => "value2"}

//Map 객체는 객체와 유사하게 키와 값을 요소로 저장한다. 하지만 객체와는 다르게 Map 객체는 키로 사용할 수 있는 값의 종류에 제약이 없다. 객체는 문자열 또는 심벌값만 키로 사용할 수 있지만 Map 객체는 객체를 포함한 모든 값을 키로 사용할 수 있다.

// 37.2.2 Map 객체의 요소 개수 확인
// Map 객체의 요소 개수를 확인하기 위해서는 Map.prototype.size 프로퍼티를 참조한다.

// 예제 37-22
const { size } = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(size); // 2

// size 프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티다. 따라서 size 프로퍼티에 숫자를 할당하여 Map 객체의 요소 개수를 변경할 수 없다.

// 예제 37-23
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(Object.getOwnPropertyDescriptor(Map.prototype, "size"));

map.size = 10; // 무시된다.
console.log(map.size); // 2

//37.2.3 Map 객체의 요소 추가
//Map.prototype.set 메서드를 사용하여 Map 객체에 요소를 추가한다. Map.prototype.set 메서드는 추가된 Map 객체를 반환한다.

// 예제 37-24
const map = new Map();
console.log(map); // Map(0) {}

map.set("key1", "value1");
console.log(map); // Map(1) {"key1" => "value1"}

//set 메서드는 새로운 요소가 추가된 Map 객체를 반환한다. 따라서 set 메서드를 호출한 후에 set 메서드를 연속적으로 호출할 수 있다.

// 예제 37-25
const map = new Map();
map.set("key1", "value1").set("key2", "value2");

console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}

//Map 객체에 이미 존재하는 키를 사용하여 요소를 추가하면 무시된다. 에러가 발생하지는 않는다.중복된 키를 갖는 요소를 추가하면 값이 덮어씌어진다

// 예제 37-26

const map = new Map();

map.set("key1", "value1").set("key2", "value2").set("key1", "value3");

console.log(map); // Map(2) {"key1" => "value3", "key2" => "value2"}

/**
 * 일치 비교 연산자 ===을 사용하면 NaN과 NaN을 다르다고 평가한다 하지만 Map객체는 NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다. +0과 -0은 일치 비교 연산자 ===와 마찬가지로 같다고 평가하여 중복 추가를 허용하지 않는다.
 */

// 예제 37-27
const map = new Map();

console.log(NaN === NaN); // false
console.log(+0 === -0); // true

//Map 객체는 NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
map.set(NaN, 1).set(NaN, 2);
console.log(map); // Map(1) {NaN => 2}

//Map 객체는 +0과 -0을 같다고 평가하여 중복 추가를 허용하지 않는다.
map.set(+0, 1).set(-0, 2);
console.log(map); // Map(2) {NaN => 2, 0 => 2}
