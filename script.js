const cardsContainer = document.getElementById('cardsContainer')

const aniversariantes = [
    { 
        name:'vinicius Jr',
        date:'12/07',
        image:'https://www.bing.com/th/id/OIP.xTgt6eTbCMRjhoVSCLyv7AHaFv?w=1200&h=930&rs=1&p=0',
        historia: 'Vinicius Jr é um jogador de futebol brasileiro que atua como atacante no Real Madrid.'
    },    
    { 
        name:'Rodrigo',
        date:'09/01' ,
        image:'https://th.bing.com/th/id/OIP.LkKVyQr4_dOzrN81AJwl8wHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7' ,
        historia: 'Rodrigo é um talentoso jogador de futebol, conhecido por suas habilidades no ataque.'
    },
    { 
        name : 'Eder Militão',
        date:'18/01 ' ,
        image:'https://th.bing.com/th?q=Militao+Real+Madrid+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=strict&t=1&mw=247'  , 
        historia: 'Eder Militão é um defensor brasileiro que joga no Real Madrid e na seleção brasileira.' 
    },
    {
        name: 'Endrick' ,
        date:'21/07' ,
        image:'https://th.bing.com/th/id/OIP.YjAK05ktEVjEcL2bAo0eugAAAA?w=173&h=180&c=7&r=0&o=5&pid=1.7' ,
        historia: 'Endrick é um jovem prodígio do futebol brasileiro, com um futuro promissor pela frente.'
    }
] ;      
aniversariantes.forEach(pessoa=> {
    const card = document.createElement('div')
    card.className ='card';
    
    card.innerHTML= `
        <img src="${pessoa.image}" alt="${pessoa.name}">
        <h2 class"nome">${pessoa.name}</h2>
        <p><strong>Aniversario</strong>: ${pessoa.date}</p>
        <section class="historia hidden"> <strong>Perfil</strong>:${pessoa.historia} </section>
        
    `;
    card.addEventListener('click' , () => {
        const section = card.querySelector('.historia');
        section.classList.toggle('hidden');
    
    });
                    
    cardsContainer.appendChild(card);
});



