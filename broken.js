import { createClient } from '@hey-api/openapi-ts';
import { spec } from './spec.js';

await createClient({
  input: spec,
  output: 'out',
  dryRun: true,
  plugins: ['@hey-api/client-fetch'],
});

console.log('done!');