let anoBtn = $('.btn-ano')

let container2019 = $('.container-ano2019')
let container2020 = $('.container-ano2020')


$(anoBtn).click(function(){
    let btnAnoId = $(this).attr('id');

    switch(btnAnoId){
    case 'btnano-2019':
        console.log(btnAnoId)
 
        if(container2019.css("display") == 0 || container2019.css("display") == 'none'){
            document.getElementById('btnano-2019').style.background='transparent url("../images/icones/seta-menos-produtos.png") left center no-repeat'
            container2019.css("display","block");    
        } else {
            document.getElementById('btnano-2019').style.background='transparent url("../images/icones/seta-mais-produtos.png") left center no-repeat'

            container2019.css("display","none"); 
        }
    break;

    case 'btnano-2020':
        console.log(btnAnoId)

        if(container2020.css("display") == 0 || container2020.css("display") == 'none'){
            document.getElementById('btnano-2020').style.background='transparent url("../images/icones/seta-menos-produtos.png") left center no-repeat'

            container2020.css("display","block");  

        } else {
            document.getElementById('btnano-2020').style.background='transparent url("../images/icones/seta-mais-produtos.png") left center no-repeat'

            container2020.css("display","none")
        }
        
    break;

    default:
    break;
    }   
})

.animate({ },1500)