import AbstractBootstrap4ButtonDecorator from "./AbstractBootstrap4ButtonDecorator";


class Bootstrap4ButtonDecorator extends AbstractBootstrap4ButtonDecorator {

    protected classes: { [p: string]: string } = {
        "default": "btn btn-secondary",
        "primary": "btn btn-primary",
        "secondary": "btn btn-secondary",
        "success": "btn btn-success",
        "danger": "btn btn-danger",
        "warning": "btn btn-warning",
        "info": "btn btn-info",
        "light": "btn btn-light",
        "dark": "btn btn-dark",
        "link": "btn btn-link",
    };

}

export default Bootstrap4ButtonDecorator;
