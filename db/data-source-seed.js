"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptionsSeed = void 0;
const typeorm_1 = require("typeorm");
const data_source_1 = require("./data-source");
exports.dataSourceOptionsSeed = {
    ...data_source_1.dataSourceOptions,
    migrations: ['dist/db/seeds/*.js'],
};
exports.default = new typeorm_1.DataSource(exports.dataSourceOptionsSeed);
//# sourceMappingURL=data-source-seed.js.map