"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertAutoresEntity1623292157802 = void 0;
class InsertAutoresEntity1623292157802 {
    async up(queryRunner) {
        await queryRunner.query(`
      INSERT INTO "autores" (id, nome, data_nascimento, genero, nacionalidade, "linkInstagram", biografia) VALUES
      ('1c90634a-94fc-47c1-ba67-27a227884b10', 'João Silva', '1990-01-01', 'M', 'Brasileiro', 'joao_instagram', 'Biografia do João Silva'),
      ('1c90634a-94fc-47c1-ba67-27a227884b11', 'Maria Souza', '1992-05-15', 'F', 'Brasileiro', 'maria_instagram', 'Biografia da Maria Souza'),
      ('1c90634a-94fc-47c1-ba67-27a227884b12', 'Pedro Oliveira', '1985-11-30', 'M', 'Outro', 'pedro_instagram', 'Biografia do Pedro Oliveira')
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      DELETE FROM "autores" WHERE id IN (
        '1c90634a-94fc-47c1-ba67-27a227884b10',
        '1c90634a-94fc-47c1-ba67-27a227884b11',
        '1c90634a-94fc-47c1-ba67-27a227884b12'
      );
    `);
    }
}
exports.InsertAutoresEntity1623292157802 = InsertAutoresEntity1623292157802;
//# sourceMappingURL=1623292157802-InsertAutorEntity.js.map