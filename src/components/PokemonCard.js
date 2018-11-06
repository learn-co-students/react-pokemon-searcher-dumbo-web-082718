import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    imgFront: true
  }


  render() {

      const name = this.props.poke.name
      const hp = this.props.poke.hp || this.props.poke.stats[4]["value"]
      const frontUrl = this.props.poke.frontUrl || this.props.poke.sprites.front
      const backUrl = this.props.poke.backUrl || this.props.poke.sprites.back


    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={()=>this.setState({imgFront: !this.state.imgFront})}
            src={this.state.imgFront ? frontUrl : backUrl} alt='' />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
