const http = require("http");
const port = 3000;
let rootPageCounter = 0;
let aboutPageCounter = 0;

const server = http.createServer((request, response) => {
  console.log(`${new Date()} INFO: request received: ${request.url}`);

  if (request.url === "/") {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    response.end(
      `<h1>Главная страница</h1><p>Просмотров: ${++rootPageCounter}</p><a href="/about">Ссылка на страницу /about</a>`
    );
  } else if (request.url === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    response.end(
      `<h1>Страница about</h1><p>Просмотров: ${++aboutPageCounter}</p><a href="/">Ссылка на страницу /</a>`
    );
  } else {
    response.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    response.end("<h1>Страница не найдена!</h1>");
  }
});

server.listen(port, () => {
  console.log(`${new Date()} INFO: server started, port: ${port}`);
});
