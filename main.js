import { catsData } from './data.js';

const emotionsBtns = document.getElementById('emotions-buttons');

emotionsBtns.addEventListener('change', highlight);

function highlight(e) {
	const radioButtons = document.getElementsByClassName('radio');
	for (let radio of radioButtons) {
		radio.classList.remove('highlight');
	}
	document
		.getElementById(e.target.id)
		.parentElement.classList.add('highlight');
}

function getEmotions(cats) {
	let emotionsArray = [];
	for (let cat of cats) {
		for (let emotion of cat.emotionTags) {
			if (!emotionsArray.includes(emotion)) {
				emotionsArray.push(emotion);
			}
		}
	}
	return emotionsArray;
}

function renderEmotionsButtons(cats) {
	const emotions = getEmotions(cats);
	for (let emotion of emotions) {
		emotionsBtns.innerHTML += `	<div class="radio radioBox container-fluid">
            <label for="${emotion}">${emotion}</label>
			<input
				type="radio"
				name="radio"
				value="${emotion}"
				id="${emotion}"
			/>

		</div>`;
	}
}

renderEmotionsButtons(catsData);
