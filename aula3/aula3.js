const passageiros = [
    { codigo: 4, nome: 'Adrew', hangar: 1 },
    { codigo: 6, nome: 'Rafel', hangar: 3 },
    { codigo: 3, nome: 'Lais', hangar: 2 },
    { codigo: 1, nome: 'Jhon', hangar: 3 },
    { codigo: 2, nome: 'Edinilson', hangar: 2 },
    { codigo: 5, nome: 'Gumtemberg', hangar: 1 },
    { codigo: 7, nome: 'Beatriz', hangar: 4 },
    { codigo: 8, nome: 'Vitor', hangar: 5 },
  ]
  
  passageiros.map(passageiros => {
  
    switch(passageiros.hangar) {
      case 1:
        console.log(passageiros.nome + ' vai para Búzios')
        break;
      case 2:
        console.log(passageiros.nome + ' vai para Fernando Noronha')
        break;
      case 3: 
        console.log(passageiros.nome + ' vai para Osasco')
        break;
      case 4:
        console.log(passageiros.nome + ' vai para Primavera do Leste')
        break;
      case 5:
        console.log(passageiros.nome + ' vai para New York')
        break;

    }
  
  })