import http from "http";
import { promises as fs } from "fs";
import path from "path";

const __dirname = import.meta.dirname;
const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v])=> {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const session = {};

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){
        const url = new URL(req.url, 'hhtp:/localhost:8085');
        const name = url.searchParams.get('name');
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const uniqueInt = Date.now();
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else {
        try{
            const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
            res.end(data);
        } catch(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain charset=utf-8' });
            res.end(err.message);
        }
    }
})
    .listen(8085, ()=> {
        console.log('8085번 포트에서 대기중');
    })

