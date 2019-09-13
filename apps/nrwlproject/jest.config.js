module.exports = {
  name: 'nrwlproject',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nrwlproject',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
