//http://localhost:3000/note/96m3fu1vakg9e4qetivszvr3
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import env from '../env.json'

function Note() {
	let { noteURL } = useParams();
	const [noteText, setNoteText] = useState('');
	const [lineClass, setLineClass] = useState('hide');//скрываем
	const [formClass, setFormClass] = useState('hide');//скрываем
	const [errorClass, setErrorClass] = useState('hide');//скрываем

	useEffect(() => {
		if (noteURL !== undefined) {
			fetch(env.urlBackend, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({ "url": noteURL })
			})
				.then(response => response.json())
				.then(response => {
					console.log(response);
					if (response.result) {
						setNoteText(response.note)
						setFormClass('hide')
						setErrorClass('hide')
						setLineClass('')
					} else if (!response.result) {
						setFormClass('hide')
						setLineClass('hide')
						setErrorClass('')
					}
				})
		} else {
			setLineClass('hide')
			setFormClass('')
			setErrorClass('hide')
		}
	}, []);

	const getNote = (event) => {
		event.preventDefault();
		let url = event.target.elements.url.value;
		url = url.trim();
		if (url === '') {
			alert('заполните поля');
			return false
		}
		noteURL = url;
		window.location.href = env.url + '/' + url;
	}

	const searchNote = () => {
		window.location.href = env.url
	}

	return (
		<div className='note__wrapper'>
			<div className={lineClass}>
				<h4 className='note__title-hide' >Note: </h4>
				<div className='note__text-hide'>{noteText}</div>
				<div><button className='note__btn note__btn-hide' onClick={searchNote}>Show one moe note</button></div>
			</div>
			<div className={errorClass}>
				<p className='note__title-hide' >Error! Hash did not find...</p>
			</div>
			<div className={formClass}>
				<form className='note__form' action='' onSubmit={getNote}>
					<label className='note__label' htmlFor="url">Enter hash of note...</label>
					<p className='note__more-info'>last part aflet "/"</p>
					<input type='text' name='url' id='url' className="form-control note__input" />
					<button type='submit' className='btn btn-primary note__btn'> search note </button>
				</form>
			</div>
		</div>
	);
}

export default Note;
