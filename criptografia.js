const crypto = require('crypto');
const bcrypt = require('bcrypt');

const algoritmo = 'aes-256-ctr';
const chaveSecreta = '#modalGR#GPTW#top#maiorEmpresaTecnologia#baixadaSantista';


function criptografarSenha1(senha1) {
    let cipher = crypto.createCipher(algoritmo, chaveSecreta);
    let textoCriptografado1 = cipher.update(senha1, 'utf8', 'hex');
    return textoCriptografado1 + cipher.final('hex');
}

function criptografarSenha2(senha2) {
    let hash = crypto.createHmac('sha256', chaveSecreta).update(senha2).digest('hex');
    return hash;
}

function criptografarSenha3(senha3) {
   let salt = crypto.randomBytes(16).toString('hex');
   let chaveNova = chaveSecreta + salt;
   let hash = crypto.pbkdf2Sync(senha3, chaveNova, 1000, 32, 'sha512').toString('hex');
   return { salt, hash };
}

const senhaCriptografada3 = criptografarSenha3('teste de senha 3')

console.log('Senha 1 = ' + criptografarSenha1('teste de senha 1'));
console.log('Senha 2 = ' + criptografarSenha2('teste de senha 2'));
console.log('Senha 3: Salt = ' + senhaCriptografada3.salt + '\n Hash = ' + senhaCriptografada3.hash);