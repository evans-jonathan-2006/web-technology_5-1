document.addEventListener('DOMContentLoaded', () =>{
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');
    document.getElementById('add').addEventListener('click',()=>{
        calculate('+');
    });
    document.getElementById('sub').addEventListener('click',()=>{
        calculate('-');
    });
    document.getElementById('mul').addEventListener('click',()=>{
        calculate('*');
    });
    document.getElementById('div').addEventListener('click',()=>{
        calculate('/');
    });
    function calculate(op){
        const num1=parseFloat(num1Input.value);
        const num2=parseFloat(num2Input.value);
        let result; 
        if(isNaN(num1)|| isNaN(num2)){
            resultDiv.textContent = 'Please enter valid numbers'; 
            return;
        }
        switch(op){
            case '+':
                result= num1 + num2;
                break;
            case '-':
                result= num1 - num2;
                break;
            case '*':
                result= num1 * num2;
                break;
            case '/':
                if(num2==0){
                    resultDiv.textContent = 'Cannot divide by zero';
                }
                else{
                    result= num1 / num2;
                    break
                }
        }
        resultDiv.textContent = `Result: ${result}`;
    }     
});
