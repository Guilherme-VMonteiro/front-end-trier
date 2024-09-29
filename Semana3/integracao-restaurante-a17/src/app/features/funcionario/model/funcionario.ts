import { Restaurante } from "../../restaurante/model/restaurante";
import { CargoEnum } from "./cargo";
import { SexoEnum } from "./sexo";

export interface Funcionario {
  id: number,
  nome: string,
  sobrenome: string,
  cpf: string,
  dataNascimento: Date,
  sexo: SexoEnum,
  telefone: string,
  cargo: CargoEnum,
  dataAdmisao: Date,
  salario: number,
  cargaHoraria: number,
  restaurante: Restaurante
}
