# 햄버거 찾기(burger-finder)

  >원하는 조합의 버거와 가장 비슷한 조합의 햄버거를 찾습니다.

burger-finder는 React, Firebase 기반으로 만들어졌습니다. 원하는 재료를 입력해서 시중의 햄버거와 가장 비슷한 햄버거를 찾을 수 있습니다.

## 사용하기

Firebase를 통해서 호스팅되고 있습니다. 아래의 주소로 이동하시면 사용이 가능합니다.
<br>
[https://burger-finder-6bddb.firebaseapp.com/](https://burger-finder-6bddb.firebaseapp.com/)


## 사용 예제

![burger-finder-guide](./src/assets/images/find-hambuger__test-guide.gif)

원하는 재료의 키워드('고기패티', '치즈', '양파' 등)을 입력하면 해당 키워드의 재료가 추가됩니다. 추가된 재료의 빼기와 더하기 버튼을 눌러 개수를 증감시킬 수 있습니다.
<br>
재료의 입력을 끝낸 후 '만들기' 버튼을 누르면, 입력한 재료의 구성과 가장 비슷한 햄버거를 찾습니다.
<br>
찾아낸 재료와 같은 햄버거는 '방금 만든 버거'로 생성되고 생성된 햄버거는 저장이 가능합니다. **저장 기능은 회원가입을 해야 이용할 수 있습니다.**
<br>
<br>
회원가입은 이메일과 비밀번호로 가능합니다. **이메일 주소를 인증하면 유저 정보 페이지에서 닉네임 변경, 비밀번호 변경이 가능합니다. 더이상 계정의 사용을 원하지 않으실 경우 '계정 삭제' 버튼을 누르시면 됩니다.**


## 로컬 환경에서 테스트 하기

### 요구사항:
```json
"node": ">=6.9.0"
```

### 의존성 설치:
```sh
yarn install

(or)

npm install
```

### 주의사항:
로컬 환경에서 원활한 테스트를 위해서는 프로젝트의 루트 디렉토리에 `.env` 파일이 필요합니다. 해당 파일은, burger-finder에서 Firebase 시크릿 키를 저장한 파일입니다. 파일의 내용을 아래와 같이 구성하고, 테스트를 위해 준비한 Firebase의 시크릿 키를 입력합니다.

```env
REACT_APP_FIREBASE_API_KEY=<YOUR_API_KEY>
```


## 업데이트 내역

* 2022-02 (예정)
  - 재료 입력 방식 버튼식으로 변경
* 2021-08
  - Firebase로 호스팅
* 2021-01
  - 프로젝트 준비

## 만든 사람

Github: [tyange](https://github.com/tyange)
<br>
Email: [usun16@gmail.com](mailto:usun16@gmail.com)