# Scripton Cloud Hugo Example

한국어 주석 포함 예시 Hugo 사이트입니다. 배포는 별도 서비스(사내/외부 파이프라인)를 통해 수행합니다.

## 로컬 실행
```bash
hugo server -D
```

## 빌드
```bash
hugo --minify
```

## 디렉터리 구조(요약)
```
.
├── archetypes/
├── content/
│   ├── about/_index.md
│   └── posts/hello-world.md
├── themes/PaperMod (git submodule)
├── hugo.toml
└── .gitignore
```

## 테마
- PaperMod (submodule)

## 라이선스
- MIT
