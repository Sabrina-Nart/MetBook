/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertAutorEntity1716246193303 implements MigrationInterface {
    name = 'InsertAutorEntity1716246193303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO autores (id, nome) VALUES 
            ('5751520f-04b6-4777-a70f-6835f6744808', 'Martin Fowler')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM autores WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'
        `);
    }

}
