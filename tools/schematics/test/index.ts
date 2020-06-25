import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

import { Schema } from './schema';

export default function (schema: Schema): Rule {

  return chain([
    // create library
    externalSchematic('@nrwl/angular', 'lib', {
      name: schema.type,
      directory: schema.directory,
      prefix: 'tb',
      tags: `scope:test, type:${schema.type}`,
      style: 'scss'
    })
  ]);
}
