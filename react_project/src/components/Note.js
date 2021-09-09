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
		<div>
			<div className={lineClass}>
				<h4>Note: </h4>
				<div>{noteText}</div>
				<div><button onClick={searchNote}>Смотреть еще один ноут</button></div>
			</div>
			<div className={errorClass}>
				<p>Произошла ошибка, такой хэш не найден!</p>
			</div>
			<div className={formClass}>
				<form action='' onSubmit={getNote}>
					<label htmlFor="url">Введите hash заметки</label>
					<input type='text' name='url' id='url' className="form-control" />
					<button type='submit' className='btn btn-primary'> искать note </button>
				</form>
			</div>
		</div>
	);
}

export default Note;
