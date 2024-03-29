  
/* 
 표준 빌트인 객체인 Date는 날짜와 시간(연,월,일,시,분,초,밀리초(천분의 1초))을 위한 메서드를 제공하는 빌트인 객체
 이면서 생성자 함수다.

 UTC(Universal Time Coordinated 협정 세계시)는 국제 표준시를 말한다.
 UTC와 GMT(Greenwich Mean Time 그리니치 표준시)는 초의 소수점 단위에서만 차이가 나기 때문에 일상에서는
 혼용되어 사용된다. 기술적인 표기에서는 UTC를 사용하고 일상적인 표기에서는 GMT를 사용한다
 

 KST(Korea Standard Time 한국 표준시)는 UTC에 9시간을 더한 시간이다. 즉, KST는 UTC보다 9시간이 빠르다, 
예를들어, 00:00UTC는 09:00KST다.
현재 날짜와 시간은 자바스크립트 코드가 실행된 시스템의 시계에 의해 결정된다.

*/ 

/**
 * 30.1 Date 생성자 함수
 *  
 * Date는 생성자 함수다. Date 생성자 함수로 생성한 Date객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖는다.
 * 이 값은 1970년 1월 1일 00:00:00 UTC를 기점으로 Date 객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다.
 * ㅇ
   예를들어, 모든 시간의 기점인 1970년 1월 1일 0시를 나타내는 Date 객체는 내부적으로 정수값 0을 가지며 
    1970년 1월 1일 0시를 기점으로 하루가 지난 1970년 1월 2일 0시는 나타내는 Date객체는 내부적으로 정수값 86,400,000(24시간*60분*60초*1000밀리초)을 가진다.


    Date 생성자 함수로 생성한 Date 객체는 기본적으로 현재 날짜와 시간을 나타내는 정수값을 가진다. 현재 날짜와 시간이 아닌 다른 날짜와 시간을
    다루고 싶은 경우 Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다. Date 생성자 함수로 객체를 생성하는 방법은
    다음과 같이 4가지가 있다.
 *  
 * 
 */

  

// 30.1.1 new Date()
/**
 * Date 생성자 함수를 인수없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환한다.
 * Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖지만 Date 객체를 콘솔에 출력하면 기본적으로
 * 날짜와 시간 정보를 출력한다.
 *  * 
 */

//30-01
new Date(); //Thu Aug 08 2019 16: 00: 00 GMT + 0900(KST)대한민국 표준시

// Date 생성자 함수를 new 연산자 없이 호출하면 Date 객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열을 반환한다.
 //30-02
Date(); //Thu Aug 08 2019 16: 00: 00 GMT + 0900(KST)대한민국 표준시


//30.1.2 new Date(millisec)
 
/**
 * Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00 UTC를 기점으로 인수로 전달된 
 * 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.
 */

//30-03
// 한국 표준시 는 협정 세계시 보다 9시간 빠르다
new Date(0); //Thu Jan 01 1970 09:00:00 GMT + 0900(KST)대한민국 표준시

/**
 * 86400000밀리초는 1day를 밀리초로 나타낸 것이다.
 * 1s = 1,000ms
 * 1m = 60s = 60,000ms
 * 1h = 60m = 3,600,000ms
 * 1d = 24h = 86,400,000ms
 */
 
new Date(86400000); //Fri Jan 02 1970 09:00:00 GMT + 0900(KST)대한민국 표준시


//30.1.3 new Date(dateString)

/**
 *  Date 생성자 함수에 문자열을 인수로 전달하면 인수로 전달된 문자열을 Date 객체로 변환하여 반환한다.
 * 이때 인수로 전달된 문자열은 Date.parse 메서드에 의해 해석 가능한 형식이어야 한다.
 */

//30-04
new Date('May 26, 1998 10:00:00'); //Tue May 26 1998 10:00:00 GMT + 0900(KST)대한민국 표준시
new Date('1998/5/26 10:00:00'); //Tue May 26 1998 10:00:00 GMT + 0900(KST)대한민국 표준시
 


//30.1.4 new Date(year, month[, day, hour, minute, second, millisecond])
 
/**
 * Date 생성자 함수에 연, 월, 일, 시, 분, 초, 밀리초를 인수로 전달하면 인수로 전달된 날짜와 시간을 나타내는 Date 객체를 반환한다.
 * 이때 연, 월, 일, 시, 분, 초, 밀리초는 모두 숫자 타입의 값이어야 한다. 단, month는 0부터 11까지의 정수다.
 * 0은 1월을 나타내고 11은 12월을 나타낸다. 그리고 day는 생략 가능하다. day를 생략하면 1일로 간주한다.
 */

//30-05
//2019년 8월 8일 16시 20분 30초 0밀리초를 나타내는 Date 객체를 생성한다.
new Date(2019, 7, 8, 16, 20, 30, 0); //Thu Aug 08 2019 16:20:30 GMT + 0900(KST)대한민국 표준시
 
//2019년 8월 8일 16시 20분 30초를 나타내는 Date 객체를 생성한다.
new Date(2019, 7, 8, 16, 20, 30); //Thu Aug 08 2019 16:20:30 GMT + 0900(KST)대한민국 표준시
 

//30.2 Date 메서드
 
//30.20.1 Date.now
//1970년 1월 1일 00:00:00 UTC를 기점으로 현재 시간까지 경과한 밀리초를 숫자 타입의 값으로 반환한다.

//30-06
Date.now(); //1565234400000

//30.2.2 Date.parse
/**
 * Date.parse 메서드는 인수로 전달된 문자열을 해석하여 1970년 1월 1일 00:00:00 UTC를 기점으로
 * 인수로 전달된 날짜와 시간까지의 밀리초를 숫자 타입의 값으로 반환한다. 이때 인수로 전달된 문자열은
 * Date 생성자 함수에 인수로 전달할 수 있는 형식이어야 한다.
 */

//30-07
Date.parse('Jan 2, 1970 00:00:00 UTC'); //0
Date.parse('Jan 2, 1970 09:00:00'); //32400000
Date.parse('Jan 2, 1970 09:00:00 GMT+0900'); //32400000
Date.parse('1970/01/02/09:00:00'); //32400000
Date.parse('1970-01-02 09:00:00'); //32400000

//30.2.3 Date.UTC
/**
 * Date.UTC 메서드는 인수로 전달된 연, 월, 일, 시, 분, 초, 밀리초를 1970년 1월 1일 00:00:00 UTC를 기점으로
 * 인수로 전달된 날짜와 시간까지의 밀리초를 숫자 타입의 값으로 반환한다. 이때 인수로 전달된 연, 월은 필수지만
 * 일, 시, 분, 초, 밀리초는 생략 가능하다. 이때 인수로 전달된 연, 월은 0부터 시작한다. 0은 1월을 나타내고
 * 11은 12월을 나타낸다.
 */

//30-08
Date.UTC(1970, 0, 2); //86400000
Date.UTC('1970/01/02'); //86400000
Date.UTC(1970, 0, 2, 9); //329400000
Date.UTC(1970, 0, 2, 9, 30); //329400000
Date.UTC(1970, 0, 2, 9, 30, 5); //329400000
Date.UTC(1970, 0, 2, 9, 30, 5, 500); //329400000

//30.2.4 Date.prototype.getFullYear
/**
 * Date.prototype.getFullYear 메서드는 Date 객체가 가리키는 연도를 나타내는 정수를 반환한다.
 * Date 객체가 가리키는 연도는 4자리 정수로 표시한다.
 */

//30-09

const date = new Date('2020/01/02/09:30:60');
date.getFullYear(); //2020


//30.2.5 Date.prototype.getMonth
 
/**
 * Date.prototype.getMonth 메서드는 Date 객체가 가리키는 월을 나타내는 0 ~ 11 사이의 정수를 반환한다.
 * 0은 1월을 나타내고 11은 12월을 나타낸다.
 */
 
//30-10
const date2 = new Date('2020/01/02/09:30:60');
date.getMonth(); //0


















































