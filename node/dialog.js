function Dialog(){
    this.time=3000;
}
Dialog.title='弹框';
Dialog.prototype.$show=function(){
    console.log('show');
}
Dialog.prototype.$hide=function(){
    console.log('hide');
}
//module.exports=exports=this={};
exports.Dialog=Dialog;
//module.exports=Dialog;
//module.exports.dialog=Dialog;
//global.dialog=Dialog;
//return module.exports;
