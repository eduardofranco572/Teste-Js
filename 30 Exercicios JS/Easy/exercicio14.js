//Licença de Voo || criar uma lincença usando class
class Pilot {
    constructor(nome, sobrenome, dtNascimento) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dtNascimento = dtNascimento;
      this.licencaVoo = false;
    }
  
    criaLicenca() {
      let cod = this.sobrenome + "sssssssss".slice(-5).toUpperCase();
      cod.substring(0, 5) + '-' + cod.substring(5 + '-'.length)
    }
  }

const pilot1 = new Pilot("eduardo", "Franco", "21-11-1997");
console.log(pilot1)