$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    $('.nav-item').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // sample video popup
    // $(document).ready(function() {
    //     $('.popup-youtube').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    
    //         fixedContentPos: false
    //     });
    // });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    $("input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass("greenBackground"); 
        }else{
            $(this).parent().removeClass("greenBackground");  
        }
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

});

var valueList = document.getElementById('valueList');
var textRadio = '';
var textCheckbox = '<span> Választott szolgáltatásaim: </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox-input');
var radios = document.querySelectorAll('.radiobox');
// console.log(checkboxes);

for(var checkbox of checkboxes){
    checkbox.addEventListener('click',function(){
        if(this.checked == true) {
            listArray.push(this.value);
            valueList.innerHTML = textCheckbox + listArray.join(' / ');
            $(this).parent().addClass("greenBackground");            
        }
        else{
            // remove value from array when it is unchecked
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = textCheckbox + listArray.join(' / ');
            $(this).parent().removeClass("greenBackground");
        }
    })
}
// radiobox selection in text
for(var radio of radios){
    radio.addEventListener('click',function(){
    if(this.checked == true){
        if(this.value == 'igen'){
            radioValue.innerHTML = textRadio + 'Szükségem van előkonzultációra';
        }
        else{
            radioValue.innerHTML = textRadio + 'Nincs szükségem előkonzultációra';
        }
        // radioValue.innerHTML = text + this.value;
    }
    })
}

// radiobox selection highlight
$("input[type='radio']").change(function(){
    if($("input[id='igen']").is(":checked")){
        $(this).parent().addClass("greenBackground"); 
        $("input[id='nem']").parent().removeClass("greenBackground");
    }
    if($("input[id='nem']").is(":checked")){
        $(this).parent().addClass("greenBackground"); 
        $("input[id='igen']").parent().removeClass("greenBackground");
    }
});

function sendMail(params){
    var templateParams = {
        from_name: document.getElementById("fromName").value,
        from_email: document.getElementById("fromEmail").value,
        sel_service: document.getElementById("valueList").value,
        pre_consult: document.getElementById("radioValue").value,
        message: document.getElementById("formMsg").value,
    };
    emailjs.send('service_x55jo8n', 'template_7sit8pl', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}