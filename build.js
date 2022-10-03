const fs = require('fs');

const Velocity = require('velocityjs');

const vtl = fs.readFileSync('./src/example.vtl', 'utf-8');
const rendered = Velocity.render(vtl, {}, {});
console.log(rendered);
