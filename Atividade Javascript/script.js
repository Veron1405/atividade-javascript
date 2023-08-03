function calcularArea()
 {
    let lado = prompt("Digite o valor do lado do quadrado:");
    lado = parseFloat(lado);

      let area = lado * lado;
      alert("A área do quadrado é: " + area);
    }

function calcularAreaTriangulo() {

      let base = parseFloat(prompt("Digite o valor da base do triângulo:"));
      let altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));
     
      var area = (base * altura) / 2;
  
      alert("A área do triângulo é: " + area.toFixed(2));
  }

  function calcularAreaRetangulo() {

    let base = parseFloat(prompt("Digite o valor da base do retângulo:"));
    let altura = parseFloat(prompt("Digite o valor da altura do retângulo:"));

    let area = base * altura;

    alert("A área do retângulo é: " + area.toFixed(2));
}

function calcularAreaTrapezio() {

  let baseMaior = parseFloat(prompt("Digite o valor da base maior do trapézio:"));
  let baseMenor = parseFloat(prompt("Digite o valor da base menor do trapézio:"));
  let altura = parseFloat(prompt("Digite o valor da altura do trapézio:"));

  let area = ((baseMaior + baseMenor) * altura) / 2;

  alert("A área do trapézio é: " + area.toFixed(2));
}

function calcularAreaCirculo() {

  let raio = parseFloat(prompt("Digite o valor do raio do círculo:"));

  let area = Math.PI * raio * raio;

  alert("A área do círculo é: " + area.toFixed(2));
}
