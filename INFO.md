## Criar um módulo no NestJS
```
nest g module "nome do modulo sem aspas"
```

## Criar um service no NestJS
```
nest g service "nome do service sem aspas"
```

## Transformar schema em tabelas do banco
```
npx prisma db push
```
>Nesse projeto configurei o package.json para fazer a transformação com o seginte código:
```
npm run dbup
```

## Para desfazer o push do banco
```
npx prisma db pull
```
>E configurei o package.json para desfazer com o seginte código:
```
npm run dbdn
```

## Abrir o prisma studio
```
npx prisma studio
```
>E também configurei o package.json para abrir o prisma com o seginte código:
```
npm run studio
```

## Modelo do arquivo .env
DATABASE_URL="mysql://root:senha@localhost:3306/filmes"