# Scripton Cloud Hugo Example

한국어 주석 포함 예시 Hugo 사이트입니다. Cloudflare Workers로 정적 빌드를 서빙합니다.

## 로컬 실행
```bash
hugo server -D
```

## 빌드
```bash
hugo --minify
```

## 배포(Cloudflare Workers)
1) API 토큰 준비 후 로그인(비대화형이면 `CLOUDFLARE_API_TOKEN` 환경변수 사용)
```bash
npx wrangler login
```
2) 퍼블리시(먼저 `hugo --minify`로 `public/` 생성)
```bash
npx wrangler deploy
```

- 설정: `wrangler.toml` (`public/`를 `assets`로 서빙)
- 워커 스크립트: `worker.js`

## 테마
- PaperMod (submodule)

## 라이선스
- MIT
