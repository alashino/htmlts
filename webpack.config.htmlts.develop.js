const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
    mode: 'development',
    entry: __dirname + '/src/HtmlTs/index.ts', //ファイルをまとめる際のエントリーポイント
    output: {
        path: __dirname + "/dest",
        filename: 'htmlts.js' //まとめた結果出力されるファイル名
    }
});