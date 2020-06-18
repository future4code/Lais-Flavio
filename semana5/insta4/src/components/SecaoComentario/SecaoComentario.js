import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		coments: ""
	}

	onChangeComentario = event => {
		this.setState({coments: event.target.value})
		console.log(this.state.coments)
	}
	onClickComentario = () => {
		console.log(this.state.coments)
		this.setState({coments: ""})
	}
	render() {
		return <div className={'comment-container'}>
			<input
				name={"comment"}
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.coments}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.onClickComentario}>Enviar</button>
		</div>
	}
}


//https://xh2x6.csb.app/