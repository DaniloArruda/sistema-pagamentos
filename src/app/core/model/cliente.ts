import { Plano } from './plano';
import { Endereco } from './endereco';

export class Cliente {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco = new Endereco();
  plano: string;
}
