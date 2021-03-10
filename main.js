'use strict';

const showFizzbuzzResult = document.getElementById('show-fizzbuzz-result');
const executeFizzbuzzButton = document.getElementById('execute-fizzbuzz-button');

console.log(executeFizzbuzzButton);

// クリック時の挙動
executeFizzbuzzButton.addEventListener('click', () => {
    const fizzValue = escapeHtml(document.getElementById('fizz-value').value);
    const buzzValue = escapeHtml(document.getElementById('buzz-value').value);
    (judgeWhetherInteger(fizzValue)) && judgeWhetherInteger(escapeHtml(buzzValue)) ? judgeFizzbuzz() : outputErrorMessage();
});


// 整数値か判定する関数
const judgeWhetherInteger = (value) => {
    var regex = new RegExp(/^[0-9]+$/);
    return regex.test(value);
}


// 入力値を元にFizzBuzzを判定する関数
const judgeFizzbuzz = () => {
    const fizzValue = escapeHtml(document.getElementById('fizz-value').value);
    const buzzValue = escapeHtml(document.getElementById('buzz-value').value);
    showFizzbuzzResult.innerHTML = '';
    
    for(let counter = 1; counter < 100; counter++) {
        if(counter % fizzValue == 0 && counter % buzzValue == 0) {
            showFizzbuzzResult.innerHTML += 'FizzBuzz' +  '  ' + counter + '<br>';
        }else if(counter % fizzValue == 0) {
            showFizzbuzzResult.innerHTML += 'Fizz' + '  ' + counter + '<br>';
        }else if(counter % buzzValue == 0) {
            showFizzbuzzResult.innerHTML += 'Buzz' + '  ' + counter + '<br>';
        };

    };
};

// JSで動的動作を行う際のXSS対策の具体的な方法（エスケープ処理）
const escapeHtml = (str) => {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
  }


// エラーメッセージを表示する関数
const outputErrorMessage = () => {
    showFizzbuzzResult.innerHTML = '整数値を入力してください。'
};