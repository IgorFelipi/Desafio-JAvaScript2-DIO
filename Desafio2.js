//função para determinar a quantidade de viórias
function contaDeVitorias(vitorias, derrotas){
//calculo das vitorias por derrotas recebidas por parametro
    let saldoDeVitorias = vitorias - derrotas;
    let nivel = classificacao(saldoDeVitorias)
  
    console.log(`O Herói tem um saldo de ${saldoDeVitorias} está no nível ${nivel} `)
  
  }
 
// Divisão em 2 funções para boa prática onde a mesma classifica o nivel do herói  
function classificacao(qtdVitorias){
  //Arrays para a distribuição dos valores 
  const limites = [10, 20, 50, 80, 90, 100];
   const categorias = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
  
   // Implementando um FOR para contar os indices e encaixar na categoria desejada
   for(let i = 0; i < limites.length; i++){
    if(qtdVitorias <= limites[i]){
      return categorias[i];
    }
   }
   return "imortal";
  
  }

  //Chamando a função  
contaDeVitorias(50,6);