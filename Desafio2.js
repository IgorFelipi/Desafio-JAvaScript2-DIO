function contaDeVitorias(vitorias, derrotas){
    let saldoDeVitorias = vitorias - derrotas;
    let nivel = classificacao(saldoDeVitorias)
  
    console.log(`O Herói tem um saldo de ${saldoDeVitorias} está no nivel ${nivel} `)
  
  }
  
function classificacao(qtdVitorias){
    let categoria;
  
    if(qtdVitorias < 10){
      categoria = "Ferro"
    }else if(qtdVitorias >= 11 && qtdVitorias <= 20){
      categoria = "Bronze"
    }else if(qtdVitorias >= 21 && qtdVitorias <= 50){
      categoria = "Prata"
    }else if(qtdVitorias >= 51 && qtdVitorias <= 80){
      categoria = "Ouro"
    }else if(qtdVitorias >= 81 && qtdVitorias <= 90){
      categoria= "Diamante"
    }else if(qtdVitorias >= 91 && qtdVitorias<= 100){
      categoria= "Lendário"
    }else{
      categoria= "Imortal"
    }
  
    return categoria;
  
  }
  
  
    contaDeVitorias()