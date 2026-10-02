import PromptSync from "prompt-sync";
const prompt = PromptSync();

const validarAcesso = (nome, codigo) => {
  return nome.length >= 4 && codigo > 1000;
};

const nome = prompt("Digite o nome do usuário: ").trim();
const codigo = Number(prompt("Digite o código do crachá: "));
const acessoPermitido = validarAcesso(nome, codigo);


if (acessoPermitido) {
  console.log("Acesso Concedido");
} else {
  console.log("Acesso Negado");
}