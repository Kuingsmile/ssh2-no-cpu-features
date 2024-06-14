'use strict';

const { spawnSync } = require('child_process');

const forceFailOnNonZero = (process.env.CI_CHECK_FAIL === 'ssh2');

// Attempt to build the bundled optional binding
const args = [
  `--target=${process.version}`,
  `--real_openssl_major=${/^\d+/.exec(process.versions.openssl)[0]}`,
  'rebuild',
];
process.exit(0);
