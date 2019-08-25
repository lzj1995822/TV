/**
 * 请求挂载到Vue原型链中
 */
window.$http = (type, url, data, success, error) => {
    url = 'http://172.16.0.207:8882/api/' + url;
    return $.ajax({
        url: url,
        type: type,
        dateType: 'json',
        headers: {'Content-Type': 'application/json;charset=utf8'},
        data: data ? JSON.stringify(data) : null,
        success: function (data) {
            success(data)
        },
        error: function (data) {
            error(data);
        }
    })
}
