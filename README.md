> Para rodar o projeto utilize os seguintes comandos com suas respectivas ordens:

npm install
npm install class-validator
npm install class-transformer
npm install jsonwebtoken

Para criar a base de dados:
npm run typeorm-default -- migration:run

Para alimentar a base:
npm run typeorm-seed -- migration:run

> No arquivo data-source: Verificar a parte do banco de dados.
> Ao rodar os migration analisar se irá comitar 1 por vez ou será necessário add os arquivos nas pastas um por um para a criação não ter conflito.

