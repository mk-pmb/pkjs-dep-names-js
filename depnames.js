#!/usr/bin/env nodejs
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- coding: UTF-8, tab-width: 2 -*- */
'use strict';

var colSep = (process.env.COLSEP || '\t');

function listDeps(id, meta, prop, propTail) {
  var list = (meta[prop + (propTail || '')] || '');
  if (list) {
    if (!Array.isArray(list)) { list = Object.keys(list); }
    list = list.join(' ');
  }
  console.log([id, prop, list].join(colSep));
}

process.argv.slice(2).forEach(function (id) {
  var meta;
  try {
    id = String(id).replace(/\/+$/, '');
    meta = id;
    if (meta.indexOf('/') < 0) { meta += '/package.json'; }
    meta = require(meta);
    listDeps(id, meta, 'dep', 'endencies');
    listDeps(id, meta, 'devDep', 'endencies');
  } catch (err) {
    console.error([id, 'ERR', (err.message || err)].join(colSep));
  }
});
