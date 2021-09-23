import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';

export type Filme = {
  nome: string;
  imagem?: string;
};

const filmes: Filme[] = [
  {
    nome: 'Homem-Aranha',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxX9fFVzs9-Epm70RRuBAzjLdMM9YIYW9sg&usqp=CAU',
  },
];

@Injectable()
export class FilmesService {
  getAll() {
    return filmes;
  }

  createFilme(filme: CreateFilmeDto) {
    return filmes.push(filme);
  }
}
