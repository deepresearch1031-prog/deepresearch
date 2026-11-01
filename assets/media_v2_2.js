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
      src: 'assets/cases/02_pn-lecture/pn_lecture_v1.3.png',
      alt: 'PN 접합 강의안 슬라이드 6장 — 접합 형성, 평형 페르미 준위, 도핑 차이에 따른 전기장 분포, 내장 전위, 캐리어 밀도',
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

  'case-editing': {
    cover: {
      src: 'assets/cases/04_editing/editing_process_v1.0.png',
      alt: '가상 연구계획서 문단의 첨삭 전, 수정 이유 3가지, 첨삭 후 문단과 작성자 확인 질문',
      ratio: '16/9'
    },
    gallery: [],
    video: null
  },

  'case-pres-consult': {
    cover: {
      src: 'assets/cases/05_presentation/presentation_timing_v0.1.png',
      alt: '강의안 31장을 15분 발표 7구간으로 나눈 시간 배분표와 리허설 뒤 서면 피드백 예시',
      ratio: '1/1'
    },
    gallery: [],
    video: null
  },

  // 아직 이미지 없음 — 가상 재구성 샘플 이미지를 만들면 경로를 적는다
  'case-job-portfolio': {
    cover: null,
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
