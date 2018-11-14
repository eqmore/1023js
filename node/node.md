## node的安装
-http://nodejs.org/en

## mac homebrew
- brew install node

## nodejs
主线程是单线程（异步）callback，将后续的逻辑写成函数，传入到当前执行的函数中，当执行的函数得到了结果后，执行传入的函数（回调函数）
五个人同时吃一碗饭（异步）
阻塞不能异步（阻塞是针对内核说的）
i/o操作异步 读写操作
event-driven事件驱动

# web 异步
settimeout
callback

## 模块
node自带模块化功能，一个js文件就是一个模块，模块的this不是global
每个文件都有局部作用域，不会将属性挂在global上

>模块化优点 低耦合 高内聚，方便维护，防止代码冲突（命名冲突），闭包单例不能保证一定不冲突，调用过长
>cmd seajs 就近依赖 amd 依赖前置 requirejs(浏览器端模块化)

node基于规范commonjs 文件读写，node天生自带模块化
- 定义创建一个模块 js文件
- 如何使用一个模块 require
    > require方法具有缓存功能，多次引用只执行一次
    > 第三方模块，通过报名直接引入，通过package.json中的main对应的文件运行
- 如何导出一个模块 exports /module.exports
## 第三方模块
- 通过npm(node package manager)
### 全局安装 -g(只能在命令行使用)
    默认安装路径 (npm root -g)不会加入环境变量 通过npm进行映射
```
    npm install nrm -g
    npm install http-server -g
    http-server -p 3000 在某个路径下启动服务
    npm install -g idoc
```
npm nrm(node registry manager) nvm
### 本地安装
    安装之前需要初始化，记录安装依赖
    npm init -y
> package.json 目录不能有中文，特殊字符，大写,默认先找当前目录下的package.json，没有去上级查找直到根目录，找不到在当前目录下安装
> package.json 中 scripts可以配置一些快捷方式

#### 项目依赖
```
    npm install jquery
    npm uninstall jquery
```
#### 开发依赖（线上不使用）
```
    npm install less --save-dev
    npm uninstall less --save-dev
```
#### 安装全部依赖
```
    npm install
```
### yarn安装
```
    npm install -g yarn
    yarn init
    yarn add 包
    yarn remove 包
    yarn add less --dev 安装开发依赖
    yarn install 安装依赖包
```
## 发布包
- nrm use npm
- 包名不能重复
- 入口文件，做整合用
- 注册账号，如果有账号表示登陆，新用户需要校验邮箱
```
    npm addUser
    npm publish
```




### 参数
exports 
require
module
__filename
__dirname


## process
在命令行里设置node_env，mac export/windows set
webstrom中设置环境变量 process.env.NODE_ENV
```
    if(process.env.NODE_ENV=='dev'){
        url='http://localhost:3000';
    }else
    {
        url='http://www.zhufeng.cn';
    }
```
process.nextTick(e=>{})//异步的在当前队列的底部
setImmediate(e=>{})//第二个队列中的

## util工具模块 核心模块/内置模块 不需要安装直接使用
> util.inherits(Child,Parent)//继承公有
> util.isArray/isFunction
> util.promisify

- typeof 判断不了对象数据类型
- instanceof 不能判断继承后的
- constructor
- Object.prototype.toString.call([])==='[object Array]'

# Buffer
> 缓存区buffer是暂时存放输入输出数据的一段内存
> js语言没有二进制数据类型，在处理TCP和文件流的时候，必须要处理二进制数据
> NOde提供的buffer是表示固定内存分配的全局对象，要放到缓存区中的字节数需要提前确定

### 字节
- 1024b=1k
- 8bit=ib
- 1b转化成十进制是255
- 1b转化成16进制ff
- utf-8一个汉字3b

## 定义buffer的三种方式
- 通过长度定义
```
    let buffer=Buffer.alloc(6)
    let buffer=Buffer.allocUnsafe('6')
```
- 通过数组定义
```
    let buffer=Buffer.from([])//自动把10进制转化为16进制
```
- 字符串创建buffer
```
    let buffer=Buffer.from('')
```
## buffer方法
- buffer.fill(0)
- buffer.toString
> 浅拷贝（slice assign {...{}}）
- buffer.slice
- buffer.copy(targetbuffer,targetStart,sourcestart,sourceend)
- Buffer.concat(buf1,buf2)
- Buffer.isBuffer
- Buffer.byteLength(string,encoding)

## 进制转化
```
    base64
    //16->2
    (0xe7).toString(2)
    //2->10
    parseInt('00111001',2)
    let str='A-Za-z0-9+/'
    str[57]
```

## Path
- path.join(__dirname,'./a')
- path.resolve('./a','./b')//解析一个绝对路径
- Path.delimiter
- Path.posix.sep

## EventEmmiter

## fs
