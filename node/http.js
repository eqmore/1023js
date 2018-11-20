let http=require('http');
let path=require("path");
let url=require('url');
let port=3000;//尽量使用3000以上
let fs=require('fs');
let mime={".css":"text/css",".js":'application/x-javascript','.html':'text/html'}
let users=[{name:'bbb',age:8,id:1},{name:'aaa',age:7,id:2}];
http.createServer((req,res)=>{//监听函数，请求到来时执行 req代表客户端，是可读流；res代表服务端，是可写流
    let {pathname,query}=url.parse(req.url,true);//true将query转化成一个对象
    let reg=/\.\w+$/;
    if(pathname==='/user'){
        let method=req.method;
        console.log(method);
        switch(method){
        case 'GET':
            if(!query.id){//返回全部
                res.setHeader('ContentType','application/json;charset=utf-8');
                res.end(JSON.stringify(users));
            }else{
                res.end(JSON.stringify(users.filter(e=>{e.id=query.id})));
            }
        break;
        case 'POST':
            let str='';
            req.on('data',function(chunk){
                str+=chunk;
            })
            req.on('end',function(data){
                let u=JSON.parse(str);
                u.id=users.length?users[users.length-1].id+1:1;
                users.push();
                res.end(JSON.stringify(u));
                
            })
            
        break;
        case 'PUT':
        break;
        case 'DELETE':
        let str1='';
        req.on('data',function(chunk){
            str1+=chunk;
        })
        req.on('end',function(data){
            let u=JSON.parse(str1);
            users.filter(item=>{item.id!==u.id})
            res.end(JSON.stringify({}));
        })
        break;
        }
        
        return;
    }

    if(pathname==='/clock'){
        
        res.end(JSON.stringify({"time":new Date().toLocaleDateString()}));
        return;
    }
    //静态文件
    fs.stat('.'+pathname,(err,stats)=>{
        
        if(err){
            res.statusCode='404';
            res.end(`${pathname} not found`);
        }else if(stats.isFile()){
            //console.log(pathname);
            res.setHeader("Content-Type",mime[pathname.match(reg)[0]]+";charset=utf-8");
            fs.createReadStream('.'+pathname).pipe(res);

        }else if(stats.isDirectory()){
            res.setHeader("Content-Type","text/html;charset=utf-8");
            fs.createReadStream("index.html").pipe(res);
        }
    })
    
    //请求文件
    /* 1 请求/ ./返回index.html
        2 文件 返回文件 
        3 文件不存在 返回404*/
        
       
        
    /* res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('你好'); */
}).listen(port,()=>{
    console.log(`server starts at ${port}`);
})