const fs = require('fs');
const assert = require('assert');
const http = require('http');


http.createServer(async function (req, resp) {

    console.log(req.rawHeaders);
    // console.log(req.method.toUpperCase)
    switch (req.method.toUpperCase()) {
        case "POST":
            onPost(req, resp);
            break;
        case "GET":
            onGet(req, resp);
            break;
        default:
            resp.end("未知请求.");
    }

}).listen(9512);

async function onPost(req, resp) {
    assert.strictEqual((req instanceof http.IncomingMessage), true, "req 类型错误.");

    req.setEncoding("utf8");
    let i = 0;
    let res = await new Promise(function (resolve, reject) {
        let res = "";
        req.on("data", function (chunk) {
            assert.strictEqual(typeof chunk, "string", "数据类型错误.");
            res = res.concat(chunk);
            console.log("\n\n\n第 ${++i} 次数据.\n");
            console.log(chunk);
        });
        req.on("end", () => {
            resolve(res);
        });
    });

    console.log("总计 " + i + " 次接收.");
    resp.end(res);
}

async function onGet(req, resp) {
    resp.end("Get")
}

