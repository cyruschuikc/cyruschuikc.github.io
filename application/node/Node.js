export default {
  async fetch(request) {
    // Target URL (your InfinityFree PHP endpoint)
    const targetUrl = "https://cyruschuikc.infinityfree.io/application/JQreader/getMainMenu.php";

    // Fetch data from InfinityFree
    const response = await fetch(targetUrl);

    // Clone response body
    const body = await response.text();

    // Return with CORS headers
    return new Response(body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://cyruschuikc.github.io",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }
};
