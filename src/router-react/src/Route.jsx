import { Component } from "react";

// eslint-disable-next-line react/require-render-return
export class Route extends Component {
    render() {
        throw new Error("Should not render this component directly");
    }
}