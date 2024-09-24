<details>
<summary>파일 구조 보기</summary>
src<br/>
 ┣ components<br/>
 ┃ ┣ Buttons.js<br/>
 ┃ ┣ DiaryEditor.js<br/>
 ┃ ┣ DiaryItem.js<br/>
 ┃ ┣ DiaryList.js<br/>
 ┃ ┣ EmotionList.js<br/>
 ┃ ┣ GalleryCard.js<br/>
 ┃ ┣ GalleryDetail.js<br/>
 ┃ ┣ GallerySearch.js<br/>
 ┃ ┣ Header.js<br/>
 ┃ ┣ NavBar.js<br/>
 ┃ ┗ Viewer.js<br/>
 ┣ hook<br/>
 ┃ ┗ useDiary.js<br/>
 ┣ img<br/>
 ┃ ┣ emotion1.png<br/>
 ┃ ┣ emotion2.png<br/>
 ┃ ┣ emotion3.png<br/>
 ┃ ┣ emotion4.png<br/>
 ┃ ┗ emotion5.png<br/>
 ┣ pages<br/>
 ┃ ┣ DiaryEdit.js<br/>
 ┃ ┣ DiaryHome.js<br/>
 ┃ ┣ DiaryInfo.js<br/>
 ┃ ┣ DiaryNew.js<br/>
 ┃ ┗ GalleryHome.js<br/>
 ┣ redux<br/>
 ┃ ┣ actions<br/>
 ┃ ┃ ┗ tailAction.js<br/>
 ┃ ┣ reducers<br/>
 ┃ ┃ ┣ index.js<br/>
 ┃ ┃ ┗ tailReducer.js<br/>
 ┃ ┗ store.js<br/>
 ┣ App.css<br/>
 ┣ App.js<br/>
 ┣ index.css<br/>
 ┣ index.js<br/>
 ┗ util.js<br/>
</details>

# 🔊 꼬리의 일상
- 개인프로젝트

# 📅 작업기간
- 2024-04-24 ~ 2024-04-28

# 📍 주요기술
- react

- redux

# 🔦 상세기술
- react-router-dom을 사용하여 다양한 페이지로의 라우팅을 설정했습니다.

- useReducer와 useContext를 사용하여 애플리케이션의 상태를 전역적으로 관리했습니다.

- 사용자의 다이어리 데이터를 브라우저의 로컬 스토리지에 저장하여, 페이지를 새로고침하거나 다시 방문했을 때도 데이터를 유지할 수 있게 했습니다.

- 다이어리 항목을 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)할 수 있습니다.

# 📕 개발이야기
Diary 부분을 만들때 로컬 스토리를 이용해 만들다 보니 생각보다 어려웠으나 CRUD에 따라 차근차근 만들어 가며 완료하였습니다. 또 컴포넌트 분리를 통해 코드의 재사용성과 유지보수성을 향상시켰습니다. id와 같은 동적 파라미터를 사용하여 갤러리 상세 페이지나 일기 상제 정보 페이지로 라우팅을 설정했습니다. 이를 통해 사용자가 일기의 상세정보를 보거나 편집할 수 있습니다.
