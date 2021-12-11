import Pessoa from "../model/pessoa";

export const createTable = async () => {
  await Pessoa.createTable();
  console.log("Tabela Criada");
};

export const createPessoa = async (nome, idade) => {
  const novaPessoa = new Pessoa({
    nome: nome,
    age: idade,
  });
  await novaPessoa.save();
};

export const getAllPessoas = async () => {
  return await Pessoa.query(); // Pessoa.query puxa tudo do banco
};

export const deleteAllPessoas = async () => {
  Pessoa.destroyAll();
};