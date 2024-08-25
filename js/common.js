document.addEventListener("DOMContentLoaded", function () {
	// При клике на элемент переключаем, переключаем класс для другого эелемента.
	// actionElement - класс элемета для клика,
	// targetElement - класс изменяемого элемента,
	// Изменяем высоту targetElement

	const tabsToggle = function (
		actionElement,
		targetElement,
		tagetClass = "toggle",
		targetAction = "toggle"
	) {
		if (
			document.querySelector(actionElement) &&
			document.querySelector(targetElement)
		) {
			const tabsBtn = document.querySelectorAll(actionElement);
			const tabsContent = document.querySelectorAll(targetElement);
			tabsBtn.forEach(function (btn, index) {
				btn.addEventListener("click", function (e) {
					e.preventDefault();
					if (targetAction === "toggle") {
						if (tabsContent[index].classList.contains(tagetClass)) {
							tabsContent[index].classList.remove(tagetClass);
							tabsContent[index].style.height = 0;
						} else {
							tabsContent[index].classList.add(tagetClass);
							tabsContent[index].style.height =
								tabsContent[index].scrollHeight + "px";
						}
					}
				});
			});
		}
	};

	tabsToggle(".f-nav__btn", ".f-nav__dropdown");

	// По клику на элемент с указанным классом переключает его класс
	// element - сам элемент, его класс
	// tagetClass = класс, который хотим добавить, удалить, переключить
	// tagetClassAction = действие с классом toggle

	let elementToggle = function (
		element,
		tagetClass = "toggle",
		tagetClassAction = "toggle"
	) {
		if (document.querySelector("." + element)) {
			const elements = document.querySelectorAll("." + element);
			elements.forEach(function (elem, index) {
				elem.addEventListener("click", function (e) {
					e.preventDefault();

					switch (tagetClassAction) {
						default:
							this.classList.toggle(tagetClass);
							break;
					}
				});
			});
		}
	};

	elementToggle("f-nav__btn"); // для .js-burger по-умолчанию делаем toggle класса toggle
});
