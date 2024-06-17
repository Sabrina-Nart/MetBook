"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutorEntity1716246193303 = void 0;
class CreateAutorEntity1716246193303 {
    constructor() {
        this.name = 'CreateAutorEntity1716246193303';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."autores_genero_enum" AS ENUM('M', 'F', 'I')`);
        await queryRunner.query(`CREATE TYPE "public"."autores_nacionalidade_enum" AS ENUM('Brasileiro', 'Americano', 'Inglês', 'Francês', 'Alemão', 'Japonês', 'Chinês', 'Canadense', 'Australiano', 'Coreano', 'Italiano', 'Outro')`);
        await queryRunner.query(`
            CREATE TABLE "autores" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "data_nascimento" date,
                "genero" "public"."autores_genero_enum" DEFAULT 'I',
                "nacionalidade" "public"."autores_nacionalidade_enum" DEFAULT 'Brasileiro',
                "linkInstagram" character varying,
                "biografia" character varying(1000),
                CONSTRAINT "PK_9b2f94f9cb9f11a13b8e5d8c712" PRIMARY KEY ("id")
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "autores"`);
        await queryRunner.query(`DROP TYPE "public"."autores_genero_enum"`);
        await queryRunner.query(`DROP TYPE "public"."autores_nacionalidade_enum"`);
    }
}
exports.CreateAutorEntity1716246193303 = CreateAutorEntity1716246193303;
//# sourceMappingURL=1716246193303-CreateAutorEntity.js.map