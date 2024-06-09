/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsuariosEntity1716246193302 implements MigrationInterface {
    name = 'CreateUsuariosEntity1716246193302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`
            CREATE TABLE "usuarios" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "data_nascimento" date,
                "genero" "public"."genero_enum",
                "pais" "public"."pais_enum",
                CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`
            CREATE TYPE "public"."genero_enum" AS ENUM('F', 'M', 'T', 'N', 'O')`
        );

        await queryRunner.query(`
            CREATE TYPE "public"."pais_enum" AS ENUM('BRASILEIRO', 'AMERICANO', 'INGLE_S', 'FRANCÊS', 'ALEMÃO', 'JAPONÊS', 'CHINÊS', 'CANADENSE', 'AUSTRALIANO', 'COREANO', 'ITALIANO', 'OUTRO')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TYPE "public"."genero_enum"`);
        await queryRunner.query(`DROP TYPE "public"."pais_enum"`);
    }
}