/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLivroEntity1717460570507 implements MigrationInterface {
    name = 'CreateLivroEntity1717460570507';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "livros" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "titulo" character varying NOT NULL,
                "subtitulo" character varying,
                "numeroPaginas" integer NOT NULL,
                "isbn" character varying NOT NULL,
                "editora" character varying NOT NULL,
                "anoLancamento" integer NOT NULL,
                "logoUrl" character varying,
                "preco" numeric(10,2) NOT NULL,
                CONSTRAINT "PK_69daba516e6b0dd45f49c4d8d52" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "livros"`);
    }
}