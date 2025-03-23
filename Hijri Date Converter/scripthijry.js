
document.addEventListener('DOMContentLoaded', function () {
function Convert() {

    
    const Gregorian_Date = document.getElementById("date").value ;

    const date = moment(Gregorian_Date);

    if(date.isValid()){
        const Hijri_Date_n = date.format('iYYYY/iMM/iDD');
        const Hijri_Date_l = date.format('iD iMMMM iYYYY');

        document.getElementById("result1").innerHTML=Hijri_Date_n;
        document.getElementById("result2").innerHTML=Hijri_Date_l;
    }else{
        alert('Error','Please enter a Date')
    }

    

    
    
}

document.getElementById('button').addEventListener('click', Convert);
});