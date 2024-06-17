"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLivroEntity1716246193304 = void 0;
class CreateLivroEntity1716246193304 {
    constructor() {
        this.name = 'CreateLivroEntity1716246193304';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "livros" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "titulo" character varying(255) NOT NULL,
                "subtitulo" character varying(255),
                "numeroPaginas" integer NOT NULL,
                "isbn" character varying(13) NOT NULL,
                "editora" character varying(100) NOT NULL,
                "anoLancamento" integer NOT NULL,
                "logoUrl" character varying,
                "preco" integer NOT NULL,
                CONSTRAINT "PK_9b2f94f9cb9f11a13b8e5d8c713" PRIMARY KEY ("id")
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "livros"`);
    }
}
exports.CreateLivroEntity1716246193304 = CreateLivroEntity1716246193304;
//# sourceMappingURL=1716246193304-CreateLivroEntity.js.map