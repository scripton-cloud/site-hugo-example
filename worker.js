export default {
  async fetch(request, env, ctx) {
    // 한국어 주석: ASSETS 바인딩을 통해 public 정적 파일을 제공
    try {
      const url = new URL(request.url)
      // public 디렉토리의 정적 자산 우선 제공
      const asset = await env.ASSETS.fetch(request)
      if (asset.status !== 404) {
        return asset
      }

      // 여기에 필요 시 커스텀 라우팅/리다이렉트 추가 가능
      if (url.pathname === "/healthz") {
        return new Response("ok", { status: 200 })
      }

      return new Response("Not Found", { status: 404 })
    } catch (e) {
      return new Response(`Error: ${e.message}`, { status: 500 })
    }
  }
}
