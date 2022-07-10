var valueList = document.getElementById('valueList');
var text = '<span> you have selected : </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');
var radios = document.querySelectorAll('.radio');
// console.log(checkboxes);

for(var checkbox of checkboxes){
    checkbox.addEventListener('click',function(){
        if(this.checked == true) {
            listArray.push(this.value);
            valueList.innerHTML = text + listArray.join(' / ');
            // console.log(this.value);
            
        }
        else{
            // remove value from array when it is unchecked
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = text + listArray.join(' / ');
            // console.log('unchecked ' + this.value);
        }
    })
}

for(var radio of radios){
    radio.addEventListener('click',function(){
    if(this.checked == true){
        radioValue.innerHTML = text + this.value;
    }
})
}