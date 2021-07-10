# Movie collection <img src="public/images/movie.png" width="50" height="50"/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/1d016b0f-a51f-4f49-8f6c-f615a508ca01/deploy-status)](https://app.netlify.com/sites/moviecard-collection/deploys)

#### 영화를 보고 난 뒤 간단히 평점과 리뷰를 기록하는 프로젝트

<br/>

## 프로젝트의 목적

<li>React에 대한 이해를 높이기 위한 프로젝트</li>
<li>Firebase, Cloudinary를 통한 API 문서 학습</li>
<li>Service(통신)과 View 컴포넌트 로직 분리</li>
<li>반응형 구현</li>
<li>netlify를 통한 배포</li>

<br/>

## 개발스택

<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-components&logoColor=white"/>
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/></a>&nbsp
    <img src="https://img.shields.io/badge/Cloudinary-3348c5?style=flat-square&logo=&logoColor=white"/></a>&nbsp
 </p>

<br/>

## URL

https://moviecard-collection.netlify.app

<br/>

## 프로젝트를 통해 배운 점

1. 컴포넌트 로직 분리

- 리액트는 오직 view만을 담당하고, view만 보여주는 것이 좋기 때문에 네트워크 통신하는 로직을 만들어서 컴포넌트에 의존성 주입(dependency injection)을 해주는 것이 좋다.

2. .env를 이용하여 API Key 숨기기

- API Key를 그대로 깃허브에 올리는 것은 보안상에 좋지 않다
- 그래서 .env에 CRA일 경우 `REACT_APP_`이라는 프리픽스를 붙여서 API Key를 할당해준다
- 또한 .gitignore에 이를 추가해준다

3. Firebase, Cloudinary를 통한 기능 구현

- 문서를 읽어보면서 프로젝트에 필요한 기능만을 추출하여 기능을 구현할 수 있는지를 더 확실하게 배웠다.

4. netlify를 통한 배포

- 배포와 관련하여 많은 서비스들이 있지만 netlify를 통해 무료로 배포할 수 있으며, yarn 또는 깃허브에 레포를 등록해둠으로써 쉽게 배포할 수 있다.

5. 반응형 구현

- 데스크탑에 한정되는 것이 아닌 모바일로도 서비스를 사용할 수 있도록 반응형을 구현해볼 수 있었다.

## 프로젝트

### Login

#### Google 또는 Github를 통한 로그인

<img src='https://images.velog.io/images/hyehye/post/c1245a74-107b-4618-9ef5-c9bc91d86977/ezgif.com-gif-maker.gif'/>

#### 익명인증을 통한 로그인

<img src='https://images.velog.io/images/hyehye/post/27e0b539-ff67-492f-8ed6-74b1774d8943/ezgif.com-gif-maker%20(1).gif'/>

### Collection

#### 모달을 통해 영화기록창을 열어 기록하고, 이미지는 Cloudinary를 통해 업로드하고, 등록하기를 누르면 Firebase에 저장

<img src='https://images.velog.io/images/hyehye/post/3737e422-48f8-4d55-8f90-f7af17c17e79/ezgif.com-gif-maker.gif'/>

#### 마우스 무브를 통해 카드 뒷편 보기 및 삭제 구현

<img src='https://images.velog.io/images/hyehye/post/cad8d295-56f7-4322-950d-d586e0c4eb42/ezgif.com-gif-maker%20(1).gif'/>

<br/>

## 반응형

<li>모바일S - 320px</li>
<img src='https://images.velog.io/images/hyehye/post/110feff8-0c72-4656-b6f1-a3dce7058b4f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.42.59.png' width="200" height="350"/>
<li>모바일M - 375px</li>
<img src='https://images.velog.io/images/hyehye/post/63dc60ef-103d-477b-ab4c-0ab4a2fe3e08/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.43.21.png' width="200" height="350" />
<li>모바일L - 425px</li>
<img src='https://images.velog.io/images/hyehye/post/12ba1205-7157-45f6-8988-e7ad995ee951/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.43.43.png' width="200" height="350"/>
<li>Tablet - 768px</li>
<img src='https://images.velog.io/images/hyehye/post/1888eb10-21b4-455f-969d-07962aec46fb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.52.20.png' width="350" height="300"/>
<li>Laptop - 1024px</li>
<img src='https://images.velog.io/images/hyehye/post/73b084e2-9116-4d5e-9259-6413c5c955d3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.45.36.png' width="350" height="300"/>
<li>LaptopL - 1440px</li>
<img src='https://images.velog.io/images/hyehye/post/2dfe9a87-8448-46ee-aad5-f27f157a684b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.45.50.png' width="500" height="300"/>
