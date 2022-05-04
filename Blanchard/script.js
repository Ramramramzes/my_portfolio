//! Меню выпадает по клику
document.getElementById('burger').addEventListener('click',function(){
    document.getElementById('menu1024').classList.toggle('visible')
});
//! Чекбоксы --------------------------------------------/
        let custom1 = document.getElementById('1custom');
        let check1 = document.getElementById('1chbx');
        let lblchbx1 = document.getElementById('label-1chbx');
        let custom2 = document.getElementById('2custom');
        let check2 = document.getElementById('2chbx');
        let lblchbx2 = document.getElementById('label-2chbx');
        let custom3 = document.getElementById('3custom');
        let check3 = document.getElementById('3chbx');
        let lblchbx3 = document.getElementById('label-3chbx');
        
        custom1.addEventListener('click',function(){
            if(check1.checked !== true){
                custom1.classList.add('activ-border')
                lblchbx1.classList.add('activ-color')
                check1.checked = true;
            }else{
                custom1.classList.remove('activ-border')
                lblchbx1.classList.remove('activ-color')
                check1.checked = false;
            }
        })
        lblchbx1.addEventListener('click',function(){

            if(check1.checked !== true){
                check1.checked = false;
                custom1.classList.add('activ-border')
                lblchbx1.classList.add('activ-color')
            }else{
                custom1.classList.remove('activ-border')
                lblchbx1.classList.remove('activ-color')
                check1.checked = true;
            }
        })
        custom2.addEventListener('click',function(){
            if(check2.checked !== true){
                custom2.classList.add('activ-border')
                lblchbx2.classList.add('activ-color')
                check2.checked = true;
            }else{
                custom2.classList.remove('activ-border')
                lblchbx2.classList.remove('activ-color')
                check2.checked = false;
            }
        })
        lblchbx2.addEventListener('click',function(){
            if(check2.checked !== true){
                check2.checked = false;
                custom2.classList.add('activ-border')
                lblchbx2.classList.add('activ-color')
            }else{
                custom2.classList.remove('activ-border')
                lblchbx2.classList.remove('activ-color')
                check2.checked = true;
            }
        })
        custom3.addEventListener('click',function(){
            if(check3.checked !== true){
                custom3.classList.add('activ-border')
                lblchbx3.classList.add('activ-color')
                check3.checked = true;
            }else{
                custom3.classList.remove('activ-border')
                lblchbx3.classList.remove('activ-color')
                check3.checked = false;
            }
        })
        lblchbx3.addEventListener('click',function(){
            if(check3.checked !== true){
                check3.checked = false;
                custom3.classList.add('activ-border')
                lblchbx3.classList.add('activ-color')
            }else{
                custom3.classList.remove('activ-border')
                lblchbx3.classList.remove('activ-color')
                check3.checked = true;
            }
        })
//!--------------------------------------------------/
//! Слайдер------------------------------------------/
$( function() {
    $( "#accordion" ).accordion();
  } );