//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

const paragraph = document.getElementById('practicum');

function makeOne() {
	let getForms = document.forms.length;
	console.log(getForms);
	paragraph.append(getForms);
}
document.querySelector('.b-1').onclick = makeOne;


//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphTwo = document.getElementById('practicum2');

function makeTwo() {
	let getForms1 = document.formOne;
	console.log(getForms1.getAttribute('name'));
	paragraphTwo.append(getForms1.getAttribute('name'));
}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphThree = document.getElementById('practicum3');

function makeThree() {
	let getForms2 = document.forms[3];
	console.log(getForms2.getAttribute('name'));
	paragraphThree.append(getForms2.getAttribute('name'));

}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const paragraphFour = document.getElementById('practicum4');
let formNames = [];
function makeFour() {
	let getForms3 = document.forms;
	console.log(1, getForms3);
	let i = 0;
    while (i < getForms3.length) {
	console.log(2, getForms3[i]);
	i++;
	let attribute = getForms3[i-1].getAttribute('name');
	console.log(3, attribute);
	formNames.push(attribute)
	console.log(4, formNames);
	console.log(5, formNames.join(' '))
	}
	paragraphFour.append(formNames.join(', '));
}

document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

const paragraphFive = document.getElementById('practicum5');

function makeFive() {
	let getForms4 = document.forms;
	console.log(1, getForms4[2]);
	console.log(getForms4[2].getAttribute('name'));
	console.log(2, getForms4[2].elements.length);
	paragraphFive.append(getForms4[2].elements.length);
    }

document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

const paragraphSix = document.getElementById('practicum6');

function makeSix() {
	let getForms5 = document.forms;
console.log(1, getForms5[1]);
console.log(getForms5[1].getAttribute('name'));
console.log(2, getForms5[1].elements.length);
paragraphSix.append(getForms5[1].elements.length);
}

document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById('practicum7');

function makeSeven() {
	let getForms6 = document.forms;
	console.log(1, getForms6[1]);
	console.log(2, getForms6[1].elements);
	let elementsList = [];
	for (let i = 0; i <getForms6[1].elements.length; i++) {
		console.log(getForms6[1].elements[i]);
		console.log(getForms6[1].elements[i].getAttribute('name'));
	    elementsList.push(getForms6[1].elements[i].getAttribute('name'))
	    console.log(elementsList.join('-'));
	}
	paragraphSeven.textContent = elementsList.join('-');
}

document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById('practicum8');
const getForms7 = document.forms;
function makeEight() {
	console.log(1, getForms7[0]);
	console.log(2, getForms7[0].elements);
	const elementsList = [];
	for (let i = 0; i <getForms7[0].elements.length; i++) {
		console.log(getForms7[0].elements[i]);
		console.log(getForms7[0].elements[i].getAttribute('name'));
	    elementsList.push(getForms7[0].elements[i].getAttribute('name'))
	    console.log(elementsList.join('-'));
	}
	paragraphEight.textContent = elementsList.join('-');
}


document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

const paragraphNine = document.getElementById('practicum9');

function makeNine() {
	const elementsList = [];
	for (let i = 0; i <getForms7[2].elements.length; i++) {
	    elementsList.push(getForms7[2].elements[i].getAttribute('name'))
	}
	paragraphNine.textContent = elementsList.join('-');
}

document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

const paragraphTen = document.getElementById('practicum10');

function makeTen() {
	const four = document.forms.lastForm;
	console.log(1, four);
	let elementRadio = four.fourthName;
	console.log(elementRadio.value);
	paragraphTen.textContent = elementRadio.value;
}

document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл или метод forEach для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

const paragraphEleven = document.getElementById('practicum11');

function makeEleven() {
	const first = document.forms.formOne;
	console.log(1, first);
	let elementSelect = first.elements.firstSelect;
	console.log(2, elementSelect);
	let optionsValues = [];
	for (let i = 0; i <elementSelect.length; i++) {
		console.log(elementSelect[i].value);
	    optionsValues.push(elementSelect[i].value)
	    console.log(optionsValues);
	}
    paragraphEleven.textContent = optionsValues;

}

document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

const paragraphTwelve = document.getElementById('practicum12');

function makeTwelve() {
	const two = document.forms.formTwo;
	console.log(1, two);
	let elementTwo = two.elements;
	console.log(2, elementTwo);
	for (let i = 2; i <two.elements.length - 1; i++) {
	console.log(two.elements[i].getAttribute('id'))

	}
}

document.querySelector('.b-12').onclick = makeTwelve;

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById('practicum13');

function checkButton(e) {

	e.preventDefault()
	const four = document.forms.lastForm;
	console.log(1, four);
	let elementRadio = four.fourthName;
	if (elementRadio.checked) {
	return (paragraphThirteen.textContent = 'Выбрана')}
	else {
		return (paragraphThirteen.textContent = 'Не выбрана')}
}

document.querySelector('.b-13').addEventListener('click', checkButton);

//Задание 14
//Проверьте какой вариант выбран в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным второй вариант: select.selectedIndex = 1;
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Используйте условный оператор (if) для проверки выбранного варианта
//- Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
//- Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
//- Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

const paragraphFourteen = document.getElementById('practicum14');

function checkOption() {

	const first = document.forms.formOne;
	console.log(1, first);
	let elementSelect = first.elements.firstSelect;
	console.log(2, elementSelect);
	//elementSelect.selectedIndex = 1; для чего это???
	console.log(3, elementSelect.value);
	if (elementSelect.value === 'Опция 1') {
		return (paragraphFourteen.textContent = "Выбран первый вариант")}
		else if (elementSelect.value === 'Опция 2') {
	    return (paragraphFourteen.textContent = "Выбран второй вариант")}
		else {
	    return (paragraphFourteen.textContent = "Выбран третий вариант")}
		}

document.querySelector('.b-14').onclick = checkOption;

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
	const first = document.forms.formOne;
	let elementSelect = first.elements.firstSelect;
	elementSelect.selectedIndex = 2;
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
	const two = document.forms.formTwo;
	console.log(1, two);
	let elementTwo = two.elements.checkboxThree;
	console.log(2, elementTwo);
	elementTwo.checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const error = document.getElementById('errorMessage');
console.log(4, error);
const formOne = document.forms.formOne;
console.log(5, formOne);
let elementsOne = formOne.elements;
console.log(6, elementsOne)
console.log(7, elementsOne.firstName.value)

formOne.addEventListener('submit', function (event) {
   event.preventDefault();
   if (elementsOne.firstName.value == "" || elementsOne.firstEmail.value == "" ) {
	error.textContent = "ошибка";}
	else {error.textContent = "оk"}
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки
	formOne.reset();
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие onchange для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

const selectElement = document.getElementById('firstSelect');
console.log(8, selectElement.value)//Ваш код

selectElement.onchange = function () {

if (selectElement.value === 'Опция 2') {document.getElementById('firstForm').style.backgroundColor = 'green'}
else if (selectElement.value === 'Опция 3'){document.getElementById('firstForm').style.backgroundColor = 'red'}
else {document.getElementById('firstForm').style.backgroundColor = 'orange'}
};
formOne.reset();

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие oninput для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const emailInput = formOne.elements.firstEmail;
const errorMessage = document.getElementById('errorMessage');
console.log(9, emailInput);
const paragraph1 = document.createElement('p');
document.formOne.append(paragraph1);

let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

function isEmailValid(value) {
	return pattern.test(value);}

emailInput.oninput = function () {
	if (isEmailValid(emailInput.value)) {
		paragraph1.textContent = 'валид';
		emailInput.style.backgroundColor = 'green';
	  } else {
		emailInput.style.backgroundColor = 'red';
		paragraph1.textContent = 'не валид';
	  }
	}
//Ваш код


//Задание 21
//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector('.b-21').onclick = function (event) {
	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
	let isChecked = false;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			isChecked = true;
		}
	});

	if (!isChecked) {
		event.preventDefault();
		document.getElementById('result21').textContent = 'Проверка не пройдена';
		//Ваш код
	} else {
		document.getElementById('result21').textContent = 'Проверка пройдена';
	}
};

//Задание 22
//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector('.b-22').onclick = function (event) {
	const nameInput = document.forms.formThree.elements.thirdName;

	if (nameInput.value.trim() === '') {
		event.preventDefault();
		document.getElementById('result22').textContent = 'Проверка не пройдена';
		//Ваш код
	} else {
		document.getElementById('result22').textContent = 'Проверка пройдена';
	}
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled



//Задание 24
//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные".
//Подсказка: для установки атрибута используйте методы forEach и setAttribute
let inputs = document.getElementsByTagName('input');
	console.log(12, inputs)
document.querySelector('.b-24').onclick = function () {
	for (let i=0; i < inputs.length; i++) {
		inputs[i].setAttribute("class", "placeholder");
		inputs[i].setAttribute("placeholder", "Введите данные");
	}

};

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').onclick = function () {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function () {
			this.style.borderColor = "#00ff00";//Ваш код
		});

		input.addEventListener('blur', function () {
			this.style.borderColor = "#000000";//Ваш код
		});
	});
};

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector('.b-26').onclick = function (event) {
	event.preventDefault();
	const placeholder = document.forms.formThree.elements.placeholder;
	console.log(26, placeholder)
	document.getElementById('result26').textContent = placeholder//Ваш код
};

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');

formTwoInputs.forEach(function (input) {
	input.addEventListener('input', function () {
		//Ваш код
	});
});

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById('firstSelect');

selectFormThree.addEventListener('change', function () {
	//Ваш код
});

//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const formThree = document.forms.formThree;
const nameInputThree = form.elements.thirdName;
const emailInputThree = form.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
	event.preventDefault();

	if (nameInputThree.value && emailInputThree.value) {
		//Ваш код
	} else {
		console.log('Пожалуйста, заполните все поля формы.');
	}
}

formThree.addEventListener('submit', handleSubmitTwentyNine);

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById('result30');

formTwo.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
	const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);


	//Ваш код
}
