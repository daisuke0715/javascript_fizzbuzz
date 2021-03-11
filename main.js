'use strict';

const showResult = document.getElementById('show-result');
const executeFizzbuzz = document.getElementById('fizzbuzz-button');

console.log(executeFizzbuzz);

// クリック時の挙動
// ここの fizzValue buzzValue に関しては、文字列型で処理しないとうまくいかない
executeFizzbuzz.addEventListener('click', () => {
    const fizzValue = escapeHtml(document.getElementById('fizz-value').value);
    const buzzValue = escapeHtml(document.getElementById('buzz-value').value);
    console.log(fizzValue);
    console.log(buzzValue);
    (judgeWhetherInteger(fizzValue)) && judgeWhetherInteger(buzzValue) ? judgeFizzbuzz() : outputErrorMessage();
});


// 整数値か判定する関数
const judgeWhetherInteger = (value) => {
    const regex = new RegExp(/^[0-9]+$/);
    return regex.test(value);
}


// 入力値を元にFizzBuzzを判定する関数
// こちらの fizzValue buzzValue に関しては、if文でcounterとともに計算処理をしているので、一度数値型に変換する必要がある。
const judgeFizzbuzz = () => {
    const fizzValueStr = escapeHtml(document.getElementById('fizz-value').value);
    const buzzValueStr = escapeHtml(document.getElementById('buzz-value').value);
    const fizzValueInt = Number.parseInt(fizzValueStr);
    const buzzValueInt = Number.parseInt(buzzValueStr);
    showResult.innerHTML = '';
    
    for (let counter = 1; counter < 100; counter++) {
        if (counter % fizzValueInt == 0 && counter % buzzValueInt == 0) {
            showResult.innerHTML += 'FizzBuzz' +  '  ' + counter + '<br>';
        }else if (counter % fizzValueInt == 0) {
            showResult.innerHTML += 'Fizz' + '  ' + counter + '<br>';
        }else if (counter % buzzValueInt == 0) {
            showResult.innerHTML += 'Buzz' + '  ' + counter + '<br>';
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
    showResult.innerHTML = '整数値を入力してください。'
};