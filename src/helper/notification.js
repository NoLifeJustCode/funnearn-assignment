import Noty from 'noty'
// flast notification using noty
function flash(text){
let n=new Noty({
    text,
    layout:'topRight',
    type:'success'
})
n.show();
}

export{
    flash
}