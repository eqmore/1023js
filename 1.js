<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 
        剩余参数：如果函数的最后一个命名参数以...为前缀，
        则它将成为一个数组，其中从0（包括）到theArgs.length（排除）的元素由传递给函数的实际参数提供。

        剩余参数和 arguments对象之间的区别主要有三个：

剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach或pop。
arguments对象还有一些附加的属性 （如callee属性）。

        ...
        1 剩余运算符
            解构赋值 函数剩余参数
        2 拓展运算符
        3 展开运算符

        箭头函数
        1 没arguments
        2 没执行主体，this找上级作用域

     -->
     <script>
         let ary=[12,12,13];
         let [...arg]=ary;//ary.slice(0);

         let obj={name:'xxx',age:20};
         let newobj={...obj,sex:0};//展开 跟值
     </script>
</body>
</html>