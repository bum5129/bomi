# Supabase로 구축한 팀메이커 프로젝트

## 소개
팀메이커는 Supabase를 백엔드로 사용하여 구축된 프로젝트로, 함께할 팀원을 찾고 매칭해주는 서비스입니다.

## 시작하기

### 필수 조건
- Node.js (v14 이상 권장)
- npm (v6 이상 권장)
- Supabase 계정 및 프로젝트

### 설치 방법
1. 저장소를 클론합니다:
   ```
   git clone <저장소 URL>
   cd cursor_teammaker
   ```

2. 필요한 패키지를 설치합니다:
   ```
   npm install
   ```

3. `.env.example`을 복사하여 `.env` 파일을 생성합니다:
   ```
   cp .env.example .env
   ```

4. `.env` 파일을 열고 Supabase URL과 API 키를 입력합니다:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   ```
   
   Supabase URL과 API 키는 Supabase 대시보드의 프로젝트 설정에서 찾을 수 있습니다.

### 연결 테스트
Supabase 연결을 테스트하려면 다음 명령어를 실행합니다:
```
node src/db-test.js
```

## Supabase 데이터베이스 설정

### 테이블 생성 방법

#### 방법 1: Supabase 대시보드에서 SQL 실행
1. Supabase 대시보드에 로그인합니다.
2. 프로젝트를 선택한 후 좌측 메뉴에서 "SQL 에디터"를 클릭합니다.
3. 새 쿼리를 생성하고 `src/schema.sql` 파일의 내용을 복사하여 붙여넣습니다.
4. "실행" 버튼을 클릭하여 SQL 스크립트를 실행합니다.

#### 방법 2: 자동 테이블 생성 스크립트 실행 (제한적)
```
node src/create-tables.js
```
참고: Supabase의 권한 제한으로 인해 이 방법이 작동하지 않을 수 있습니다.

### 데이터베이스 스키마

다음 테이블들이 생성됩니다:

1. `users` - 사용자 정보
   - `id` (uuid, primary key, auth.users 참조)
   - `email` (text, unique)
   - `name` (text)
   - `created_at` (timestamp with timezone)

2. `teams` - 팀 정보
   - `id` (uuid, primary key)
   - `name` (text)
   - `description` (text)
   - `created_at` (timestamp with timezone)
   - `owner_id` (uuid, foreign key references users.id)

3. `team_members` - 팀 멤버 정보
   - `id` (uuid, primary key)
   - `team_id` (uuid, foreign key references teams.id)
   - `user_id` (uuid, foreign key references users.id)
   - `role` (text)
   - `joined_at` (timestamp with timezone)

4. `team_join_requests` - 팀 가입 요청 정보
   - `id` (uuid, primary key)
   - `team_id` (uuid, foreign key references teams.id)
   - `user_id` (uuid, foreign key references users.id)
   - `message` (text)
   - `status` (text: 'pending', 'accepted', 'rejected')
   - `created_at` (timestamp with timezone)

### 권한 설정
Row Level Security(RLS) 정책이 각 테이블에 설정되어 있어 적절한 권한 관리가 가능합니다:
- 사용자는 자신의 정보만 조회/수정 가능
- 모든 사용자가 팀 정보 조회 가능
- 팀 소유자만 팀 정보 수정/삭제 가능
- 팀 소유자만 팀원 추가/삭제 가능
- 사용자는 자신의 팀 가입 요청만 조회 가능
- 팀 소유자는 해당 팀의 가입 요청 조회/상태 변경 가능

## 사용 방법
1. 사용자 등록 및 로그인
2. 팀 생성 또는 기존 팀 탐색
3. 팀 가입 요청 또는 팀원 초대
4. 팀원 관리 (역할 할당, 제거 등)

## 기술 스택
- 프론트엔드: HTML, CSS, JavaScript
- 백엔드: Supabase (PostgreSQL, Auth, Storage)
- 배포: Vercel, Netlify 등 (선택사항)

## 주요 기능
- 사용자 인증 (Supabase Auth)
- 팀 생성 및 관리
- 팀원 초대 및 참가 요청
- 팀원 권한 관리

## 라이센스
ISC 