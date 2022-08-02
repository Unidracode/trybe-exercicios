const custoProduto = 15;
const valorVenda = 30;

if (custoProduto >= 0 && valorVenda >= 0) {
  const custoTotalProduto = custoProduto * 1.2;
  const lucroTotal = (valorVenda - custoTotalProduto) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Erro, valores não podem ser negativos.")
}