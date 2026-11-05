/**
 * 딥리서치 포트폴리오 — 사례별 이미지·영상 목록 (이 파일만 고치면 사이트에 반영됩니다)
 *
 * 사용법 (자세한 내용: assets/README_이미지넣기.md)
 *  1. 파일을 assets/cases/<사례 폴더>/ 에 넣는다 (영문·숫자·_ 파일명 권장)
 *  2. 아래 해당 사례의 cover / gallery / video 경로를 적는다
 *  3. HTML을 새로고침한다. 파일이 없거나 경로가 틀리면 기존 도식이 대신 보인다
 *  4. 주소 끝에 ?check 를 붙여 열면 사례마다 파일 경로와 표시 여부(OK/없음)가 보인다
 *
 * 항목
 *  cover   : 카드·첫 화면에 보일 대표 이미지 { src, alt, ratio }  ratio 예: '1/1', '16/9'
 *  gallery : 상세 보기에 함께 보일 이미지 [{ src, alt, caption }]  (없으면 [])
 *  video   : 짧은 루프 영상 { src(mp4), poster(첫 장면 jpg/png), alt }  (없으면 null)
 *            video가 있으면 카드에서는 영상이 cover보다 먼저 보인다
 *  공개 전 점검: 고객 자료 금지(운영지침 10.1), 대표 본인 자료는 10.2 범위·블러 확인 후 대표님이 넣는다
 */
window.DR_MEDIA = {
  'case-research-ppt': {
    cover: { src: 'assets/cases/08_research-portfolio/research_portfolio_slide1_v2.0.jpg', alt: '연구·기술 포트폴리오 1/6 — 표지 · 연구·기술 포트폴리오', ratio: '4/3' },
    gallery: [
      { src: 'assets/cases/08_research-portfolio/research_portfolio_slide2_v2.0.jpg', alt: '연구·기술 포트폴리오 2/6 — 01 연구자 정체성 설계', caption: '2/6 01 연구자 정체성 설계' },
      { src: 'assets/cases/08_research-portfolio/research_portfolio_slide3_v2.0.jpg', alt: '연구·기술 포트폴리오 3/6 — 02 연구 서사 구조화 (7단계 케이스 스터디)', caption: '3/6 02 연구 서사 구조화 (7단계 케이스 스터디)' },
      { src: 'assets/cases/08_research-portfolio/research_portfolio_slide4_v2.0.jpg', alt: '연구·기술 포트폴리오 4/6 — 03 과학 시각화 (공진기 구조와 광학 과정)', caption: '4/6 03 과학 시각화 (공진기 구조와 광학 과정)' },
      { src: 'assets/cases/08_research-portfolio/research_portfolio_slide5_v2.0.jpg', alt: '연구·기술 포트폴리오 5/6 — 04 인터랙티브 웹 구현', caption: '5/6 04 인터랙티브 웹 구현' },
      { src: 'assets/cases/08_research-portfolio/research_portfolio_slide6_v2.0.jpg', alt: '연구·기술 포트폴리오 6/6 — 05 전체 완성도', caption: '6/6 05 전체 완성도' }
    ],
    video: null
  },

  'case-poster': {
    cover: {
      src: 'assets/cases/01_poster/poster_process_v2.2.png',
      alt: '논문 원문 3쪽과 이를 한 장으로 구성한 학회 포스터. 연구 내용 보호를 위해 원문과 포스터에 블러 적용',
      ratio: '1/1'
    },
    gallery: [],
    video: null
  },

  'case-pn-ppt': {
    cover: {
      src: 'assets/cases/02_pn-lecture/pn_lecture_v2.0.jpg',
      alt: 'PN 접합 강의안 슬라이드 3장 — 접합 형성(확산·드리프트), 공핍층 폭 수식 전개, 반도체 전하 캐리어 밀도',
      ratio: '1/1'
    },
    gallery: [],
    video: null
  },

  'case-rne-ppt': {
    cover: {
      src: 'assets/cases/03_rne-lecture/rne_lecture_v2.1.png',
      alt: 'FDTD 시뮬레이션 강의안 슬라이드 6장 — Yee cell 원리, 구조 설정, 물질 선정, 경계 조건, Mesh accuracy 2와 8 비교',
      ratio: '1/1'
    },
    gallery: [],
    video: null
  },


  // 아직 영상 없음 — Blender 루프(mp4)와 첫 장면(jpg)을 넣으면 경로를 적는다
  // 예: video: { src: 'assets/cases/07_microcavity/microcavity_loop.mp4',
  //              poster: 'assets/cases/07_microcavity/microcavity_poster.jpg',
  //              alt: 'Microcavity laser 다층 박막 적층과 레이저 방출 과정 루프 영상' }
  'case-3d-microcavity': {
    cover: null,
    gallery: [],
    video: { src: 'assets/cases/07_microcavity/microcavity_loop_v1.mp4', poster: '', alt: '다층 박막(DBR) 적층과 공진기 안 빛의 방출을 보여 주는 개념 시각화 루프 영상' }
  }
};
