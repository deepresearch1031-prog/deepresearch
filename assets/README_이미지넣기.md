# 포트폴리오 웹사이트 — 이미지·영상 넣는 방법
- 작성: Dr_pai / 2026-10-29
- 대상 페이지: `DEEPRESEARCH_WEB_PORTFOLIO_v2_1.html` (v2.0은 보존)

## 1. 구조
```
웹사이트/
├── DEEPRESEARCH_WEB_PORTFOLIO_v2_1.html   ← 페이지 (고칠 필요 없음)
└── assets/
    ├── media.js                            ← 사례별 파일 목록 (여기만 고침)
    ├── README_이미지넣기.md                ← 이 문서
    └── cases/
        ├── 01_poster/          학회 포스터          case-poster
        ├── 02_pn-lecture/      PN접합 강의안        case-pn-ppt
        ├── 03_rne-lecture/     R&E 강의안           case-rne-ppt
        ├── 04_editing/         문서 첨삭            case-editing
        ├── 05_presentation/    발표 컨설팅          case-pres-consult
        ├── 06_job-portfolio/   직무 포트폴리오      case-job-portfolio  (비어 있음)
        └── 07_microcavity/     3D 과학 시각화       case-3d-microcavity (비어 있음)
```
- 페이지는 `media.js`를 읽어 **영상 → 대표 이미지 → 기존 HTML 도식** 순서로 보여 줍니다.
- 파일이 없거나 경로가 틀려도 빈 칸이 생기지 않고 기존 도식이 대신 보입니다.
- 01~05는 `04 포트폴리오`의 PNG 5장을 복사해 이미 연결했습니다(원본은 그대로 둠).

## 2. 넣는 순서 (3단계)
1. 파일을 해당 사례 폴더에 넣는다. 파일명은 **영문·숫자·`_`·`-`만** 쓴다 (예: `poster_detail_01.png`). 한글·공백 파일명은 웹 서버에 올릴 때 깨질 수 있다.
2. `media.js`에서 그 사례의 `cover`·`gallery`·`video` 줄을 고친다.
   ```js
   'case-poster': {
     cover:   { src: 'assets/cases/01_poster/poster_process_v2.2.png', alt: '화면 설명', ratio: '1/1' },
     gallery: [
       { src: 'assets/cases/01_poster/poster_detail_01.png', alt: '결과 영역 확대', caption: 'Result 영역 배치' }
     ],
     video: null
   },
   'case-3d-microcavity': {
     cover: null,
     gallery: [],
     video: { src: 'assets/cases/07_microcavity/microcavity_loop.mp4',
              poster: 'assets/cases/07_microcavity/microcavity_poster.jpg',
              alt: '다층 박막 적층과 레이저 방출 루프' }
   }
   ```
3. HTML을 새로고침한다. 주소 끝에 `?check`를 붙이면(예: `...v2_1.html?check`) 사례마다 **파일 경로 띠**가 보인다 — 초록 = 불러옴, 빨강 = 못 불러옴. 개발자 도구 콘솔에도 표가 나온다.

## 3. 어디에 보이나
| 항목 | 첫 화면(히어로) | 사례 카드 | 상세 보기 |
|---|---|---|---|
| `cover` | 탭별 미리보기 위쪽 | 카드 왼쪽 큰 이미지 (마우스 올리면 살짝 확대) | 맨 위 큰 이미지, 누르면 전체 화면 확대 |
| `gallery` | — | — | 큰 이미지 아래 2~3열 썸네일, 누르면 확대 |
| `video` | — | 화면에 보이면 자동 재생(무음·반복), 벗어나면 멈춤 | 재생 조절 막대 포함 |

- 방문자가 "움직임 줄이기"를 켜 두었으면 영상은 자동 재생하지 않고 첫 장면만 보인다.

## 4. 파일 기준
| 종류 | 형식 | 크기 기준 | 비고 |
|---|---|---|---|
| 대표 이미지 | PNG(글자 많은 슬라이드) 또는 WebP/JPG(사진·렌더) | 가로 1600~2000px, **1장 1MB 이하 권장** | `ratio`를 실제 비율로(정사각 `1/1`, 슬라이드 `16/9`) |
| 추가 이미지 | 위와 같음 | 가로 1200~1600px | 사례당 3~6장이 보기 좋음 |
| 루프 영상 | MP4 (H.264, 무음) | 5~30초, 960×540 이상, **10MB 이하 권장** | 첫 장면 JPG(`poster`)를 꼭 함께 넣음 |
| 첫 장면 | JPG | 영상과 같은 크기 | 영상 로딩 전·움직임 줄이기 때 보임 |

## 5. 공개 전 점검 (운영지침 v2.3 10장)
- **고객 자료는 넣지 않는다.** 고객 기반 사례는 가상으로 재구성한 이미지만 쓰고 "가상 자료·결과로 재구성한 자체 제작 샘플"로 표시한다(10.1).
- 대표 본인 자료는 10.2에서 승인한 포스터·PN접합·R&E 강의안만 실제 자료로 쓴다. 포스터는 제목·저자·소속·심볼·본문·그림·도표 블러를 유지한다. 그 밖의 본인 자료(3D 영상, 다른 논문·발표)는 대표님이 범위를 정한 뒤 넣는다.
- 공동저자·지도교수·연구실·기관 이름과 로고, 미발표 수치, 과제번호·DOI가 보이면 가린다(R-016 공개 전 점검표 16항목).
- 최종 공개 파일 확인·배포는 대표님이 한다.

## 6. 배포할 때 (나중에)
- 이 폴더 전체(`html` + `assets/`)를 그대로 올리면 된다. 경로는 모두 상대 경로다.
- 지금은 Tailwind CDN을 쓰므로 인터넷이 있어야 디자인이 보인다. 정식 배포 때는 CSS를 빌드해 한 파일로 넣는 것을 권장한다.
