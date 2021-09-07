# 햄버거 찾기(burger-finder)

  ><h3>원하는 조합의 버거를 만들면, 비슷한 조합의 햄버거를 찾습니다.

<br/>

* 'burger-finder'의 re-building 버전.
* routing & code-spilitting
  * burger-finder 작업 초기에 route를 통한 code-splitting을 하지 않아서, 뒤늣게 하려던 중에 계속 에러가 나서 기본적인 백엔드(firebase) 로직과 전체적인 구조를 그대로 가져와서 다시 만드는 중.
  * 시작부터 라우트를 쪼개어 나눔.
  * burger-finder는 dependency 문제로 에러가 많았음. 불필요한 package는 이번 버전에서 사용하지 않기로(react-bootstrap, fontawesome 등...).
    
    * 6월 5일까지 60% 정도 진행됐음
      - [x] 비밀번호 재설정 테스트.
      - [x] 각 재료 클릭시 제거(& 추가) 기능.
      - [x] burger-analyzed 페이지에 로그인 관련된 문구 추가하기.
      - [x] error-modal 필요한 곳에 모두 적용.
      - [x] error-message 한글로 표기.
      - [x] 가입 성공 메시지 출력.
      - [x] route guard 만들기.
      - [x] UserProfile 리팩토링.
      - [x] 크레딧 페이지 만들기.
      - [x] 스타일링.
        - [x] 네비게이션
        - [x] 버거
        - [x] 버거-analyzed
        - [x] 유저 프로필
        - [x] Auth
        - [x] 홈
        - [x] 크레딧
        - [x] user-burger
      - [x] 유저와 유저가 만든 버거 연결.
        - [x] my burger에 버튼 추가
        - [x] ~~analysis-result에 버튼 추가~~
      - [x] firebase hosting test 완료


<br/>

* 2021/06/22 90% 진행, 남은 task
  - [x] data read & write 권한 주기.
  - [x] 반응형 스타일링.
  - [ ] 버거 데이터 하루에 하나씩 추가.
    - [ ] 추가한 개수: 0


<br/>

* 2021/06/29 첫 테스트.
  - [ ] 배경색 다크.
  - [x] 로그인 후, 새로고침하면 버거 저장이 되지 않음.(토큰이 어디서 유실되는지 파악 아직 안됌)
    - user-name 변경시  변경 후 해당 api request의 response에 idToken이 담기지 않는 버그를 발견함. firebase의 공식 문서에선 해당 요청에 대해 idToken을 응답하도록 되어 있으나 실제 요청을 보내면, 3가지 항목이 제외된 상태로 응답을 받게 됌(idToken, refreshToken, expiresIn). 몇몇 로직 변경.
  - [ ] 재료 입력할 때 더 다양한 단어 허용되도록 수정 필요.
  - [ ] 어떤 재료 입력 가능한지 guide 필요.
  - [ ] 입력한 재료가 등록된 재료가 아닐 경우, 메세지 출력.
  - [ ] burger-analyzer에 새로운 가중치 추가(ex. 같은 패티일 경우 추가 점수).
  - [ ] brand-logo 위치 조정(css-styling).
  - [ ] 저장한 버거 삭제 기능 추가.