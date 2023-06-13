function loading(){
    document.getElementById('card-number').innerHTML = "0000 0000 0000 0000";
    document.getElementById('card-holder').innerHTML = "Jane Appleseed";
    document.getElementById('card-month').innerHTML = "00";
    document.getElementById('card-year').innerHTML = "00";
    document.getElementById('card-cvc').innerHTML = "000";
    var complete = document.getElementById('completed').style.display = "none";
}


function cardHolderDisplay(){
    var CardHolderSource = document.getElementById('cardholder').value;
    var CardHolderResult = document.getElementById('card-holder');

    CardHolderResult.innerHTML = CardHolderSource;
}
function cardNumberDisplay(){
    var CardNumberSource = document.getElementById('cardnumber').value;
    var CardNumberResult = document.getElementById('card-number');

    CardNumberResult.innerHTML = CardNumberSource;
    
    // Function to add space in required positions
        function interval(s, sp)
        {
            let M = s.length, N = sp.length, l = 0, r = 0;
            let res = new Array(M + N).fill(' ');

            // Iterate over M+N length
            for (let i = 0; i < M + N; i++) {

                if (l < N && i == sp[l] + l)
                    l++;
                else
                    res[i] = s[r++];
            }

            // Return the required string
            return res.join('');
        }

    // Driver Code
        var CardNumberSource = document.getElementById('cardnumber').value;
        let s = CardNumberSource;
        let space = [4, 8, 12, 16];

    // Function Call
        var CardNumberResult = document.getElementById('card-number');
        CardNumberResult.innerHTML = interval(s, space);

      

    if(isNaN(CardNumberSource)){
        cardNumberErr.innerHTML = "Wrong format,numbers only";
    }
    else{
        const numbers = new RegExp("^[0-9]{16}$");
        if(CardNumberSource.match(numbers)){
            cardNumberErr.innerHTML = "";
        }
        else{
            cardNumberErr.innerHTML = "Wrong format,Card Number must be 16";
        }
    }
   
}
function cardMonthDisplay(){
    var CardMonthSource = document.getElementById('cardmonth').value;
    var CardMonthResult = document.getElementById('card-month');

    CardMonthResult.innerHTML = CardMonthSource;
    var CardMonth = document.getElementById('cardmonth');
    if(CardMonth.value < 1 || CardMonth.value > 12){
        dateErr.innerHTML = "Wrong format,invalid month";
    }
    else{      
        dateErr.innerHTML = "";
    }
}
function cardYearDisplay(){
    var CardYearSource = document.getElementById('cardyear').value;
    var CardYearResult = document.getElementById('card-year');
    
    CardYearResult.innerHTML = CardYearSource;
}
function cardCvcDisplay(){
    var CardCvcSource = document.getElementById('cardcvc').value;
    var CardCvcResult = document.getElementById('card-cvc');

    CardCvcResult.innerHTML = CardCvcSource;
    var CardCvc = document.getElementById('cardcvc');
    if(CardCvc.value.length < 3 || CardCvc.value.length > 3){
        cvcErr.innerHTML = "Wrong format,must contain 3 numbers";
    }
    else{      
        cvcErr.innerHTML = "";
    }
}


function validate(){
    let card_holder = document.getElementById('cardholder').value;
    let card_number = document.getElementById('cardnumber').value;
    let card_month = document.getElementById('cardmonth').value;
    let card_year = document.getElementById('cardyear').value;
    let card_cvc = document.getElementById('cardcvc').value;
    let cardholder = document.getElementById('cardholder');
    let cardnumber = document.getElementById('cardnumber');
    let cardmonth = document.getElementById('cardmonth');
    let cardyear = document.getElementById('cardyear');
    let cardcvc = document.getElementById('cardcvc');
    let cardHolderErr = document.getElementById('cardHolderErr');
    let cardNumberErr = document.getElementById('cardNumberErr');
    let dateErr = document.getElementById('dateErr');
    let cvcErr = document.getElementById('cvcErr');

/*--------------------------------------------------------------
# Empty Error
--------------------------------------------------------------*/
    if(incorrect = ((card_holder=="" && card_number=="" && card_month=="" && card_year=="" && card_cvc=="") || (card_holder==null && card_number==null && card_month==null && card_year==null && card_cvc==null))){
        if(incorrect){
            cardholder.style.borderColor = "hsl(0, 100%, 66%)";
            cardnumber.style.borderColor = "hsl(0, 100%, 66%)";
            cardmonth.style.borderColor = "hsl(0, 100%, 66%)";
            cardyear.style.borderColor = "hsl(0, 100%, 66%)";
            cardcvc.style.borderColor = "hsl(0, 100%, 66%)";
            
            cardHolderErr.innerHTML = "Cant't be blank";
            cardNumberErr.innerHTML = "Cant't be blank";
            dateErr.innerHTML = "Cant't be blank";
            cvcErr.innerHTML = "Cant't be blank";
        }
        else{
            cardholder.style.borderColor = "hsl(270, 3%, 87%)";
            cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
            cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
            cardyear.style.borderColor = "hsl(270, 3%, 87%)";
            cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
    
            cardHolderErr.innerHTML = "";
            cardNumberErr.innerHTML = "";
            dateErr.innerHTML = "";
            cvcErr.innerHTML = "";
        }
    }
        
        else if(incorrect = ((card_holder=="") || (card_holder==null))){
            if(incorrect){
                cardholder.style.borderColor = "hsl(0, 100%, 66%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
                
                cardHolderErr.innerHTML = "Cant't be blank";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "";
            }
            else{
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
        
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "";
            }
        }

        else if(incorrect = ((card_number=="") || (card_number==null))){
            if(incorrect){
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(0, 100%, 66%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
                
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "Cant't be blank";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "";
            }
            else{
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
        
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "";
            }
        }

        else if(incorrect = ((card_month=="") || (card_month==null))){
            if(incorrect){
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(0, 100%, 66%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
                
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "Cant't be blank";
                cvcErr.innerHTML = "";
            }
            else{
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
        
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "";
            }
        }

        else if(incorrect = ((card_year=="") || (card_year==null))){
            if(incorrect){
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(0, 100%, 66%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
                
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "Cant't be blank";
                cvcErr.innerHTML = "";
            }
            else{
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
        
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "";
            }
        }
       
        else if(incorrect = ((card_cvc=="") || (card_cvc==null))){
            if(incorrect){
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(0, 100%, 66%)";
                
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "Cant't be blank";
            }
            else{
                cardholder.style.borderColor = "hsl(270, 3%, 87%)";
                cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
                cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
                cardyear.style.borderColor = "hsl(270, 3%, 87%)";
                cardcvc.style.borderColor = "hsl(270, 3%, 87%)";
        
                cardHolderErr.innerHTML = "";
                cardNumberErr.innerHTML = "";
                dateErr.innerHTML = "";
                cvcErr.innerHTML = "";
            }
        }
    else{
            cardholder.style.borderColor = "hsl(270, 3%, 87%)";
            cardnumber.style.borderColor = "hsl(270, 3%, 87%)";
            cardmonth.style.borderColor = "hsl(270, 3%, 87%)";
            cardyear.style.borderColor = "hsl(270, 3%, 87%)";
            cardcvc.style.borderColor = "hsl(270, 3%, 87%)";

            cardHolderErr.innerHTML = "";
            cardNumberErr.innerHTML = "";
            dateErr.innerHTML = "";
            cvcErr.innerHTML = "";

      
            var details = document.getElementById('details').style.display = "none";
            var complete = document.getElementById('completed').style.display = "block";


        }
}

function finish(){
    document.getElementById('card-number').innerHTML = "0000 0000 0000 0000";
    document.getElementById('card-holder').innerHTML = "Jane Appleseed";
    document.getElementById('card-month').innerHTML = "00";
    document.getElementById('card-year').innerHTML = "00";
    document.getElementById('card-cvc').innerHTML = "000";

    document.getElementById('cardholder').value= '';
    document.getElementById('cardnumber').value= '';
    document.getElementById('cardmonth').value= '';
    document.getElementById('cardyear').value= '';
    document.getElementById('cardcvc').value= '';

    var details = document.getElementById('details').style.display = "block";
    var complete = document.getElementById('completed').style.display = "none";
}

