const url = $request.url;
if (url) {
    $done({ response: { status: 302, headers: { Location: url } } });
} else {
    $done({});
}