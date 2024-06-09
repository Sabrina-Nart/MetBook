import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertUsuariosEntity1716246193303 implements MigrationInterface {
    name = 'InsertUsuariosEntity1716246193303';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO usuarios (id, nome, email, data_nascimento, genero, pais) VALUES 
            ('1c90634a-94fc-47c1-ba67-27a227884b1f', 'João Silva', 'joao@example.com', '1990-01-01', 'M', 'Brasil'),
            ('2c90634a-94fc-47c1-ba67-27a227884b2f', 'Maria Souza', 'maria@example.com', '1992-05-15', 'F', 'EUA'),
            ('3c90634a-94fc-47c1-ba67-27a227884b3f', 'Pedro Oliveira', 'pedro@example.com', '1985-11-30', 'M', 'Outro')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM usuarios WHERE id IN ('1c90634a-94fc-47c1-ba67-27a227884b1f', '2c90634a-94fc-47c1-ba67-27a227884b2f', '3c90634a-94fc-47c1-ba67-27a227884b3f')
        `);
    }

}
