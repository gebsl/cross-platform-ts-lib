import { createHtml5Markup } from '../src';
import fs from 'fs';
import path from 'path';

test('creates basic html5 markup', () => {
  const markup = createHtml5Markup();
  const validHtml5 = fs.readFileSync(path.resolve('templates', 'valid-html5.xml'), {encoding: 'utf-8'});

  expect(markup.stringified).toBe(validHtml5);
});