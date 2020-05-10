class HtmlTsDictionaryClass {

    currentLang = "ja";
    wordOfNoDict = "[N/A]"; // 辞書が見つからなかった時にかえる文字

    private dictionaries: { [category: string]: AbstractHtmlTsDictionary } = {};

    /**
     * ライブラリ内で使う用
     * @param dictionary
     */
    subscribe(dictionary: AbstractHtmlTsDictionary): void {
        this.dictionaries[dictionary.getCategory()] = dictionary;
    }

    /**
     * 辞書の更新用
     * @param category
     * @param lang
     * @param dictionary
     */
    update(category: string, lang: string, dictionary: HtmlTsDictionaryType) {
        if (this.dictionaries[category] === undefined) return;
        this.dictionaries[category].update(lang, dictionary);
    }

    /**
     * 定義されてない言語が指定されているとき
     * @param category
     */
    noLang(category: string): string {
        console.log(`HtmlTs: No Lang=${this.currentLang} IN Category=${category}!`);
        return this.wordOfNoDict;
    }

    /**
     * 定義されてないwordを指定されたとき
     * @param category
     * @param wordKey
     */
    noWord(category: string, wordKey: string): string {
        console.log(`HtmlTs: No wordKey=${wordKey} IN Lang=${this.currentLang}, Category=${category}!`);
        return this.wordOfNoDict;
    }

}

export abstract class AbstractHtmlTsDictionary {

    protected abstract category: string;

    abstract dictionary: { [lang: string]: HtmlTsDictionaryType };

    getCategory(): string {
        return this.category;
    }

    get(wordKey: string): string {
        const dictionary = this.dictionary[HtmlTsDictionary.currentLang];
        if (dictionary === undefined) return HtmlTsDictionary.noLang(this.category);
        const word = dictionary[wordKey];
        if (word === undefined) return HtmlTsDictionary.noWord(this.category, wordKey);
        return word;
    }

    update(lang: string, dictionary: HtmlTsDictionaryType) {
        for (const wordKey in dictionary) {
            if (this.dictionary[lang] === undefined) {
                this.dictionary[lang] = {};
            }
            this.dictionary[lang][wordKey] = dictionary[wordKey];
        }
    }

}

export type HtmlTsDictionaryType = { [wordKey: string]: string };

const HtmlTsDictionary = new HtmlTsDictionaryClass();

export default HtmlTsDictionary;