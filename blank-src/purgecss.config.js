let glob = require('glob'),
    path = require('path')

module.exports = {
    paths: glob.sync(path.join(__dirname, '**/*.htm'),  { nodir: true }),
    whitelist: []
}
