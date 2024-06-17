"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuariosEntity1716246193302 = void 0;
class CreateUsuariosEntity1716246193302 {
    constructor() {
        this.name = 'CreateUsuariosEntity1716246193302';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TYPE "public"."sexo_enum" AS ENUM('M', 'F', 'I')
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."pais_enum" AS ENUM('Brasil', 'EUA', 'Outro')
        `);
        await queryRunner.query(`
            CREATE TABLE "usuarios" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "data_nascimento" date,
                "genero" "public"."sexo_enum",
                "pais" "public"."pais_enum",
                CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id")
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "usuarios"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."sexo_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."pais_enum"
        `);
    }
}
exports.CreateUsuariosEntity1716246193302 = CreateUsuariosEntity1716246193302;
//# sourceMappingURL=1716246193302-CreateUsuariosEntity.js.map