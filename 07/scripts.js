/*

7 - Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.

*/

var nomeVendedor = ("Marcelo");
var salario = parseInt("2000");
var vendas = parseInt("10000");
var comissao = vendas * 0.15;

var salariofinal = salario + comissao;

alert("Olá, " + nomeVendedor + "!" + " O seu salário fixo desse mês de " + salario + " reais, com suas vendas, ficou: " + salariofinal + " reais.");