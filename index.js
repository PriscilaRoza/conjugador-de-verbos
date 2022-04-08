function conjugadorVerbo() {
  //variaveis
  var verbo = document.getElementById("verbo").value;
  var radical = verbo.substr(0, verbo.length - 2);
  var conjugacao = verbo.substr(verbo.length - 2);
  var pessoas = ["eu", "tu", "ele", "nós", "vós", "eles"];

  switch (conjugacao) {
    case "ar":
      var terminacao = ["o", "as", "a", "amos", "ais", "am"];
      break;
    case "er":
      var terminacao = ["o", "es", "e", "emos", "eis", "em"];
      break;
    case "ir":
      var terminacao = ["o", "es", "e", "imos", "is", "em"];
      break;
    default:
      conjugacao = 0;
  }

  let linhas = "";
  if (conjugacao != 0) {
    for (i = 0; i <= 5; i++) {
      linhas += pessoas[i] + " " + radical + terminacao[i] + "<br/>";
    }
  } else {
    linhas = "Não é um verbo válido";
  }

  document.getElementById("folha").innerHTML = linhas;
}
