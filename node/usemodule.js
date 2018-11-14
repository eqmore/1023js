//调用自己写的文件，通过./方式
//文件模块js json node后缀可省略，自动依次匹配

let dialog=require('./dialog.js');
let d=new dialog.Dialog;
d.$show();