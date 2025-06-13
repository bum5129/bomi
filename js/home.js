// Supabase 클라이언트 초기화 (본인 프로젝트 정보로 교체)
const supabaseUrl = 'https://skaxflcpzvsdufncihkb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrYXhmbGNwenZzZHVmbmNpaGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MjE5MDksImV4cCI6MjA2NTI5NzkwOX0.uiyKu4N8pAgX6ii6g_4jbxfosHeIWi8JP0Hrfyly7tM';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 역할별 아이콘 정의
const roleIcons = {
  '기획자': `<div class="role-icon"><i class="fas fa-lightbulb"></i></div>`,
  '개발자': `<div class="role-icon"><i class="fas fa-code"></i></div>`,
  '디자이너': `<div class="role-icon"><i class="fas fa-paint-brush"></i></div>`,
  '마케터': `<div class="role-icon"><i class="fas fa-chart-line"></i></div>`,
  '자금조달': `<div class="role-icon"><i class="fas fa-money-bill-wave"></i></div>`,
  '회계': `<div class="role-icon"><i class="fas fa-calculator"></i></div>`,
  '법무': `<div class="role-icon"><i class="fas fa-gavel"></i></div>`,
  '기타': `<div class="role-icon"><i class="fas fa-users-cog"></i></div>`,
  '발명가': `<div class="role-icon"><i class="fas fa-lightbulb"></i></div>`
};

// 프로젝트 예시 데이터
const projects = [
  {
    name: "AI 기반 피트니스 코칭 앱",
    desc: "사용자의 운동 동작을 분석하고 실시간으로 피드백을 제공하는 AI 코칭 서비스",
    roles: ["기획자", "개발자", "디자이너"],
    category: "스타트업",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&h=400",
    contact: "010-1234-5678"
  },
  {
    name: "친환경 배송 플랫폼",
    desc: "지역 기반 공동 배송을 통해 탄소 배출을 줄이는 친환경 물류 서비스",
    roles: ["기획자", "개발자", "마케터"],
    category: "프로젝트",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&h=400",
    contact: "010-2345-6789"
  },
  {
    name: "실시간 언어 학습 커뮤니티",
    desc: "전 세계 사람들과 실시간으로 대화하며 언어를 배울 수 있는 글로벌 플랫폼",
    roles: ["기획자", "디자이너", "마케터", "개발자"],
    category: "공모전",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&h=400",
    contact: "010-3456-7890"
  },
  {
    name: "창작자 마켓플레이스",
    desc: "디지털 창작자들이 자신의 작품을 NFT로 판매하고 거래할 수 있는 통합 플랫폼",
    roles: ["디자이너", "개발자", "마케터", "기획자"],
    category: "스타트업",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=600&h=400",
    contact: "010-4567-8901"
  },
  {
    name: "스마트 농업 솔루션",
    desc: "IoT 기술을 활용한 스마트 농업 시스템으로 작물 관리를 자동화하고 생산성을 향상시키는 서비스",
    roles: ["개발자", "기획자", "마케터"],
    category: "기타",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    contact: "010-5678-9012"
  },
  {
    name: "메타버스 교육 플랫폼",
    desc: "가상 현실을 활용한 몰입형 교육 경험을 제공하는 메타버스 기반 교육 플랫폼",
    roles: ["디자이너", "개발자", "기획자"],
    category: "공모전",
    image: "https://images.unsplash.com/photo-1629429407756-446d66f5b24e?q=80&w=600&h=400",
    contact: "010-6789-0123"
  }
];

// 팀원 예시 데이터
const members = {
  "기획자": [
    { 
      name: "김동서", 
      intro: "서비스 기획 5년차, 트렌드에 민감해요.",
      skills: ["서비스 기획", "데이터 분석", "UX 리서치"],
      portfolio: "https://notion.so/kimplan",
      university: "동서대학교",
      department: "경영학과",
      contact: "010-1234-5678",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "이전략", 
      intro: "데이터 기반 기획, PM 경험 다수.", 
      skills: ["제품 관리", "사용자 연구", "애자일 방법론"],
      portfolio: "https://notion.so/leeplan",
      university: "연세대학교",
      department: "산업공학과",
      contact: "010-2345-6789",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "박빛나", 
      intro: "창의적인 아이디어 뱅크!", 
      skills: ["아이디어 발굴", "벤치마킹", "MVP 설계"],
      portfolio: "https://notion.so/parkidea",
      university: "고려대학교",
      department: "심리학과",
      contact: "010-3456-7890",
      image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=300&h=300&auto=format&fit=crop"
    }
  ],
  "개발자": [
    { 
      name: "최개발", 
      intro: "풀스택 개발자, React/Node.js 전문.",
      skills: ["React", "Node.js", "TypeScript"],
      portfolio: "https://github.com/choidev",
      university: "동서대학교",
      department: "컴퓨터공학과",
      contact: "010-4567-8901",
      image: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "정코딩", 
      intro: "iOS/Android 앱 개발 경력 4년.", 
      skills: ["Swift", "Kotlin", "Flutter"],
      portfolio: "https://github.com/jungcoding",
      university: "한양대학교",
      department: "컴퓨터공학과",
      contact: "010-5678-9012",
      image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "한백엔드", 
      intro: "백엔드, 인프라 구축 경험 풍부.", 
      skills: ["Python", "AWS", "Docker"],
      portfolio: "https://github.com/hanbackend",
      university: "성균관대학교",
      department: "소프트웨어학과",
      contact: "010-6789-0123",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop"
    }
  ],
  "디자이너": [
    { 
      name: "오디자인", 
      intro: "UI/UX 디자인, 브랜딩 경험 다수.",
      skills: ["Figma", "UI/UX", "브랜딩"],
      portfolio: "https://behance.net/ohdesign",
      university: "동서대학교",
      department: "디자인학과",
      contact: "010-7890-1234",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "유그래픽", 
      intro: "그래픽/일러스트 전문 디자이너.", 
      skills: ["일러스트레이션", "그래픽 디자인", "애니메이션"],
      portfolio: "https://dribbble.com/yugraphic",
      university: "홍익대학교",
      department: "시각디자인과",
      contact: "010-8901-2345",
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "임프로덕트", 
      intro: "프로덕트 디자인, 사용자 경험 중시.", 
      skills: ["제품 디자인", "UX 리서치", "프로토타이핑"],
      portfolio: "https://notion.so/improduct",
      university: "단국대학교",
      department: "제품디자인과",
      contact: "010-9012-3456",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&auto=format&fit=crop"
    }
  ],
  "마케터": [
    { 
      name: "신난다", 
      intro: "디지털 마케팅, SNS 광고 전문가.",
      skills: ["SNS 마케팅", "콘텐츠 전략", "광고 집행"],
      portfolio: "https://notion.so/shinmarketing",
      university: "동서대학교",
      department: "경영학과",
      contact: "010-0123-4567",
      image: "https://images.unsplash.com/photo-1543060829-a0029874b174?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "문브랜딩", 
      intro: "브랜드 마케팅, 캠페인 기획 경험.", 
      skills: ["브랜드 전략", "캠페인 기획", "PR"],
      portfolio: "https://notion.so/moonbranding",
      university: "중앙대학교",
      department: "광고홍보학과",
      contact: "010-1234-5678",
      image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "장퍼포먼스", 
      intro: "퍼포먼스 마케팅, 데이터 분석.", 
      skills: ["퍼포먼스 마케팅", "GA/GTM", "마케팅 자동화"],
      portfolio: "https://notion.so/jangperformance",
      university: "경희대학교",
      department: "경영학과",
      contact: "010-2345-6789",
      image: "https://images.unsplash.com/photo-1569389397653-c04fe624e663?w=300&h=300&auto=format&fit=crop"
    }
  ],
  "기타": [
    { 
      name: "최자금", 
      intro: "스타트업 투자 유치 10억 이상 경험 보유.",
      skills: ["자금조달", "투자 유치", "IR 작성"],
      portfolio: "https://notion.so/choifunding",
      university: "서울대학교",
      department: "경영학과",
      contact: "010-3456-7890",
      image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "백회계", 
      intro: "스타트업 세무 전문가, 재무제표 분석.", 
      skills: ["회계", "세무", "재무 관리"],
      portfolio: "https://notion.so/baekaccounting",
      university: "고려대학교",
      department: "회계학과",
      contact: "010-4567-8901",
      image: "https://images.unsplash.com/photo-1545436864-cd9bdd1ddebc?w=300&h=300&auto=format&fit=crop"
    },
    { 
      name: "강발명", 
      intro: "25개 특허 보유, 제품 개발 전문가.", 
      skills: ["발명", "특허 출원", "제품 개발"],
      portfolio: "https://notion.so/kanginvention",
      university: "한양대학교",
      department: "기계공학과",
      contact: "010-5678-9012",
      image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=300&h=300&auto=format&fit=crop"
    }
  ]
};

// DOM 요소
const findProjectsBtn = document.getElementById('find-projects');
const findMembersBtn = document.getElementById('find-members');
const projectsSection = document.getElementById('projects-section');
const membersSection = document.getElementById('members-section');
const registerProjectSection = document.getElementById('register-project-section');
const registerMemberSection = document.getElementById('register-member-section');
const projectList = document.querySelector('.project-list');
const memberCategories = document.querySelector('.member-categories');
const backBtns = document.querySelectorAll('.back-btn');
const registerProjectBtn = document.getElementById('register-project-btn');
const registerMemberBtn = document.getElementById('register-member-btn');
const profileModal = document.getElementById('profile-modal');
const profileDetails = document.getElementById('profile-details');
const closeBtn = document.querySelector('.close-btn');
const searchBar = document.querySelector('.search-bar input');
const roleTabs = document.querySelectorAll('.role-tab');
const projectForm = document.getElementById('project-form');
const memberForm = document.getElementById('member-form');
const memberRoleSelect = document.getElementById('member-role');
const memberRoleOtherContainer = document.getElementById('member-role-other-container');
const memberRoleOther = document.getElementById('member-role-other');
const cancelBtns = document.querySelectorAll('.cancel-btn');
const listBtns = document.querySelectorAll('.list-btn');
const otherRoleCheckbox = document.getElementById('other-role-checkbox');
const otherRoleContainer = document.getElementById('other-role-container');
const otherRoleInput = document.getElementById('other-role-input');
const projectImageInput = document.getElementById('project-image-file');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imagePreview = document.getElementById('image-preview');
const removeImageBtn = document.getElementById('remove-image');
const fileNameSpan = document.querySelector('.file-name');
let imageFile = null;

// 페이지 로드 시 애니메이션 효과
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  
  // 별빛 효과 생성
  createStars();
});

// 별빛 효과 생성 함수
function createStars() {
  const galaxyBg = document.querySelector('.galaxy-bg');
  if (!galaxyBg) return; // galaxyBg가 없으면 함수 종료
  const starCount = 150;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // 랜덤 위치와 크기 설정
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2;
    const duration = 3 + Math.random() * 6;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    galaxyBg.appendChild(star);
  }
}

// 메인 선택지 → 프로젝트
findProjectsBtn.onclick = () => {
  document.querySelector('.choice').classList.add('hidden');
  projectsSection.classList.remove('hidden');
  
  // 프로젝트 카테고리 탭 추가
  addProjectCategoryTabs();
  
  renderProjects("전체");
  
  // 애니메이션 효과
  setTimeout(() => {
    projectsSection.classList.add('fade-in');
  }, 100);
};

// 메인 선택지 → 팀원
findMembersBtn.onclick = () => {
  document.querySelector('.choice').classList.add('hidden');
  membersSection.classList.remove('hidden');
  
  // 팀원 등록 버튼 추가
  addMemberRegisterButton();
  
  // 모든 역할 표시(전체 탭 활성화)
  renderMembers("전체");
  
  // 애니메이션 효과
  setTimeout(() => {
    membersSection.classList.add('fade-in');
  }, 100);
};

// 뒤로가기
backBtns.forEach(btn => {
  if (btn.id === 'register-project-btn') {
    btn.onclick = () => {
      projectsSection.classList.remove('fade-in');
      setTimeout(() => {
        projectsSection.classList.add('hidden');
        registerProjectSection.classList.remove('hidden');
        setTimeout(() => {
          registerProjectSection.classList.add('fade-in');
        }, 100);
      }, 300);
    };
  } else if (btn.id === 'register-member-btn') {
    btn.onclick = () => {
      membersSection.classList.remove('fade-in');
      setTimeout(() => {
        membersSection.classList.add('hidden');
        registerMemberSection.classList.remove('hidden');
        setTimeout(() => {
          registerMemberSection.classList.add('fade-in');
        }, 100);
      }, 300);
    };
  }
});

// 프로젝트 카테고리 탭 추가
function addProjectCategoryTabs() {
  // 이미 탭이 존재하는지 확인
  if (projectsSection.querySelector('.project-category-tabs')) {
    return;
  }
  
  // 검색바 제거
  const searchBar = projectsSection.querySelector('.search-bar');
  if (searchBar) {
    searchBar.remove();
  }
  
  // 카테고리 목록 (중복 없이)
  const categories = ["전체", ...new Set(projects.map(proj => proj.category))];
  
  // 카테고리 탭 컨테이너 생성
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'project-category-tabs role-tabs';
  
  // 탭 버튼 래퍼 생성
  const tabsWrapper = document.createElement('div');
  tabsWrapper.className = 'tabs-wrapper';
  
  // 등록하기 버튼 생성
  const registerButton = document.createElement('button');
  registerButton.className = 'register-button project-register-button';
  registerButton.innerHTML = '<i class="fas fa-plus-circle"></i> 프로젝트 등록하기';
  registerButton.addEventListener('click', () => {
    // 먼저 즉시 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 약간의 지연 후 폼 표시
    setTimeout(() => {
      showProjectForm();
    }, 100);
  });
  
  categories.forEach(category => {
    const tab = document.createElement('button');
    tab.className = 'role-tab project-category-tab';
    if (category === "전체") {
      tab.classList.add('active');
    }
    tab.setAttribute('data-category', category);
    tab.textContent = category;
    
    tab.addEventListener('click', () => {
      // 활성 탭 변경
      document.querySelectorAll('.project-category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // 선택한 카테고리로 필터링
      renderProjects(category);
    });
    
    tabsWrapper.appendChild(tab);
  });
  
  // 탭 버튼들과 등록하기 버튼을 컨테이너에 추가
  tabsContainer.appendChild(tabsWrapper);
  tabsContainer.appendChild(registerButton);
  
  // 섹션에 탭 추가
  const sectionHeader = projectsSection.querySelector('.section-header');
  sectionHeader.insertAdjacentElement('afterend', tabsContainer);
}

// 프로젝트 리스트 렌더링
function renderProjects(category = "전체") {
  projectList.innerHTML = '';
  
  // 필터링된 프로젝트
  const filteredProjects = category === "전체" ? 
    projects : 
    projects.filter(proj => proj.category === category);
  
  filteredProjects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image">
        <img src="${proj.image}" alt="${proj.name}" onerror="this.src='https://via.placeholder.com/600x400/dddddd/999999?text=${encodeURIComponent(proj.name)}'">
      </div>
      <div class="project-header">
        <span class="project-title">${proj.name}</span>
        <span class="project-category">${proj.category}</span>
      </div>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-footer">
        <span class="project-label">필요 팀원</span>
        <span class="role-icons">
          ${proj.roles.map(role => roleIcons[role]).join('')}
        </span>
      </div>
    `;
    
    // 각 프로젝트 카드에 클릭 이벤트 추가
    card.addEventListener('click', () => {
      showProjectDetails(proj);
    });
    
    projectList.appendChild(card);
    
    // 카드 스태거드 애니메이션
    setTimeout(() => {
      card.classList.add('show');
    }, 150 * (projectList.children.length - 1));
  });
}

// 프로젝트 상세 정보 표시
function showProjectDetails(project) {
  profileDetails.innerHTML = `
    <div class="profile-header">
      <img src="${project.image}" alt="${project.name}" class="project-detail-image" onerror="this.src='https://via.placeholder.com/600x400/dddddd/999999?text=${encodeURIComponent(project.name)}'">
      <h3 style="color: var(--purple-gradient-light);">${project.name}</h3>
      <p class="project-category-badge" style="background: rgba(162, 57, 202, 0.1); color: var(--purple-gradient-dark);">${project.category}</p>
    </div>
    <p class="project-full-desc">${project.desc}</p>
    <div class="project-needs">
      <h4 style="color: var(--purple-gradient-light);">필요 팀원</h4>
      <div class="role-badges">
        ${project.roles.map(role => 
          `<span class="role-badge" style="background: rgba(162, 57, 202, 0.1); color: var(--purple-gradient-dark);">${roleIcons[role] || `<div class="role-icon"><i class="fas fa-user-tag"></i></div>`} ${role}</span>`
        ).join('')}
      </div>
    </div>
    ${project.contact ? `
    <div class="project-contact" style="border-left: 4px solid var(--purple-gradient-light); background: rgba(162, 57, 202, 0.05);">
      <p><strong style="color: var(--purple-gradient-light);">연락처:</strong> <span class="contact-number">${project.contact}</span></p>
    </div>
    ` : ''}
    <button class="apply-btn" style="background: linear-gradient(135deg, var(--purple-gradient-light), var(--purple-gradient-dark)); box-shadow: 0 5px 15px rgba(162, 57, 202, 0.3);" data-project="${project.name}" data-contact="${project.contact || ''}">문의 메시지 보내기</button>
  `;
  
  // 메시지 보내기 버튼 클릭 이벤트
  const sendMessageBtn = profileDetails.querySelector('.apply-btn');
  if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', function() {
      const projectName = this.getAttribute('data-project');
      const contactNumber = this.getAttribute('data-contact');
      
      if (!contactNumber) {
        alert('이 프로젝트에 연락처 정보가 없습니다.');
        return;
      }
      
      // SMS 링크 생성
      const message = `[팀메이커] ${projectName} 프로젝트 보고 연락드립니다.`;
      const smsLink = `sms:${contactNumber}?body=${encodeURIComponent(message)}`;
      
      // 새 창에서 링크 열기
      window.open(smsLink, '_blank');
    });
    
    // 호버 효과 추가
    sendMessageBtn.addEventListener('mouseover', function() {
      this.style.background = 'var(--purple-gradient-dark)';
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 20px rgba(162, 57, 202, 0.4)';
    });
    
    sendMessageBtn.addEventListener('mouseout', function() {
      this.style.background = 'linear-gradient(135deg, var(--purple-gradient-light), var(--purple-gradient-dark))';
      this.style.transform = '';
      this.style.boxShadow = '0 5px 15px rgba(162, 57, 202, 0.3)';
    });
  }
  
  // 모달 표시
  profileModal.classList.remove('hidden');
  profileModal.classList.add('visible');
}

// 팀원 리스트 렌더링
function renderMembers(filterRole = "전체") {
  memberCategories.innerHTML = '';
  
  let rolesToRender = Object.keys(members);
  
  // 필터링
  if (filterRole !== "전체") {
    rolesToRender = [filterRole];
  }
  
  rolesToRender.forEach(role => {
    const category = document.createElement('div');
    category.className = 'member-category';
    category.innerHTML = `
      <h3>${role} ${roleIcons[role]}</h3>
      <div class="member-list role-${role}"></div>
    `;
    
    const list = category.querySelector(`.member-list.role-${role}`);
    members[role].forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'member-card';
      card.style.cursor = 'pointer'; // 커서 스타일 변경
      card.setAttribute('data-portfolio', member.portfolio);
      card.setAttribute('data-name', member.name);
      card.setAttribute('data-role', role);
      card.setAttribute('data-index', index);
      
      card.innerHTML = `
        <div class="member-image">
          <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/300x200/dddddd/999999?text=${encodeURIComponent(member.name)}'">
        </div>
        <span class="member-name">${member.name} <span class="member-education">${member.university} ${member.department}</span></span>
        <p class="member-intro">${member.intro}</p>
        <div class="skill-tags">
          ${member.skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
          ).join('')}
        </div>
        <button class="profile-btn">프로필 보기</button>
      `;
      
      // 카드 전체에 클릭 이벤트 추가
      card.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const url = this.getAttribute('data-portfolio');
        const role = this.getAttribute('data-role');
        const index = this.getAttribute('data-index');
        
        showProfileModal(name, url, role, index);
      });
      
      list.appendChild(card);
      
      // 카드 스태거드 애니메이션
      setTimeout(() => {
        card.classList.add('show');
      }, 100 * index);
    });
    
    memberCategories.appendChild(category);
  });

  // 프로필 버튼 클릭 시 이벤트 버블링 방지
  document.querySelectorAll('.profile-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const card = btn.closest('.member-card');
      const name = card.getAttribute('data-name');
      const url = card.getAttribute('data-portfolio');
      const role = card.getAttribute('data-role');
      const index = card.getAttribute('data-index');
      
      showProfileModal(name, url, role, index);
    };
  });
}

// 프로필 모달 표시
function showProfileModal(name, url, role, index) {
  const member = members[role][index];
  
  profileDetails.innerHTML = `
    <div class="profile-header">
      <img src="${member.image}" class="profile-image" alt="${name}" onerror="this.src='https://via.placeholder.com/300x300/dddddd/999999?text=${encodeURIComponent(name)}'">
      <h3>${name}</h3>
      <p class="profile-university">${member.university} ${member.department}</p>
      <span class="profile-role">${role}</span>
    </div>
    
    <p class="profile-intro">${member.intro}</p>
    
    <div class="profile-skills">
      <h4>보유 스킬</h4>
      <div class="skill-tags large">
        ${member.skills.map(skill => 
          `<span class="skill-tag">${skill}</span>`
        ).join('')}
      </div>
    </div>

    <div class="profile-buttons">
      <a href="${url}" target="_blank" class="portfolio-link">
        <i class="fas fa-external-link-alt"></i> 포트폴리오 보기
      </a>
      ${member.contact ? `
      <button class="apply-btn" data-member="${member.name}" data-contact="${member.contact}">문의 메시지 보내기</button>
      ` : ''}
    </div>
  `;
  
  // 메시지 보내기 버튼 클릭 이벤트
  const sendMessageBtn = profileDetails.querySelector('.apply-btn');
  if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', function() {
      const memberName = this.getAttribute('data-member');
      const contactNumber = this.getAttribute('data-contact');
      
      if (!contactNumber) {
        alert('이 팀원에 연락처 정보가 없습니다.');
        return;
      }
      
      // SMS 링크 생성
      const message = `[팀메이커] 팀원찾기 보고 연락드립니다.`;
      const smsLink = `sms:${contactNumber}?body=${encodeURIComponent(message)}`;
      
      // 새 창에서 링크 열기
      window.open(smsLink, '_blank');
    });
  }
  
  // 모달 표시
  profileModal.classList.remove('hidden');
  profileModal.classList.add('visible');
}

// 모달 닫기
closeBtn.onclick = () => {
  profileModal.classList.remove('visible');
  setTimeout(() => {
    profileModal.classList.add('hidden');
  }, 300);
};

profileModal.onclick = (e) => {
  if (e.target === profileModal) {
    profileModal.classList.remove('visible');
    setTimeout(() => {
      profileModal.classList.add('hidden');
    }, 300);
  }
};

// 검색 기능 - 검색바를 제거했으므로 이 코드는 더 이상 필요 없음
// searchBar.addEventListener('input', (e) => { ... });

// 역할 탭 필터링
roleTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 활성 탭 변경
    roleTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    const role = tab.getAttribute('data-role');
    
    // 선택한 역할로 팀원 렌더링
    renderMembers(role);
  });
});

// 역할 필터링 및 팀원 카테고리 탭 컨테이너 수정
function filterMembersByRole(role) {
  // 등록하기 버튼 추가
  addMemberRegisterButton();
  
  // 역할에 따라 필터링하여 다시 렌더링
  renderMembers(role);
}

// 프로젝트 등록 폼 표시
function showProjectForm() {
  document.querySelector('.choice').classList.add('hidden');
  projectsSection.classList.add('hidden');
  membersSection.classList.add('hidden');
  document.getElementById('register-project-section').classList.remove('hidden');
  
  // 애니메이션 효과
  setTimeout(() => {
    document.getElementById('register-project-section').classList.add('fade-in');
  }, 100);
}

// 팀원 등록 폼 표시  
function showMemberForm() {
  document.querySelector('.choice').classList.add('hidden');
  projectsSection.classList.add('hidden');
  membersSection.classList.add('hidden');
  document.getElementById('register-member-section').classList.remove('hidden');
  
  // 애니메이션 효과
  setTimeout(() => {
    document.getElementById('register-member-section').classList.add('fade-in');
  }, 100);
}

// 추가 CSS 스타일링
const style = document.createElement('style');
style.textContent = `
  .star {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.7;
    animation: twinkle linear infinite;
  }
  
  @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
  
  .project-card.show, .member-card.show, section.fade-in {
    animation: fadeInUp 0.6s forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .project-category {
    font-size: 0.8rem;
    background: rgba(52, 152, 219, 0.1);
    color: var(--main-blue);
    padding: 3px 10px;
    border-radius: 12px;
  }
  
  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  
  .project-label {
    font-size: 0.85rem;
    color: #666;
  }
  
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 8px 0;
  }
  
  .skill-tag {
    font-size: 0.8rem;
    font-family: var(--main-font);
    background: rgba(52, 152, 219, 0.1);
    color: var(--main-blue);
    padding: 5px 12px;
    border-radius: 12px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  
  .skill-tags.large .skill-tag {
    font-size: 0.9rem;
    padding: 5px 15px;
  }
  
  .profile-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile-avatar {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--main-blue), var(--accent-blue));
    border-radius: 50%;
    margin: 0 auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
  
  .profile-role {
    display: inline-block;
    font-size: 0.9rem;
    background: rgba(52, 152, 219, 0.1);
    color: var(--main-blue);
    padding: 3px 15px;
    border-radius: 20px;
    margin-top: 5px;
  }
  
  .profile-intro {
    text-align: center;
    margin-bottom: 20px;
    color: #555;
    line-height: 1.5;
  }
  
  .profile-skills h4 {
    text-align: center;
    margin-bottom: 10px;
    color: var(--main-blue-dark);
  }
  
  .project-category-badge {
    display: inline-block;
    background: rgba(52, 152, 219, 0.1);
    color: var(--main-blue);
    padding: 5px 15px;
    border-radius: 20px;
    margin-bottom: 15px;
  }
  
  .project-full-desc {
    margin-bottom: 20px;
    line-height: 1.6;
  }
  
  .project-needs {
    margin: 20px 0;
  }
  
  .project-needs h4 {
    margin-bottom: 12px;
    color: var(--main-blue-dark);
  }
  
  .role-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  
  .role-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 15px;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 30px;
    font-size: 0.9rem;
  }
  
  .role-badge .role-icon {
    width: 30px;
    height: 30px;
  }
  
  .apply-btn {
    background: var(--main-blue);
    color: white;
    border: none;
    border-radius: 30px;
    padding: 12px 30px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 15px;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
  
  .apply-btn:hover {
    background: var(--main-blue-dark);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(52, 152, 219, 0.4);
  }
  
  .portfolio-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  
  /* 팀원 이미지 스타일 */
  .member-image {
    height: 180px;
    overflow: hidden;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    margin: -25px -25px 15px -25px;
  }
  
  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  /* 이미지 호버 효과 */
  .member-card:hover .member-image img {
    transform: scale(1.05);
  }
  
  /* 프로필 이미지 스타일 */
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    margin: 0 auto 15px;
    display: block;
  }
`;

document.head.appendChild(style);

// 취소 버튼 처리
cancelBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const parentSection = this.closest('section');
    
    parentSection.classList.remove('fade-in');
    
    setTimeout(() => {
      parentSection.classList.add('hidden');
      
      if (parentSection.id === 'register-project-section') {
        projectsSection.classList.remove('hidden');
        setTimeout(() => {
          projectsSection.classList.add('fade-in');
        }, 100);
      } else if (parentSection.id === 'register-member-section') {
        membersSection.classList.remove('hidden');
        setTimeout(() => {
          membersSection.classList.add('fade-in');
        }, 100);
      }
    }, 300);
  });
});

// 파일 선택 시 미리보기 표시
if(projectImageInput) {
  projectImageInput.addEventListener('change', function() {
    if(this.files && this.files[0]) {
      const file = this.files[0];
      
      // 이미지 파일 여부 확인
      if(!file.type.match('image.*')) {
        alert('이미지 파일만 업로드 가능합니다.');
        this.value = '';
        return;
      }
      
      // 파일 크기 체크 (5MB 이하만 허용)
      if(file.size > 5 * 1024 * 1024) {
        alert('5MB 이하의 이미지만 업로드 가능합니다.');
        this.value = '';
        return;
      }
      
      // 선택된 파일명 표시
      fileNameSpan.textContent = file.name;
      
      // 미리보기 이미지 표시
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreviewContainer.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
      
      // 이미지 파일 저장
      imageFile = file;
    }
  });
}

// 이미지 제거 버튼 클릭 시
if(removeImageBtn) {
  removeImageBtn.addEventListener('click', function() {
    imagePreviewContainer.classList.add('hidden');
    projectImageInput.value = '';
    fileNameSpan.textContent = '이미지 파일을 선택하세요';
    imageFile = null;
  });
}

// 프로젝트 등록 폼 제출
projectForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // 필수 항목 검증
  const name = document.getElementById('project-name').value.trim();
  const category = document.getElementById('project-category').value.trim();
  const desc = document.getElementById('project-desc').value.trim();
  const contact = document.getElementById('project-contact').value.trim();
  
  if (!name || !category || !desc || !contact) {
    alert('필수 항목을 모두 입력해주세요.');
    return;
  }
  
  // 선택된 역할 확인
  const selectedRoles = [];
  const checkboxes = this.querySelectorAll('input[type="checkbox"]:checked');
  
  if (checkboxes.length === 0) {
    alert('필요한 역할을 하나 이상 선택해주세요.');
    return;
  }
  
  checkboxes.forEach(checkbox => {
    if (checkbox.value === '기타' && otherRoleInput.value.trim()) {
      // 기타 역할 처리
      const otherRoles = otherRoleInput.value.split(',').map(role => role.trim()).filter(role => role);
      selectedRoles.push(...otherRoles);
      
      // 새로운 역할에 대한 아이콘 생성
      otherRoles.forEach(role => {
        if (!roleIcons[role]) {
          roleIcons[role] = `<div class="role-icon"><i class="fas fa-user-tag"></i></div>`;
        }
      });
    } else {
      selectedRoles.push(checkbox.value);
    }
  });
  
  // 이미지 처리
  let imageData = '';
  if (imageFile) {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function() {
      // 이미지 데이터 저장
      imageData = reader.result;
      
      // 새 프로젝트 객체 생성 및 등록 완료
      finishProjectRegistration(name, desc, selectedRoles, category, contact, imageData);
    };
  } else {
    // 이미지 없이 프로젝트 등록
    finishProjectRegistration(name, desc, selectedRoles, category, contact, imageData);
  }
});

// 프로젝트 등록 완료 함수
async function finishProjectRegistration(name, desc, selectedRoles, category, contact, imageData) {
  // Supabase에 저장
  const { data, error } = await supabase
    .from('projects')
    .insert([{
      title: name,
      description: desc,
      roles: JSON.stringify(selectedRoles), // roles 컬럼이 배열이 아니면 문자열로 저장
      category: category,
      contact: contact,
      image: imageData,
      status: 'planning',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }]);

  if (error) {
    alert('프로젝트 등록 실패: ' + error.message);
    return;
  }

  alert('프로젝트가 성공적으로 등록되었습니다!');

  // 폼 초기화 및 UI 갱신 코드 (기존 코드 유지)
  projectForm.reset();
  otherRoleContainer.classList.add('hidden');
  if (imagePreviewContainer) {
    imagePreviewContainer.classList.add('hidden');
  }
  if (fileNameSpan) {
    fileNameSpan.textContent = '이미지 파일을 선택하세요';
  }
  imageFile = null;
  registerProjectSection.classList.remove('fade-in');
  setTimeout(() => {
    registerProjectSection.classList.add('hidden');
    projectsSection.classList.remove('hidden');
    renderProjects();
    setTimeout(() => {
      projectsSection.classList.add('fade-in');
    }, 100);
  }, 300);
}

// 팀원 등록 폼 제출
memberForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // 필수 항목 검증
  const name = document.getElementById('member-name').value.trim();
  const role = document.getElementById('member-role').value.trim();
  const university = document.getElementById('member-university').value.trim();
  const department = document.getElementById('member-department').value.trim();
  const intro = document.getElementById('member-intro').value.trim();
  
  // 기타 역할 처리
  let finalRole = role;
  if (role === '기타') {
    const otherRole = document.getElementById('member-role-other').value.trim();
    if (!otherRole) {
      alert('구체적인 역할을 입력해주세요.');
      return;
    }
    finalRole = otherRole;
    
    // 새 역할에 아이콘 추가
    if (!roleIcons[finalRole]) {
      roleIcons[finalRole] = `<div class="role-icon"><i class="fas fa-user-tag"></i></div>`;
    }
  }
  
  // 필수 항목이 비어있으면 알림 표시
  if (!name || !finalRole || !university || !department || !intro) {
    alert('필수 항목을 모두 입력해주세요.');
    return;
  }
  
  // 입력된 스킬 배열로 변환 (없으면 빈 배열)
  const skillsInput = document.getElementById('member-skills').value;
  const skillsArray = skillsInput ? skillsInput.split(',').map(skill => skill.trim()) : [];
  
  // 포트폴리오 URL (없으면 빈 문자열)
  const portfolio = document.getElementById('member-portfolio').value || '';
  
  // 이미지 처리
  let imageData = '';
  if (memberImageFile) {
    const reader = new FileReader();
    reader.readAsDataURL(memberImageFile);
    reader.onload = function() {
      // 이미지 데이터 저장
      imageData = reader.result;
      
      // 새 팀원 객체 생성 및 등록 완료
      finishMemberRegistration(name, intro, skillsArray, portfolio, university, department, finalRole, imageData);
    };
  } else {
    // 이미지 없이 팀원 등록
    finishMemberRegistration(name, intro, skillsArray, portfolio, university, department, finalRole, imageData);
  }
});

// 팀원 등록 완료 함수
function finishMemberRegistration(name, intro, skillsArray, portfolio, university, department, finalRole, imageData) {
  // 새 팀원 객체 생성
  const newMember = {
    name: name,
    intro: intro,
    skills: skillsArray,
    portfolio: portfolio,
    university: university,
    department: department,
    image: imageData || getRandomAsianStudentImage()
  };
  
  // 해당 역할에 팀원 추가
  if (!members[finalRole]) {
    members[finalRole] = [];
  }
  members[finalRole].unshift(newMember);
  
  // 성공 메시지 표시
  alert('팀원 프로필이 성공적으로 등록되었습니다!');
  
  // 폼 초기화
  memberForm.reset();
  memberRoleOtherContainer.style.display = 'none';
  
  // 이미지 미리보기 초기화
  if (memberImagePreviewContainer) {
    memberImagePreviewContainer.classList.add('hidden');
  }
  if (memberFileNameSpan) {
    memberFileNameSpan.textContent = '이미지 파일을 선택하세요';
  }
  memberImageFile = null;
  
  // 팀원 목록 페이지로 이동 및 새로고침
  registerMemberSection.classList.remove('fade-in');
  setTimeout(() => {
    registerMemberSection.classList.add('hidden');
    membersSection.classList.remove('hidden');
    renderMembers(); // 팀원 목록 다시 렌더링
    setTimeout(() => {
      membersSection.classList.add('fade-in');
    }, 100);
  }, 300);
}

// 랜덤 아시아 학생 이미지 URL 반환 함수
function getRandomAsianStudentImage() {
  const asianStudentImages = [
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 남학생
    "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 여학생
    "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 여학생
    "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 남학생
    "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 남학생
    "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 남학생
    "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 여학생
    "https://images.pexels.com/photos/788567/pexels-photo-788567.jpeg?w=300&h=300&auto=format&fit=crop", // 아시아 여학생
    "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?w=300&h=300&auto=format&fit=crop" // 아시아 여학생
  ];
  
  return asianStudentImages[Math.floor(Math.random() * asianStudentImages.length)];
}

// 팀원 이미지 업로드 관련 변수
const memberImageInput = document.getElementById('member-image-file');
const memberImagePreviewContainer = document.getElementById('member-image-preview-container');
const memberImagePreview = document.getElementById('member-image-preview');
const removeMemberImageBtn = document.getElementById('remove-member-image');
const memberFileNameSpan = document.querySelector('.member-file-name');
let memberImageFile = null;

// 팀원 이미지 파일 선택 시 미리보기 표시
if(memberImageInput) {
  memberImageInput.addEventListener('change', function() {
    if(this.files && this.files[0]) {
      const file = this.files[0];
      
      // 이미지 파일 여부 확인
      if(!file.type.match('image.*')) {
        alert('이미지 파일만 업로드 가능합니다.');
        this.value = '';
        return;
      }
      
      // 파일 크기 체크 (5MB 이하만 허용)
      if(file.size > 5 * 1024 * 1024) {
        alert('5MB 이하의 이미지만 업로드 가능합니다.');
        this.value = '';
        return;
      }
      
      // 선택된 파일명 표시
      memberFileNameSpan.textContent = file.name;
      
      // 미리보기 이미지 표시
      const reader = new FileReader();
      reader.onload = function(e) {
        memberImagePreview.src = e.target.result;
        memberImagePreviewContainer.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
      
      // 이미지 파일 저장
      memberImageFile = file;
    }
  });
}

// 팀원 이미지 제거 버튼 클릭 시
if(removeMemberImageBtn) {
  removeMemberImageBtn.addEventListener('click', function() {
    memberImagePreviewContainer.classList.add('hidden');
    memberImageInput.value = '';
    memberFileNameSpan.textContent = '이미지 파일을 선택하세요';
    memberImageFile = null;
  });
}

// 팀원 등록 버튼 추가
function addMemberRegisterButton() {
  // 등록하기 버튼이 없으면 추가
  const roleTabs = document.querySelector('.role-tabs');
  if (!roleTabs.querySelector('.register-button')) {
    // 탭 컨테이너 레이아웃 조정
    roleTabs.classList.add('with-register-button');
    
    // 탭 버튼 래퍼 생성
    const tabsWrapper = document.createElement('div');
    tabsWrapper.className = 'tabs-wrapper';
    
    // 기존 탭 버튼들을 래퍼로 이동
    const tabs = [...roleTabs.querySelectorAll('.role-tab')];
    tabs.forEach(tab => {
      roleTabs.removeChild(tab);
      tabsWrapper.appendChild(tab);
    });
    
    // 등록하기 버튼 생성
    const registerButton = document.createElement('button');
    registerButton.className = 'register-button';
    registerButton.innerHTML = '<i class="fas fa-plus-circle"></i> 팀원 등록하기';
    registerButton.addEventListener('click', () => {
      // 먼저 즉시 페이지 상단으로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // 약간의 지연 후 폼 표시
      setTimeout(() => {
        showMemberForm();
      }, 100);
    });
    
    // 래퍼와 버튼 추가
    roleTabs.appendChild(tabsWrapper);
    roleTabs.appendChild(registerButton);
  }
}

// 목록 버튼 처리
listBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const parentSection = this.closest('section');
    
    parentSection.classList.remove('fade-in');
    
    setTimeout(() => {
      parentSection.classList.add('hidden');
      
      if (parentSection.id === 'register-project-section') {
        projectsSection.classList.remove('hidden');
        setTimeout(() => {
          projectsSection.classList.add('fade-in');
        }, 100);
      } else if (parentSection.id === 'register-member-section') {
        membersSection.classList.remove('hidden');
        setTimeout(() => {
          membersSection.classList.add('fade-in');
        }, 100);
      }
    }, 300);
  });
});

// 기타 역할 체크박스 처리
if (otherRoleCheckbox) {
  otherRoleCheckbox.addEventListener('change', function() {
    if (this.checked) {
      otherRoleContainer.classList.remove('hidden');
      otherRoleInput.focus();
    } else {
      otherRoleContainer.classList.add('hidden');
      otherRoleInput.value = '';
    }
  });
}

// 기타 역할 선택 시 추가 입력 필드 표시
if (memberRoleSelect) {
  memberRoleSelect.addEventListener('change', function() {
    if (this.value === '기타') {
      memberRoleOtherContainer.style.display = 'block';
      memberRoleOther.setAttribute('required', 'required');
    } else {
      memberRoleOtherContainer.style.display = 'none';
      memberRoleOther.removeAttribute('required');
    }
  });
}