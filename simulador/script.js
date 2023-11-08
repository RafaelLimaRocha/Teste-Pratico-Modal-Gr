
const form = document.getElementById('form');

function calcularNotasMaiorValor(valor) {
    const notas100 = Math.floor(valor / 100);
    const notas50 = Math.floor((valor % 100) / 50);

    return {
        notas100,
        notas50
    };
}

function calcularNotasMenorValor(valor) {
    const notas20 = Math.floor((valor / 20));
    const notas10 = Math.floor((valor % 20) / 10);
    const notas5 = Math.floor((valor % 10) / 5);
    const notas2 = Math.floor(valor % 5);

    return {
        notas20,
        notas10,
        notas5,
        notas2
    };
}

function calcularNotas() {
    const nome = document.getElementById('nome').value;
    const anoAdmissao = (document.getElementById('anoAdmissao').value);
    const salario = (document.getElementById('salario').value);
    const valorEmprestimo = (document.getElementById('emprestimo').value);
    const anosNaEmpresa = new Date().getFullYear() - anoAdmissao;

    if (anosNaEmpresa < 5) {
        document.getElementById('resultado').innerText = 'Agradecemos seu interesse, mas você não atende os requisitos mínimos do programa.';
    } else if (valorEmprestimo % 2 !== 0 || valorEmprestimo > 2 * salario ) {
        document.getElementById('resultado').innerText = 'Insira um valor válido!';
    } else {
        const notasMaiorValor = calcularNotasMaiorValor(valorEmprestimo);
        const notasMenorValor = calcularNotasMenorValor(valorEmprestimo);
        const valorMeioMeio = Math.floor(valorEmprestimo / 2);
        const notasMaiorValorMeio = calcularNotasMaiorValor(valorMeioMeio);
        const notasMenorValorMeio = calcularNotasMenorValor(valorMeioMeio);

        const resultado = `<h2>Valor empréstimo: ${valorEmprestimo} reais</h2> <br>` + `
        
            <h3>Notas de maior valor:</h3><br>
            <ul>
                <li>${notasMaiorValor.notas100} x 100 reais</li>
                <li>${notasMaiorValor.notas50} x 50 reais</li>
            </ul><br>
            
            <h3>Notas de menor valor:</h3><br>
            <ul>
                <li>${notasMenorValor.notas20} x 20 reais</li>
                <li>${notasMenorValor.notas10} x 10 reais</li>
                <li>${notasMenorValor.notas5} x 5 reais</li>
                <li>${notasMenorValor.notas2} x 2 reais</li>
            </ul><br>
            
            <h3>Notas meio a meio:</h3><br>
            <ul>
                <li><h4>${valorMeioMeio} reais em notas de maior valor:</h4></li>
                <li>${notasMaiorValorMeio.notas100} x 100 reais</li>
                <li>${notasMaiorValorMeio.notas50} x 50 reais</li>
                <li><h4>${valorMeioMeio} reais em notas de menor valor:</h4></li>
                <li>${notasMenorValorMeio.notas20} x 20 reais</li>
                <li>${notasMenorValorMeio.notas10} x 10 reais</li>
                <li>${notasMenorValorMeio.notas5} x 5 reais</li>
                <li>${notasMenorValorMeio.notas2} x 2 reais</li>
            </ul><br>
        `;

        document.getElementById('resultado').innerHTML = resultado;
    }
}

function validarNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("anoAdmissao").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("emprestimo").value = "";
}

function mostrarResultado() {
    const result = document.getElementById('resultado');
    result.style.display = 'block';
}

form.addEventListener('submit', e => {
    e.preventDefault()
    calcularNotas();
    mostrarResultado();
    limparCampos();
})

