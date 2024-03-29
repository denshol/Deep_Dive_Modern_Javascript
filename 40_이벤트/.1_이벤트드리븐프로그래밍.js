/**
 * 
 * 브라우저는 처리해야 할 특정 사건이 발생하면 이를 감지하여 이벤트를 발생시킨다 예를들어 클릭,키보드입력,마우스 이동 등이 일어나면 브라우저는 이를 감지하여 특정한 타입의 이벤트를 발생시킨다
 * 
 * 만약 애플리케이션이 특정 타입의 이벤트에 대해 반응하여 어떤 일을 하고 싶다면 해당하는 타입의 이벤트가 발생했을 떄 호출될 함수를 브라우저에게 알려 호출을 위임한다. 이때 이벤트가 발생했을 떄 호출될 함수를 이벤트 핸들러라 하고 이벤트가 발생했을 떄 브라우저에게 이벤트 핸들러의 호출을 위임하는것이 이벤트 등록이라한다.
 * 
 * 예를들어, 사용자가 버튼을 클릭했을 때 함수를 호출하여 어떤 처리를 하고 싶다고 가정해보자.이 떄 문제는 "언제 함수를 호출해야 하는가"다. 사용자가 언제 버튼을 클릭할지 알수 없으므로 언제 함수를 호출해야 할지 알수없기 console.error('때문이다',때문이다)
 * 다행히 브라우저는 사용자의 버튼 클릭을 감지하여 클릭 이벤트를 발생시킬 수 있다. 그리고 특정 버튼 요소에서 클릭 이벤트가 발생하면 특정함수 ㅇ를 호출하도록 브라우저에게 위임 할수있다 즉 함수를 언제 호출할지 알수 없으므로 개발자가 명시적으로 함수를 호출하는것이 아니라 브라우저에게 함수 호출을 위임하는 것이다. 이를 코드로 표현하면 다음과 같다.
 */
// 예제 22-02
// 버튼 요소를 참조한다.
// const button = document.querySelector("button");


// // 버튼 요소에 이벤트 핸들러를 등록한다.
// button.onclick = function () {
//   console.log("button is clicked");
// };
