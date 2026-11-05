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

test('resume projects and employers retain their exact destinations', () => {
  const engine = createEngine();
  const expected = {
    'project-link':'https://github.com/iddobarnoon/BudgetWise',
    'project-link~1':'https://github.com/iddobarnoon/PersistentDocuStore',
    'trading-link':'https://github.com/iddobarnoon/HFPredictionMarketBot',
    'axonius-company':'https://www.axonius.com/',
    'lendbuzz-company':'https://www.lendbuzz.com/',
    'contact-linkedin':'https://linkedin.com/in/iddobarnoon'
  };
  for(const [id,href] of Object.entries(expected)) assert.equal(engine.els.get(id).href,href,id);
  assert.ok(!engine.list.some(element => element.text === '8.3%'));
});
