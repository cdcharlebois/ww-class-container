import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import "./ui/WwClassContainer.css";

class WwClassContainer extends Component {
    constructor(props) {
        super(props);
        this.executeAction = this.executeAction.bind(this);
    }

    executeAction() {
        const { action } = this.props;
        if (action && action.canExecute) {
            action.execute();
        }
    }

    render() {
        const { dynamicClasses, content } = this.props;
        return (
            <div className={this.props.class + ` ${dynamicClasses.value}`} onClick={this.executeAction}>
                {content}
            </div>
        )
    }
}

export default hot(WwClassContainer);
