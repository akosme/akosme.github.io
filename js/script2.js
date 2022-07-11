var valueList = document.getElementById('valueList');
var text = '<span> you have selected : </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox-input');
var radios = document.querySelectorAll('.radiobox');
// console.log(checkboxes);

for(var checkbox of checkboxes){
    checkbox.addEventListener('click',function(){
        if(this.checked == true) {
            listArray.push(this.value);
            valueList.innerHTML = text + listArray.join(' / ');
            $(this).parent().addClass("yellowBackground");            
        }
        else{
            // remove value from array when it is unchecked
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = text + listArray.join(' / ');
            $(this).parent().removeClass("yellowBackground");
        }
    })
}
// radiobox selection in text
for(var radio of radios){
    radio.addEventListener('click',function(){
    if(this.checked == true){
        radioValue.innerHTML = text + this.value;
    }
    })
}

// radiobox selection highlight
$("input[type='radio']").change(function(){
    if($("input[id='igen']").is(":checked")){
        $(this).parent().addClass("yellowBackground"); 
        $("input[id='nem']").parent().removeClass("yellowBackground");
    }
    if($("input[id='nem']").is(":checked")){
        $(this).parent().addClass("yellowBackground"); 
        $("input[id='igen']").parent().removeClass("yellowBackground");
    }
});
