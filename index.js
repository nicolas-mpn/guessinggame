




//function pra pegar a os valores do entry
function takeValue() {
    //valores do entry
    const nome = document.getElementById('nome').value.trim();
    const dificuldade = document.getElementById('dificuldade').value;
    //colocado em localstorage pra poder ser usado na outra página
    localStorage.setItem('nome', nome);
    localStorage.setItem('dificuldade', dificuldade);
    //direcionamento
    window.location.href = "../jogo/index.html"
}

//function pra recuperar os valores da outra página
function takeValueAg() {
    const nome = localStorage.getItem('nome');
    const dificuldade = localStorage.getItem('dificuldade');
    return { nome, dificuldade }
}

const values = takeValueAg();
const nome = values.nome;
const dificuldade = values.dificuldade

function startGame() {
    //declaração de valores
    const msg = document.getElementById('aviso');
    msg.innerHTML = 'O JOGO COMEÇOU';
    const inputNumber = document.getElementById('number').value;
    console.log(dificuldade);
    switch (dificuldade) {
        case 'facil':
            function easy() {
                const easyNumber = Math.floor(Math.random() * 25) + 1; // Gera um número aleatório entre 1 e 25
                console.log(easyNumber);
                return easyNumber;
            }

            const easyValues = easy();

            function verifyEasy() {
                const inputNumber = parseInt(document.getElementById('number').value, 10); // Certifique-se de converter o valor para número
                if (inputNumber === easyValues) {
                    msg.innerHTML = `<strong style="color: green;">O ${nome} é o Campeão!!!</strong>`;
                } else if (inputNumber >= easyValues - 5 && inputNumber <= easyValues + 5) {
                    msg.innerHTML = "TÁ FERVENDO";
                } else if (inputNumber >= easyValues - 10 && inputNumber <= easyValues + 10) {
                    msg.innerHTML = "Tá quente";
                } else {
                    msg.innerHTML = "xiii chapou"; // Opcional, para quando o número está fora do intervalo
                }
            }

            document.getElementById('button').onclick = verifyEasy;
            break;

        case 'medio':
            function medium() {
                const mediumNumber = Math.floor(Math.random() * 50) + 1; // Gera um número aleatório entre 1 e 50
                console.log(mediumNumber);
                return mediumNumber;
            }

            const mediumValue = medium();

            function verifyMedium() {
                const inputNumber = parseInt(document.getElementById('number').value, 10); // Certifique-se de converter o valor para número
                if (inputNumber === mediumValue) {
                    msg.innerHTML = `<strong style="color: green;">O ${nome} é o Campeão!!!</strong>`;
                } else if (inputNumber >= mediumValue - 5 && inputNumber <= mediumValue + 5) {
                    msg.innerHTML = "TÁ FERVENDO";
                } else if (inputNumber >= mediumValue - 10 && inputNumber <= mediumValue + 10) {
                    msg.innerHTML = "Tá quente";
                } else {
                    msg.innerHTML = "xiii chapou"; // Opcional, para quando o número está fora do intervalo
                }
            }

            document.getElementById('button').onclick = verifyMedium;
            break;

        case 'dificil':
            function hard() {
                const hardNumber = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
                console.log(hardNumber);
                return hardNumber;
            }

            const hardValues = hard();

            function verifyHard() {
                const inputNumber = parseInt(document.getElementById('number').value, 10); // Certifique-se de converter o valor para número
                if (inputNumber === hardValues) {
                    msg.innerHTML = `<strong style="color: green;">O ${nome} é o Campeão!!!</strong>`;
                } else if (inputNumber >= hardValues - 5 && inputNumber <= hardValues + 5) {
                    msg.innerHTML = "TÁ FERVENDO";
                } else if (inputNumber >= hardValues - 10 && inputNumber <= hardValues + 10) {
                    msg.innerHTML = "Tá quente";
                } else {
                    msg.innerHTML = "xiii chapou"; // Opcional, para quando o número está fora do intervalo
                }
            }

            document.getElementById('button').onclick = verifyHard;
            break;
    }
}