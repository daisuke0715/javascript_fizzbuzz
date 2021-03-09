'use strict';

const result = document.getElementById("result");

// クリック時の挙動
const on_click = () => {
    (check_number(document.getElementById("fizznum").value) && check_number(document.getElementById("buzznum").value)) ? judge_fizzbuzz() : output_error_message();
};



// 整数値か判定する関数
const check_number = (value) => {
    var regex = new RegExp(/^[0-9]+$/);
    return regex.test(value);
}


// 入力値を元にFizzBuzzを判定する関数
const judge_fizzbuzz = () => {
    const fizznum = document.getElementById("fizznum").value;
    const buzznum = document.getElementById("buzznum").value;
    result.innerHTML = "";
    
    for(let counter = 1; counter < 100; counter++){
        if(counter % fizznum == 0 && counter % buzznum == 0){
            result.innerHTML += "FizzBuzz" +  "  " + counter + "<br>";
        }else if(counter % fizznum == 0){
            result.innerHTML += "Fizz" + "  " + counter + "<br>";
        }else if(counter % buzznum == 0){
            result.innerHTML += "Buzz" + "  " + counter + "<br>";
        }

    };
};


// エラーメッセージを表示する関数
const output_error_message = () => {
    result.innerHTML = "整数値を入力してください。"
};