/*for (let Variable = 0; Variable < 33; Variable++) {
  console.log("variable");
  const resultado = "variable" % 2;
  if (resultado === 0) {
    console.log("este numero es par" + i);
  }
}*/

/*const NombresDeProductos = ["zapa1", "zapa niky", "Adidas"];

let acumulador = " ";

for (let i = 0; i < 5; i++) {
  acumulador += NombresDeProductos[i];
  console.log(acumulador);
}*/

const TiempoDeEntregaDeRapi = 10;

switch (TiempoDeEntregaDeRapi) {
  case 10:
    console.log("llego a los 10 minutos");
    break;
  case 32:
    console.log("llego a los 32 minutos");
    break;
  case 45:
    console.log("llego a los 45 minutos");
    break;
  default:
    console.log("no sabemos en que estado esta tu pedido");
    break;
}
