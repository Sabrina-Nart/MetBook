import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertLivrosAutores1623292157801 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "autores"("nome", "data_nascimento", "genero", "nacionalidade", "linkInstagram", "biografia")
            VALUES 
                ('Marcos', '1990-01-01', 'M', 'Brasileiro', 'teste1@instagram.com', 'Teste1'),
                ('Gabriela', '1985-05-15', 'F', 'Americano', 'teste2@instagram.com', 'Teste2');
        `);

        // Obtenha os IDs dos autores inseridos
        const resultAutores = await queryRunner.query(`SELECT id FROM autores`);

        // Mapeie os IDs dos autores
        const autorIds = resultAutores.map((autor: { id: string }) => autor.id);

        // Insira os livros
        await queryRunner.query(`
            INSERT INTO "livros"("titulo", "subtitulo", "numeroPaginas", "isbn", "editora", "anoLancamento", "logoUrl", "preco")
            VALUES
                ('Almas Gemeas', 'Teste 1', 200, '123456789', 'Editora A', 2020, '', 29.99),
                ('A cinco passos de você', 'Teste 2', 250, '987654321', 'Editora B', 2018, '', 34.99);
        `);

        // Obtenha os IDs dos livros inseridos
        const resultLivros = await queryRunner.query(`SELECT id FROM livros`);

        // Mapeie os IDs dos livros
        const livroIds = resultLivros.map((livro: { id: string }) => livro.id);

        // Insira os registros na tabela de junção livro_autores
        const values = livroIds.map((livroId: string, index: number) => `('${livroId}', '${autorIds[index % autorIds.length]}')`).join(', ');

        await queryRunner.query(`
            INSERT INTO "livro_autores"("livroId", "autorId")
            VALUES ${values};
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Implemente a lógica de rollback aqui, se necessário
    }
}

