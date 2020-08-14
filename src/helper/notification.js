import Noty from 'noty'
// flash notification using noty
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