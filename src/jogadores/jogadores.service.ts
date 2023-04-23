import { Injectable, Logger } from '@nestjs/common';
import { JogadorDto } from './dtos/jogador.dto';
import { JogadoresAssemblerMapper } from './assembler/jogadores.assembler';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);

  constructor(private readonly assemblerMapper: JogadoresAssemblerMapper) {}

  public saveJogador(jogadorDto: JogadorDto) {
    const jogador = this.assemblerMapper.toInterface(jogadorDto);
    this.logger.log(jogador);
  }
}
