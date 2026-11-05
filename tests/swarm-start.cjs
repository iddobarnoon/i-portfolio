const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function createEngine() {
  const source = readFileSync(path.join(__dirname, '../src/SwarmPortfolio.jsx'), 'utf8');
  const engineSource = source.slice(0, source.indexOf('const qt =')).replace(/^import .*;?$/gm, '');
  const context = vm.createContext({
    document: { createElement: () => ({getContext: () => ({measureText: text => ({width:text.length*7})})}) }
  });
  vm.runInContext(engineSource + '\n globalThis.Engine = SwarmEngine;', context);
  return new context.Engine();
}

test('pointer collisions and idle frames cannot start construction', () => {
  const engine = createEngine();
  engine.mouse = {x:640,y:400};
  engine.cursors.forEach(cursor => {cursor.x=640; cursor.y=400;});
  for(let frame=0; frame<600; frame++) engine.step(1/60);
  assert.equal(engine.started,false);
  assert.ok(engine.tasks.every(task => task.state === 'wait'));
  assert.ok(engine.list.every(element => !element.vis));
});

test('the first actual scroll starts construction and work continues afterward', () => {
  const engine = createEngine();
  engine.setScroll(0);
  assert.equal(engine.started,false);
  engine.setScroll(1);
  assert.equal(engine.started,true);
  for(let frame=0; frame<240; frame++) engine.step(1/60);
  assert.ok(engine.list.some(element => element.vis));
  engine.setScroll(0);
  assert.equal(engine.started,true);
});
