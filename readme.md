# HtmlTs

## 概要

TypeScript製のHTML要素を作成を支援するライブラリです。
コードでHTMLを作成したい人向けのライブラリです。
一見jQueryみたいな感じで使えますが、必要ないメソッドは省略しています。(jQueryフリー)
decoratorを切り替えることによって様々なCSS Frameworkに対応できます。（デフォルトではプレーンなものです）
SampleとしてBootstrap4を実装しています。

## 使い方

```html
<script src="./htmlts.js"></script>
```

destにあるJSファイルを読み込むだけです。

bootstrap4で使う場合は下記も追記してください。

```html
<script src="./htmltsBootstrap4.js"></script>
```



## module

    htmlts - Coreライブラリです.
    htmlts.table - テーブル作成系です。
    htmlts.input - input系です。(validatorもついてます)

## Module Sample

### htmls

#### htmlts.create

下記の様にしてHTML要素を作成します。

```javascript
// objには HtmlTs要素が返ります。HtmlTsオブジェクトがどんなメソッドを持っているかは後述します。
var obj = htmlts.create(`${TagName}`);
```

第二引数にはいろんなものをとることができます。簡単にHTML要素を作成できるようになっています。

```javascript
// 空のdiv要素を作成
var div = htmlts.create("div");

// テキストを指定しながらP要素を作成
var p = htmlts.create("p", "なにかのテキスト");

// 中身に色々指定しながらdiv要素を作成
var div2 = htmlts.create("div", {
  class: "some class to add", // 要素に追加したいclass。 string | string[]
  // Attributeも設定できます。jQueryのattrをまとめて設定する感じです。
  attr: {
    "id": "id_div",
    "title": "Title属性です",
  },
  // cssも設定できます。jQueryのcssをまとめて設定する感じです。
  css: {
    "height": "5rem",
    "width": "10rem",
  },
  // 要素に追加したい中身
  content: [
    123, // numberはspan要素でwrapされます
    "なにかの文字列", // numberはspan要素でwrapされます
		htmlts.create("p", ""), // HtmlTsオブジェクトもネストできます。この例ではdiv要素の下にp要素を追加します。
  ],
  click: (element) => {
    // 要素をクリックした時の動作もまとめて設定できます。
    console.log("clicked!");
	},
});

// もちろん設定したくない場合は空でも作成できます。
var div3 = htmlts.create("div", {});
```



##### 第二引数をObjectで渡したときに使用できるパラメータ

| param   | type(型)                                                     | 備考                                                   |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| class   | string \| string[]                                           | 作成した                                               |
| attr    | {[key: string]: string}                                      | 適用したい属性                                         |
| css     | {[key: string]: string}                                      | 適用したいCSS                                          |
| content | string \| number \| HtmlTs \| Array<string \| number \| HtmlTs> | 中身。                                                 |
| click   | function(elemnt)                                             | clickした時のfunction。第一引数にHtmlElementがきます。 |

それぞれのパラメータはなくても大丈夫です。



#### htmlts.createById

idを指定して既存のHtml要素をHtmlTsオブジェクト化します。作成したHtmlTs要素をHtmlに反映するときなどに使ってください。

```javascript
var obj = htmlts.create("p", "こんにちは");
htmlts.createById("some_id").appen(
	obj
).append(
	htmlts.create("p", "HtmlTs!")
);
```



### HtmlTsオブジェクト

持っているパラメータは下記です。

| name        | type               | 備考                                                         |
| ----------- | ------------------ | ------------------------------------------------------------ |
| parent      | HtmlTs \| undefind | 親要素です。<br />厳密に構造化しにいません。<br />appendで作成された時だけあります。<br />なのでHtmlにあってもundefinedの時があります。 |
| children    | HtmlTs[]           | appendで追加されたものが入ります。                           |
| htmlElement | Element            | 実際のhtmlElementです。<br />jQueryでいうところのget(0)でとれるやつです。 |



下記のメソッドが使えます。

| method      | 引数               | 返り値  | 備考                                                         |
| ----------- | ------------------ | ------- | ------------------------------------------------------------ |
| append      | HtmlTs \| HtmlTs[] | HtmlTs  | 子要素を最後尾に追加します。<br />jQueryのappendと一緒でメソッドチェーンできます。 |
| prepend     | HtmlTs \| HtmlTs[] | HtmlTs  | 子要素を先頭に追加します。<br />jQueryのappendと一緒でメソッドチェーンできます。 |
| empty       |                    | HtmlTs  | 子要素を削除します。<br />jQueryのappendと一緒でメソッドチェーンできます。 |
| remove      |                    | HtmlTs  | 自身を削除します。<br />jQueryのremoveと一緒。               |
| setText     | string             | HtmlTs  | テキストノードを設定します。<br />メソッドチェーンできます。 |
| getText     |                    | string  | テキストノードの中身を返します。                              |
| addClass    | string \| string[] | HtmlTs  | クラスを追加します。<br />jQueryのaddClassと一緒でメソッドチェーンできます。 |
| hasClass    | string             | boolean | 指定したクラスを持っているかbooleanを返します。              |
| removeClass | string \| string[] | HtmlTs  | 指定したクラスを削除します。<br />jQueryのremoveClassと一緒でメソッドチェーンできます。 |
| setCss | 備考を参照 | HtmlTs  | cssを設定します。<br />jQueryのcss()と一緒で<br />css(param, value)や<br />css({param: vlue, ...})の様にかけます。<br />メソッドチェーンできます。 |
| setAttr | 備考を参照 | HtmlTs  | 属性を設定します。<br />jQueryのattr()と一緒で<br />attr(param, value)や<br />attr({param: vlue, ...})の様にかけます。<br />メソッドチェーンできます。 |
| setAttr | 備考を参照 | HtmlTs  | 指定したクラスを削除します。<br />jQueryのremoveClassと一緒でメソッドチェーンできます。 |
| getAttr | string | string  | 指定した属性の値が返ります。 |
| on | string \| string[], function | HtmlTs  | 色々イベントにフックをかけます。<br />jQueryのonといっしょです。<br />メソッドチェーンできます。 |
| click | string \| string[] | HtmlTs  | clickした時のfunctionを設定するか、clickイベントをおこします。<br />jQueryのclickと一緒です。<br />メソッドチェーンできます。 |
| change | string \| string[] | HtmlTs  | changeした時のfunctionを設定するか、changeイベントをおこします。<br />jQueryのchangeと一緒です。<br />メソッドチェーンできます |


### htmlts.table

テーブルを簡単に作成するためのモジュールです。

```javascript
// sample
var tableObj = htmlts.table.create({
	thead: ["No.", "名前", "趣味"],
	tbody: [
		["1", "John", "walking"],
		["2", "Mary", "running"],
		["3", "Mike", "touring"]
  ]
});

htmlts.createById("id").append(tableObj);
```

みたいにやると下記の様なテーブルができます。



| No.  | 名前 | 趣味    |
| ---- | ---- | ------- |
| 1    | John | walking |
| 2    | Mary | running |
| 3    | Mike | touring |



指定できるオプションは色々あるのでSampleを見てみてください。



### htmlts.input

input要素の作成を簡単にするモジュールです。

値の一括取得、validateの実行などが主な機能です。

流れとしては

1. controllerを作成する
2. inputオブジェクトを作成する × N回
3. controllerに登録する
4. controllerで一括validate
5. 必要であればcontrollerで一括して値を取得

という感じです。

```javascript
// Sample

var inputController = htmlts.input.controller();

// input type=text な要素
var inputText = htmlts.input.text({
  name: "user_name", // inputのname属性
  value: "", // 初期値
  placeHolder: "ユーザー名を入力", // inputのplaceHoler属性
  validate: {
    isNotNull: true, // 入力必須項目にする。
    // 他にもvalidateの種類は色々あるのでサンプルやソースをみてください。
    // また外からカスタムなvalidateルールを入れることもできます。
    custom: [
      // customなルール。booleanを返してください
      test: (value) => {
    		return value !== "よくないユーザー名";
  		},
  		message: "それはよくないです" // エラーだった時に表示されるメッセージ
    ]
  }
});

// コントローラーに登録
inputController.subscribe(inputText);

// validate
if (inputController.validate()) {
  // ok
  console.log(inputController.value());
}
```



作成できるinputのリストです。

| type        | return   |
| ----------- | -------- |
| hidden      | string   |
| text        | string   |
| textarea    | string   |
| checkbox    | string[] |
| radio       | string   |
| selectOne   | string   |
| selectMulti | string[] |
| password    | string   |



## Decorator

自作するのは簡単だと思いますのでBootstrap4のsrcを見て実装してみてください。

今後なにかついかするかもしれません。