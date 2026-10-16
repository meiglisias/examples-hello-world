Deno.serve(async (req) => {
  const u = new URL(req.url);
  if (!u.pathname.startsWith('/bot')) return new Response('ok');
  return fetch('https://api.telegram.org' + u.pathname + u.search,
    { method: req.method, headers: req.headers, body: req.body });
});
