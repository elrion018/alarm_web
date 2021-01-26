# alarm_web

## 실행 방법
1. npm install로 의존성있는 라이브러리를 모두 설치해줍니다.(모듈 번들링을 위한 webpack, 표준 API 폴리필들, 표준 API 폴리필을 트랜스파일링하기 위한 babel, datepicker를 이용하기 위한 flatpickr이 있습니다.)

2. npm run build 스크립트를 실행하여 모듈 번들링을 해줍니다. 그러면 dist 폴더에 bundle.js 파일로 js 코드들이 번들링됩니다.

3. 프로젝트 root에 있는 index.js를 에버그린, ie 등의 브라우저로 실행할 수 있습니다.

## 모듈 구조

웹 구성에 의미를 가지는 파일들만 출력하였습니다.

|   index.html
|   package-lock.json
|   package.json
|   README.md
|   webpack.config.js
|   
\---src
    |   index.css
    |   index.js
    |   
    +---constants
    |       index.js
    |       
    +---eventDelegators
    |   |   index.js
    |   |   
    |   \---AlarmManagerViewEventDelegator
    |           index.js
    |           
    +---library
    |   |   index.js
    |   |   
    |   +---EventDelegator
    |   |       index.js
    |   |       
    |   +---Observer
    |   |       index.js
    |   |       
    |   \---Publisher
    |           index.js
    |           
    +---models
    |   |   index.js
    |   |   
    |   +---Alarm
    |   |       index.js
    |   |       
    |   \---AlarmManagerModel
    |           index.js
    |           
    +---viewModels
    |   |   index.js
    |   |   
    |   \---AlarmManagerViewModel
    |           index.js
    |           
    \---views
        |   index.js
        |   
        \---AlarmManagerView
                index.js
                

## 기능 목록

- AlarmManagerView function (view)
  - 기준 시각(현재시간)을 설정(입력)할 수 있다.
    - 기준 시간을 바꿀 수 있는 버튼이 있다.
  - 매 초 단위로 기준 시각을 렌더링 한다. 기준 시각이 바뀌어도 정상 작동해야한다.
  - 알람을 등록한다.
    - 시계 모드를 선택(select 태그 사용)할 수 있다. 시계 모드 종류는 일반, 진동, 야간이 있다.
    - 알람이 울릴 작동 시간(연도. 월. 일. 시간)을 설정할 수 있게 한다.(flatpickr 사용)
    - 알람 모드를 선택(select 태그 사용)할 수 있다. 알람 모드 종류는 일반 알람, 긴급 알람이 있다.
    - 알람 내용을 추가할 수 있다.
    - 알람 추가 버튼이 있다.
  - 알람 목록을 나타낸다.
    - 알람 목록은 알람시간 오름차 순으로 출력한다.
    - 개별 알람을 끄거나 삭제할 수 있다.
    - 개별 알람은 알람의 상태를 나타내야한다 (켜짐/ 꺼짐, 일반 알람/ 긴급 알람, 일반/진동/야간)
  - 메세지를 나타낸다.
    - 기준 시각과 알람 시각이 동일한 알람이 있을 경우 알람 모드에 따라 알람을 나타내야한다.
    - 시간, 알람 내용, 진동/소리의 내용을 출력한다.
  - AlarmManagerEventDelegator function로 이벤트 루틴을 일괄적으로 관리한다.(data- 등을 활용)
- AlarmManagerViewModel function (view model)
  - view에서 온 입력 값에 대한 validation을 한다.
    - 알람 내용이 빈 칸인 경우 예외처리 한다.
    - 기준 시간 변경 날짜, 시간 중 하나라도 비어있으면 예외 처리한다.
    - 알람 설정 날짜, 시간 중 하나라도 비어있으면 예외 처리한다.
  - validation 끝난 입력 값을 model에 전달한다.
  - model의 변경사항을 view로 전달한다.
  - 작동하는 알람을 출력하기 위해 observer 패턴을 사용하여 model의 변경사항을 view model를 통해 view에 반영

- AlarmManagerModel function (model)
  - 필요한 데이터를 저장한다.
    - 기준 시각은 변수에 담아 저장한다. (Date 객체)
    - 알람(function Alarm의 인스턴스)들을 알람 ArrayList에 저장한다. (알람 목록)
  - local storage의 데이터를 반영한다.
    - local storage에 기존 알람들, 기존 기준 시각이 있다면 초기화한다.
    - local storage내 없다면 알람들을 빈 채로, 현재 로컬 시간으로 기준 시각을 초기화한다.
  - 타이머를 설정할 수 있는 함수를 만든다.
    - setInterval를 사용한다.(requestAnimationFrame()를 사용할 수 없다.)
  - getter, setter로 데이터 반환, 데이터 설정을 한다.
    - 기준 시각을 설정할 수 있도록 한다. (setter)
    - 기준 시각을 1초 씩 흐를 수 있도록 한다. 이 경우 observer 패턴을 사용하여 변경사항을 view model을 거쳐 view에 반영 (setter)
    - 기준 시간을 반환할 수 있도록 한다. (getter)
    - 알람을 알람 ArrayList에 추가할 수 있도록 한다. (Alarm 인스턴스 생성 후 저장, setter)
    - 알람 ArrayList를 반환할 수 있도록한다. (getter)
  - 알람 ArrayList에 있는 Alarm 인스턴스를 삭제하거나 인스턴스들의 함수를 사용할 수 있게한다.
    - i번 째 알람을 삭제할 수 있도록 한다.
    - i번 째 알람을 켜고 끌 수 있도록 한다.
  - 기준 시각에 따라 작동하는 알람들을 확인한다.
    - 기준 시각이 1분이 지날때 마다 알람 ArrayList에서 켜져있고 기준 시각과 설정된 작동 시간이 일치하는 Alarm 인스턴스들을 탐색한다.
    - 탐색에서 얻은 Alarm 인스턴스들을 반환한다.
    - observer 패턴을 사용하여 변경사항을 view model을 거쳐 view에 반영
- Alarm function
  - 필요한 데이터를 저장한다.
    - 시계 모드를 변수에 담아 저장한다. (string)
    - 설정된 작동 시간을 저장한다. (Date 객체)
    - 알람 모드를 저장한다. (string)
    - 알람 내용을 저장한다. (string)
    - 알람 on/off 상태를 저장한다. (boolean)
  - getter, setter로 데이터 반환, 데이터 설정을 한다.
    - 시계 모드를 설정할 수 있도록 한다. (setter)
    - 시계 모드를 반환할 수 있도록 한다. (getter)
    - 작동 시간을 설정할 수 있도록 한다. (setter)
    - 작동 시간을 반환할 수 있도록 한다. (getter)
    - 알람 모드를 설정할 수 있도록 한다. (setter)
    - 알람 모드를 반환할 수 있도록 한다. (getter)
    - 알람 내용을 설정할 수 있도록 한다. (setter)
    - 알람 내용을 반환할 수 있도록 한다. (getter)
    - 알람 on/off 상태를 설정할 수 있도록 한다. (setter)
    - 알람 on/off 상태를 반환할 수 있도록 한다. (getter)

## 기타 참고사항


- ie 10, 에버그린 브라우저에서 정상 작동을 확인하였습니다.
- 처음 babel을 이용한 폴리필 적용 가능 여부에 확신이 들지않아 모듈 시스템을 제외하면 es5 문법을 중심으로 코드를 짰습니다.
- 종료 전 데이터 상태를 저장하는 부가 기능을 제공하려 했으나 ie 9이상 버전부터 local 브라우저에서 실행되는 웹의 경우 localStorage를 지원하지 않았습니다.
그래서 현재 주석처리를 해두었습니다.
- 알람들을 추가, 삭제, 탐색하는데 있어 heap 자료구조를 적용해도 좋아보입니다.
- 비동기 프로그래밍을 다루며, 이벤트 루프와 이벤트 큐에 대해 더 공부해볼 수 있었습니다.
- 반복되는 코드를 줄이고 재사용성을 위해 프로토타입의 특징을 활용하여 최대한 함수화와 모듈화를 진행하였습니다.
- reactive한 웹을 구현하는데 유리한 MVVM 패턴을 적용하였고 시간 흐름, 알람 작동을 자동적으로 렌더링하기 위해 Observer 패턴을 사용하였습니다.
- NHN FE development Lab에서 제공하는 [코드 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)을 따릅니다.
- https://github.com/elrion018/alarm_web 에서 형상관리를 하며 프로젝트를 진행하였습니다. 현재는 private 상태이며, 참고를 원하시면 공개하여 보여드리겠습니다.

## 맺음말

- 카카오 커머스 과제 덕분에 ES5, ES6와 같은 스펙과 자바스크립트 자체에 대한 이해도를 높일 수 있었습니다. 
- 인터뷰를 진행하면서 관련 이야기를 나눌 수 있는 기회가 꼭 생겼으면 좋겠습니다. 감사합니다.

