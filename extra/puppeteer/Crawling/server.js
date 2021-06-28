const { request, response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/', async(request, response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.alura.com.br/formacao-front-end');

    const pageContent = await page.evaluate(() => {
        return {
          subtitle: document.querySelector('.formacao-headline-subtitulo').innerHTML         
        };
      });
    
      console.log('pageContent:', pageContent);
    
    response.send({
        "id":113709,
        "code":"front-end",
        "kind":"DEGREE",
        "kindDisplayName":"Formação",
        "kindSlugDisplayName":"formacao",
        "situation":"PUBLISHED",
        "title":"Front-end",
        "subtitle": pageContent.subtitle,
    })
    await browser.close();
});

const port = 3000;
server.listen(port, () => {
    console.log(`
    Servidor subiu com sucesso. 
    Acesse em http://localhost:${port}
    `);
})

/* Estrutura basica do puppeteer
;(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.alura.com.br/formacao-front-end');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
*/