import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }



  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e)=>this.props.handleSubmit(e, this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e)=>this.handleChange(e)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=>this.handleChange(e)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e)=>this.handleChange(e)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
