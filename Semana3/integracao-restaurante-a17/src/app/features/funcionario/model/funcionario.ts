import { Restaurante } from "../../restaurante/model/restaurante";

export interface Funcionario {
  id: number,
  nome: string,
  sobrenome: string,
  cpf: string,
  dataNascimento: Date,
  sexo: string,
  telefone: string,
  cargo: string,
  dataAdmisao: Date,
  salario: number,
  cargaHoraria: number,
  restaurante: Restaurante
}
