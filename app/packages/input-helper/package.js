Package.describe({
  name: 'preybird:input-helper',
  version: '0.0.11',
  // Brief, one-line summary of the package.
  summary: 'Easily modify documents and session variables',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yanndebelgique/input-helper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.use(['livedata', 'underscore', 'deps', 'templating', 'ui', 'blaze', 'ejson', 'reactive-var', 'reactive-dict', 'random'], 'client');
  api.addFiles('input_helper.html','client');
  api.addFiles('input-helper.js','client');
  api.export('InputHelper','client');
});
