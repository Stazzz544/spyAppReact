import React from 'react';
import { useState } from 'react'
import env from './../env.json'

function Create() {
	const [url, setUrl] = useState('')
	const [lineClass, setLineClass] = useState('hide')//скрываем
	const [formClass, setFormClass] = useState('')//скрываем

	const sendData = (obj) => {
		setFormClass('hide')
		setLineClass('')
		fetch(env.urlBackend, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(obj)
		})
			.then(response => response.json())
			.then(response => {
				console.log(response);
				if (response.result) {
					setUrl(env.url + '/' + response.url)
				}
			})
	}

	const loadDataFromForm = (event) => {
		event.preventDefault();
		let note = event.target.elements.note.value;
		note = note.trim();
		if (note === '') {
			alert('заполните поля');
			return false
		}
		sendData({ "note": note })
	}

	return (
		<div className='create__form-wrapper'>

			<form onSubmit={loadDataFromForm}  className = {`${formClass} create__form`}>
				<label className='create__form-label' htmlFor="">Enter your secret message...</label>
				<div className='create__form-textarea-wrapper'>
					<textarea className='create__form-textarea' name='note' id='note' placeholder='Your message is here...'></textarea>
				</div>
				<button className='create__form-button' type="submit">Create</button>
			</form>

			<div className = {`${lineClass} create__hidden-block-wrapper`}>
				<div className='create__hidden-block-url'>{url}</div>
				<p className='create__hidden-block-text'>P.s. copy this link and send to your spy-friend...</p>
				<div>
					<button className='create__hidden-block-btn' onClick={function(){window.location.reload()}}>Create one more note</button>
				</div>
			</div>
		</div>
	);

}

export default Create;
