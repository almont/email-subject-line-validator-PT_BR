// Array of bad words
const badWords = ['$', 'ganhe dinheiro enviando emails', 'trabalhe em casa', 'renda extra', 'crédito', 'seja seu próprio patrão', 'aplique agora', 'taxas baixas', 'dobre sua renda', 'ganhe', 'pago semanalmente', 'pagamento imediato', 'dinheiro rápido', 'liberdade financeira', 'saia da dívida', 'elimine a dívida', 'reduza suas taxas', 'refinancie', 'bônus', 'livre', 'empréstimo', '100%', 'emagreça', 'dieta', 'por que não consigo emagrecer', 'perca peso', 'perder gordura', 'fique sarado', 'secar barriga', 'compre', 'aproveite', 'grátis', 'desconto', 'promoção', 'oferta', 'imperdível', 'preços', 'valores', 'frete grátis', 'despachamos para todo o brasil', 'vagas abertas', 'telemarketing', 'curso', 'curso online', 'oportunidade', 'agência de modelos', 'oferta de emprego', 'parceria', 'lista de emails', 'lista de contatos', 'divulgue seu', 'divulgue sua', 'marketing por e-mail', 'sites de busca', 'clique', 'assine', 'visite o site', 'saiba mais', 'dê uma olhada', 'leia agora', 'não exclua', 'veja isso', 'confira', 'abra', 'isso não é spam', 'atenção', 'especialmente para você', 'a informação que você pediu', 'agora', 'já', 'última chance', 'hoje', 'tempo limitado', 'não perca tempo', '24 horas', 'urgente', 'imediato', 'só até amanhã', 'dinheiro', 'dinheiro a sério', 'vencedor', 'gratuito', 'Clique aqui', 'Anuncie', 'Ganhe dinheiro enviando e-mails', 'Lista de e-mails', 'Mala direta', 'Perda de peso', 'oi', 'urgentemente', 'amigo', 'escondido', 'para você', 'STOP', 'fora', 'oferecer', 'quente', 'incrível', 'satisfação', 'agir agora', 'aplicar agora', 'agora só', 'como se vê', 'como se vê na TV', 'evitar', 'ser seu próprio patrão', 'trabalhar em casa', 'em casa', 'comprar', 'ligue agora', 'bônus em dinheiro', 'o caixa livre', 'dobrar sua renda', 'ganhar', 'marketing multi nível', 'ganhar dinheiro', 'o pagamento imediato', 'o pagamento atrasado', 'gestão de fundos', 'de acesso gratuito', 'dom gratuito', 'informação livre', 'a oferta livre', 'medicina', 'soft tabs', 'cialis', 'xanax', 'valium', 'vicodin', 'Viagra', 'Levitra', 'plantas medicinais', 'alargamento', 'aberto agora', 'recolher', 'comparar', 'consolidar', 'débito', 'saia dívida', 'eliminar a dívida', 'reduzir sua taxa de hipoteca', 'refinanciar', 'as taxas mais baixas de seguros', 'seguro de vida', 'empréstimos', 'caro amigo', 'perder peso', 'grau em linha', 'marketing online', 'farmácia on-line', 'prometeu que', 'adolescente', 'vencedor ', 'você é um vencedor', 'sua família', 'seu won e-mail', 'por favor me ajude', 'o pedido de parceria', 'Deus te abençoe', 'comprar agora', 'destinatário desconhecido', 'Saldo em aberto', 'Fatura', 'Fatura de Cartão de crédito', 'Cobrança', 'Mensagem de Saldo em aberto'];


// Build bad words list
(function () {
    let list = '<ul>';

    for (let i = 0; i < badWords.length; i++) {
        list += '<li>' + badWords[i] + '</li>';
    }

    list += '</ul>';

    document.querySelector('#words').innerHTML = list;
})();


// Search for the bad words into subject line
function matchWords(subject, words) {
    let regexMetachars = /[(){[*+?.\\^$|]/g;
    let regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");

    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i].replace(regexMetachars, "\\$&");
    // }

    return subject.match(regex) || [];
}


// Highlight words inside the subject
function highlightWords(subject, result) {
    let subjectLine = subject;
    let resultLabel = document.querySelector('#resultLabel');

    for (let i = 0; i < result.length; i++) {
        subjectLine = subjectLine.replace(result[i], `<span class='bg-primary'>${result[i]}</span>`);
    }

    if (subject.length > 60) {
        subjectLine = `<span class='bg-danger'>${subjectLine}</span>`;
        resultLabel.innerHTML = `<span class='text-danger'>Subject contem mais de 60 caracteres:</span>`;
    } else {
        resultLabel.innerHTML = 'Subject:';
    }
    
    return subjectLine;
}


// Submit
function search(e) {
    e.preventDefault();

    let subject = document.querySelector('#subject').value;
    let result = matchWords(subject, badWords);

    document.querySelector('#result').innerHTML = highlightWords(subject, result);
}


/** BAD WORDS

ganhe dinheiro enviando emails
trabalhe em casa
renda extra
crédito
seja seu próprio patrão
aplique agora
taxas baixas
dobre sua renda
ganhe
pago semanalmente
pagamento imediato
dinheiro rápido
liberdade financeira
saia da dívida
elimine a dívida
reduza suas taxas
refinancie
bônus
livre
empréstimo
100%
emagreça
dieta
por que não consigo emagrecer
perca peso
perder gordura
fique sarado
secar barriga
compre
aproveite
grátis
desconto
promoção
oferta
imperdível
preços
valores
frete grátis
despachamos para todo o brasil
vagas abertas
telemarketing
curso
curso online
oportunidade
agência de modelos
oferta de emprego
parceria
lista de emails
lista de contatos
divulgue seu
divulgue sua
marketing por e-mail
sites de busca
clique
assine
visite o site
saiba mais
dê uma olhada
leia agora
não exclua
veja isso
confira
abra
isso não é spam
atenção
especialmente para você
a informação que você pediu
agora
já
última chance
hoje
tempo limitado
não perca tempo
24 horas
urgente
imediato
só até amanhã
dinheiro
dinheiro a sério
$
vencedor
gratuito
Clique aqui
Anuncie
Ganhe dinheiro enviando e-mails
Lista de e-mails
Mala direta
Perda de peso
oi
urgentemente
amigo
escondido
para você
STOP
fora
oferecer
quente
incrível
satisfação
agir agora
aplicar agora
agora só
como se vê
como se vê na TV
evitar
ser seu próprio patrão
trabalhar em casa
em casa
comprar
ligue agora
bônus em dinheiro
o caixa livre
dobrar sua renda
ganhar
marketing multi nível
ganhar dinheiro
o pagamento imediato
o pagamento atrasado
gestão de fundos
de acesso gratuito
dom gratuito
informação livre
a oferta livre
medicina
soft tabs
cialis
xanax
valium
vicodin
Viagra
Levitra
plantas medicinais
alargamento
aberto agora
recolher
comparar
consolidar
débito
saia dívida
eliminar a dívida
reduzir sua taxa de hipoteca
refinanciar
as taxas mais baixas de seguros
seguro de vida
empréstimos
caro amigo
perder peso
grau em linha
marketing online
farmácia on-line
prometeu que
adolescente
vencedor
você é um vencedor
sua família
seu won e-mail
por favor me ajude
o pedido de parceria
Deus te abençoe
comprar agora
destinatário desconhecido
Saldo em aberto
Fatura
Fatura de Cartão de crédito
Cobrança
Mensagem de Saldo em aberto

 */
