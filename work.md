

# webpack + typescript


## パッケージのインストール

```bash
npm init
```

```bash
npm install webpack webpack-cli typescript ts-loader ts-node ava --save-dev
```

## Webpackの設定

```bash
touch webpack.config.js
```

```javascript
module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.ts', //ファイルをまとめる際のエントリーポイント
  output: {
    path: __dirname + '/out',
    filename: 'bundle.js' //まとめた結果出力されるファイル名
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
}
```

## typescriptの設定

```bash
touch tsconfig.json
```

```json
{
  "compilerOptions": {
    "target": "esnext", 
    "module": "commonjs",
    "noImplicitAny": true
  }
}
```

## テストを実行するための追記

avaを使います。
package.jsonに追記。
※つかおうと思ってたけどなんかうまくいかないので放置してる。

```json
    "ava": {
        "compileEnhancements": false,
        "extensions": [
            "ts"
        ],
        "require": [
            "ts-node/register"
        ]
    }
```