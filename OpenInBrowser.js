const userAgent = $request.headers['User-Agent'] || '';
if (userAgent.includes('Safari') || userAgent.includes('Chrome')) {
  $done({});
} else {
  $tool.openURL($request.url);
  $done({});
}
