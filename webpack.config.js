module.exports = {
    mode: 'development',
    entry: __dirname + '/src/index.ts', //ファイルをまとめる際のエントリーポイント
    output: {
        path: __dirname + "/dest",
        filename: 'htmlts.js' //まとめた結果出力されるファイル名
    },
    resolve: {
        extensions: ['.ts', '.js'] //拡張子がtsだったらTypescirptでコンパイルする
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader' //ts-loader使うよ
            }
        ]
    }
};