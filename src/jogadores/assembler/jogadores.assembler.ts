import { Injectable } from '@nestjs/common';
import { JogadorDto } from '../dtos/jogador.dto';
import { Jogador } from '../interfaces/jogador.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class JogadoresAssemblerMapper {
  public toInterface(jogadorDto: JogadorDto): Jogador {
    const { nome, email, telefone } = jogadorDto;
    return {
      _id: randomUUID(),
      nome: nome,
      email: email,
      telefone: telefone,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'http://google.com/url/image/NJEIBI9102hud9',
    };
  }
}
