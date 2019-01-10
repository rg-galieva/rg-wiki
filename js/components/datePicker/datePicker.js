(function () {
	function isInputDateSupported() {
		const testInput = document.createElement('input');
		testInput.type = 'date';
		return testInput.type === 'date';
	}

	const DatePickerWithInputDateSupport = () => {
		const handleDatePickChange = function (ev) {
			const datePickResult = document.querySelector('#dpResult > span');
			datePickResult.innerText = ev.target.value.toString();
		};

		return {
			init: () => {
				const datePickInput = document.querySelector('input[type="date"]');
				datePickInput.addEventListener('change', handleDatePickChange);
			},
			unmount: () => {
				const datePickInput = document.querySelector('input[type="date"]');
				datePickInput.removeEventListener('change', handleDatePickChange);
			}
		}
	};

	const DatePickerFallback = () => {
		function getDays(month, year) {
			return new Date(year, month, 0).getDate();
		}

		const today = new Date();
		const year = new Date().getFullYear();
		const month = today.getMonth();
		const days = getDays(month, year);

		const getDayButtons = (days) => Array.from({length: days}, (v, i) => i+1).map(day => getDayButtonHTML(day)).join('');

		const getDayButtonHTML = value => `<button value="${value}">${value}</button>`;

		const handleDayClick = (ev) => {
			ev.preventDefault();
			if (ev.target.tagName.toLowerCase() === 'button') {
				console.log(["handleDayClick: "], ev.target.value)
			}
		};

		return {
			init: () => {
				const dayWrapper = document.getElementById('day');
				dayWrapper.innerHTML = getDayButtons(days);
				dayWrapper.addEventListener('click', handleDayClick)
			}
		}
	};

	if (isInputDateSupported()) {
		const datePicker = DatePickerWithInputDateSupport();
		datePicker.init();
	} else {
		document.querySelector('.datePicker').style.display = 'none';
		document.querySelector('.datePickerFallback').style.display = 'block';

		DatePickerFallback().init();
	}
}());
