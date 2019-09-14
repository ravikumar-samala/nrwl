module.exports = {
  name: 'admin-dashboard',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
