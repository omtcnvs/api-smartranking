export interface Jogador {
  readonly _id: string;
  readonly email: string;
  readonly telefone: string;
  nome: string;
  ranking: string;
  posicaoRanking: number;
  urlFotoJogador: string;
}
