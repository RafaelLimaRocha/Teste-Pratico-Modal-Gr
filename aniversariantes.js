const readline = require('readline');
const fs = require('fs');

const dataAtual = new Date();
const mesAtual = dataAtual.getMonth() + 1;

const arquivoTexto = 'arquivoTexto.txt';

let aniversariantesDoMes = [];

const line = readline.createInterface({
    input: fs.createReadStream(arquivoTexto),
});

line.on('line', (dados) => {
    
    let partes = dados.split('|');
    
    if (partes.length === 4) {
        const nome = partes[0].trim();
        const dataNascimento = partes[2].trim();

        const [dia, mes, ano] = dataNascimento.split('/').map(Number);


        if (mes === mesAtual) { 
            aniversariantesDoMes.push(`${nome}, ${dataNascimento}`);
        }

    }
    

});

line.on('close', () => {
    console.log('Aniversariantes do Mês Corrente:', aniversariantesDoMes);

    if (aniversariantesDoMes.length > 0) {
        const arquivoAniversariantesMes = 'aniversariantesMes.txt'; 
        fs.writeFileSync(arquivoAniversariantesMes, aniversariantesDoMes.join('\n'));
        console.log(`Arquivo de aniversariantes do mês corrente gerado: ${arquivoAniversariantesMes}`);
    } else {
        console.log('Nenhum aniversariante encontrado para o mês corrente.');
    }
})


