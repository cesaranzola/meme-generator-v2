import { catsData } from './data.js';

const emotionsBtns = document.getElementById('emotions-buttons');
const popBox = document.getElementById('popBox');
const gifCheck = document.getElementById('gif-checkbox');
const getImageBtn = document.getElementById('get-image');
const imageContainer = document.getElementById('imageContainer');
const closeBtn = document.getElementById('close-button');

emotionsBtns.addEventListener('change', highlight);
closeBtn.addEventListener('click', closeBox);
getImageBtn.addEventListener('click', renderCat);

function highlight(e) {
	const radioButtons = document.getElementsByClassName('radio');
	for (let radio of radioButtons) {
		radio.classList.remove('highlight');
	}
	document
		.getElementById(e.target.id)
		.parentElement.classList.add('highlight');
}

function closeBox() {
	popBox.style.display = 'none';
	imageContainer.innerHTML = '';
}

function renderCat() {
	const object = getSingleObject();
	imageContainer.innerHTML += `
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div
						class="d-flex justify-content-center align-items-center"
					>
						<img
							src="images/${object.image}"
							alt="${object.alt}"
							class="img-fluid rounded"
							style="width: 200px; height: 200px; margin-top: 8rem;"
						/>
					</div>
				</div>
			</div>
		</div>`;
	popBox.style.display = 'block';
}

function getSingleObject() {
	const objectArr = getMatchingArray();
	const arrLen = objectArr.length;

	if (arrLen === 1) {
		return objectArr[0];
	} else {
		let randNum = Math.floor(Math.random() * arrLen);
		return objectArr[randNum];
	}
}

function getMatchingArray() {
	if (document.querySelector('input[type=radio]:checked')) {
		const selectedOption = document.querySelector(
			'input[type=radio]:checked'
		).value;
		const isGif = gifCheck.checked;
		const matchingArr = catsData.filter((cat) => {
			if (isGif) {
				return cat.emotionTags.includes(selectedOption) && cat.isGif;
			} else {
				return cat.emotionTags.includes(selectedOption);
			}
		});
		return matchingArr;
	}
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
