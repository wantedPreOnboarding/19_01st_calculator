# 19팀 취업하고19조

## 배포링크

## 구현 목록

![1 시연](https://user-images.githubusercontent.com/39623897/151033629-d9f084e7-a0da-471c-9324-868e808e757c.gif)

### ExchangeCalculator

조원명 : 정다빈, 이송현

- 송금 국가는 미국(USD)으로 고정된다.
- Select Box에서 수취국가를 선택하면 환율이 출력된다.
  - 수취국가는 한국, 일본, 필리핀 세 곳 중 하나를 선택할 수 있다.
  - 환율은 USD기준으로 KRW, JPY, PHP의 값이 출력된다.
- 송금액을 입력한 후 Submit 버튼을 누르면 수취금액이 출력된다.

### MultiExchangeCalculator

조원명 : 최수임, 김영종

- input 창에 숫자를 넣으면 select 박스의 통화 기준으로 tab 박스의 결과 값이 동기화 되어 변경된다.
  - input 창에는 1 이상의 숫자만 입력할 수 있다. (공백, 문자, 음수, ... 불가능)
  - input 창에는 1,000 이상의 숫자를 입력할 수 없고 입력 시 자동으로 1,000으로 변경된다.
  - 1000이상의 값을 입력 시 세 자리마다 콤마(,)가 붙는다.
- select박스의 통화가 tab버튼의 통화와 동일한 경우, 탭에서 select박스에서 선택 된 통화가 제거되고 나머지 통화로 대체된다.
- timestamp로 날짜를 가져와 2022-Jan-01 형식으로 포맷한다.

## 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/git-flow-brightgreen?style=for-the-badge&logo">

## 설치 방법

```md
$ npm install
$ npm run start
```

## 컨벤션

https://github.com/wantedPreOnboarding/19_01st_calculator/wiki/컨벤션
