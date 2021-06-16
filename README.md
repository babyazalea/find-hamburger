# 햄버거 찾기(find-hamburger)

  ><h3>원하는 조합의 버거를 만들면, 비슷한 조합의 햄버거를 찾습니다.

<br>

* 'burger-finder'의 re-building 버전.
* routing & code-spilitting
  * burger-finder 작업 초기에 route를 통한 code-splitting을 하지 않아서, 뒤늣게 하려던 중에 계속 에러가 나서 기본적인 백엔드(firebase) 로직과 전체적인 구조를 그대로 가져와서 다시 만드는 중.
  * 시작부터 라우트를 쪼개어 나눔.
  * burger-finder는 dependency 문제로 에러가 많았음. 불필요한 package는 이번 버전에서 사용하지 않기로(react-bootstrap, fontawesome 등...).
    
    * 6월 5일까지 60% 정도 진행됐음
      - [x] 비밀번호 재설정 테스트.
      - [x] 각 재료 클릭시 제거(& 추가) 기능.
      - [x] burger-analyzed 페이지에 로그인 관련된 문구 추가하기.
      - [ ] error-modal 필요한 곳에 모두 적용.
      - [x] error-message 한글로 표기.
      - [x] 가입 성공 메시지 출력.
      - [x] route guard 만들기.
      - [x] UserProfile 리팩토링.
      - [x] 크레딧 페이지 만들기.
      - [ ] 스타일링.
        - [x] 네비게이션
        - [x] 버거
        - [x] 버거-analyzed
        - [x] 유저 프로필
        - [x] Auth
        - [x] 홈
        - [x] 크레딧
      - [ ] 유저와 유저가 만든 버거 연결.