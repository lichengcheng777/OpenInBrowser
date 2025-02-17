let url = $request.url;
let targetScheme = "safari-http://"; // 或第三方浏览器Scheme（如alook://）

// 替换微信/QQ中间页直接获取目标URL（需根据实际页面调整）
if (url.includes("weixin.qq.com")) {
  const match = /url=([^&]+)/.exec(url);
  if (match) url = decodeURIComponent(match[1]);
}

// 生成跳转代码
const jsCode = `
window.location.href = "${targetScheme}${encodeURIComponent(url)}";
`;

$done({ body: `<script>${jsCode}</script>` });
