import { catsData } from './data.js';

const emotionsBtns = document.getElementById('emotions-buttons');

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
		emotionsBtns.innerHTML += `	<div>
			<input
				type="radio"
				name="radio"
				value="${emotion}"
				id="${emotion}"
			/>
			<label for="${emotion}">${emotion}</label>
		</div>`;
	}
}

renderEmotionsButtons(catsData);
