module.exports = {
  name: 'client-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/client/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
