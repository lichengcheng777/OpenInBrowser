// 检查请求头中的User-Agent，排除浏览器自身请求
const userAgent = $request.headers['User-Agent'] || '';
if (userAgent.includes('Safari') || userAgent.includes('Chrome')) {
  $done({}); // 如果是浏览器请求，直接放行
} else {
  // 获取原始URL并跳转
  const url = $request.url;
  $tool.openURL(url); // 使用Quantumult X的API打开外部浏览器
  $done({}); // 终止原请求
}
