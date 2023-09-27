import React, {Component} from 'react'
import Color from './color'

export default class MyApp extends Component {

    constructor() {
        super();
        this.state = {
            colorNum : 20,
            colors: []
        }
        for(let i=0; i < this.state.colorNum; i++) {
            this.state.colors.push({hexCode : this.generateColor()})
        }
    }

    // generateColor

    generateColor() {
        return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

    updateColor(index) {
        let colors = this.state.colors.slice();
        const currentColor = this.generateColor();
        colors[index].hexCode = currentColor;
        this.setState(
            {
                colors : colors
            }
        )
    }

  render() {
    return (
      <div className="color-container">
       {this.state.colors.map((color,index) =>
        <Color key={`color-${index}`} index={index}
            update={this.updateColor.bind(this)}
            hexCode = {color.hexCode}
        />
       )}
      </div>
    )
  }
}
