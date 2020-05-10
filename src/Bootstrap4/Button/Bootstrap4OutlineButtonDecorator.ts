import AbstractBootstrap4ButtonDecorator from "./AbstractBootstrap4ButtonDecorator";


class Bootstrap4OutlineButtonDecorator extends AbstractBootstrap4ButtonDecorator {

    protected classes: { [p: string]: string } = {
        "default": "btn btn-outline-secondary",
        "primary": "btn btn-outline-primary",
        "secondary": "btn btn-outline-secondary",
        "success": "btn btn-outline-success",
        "danger": "btn btn-outline-danger",
        "warning": "btn btn-outline-warning",
        "info": "btn btn-outline-info",
        "light": "btn btn-outline-light",
        "dark": "btn btn-outline-dark",
        "link": "btn btn-outline-link",
    };

}

export default Bootstrap4OutlineButtonDecorator;
