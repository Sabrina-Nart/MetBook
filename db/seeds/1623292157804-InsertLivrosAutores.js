"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertLivrosAutores1623292157804 = void 0;
class InsertLivrosAutores1623292157804 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO "autores"("nome", "data_nascimento", "genero", "nacionalidade", "linkInstagram", "biografia")
            VALUES 
                ('Marcos', '1990-01-01', 'M', 'Brasileiro', 'teste1@instagram.com', 'Teste1'),
                ('Gabriela', '1985-05-15', 'F', 'Americano', 'teste2@instagram.com', 'Teste2');
        `);
        const resultAutores = await queryRunner.query(`SELECT id FROM autores`);
        const autorIds = resultAutores.map((autor) => autor.id);
        await queryRunner.query(`
            INSERT INTO "livros"("titulo", "subtitulo", "numeroPaginas", "isbn", "editora", "anoLancamento", "logoUrl", "preco")
            VALUES
                ('Almas Gemeas', 'Teste 1', 200, '123456789', 'Editora A', 2020, '', 29.99),
                ('A cinco passos de você', 'Teste 2', 250, '987654321', 'Editora B', 2018, '', 34.99);
        `);
        const resultLivros = await queryRunner.query(`SELECT id FROM livros`);
        const livroIds = resultLivros.map((livro) => livro.id);
        const values = livroIds.map((livroId, index) => `('${livroId}', '${autorIds[index % autorIds.length]}')`).join(', ');
        await queryRunner.query(`
            INSERT INTO "livro_autores"("livroId", "autorId")
            VALUES ${values};
        `);
    }
    async down(queryRunner) {
    }
}
exports.InsertLivrosAutores1623292157804 = InsertLivrosAutores1623292157804;
//# sourceMappingURL=1623292157804-InsertLivrosAutores.js.map