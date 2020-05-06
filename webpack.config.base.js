module.exports = {
    devtool: "source-map",
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