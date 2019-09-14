module.exports = {
  name: 'client-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/client/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
