const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
    mode: 'production',
    entry: __dirname + '/src/HtmlTs/index.ts', //ファイルをまとめる際のエントリーポイント
    output: {
        path: __dirname + "/dest",
        filename: 'htmlts.min.js' //まとめた結果出力されるファイル名
    }
});