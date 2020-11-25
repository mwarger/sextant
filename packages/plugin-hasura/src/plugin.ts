import { createSextantPlugin } from '@sextant-tools/core';

export const plugin = createSextantPlugin((context, config) => {
  console.log('hello', context);
  console.log('context', context);
  console.log('config', config);
  //   const files = buildBaseTypeFiles(context.database);
  context.writeFileSync('sextant-hasura.test.ts', 'hello');

  // files.forEach((file) => {
  //     context.writeFileSync(file.filename, file.content);
  //   });
});
