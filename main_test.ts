import { assertEquals } from '@std/assert';
import { endsWith } from './main.ts';

Deno.test(function _endsWith() {
  assertEquals(endsWith('aaaa.ts'), true);
  assertEquals(endsWith('aaaa.tsx'), true);
  assertEquals(endsWith('aaaa'), false);

  assertEquals(endsWith('aaaa', ['aaaa']), true);
  assertEquals(endsWith('aaaa.ts', ['.ts', '.tsx']), true);
  assertEquals(endsWith('aaaa.ts', []), false);
});
