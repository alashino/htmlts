import Bootstrap4TableDecorator from "./Table/Bootstrap4TableDecorator";
import Bootstrap4TableDarkDecorator from "./Table/Bootstrap4TableDarkDecorator";
import Bootstrap4ButtonDecorator from "./Button/Bootstrap4ButtonDecorator";
import Bootstrap4OutlineButtonDecorator from "./Button/Bootstrap4OutlineButtonDecorator";
import Bootstrap4TableBorderedDecorator from "./Table/Bootstrap4TableBorderedDecorator";
import Bootstrap4TableStripedDecorator from "./Table/Bootstrap4TableStripedDecorator";
import BootStrap4InputDecoratorSet from "./Input/BootStrap4InputDecoratorSet";


const htmltsBootstrap4 = {
    table: {
        table: new Bootstrap4TableDecorator(),
        tableBordered: new Bootstrap4TableBorderedDecorator(),
        tableStriped: new Bootstrap4TableStripedDecorator(),
        tableDark: new Bootstrap4TableDarkDecorator(),
    },
    button: {
        button: new Bootstrap4ButtonDecorator(),
        outline: new Bootstrap4OutlineButtonDecorator(),
    },
    input: {
        decoratorSet: new BootStrap4InputDecoratorSet(),
    },
};

export default htmltsBootstrap4;