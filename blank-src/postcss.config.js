let path = require('path')

module.exports = {
    'parser': 'sugarss',
    'plugins': [
        require('postcss-import'),
        require('postcss-apply'),
        require('postcss-nested'),
        // 'postcss-custom-properties',
        require('autoprefixer')
    ]
}
