import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdatePaisEnumOptions1716246193307 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
