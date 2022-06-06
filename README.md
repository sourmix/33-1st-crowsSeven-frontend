## 크로우즈세븐 777

### 33기 1차 프로젝트
[크로우캐년](https://crowcanyon.co.kr/index.html) 클론 - 식기를 판매하는 커머스 사이트
- 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
---

### 팀원

- FE: 염종은,유하은,박슬기,김완영,신윤지
- BE: 박상연,김민정

### 기간
2022.05.23 ~ 2022.06.03

#### 기술 스택

- `FE`: JavaScript, ReactJs, react-router, HTML5, SASS

- `BE`: Python, Django, Bcrypt, MySQL, pyjwt

#### Colaboration Tool

- Git, Trello, Slack

---

### 데모 영상

https://youtu.be/--gfsEindSE

---
![main](https://user-images.githubusercontent.com/75124027/172108569-1b9e23d0-ee64-4c53-b568-467ad1f42b72.gif)
![signup](https://user-images.githubusercontent.com/75124027/172182143-b47564f6-dfaf-4b4e-a202-185a7566225e.gif)
![product](https://user-images.githubusercontent.com/75124027/172182105-d5b75b63-10ec-4cc9-bf50-1cebd47827bc.gif)
![store](https://user-images.githubusercontent.com/75124027/172110770-a0c653d1-6746-4e21-b03c-8a56bccd66f7.gif)
---
---

### 맡은 부분

![review](https://user-images.githubusercontent.com/75124027/172111705-61c0e22a-60fc-419e-87cb-923bd13e79c0.gif)

- fetch - get, post, delete를 사용하여 back과 데이터를 주고 받았다. back이 "SUCCESS"라고 메시지를 정해놓았을 경우, res.ok, res.success, res === "SUCCESS" 모두 잘못된 요청으로 넘어가고 사진에 있는 경우만 성공하는 것이 인상 깊었다.
- navigate - 글쓰기, 삭제, 상세페이지 등의 이동을 navigate로 처리했다.
- token - 토큰 유무에 따라 글쓰기 버튼을 나타났다 사라지게 했고, 토큰이 있어야만 POST가 가능하게 했다.
- Mock Data - 상수데이터와 하드코딩으로 백과 연결하기 전에 데이터를 보고 있었는데 이후에 수정이 어렵다는 피드백을 받고 사진과 같은 형식의 목데이터를 만들어 상세페이지와 전체페이지, 추천페이지에 동시에 적용했다. 같은 데이터를 쓰기 때문이다.
- params - 삭제할 리뷰페이지의 id 값을 상정하여 현재 위치한 게시글을 삭제한다.
- location - location.pathname에 저장된 주소가 변할 때만 리렌더링 한다.
