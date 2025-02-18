import { createClient } from '@hey-api/openapi-ts';
import { spec } from './spec.js';

// Pretend to be in a web environment
global.window = {};
global.location = { href: 'https://some-website/' };

await createClient({
  input: spec,
  output: 'out',
  dryRun: true,
  plugins: ['@hey-api/client-fetch'],
});

console.log('done!');
