import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // ou endereço do host do PostgreSQL
      port: 5432, // porta padrão do PostgreSQL
      username: 'your-username', // seu nome de usuário
      password: 'your-password', // sua senha
      database: 'your-database', // nome do banco de dados
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // caminho para as entidades
      synchronize: true, // NÃO usar em produção, pois sincroniza o esquema do banco automaticamente
    }),
  ],
})
export class AppModule {}
