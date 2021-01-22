# alarm_web

## 코드 컨벤션
- NHN FE development Lab에서 제공하는 [코드 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)을 적용한다.

## 기능 목록

- AlarmManagerView class (view)
  - 기준 시각(현재시간)을 설정(입력)할 수 있다.
    - 기준 시간을 바꿀 수 있는 버튼이 있다.
  - 매 초 단위로 바뀐 기준 시각을 렌더링 한다.
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
    - 시간, 알람 내용, 진동/소리의 내용을 출력한다. (observer 패턴을 사용하여, model의 변경사항을 view model, view 순으로 전달.) 
  - AlarmManagerEventDelegator class 로 이벤트 루틴을 일괄적으로 관리한다.(data- 등을 활용)
  
- AlarmManagerViewModel class (view model)
  - view에서 온 입력 값에 대한 validation을 한다.
    - 알람 내용이 빈 칸인 경우 예외처리 한다. 
  - validation 끝난 입력 값을 model에 전달한다.
  - model의 변경사항을 view로 전달한다(getter, setter를 통해).
  - 작동하는 알람을 출력하기 위해 observer 패턴을 사용하여 model의 변경사항을 view에 반영

- AlarmManagerModel class (model)
  - 필요한 데이터를 저장한다.
    - 기준 시각은 변수에 담아 저장한다. (Date 객체)
    - 알람(class Alarm의 인스턴스)들을 알람 ArrayList에 저장한다. (알람 목록)
  - local storage의 데이터를 반영한다.
    - local storage에 기존 알람들, 기존 기준 시각이 있다면 초기화한다.
    - local storage내 없다면 알람들을 빈 채로, 현재 로컬 시간으로 기준 시각을 초기화한다.
  - getter, setter로 데이터 반환, 데이터 설정을 한다.
    - 기준 시각을 설정할 수 있도록 한다. (setter)
    - 기준 시각을 1초 씩 흐를 수 있도록 한다. (setter)
    - 기준 시간을 반환할 수 있도록 한다. (getter)
    - 알람을 알람 ArrayList에 추가할 수 있도록 한다. (Alarm 인스턴스 생성 후 저장, setter)
    - 알람 ArrayList를 반환할 수 있도록한다. (getter)
  - 알람 ArrayList에 있는 Alarm 인스턴스를 삭제하거나 인스턴스들의 함수를 사용할 수 있게한다.
    - i번 째 알람을 삭제할 수 있도록 한다.
    - i번 째 알람을 켜고 끌 수 있도록 한다.
    - 변경 사항 발생시 observer 패턴을 사용하여 view model을 거쳐 view에 반영
  - 기준 시각에 따라 작동하는 알람들을 확인한다.
    - 기준 시각이 1분이 지날때 마다 알람 ArrayList에서 켜져있고 기준 시각과 설정된 작동 시간이 일치하는 Alarm 인스턴스들을 탐색한다.
    - 탐색에서 얻은 Alarm 인스턴스들을 반환한다.
    - observer 패턴을 사용하여 변경사항을 view model을 거쳐 view에 반영
- Alarm class
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
- AlarmManagerEventDelegator class
- AlarmObserverBinder class

  


   
    
