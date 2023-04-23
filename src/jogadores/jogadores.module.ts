import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';
import { JogadoresAssemblerMapper } from './assembler/jogadores.assembler';

@Module({
  controllers: [JogadoresController],
  providers: [JogadoresService, JogadoresAssemblerMapper],
})
export class JogadoresModule {}
