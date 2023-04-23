import { Body, Controller, Get, Post } from '@nestjs/common';
import { JogadorDto } from './dtos/jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly service: JogadoresService) {}

  @Post('/save')
  async saveJogador(@Body() jogadorDto: JogadorDto) {
    await this.service.saveJogador(jogadorDto);
  }
}
