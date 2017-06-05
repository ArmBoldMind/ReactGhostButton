import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const style = {
            width: (this.props.width) ? this.props.width : 'auto',
            height: (this.props.height) ? this.props.height : 'auto',
            backgroundColor: (this.props.bgColor) ? this.props.bgColor : 'rgba(0,0,0,0)',
            border: (this.props.border) ? this.props.border : '1px solid black',
            borderRadius: (this.props.radius) ? this.props.radius : '0'
        }

        const Pstyle = {
            opacity: (this.props.textOpacity) ? this.props.textOpacity : '0.1 !important',
            color: (this.props.color) ? this.props.color : 'black',
            margin: '0',
            fontSize: (this.props.fontSize) ? this.props.fontSize : '10px',
            lineHeight: (this.props.height) ? this.props.height : '1'
        }

        return (
            <button style={style} className={this.props.className}>
                <p style={Pstyle}> {(this.props.text) ? this.props.text : ''} </p>
            </button>
        )
    }
}
