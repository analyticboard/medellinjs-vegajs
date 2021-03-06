// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  nebula = require('bespoke-theme-nebula'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  jstransform = require('jstransform'),
  browserifyShim = require('browserify-shim'),
  d3 = require('d3'),
  vg = require('vega');

// Bespoke.js
bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

function parse(spec,id) {
  console.log(spec);
  vg.parse.spec(spec, function(chart) {
    console.log(chart)
    var view = chart({ el:id });
    view.viewport(null)
      .renderer("svg")
      .update();
  });
}
parse("charts/chart.json","#vis");

parse("charts/chart2.json","#vis2");