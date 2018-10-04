/* jshint node: true */
'use strict';

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');
const path = require('path');
const existsSync = require('exists-sync');
const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-plupload',

  included: function (app) {
    this._super.included(app);
    var config = this.app.project.config(app.env) || {};
    var addonConfig = config[this.name] || {};

    if (addonConfig.debug || (process.env.EMBER_ENV === 'development')) {
      app.import('vendor/plupload/js/moxie.js');
      app.import('vendor/plupload/js/plupload.dev.js');
    } else {
      app.import('vendor/plupload/js/plupload.full.min.js');
    }

    app.import('vendor/plupload/js/Moxie.swf', {
      destDir: 'assets'
    });
    app.import('vendor/plupload/js/Moxie.xap', {
      destDir: 'assets'
    });
    app.import('vendor/dinosheets.amd.js', {
      exports: {
        'dinosheets': ['default']
      }
    });

    app.import('vendor/styles/ember-plupload.css');
  },

  treeForVendor(tree) {
    let trees = [];

    if (tree) {
      trees.push(tree);
    }

    return new Merge(trees);
  }
};
