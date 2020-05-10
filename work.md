

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
```bash
npm install ts-node mocha istanbul remap-istanbul postinstall-build chai typemoq @types/{mocha,chai} --save-dev
npm link typescript
```
package.json
```json
{
 "scripts": {
    "test": "./node_modules/.bin/mocha -r ts-node/register ./test/**/*.ts"
 }
}
```
