import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Filme[]>;
    createFilme(data: Prisma.FilmeCreateInput): Promise<Filme>;
    deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deleteAllFilmes(): Promise<Prisma.BatchPayload>;
    getOneFilme(filmeId: number): Promise<Filme>;
    updateOneFilme(filmeId: number, data: Prisma.FilmeCreateInput): Promise<Filme>;
}
