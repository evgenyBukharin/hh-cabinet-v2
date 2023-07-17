const names = document.querySelectorAll(".hero__col-name");
const phones = document.querySelectorAll(".hero__col-phone");
const jobs = document.querySelectorAll(".hero__col-job");
const emails = document.querySelectorAll(".hero__col-email");
const salaries = document.querySelectorAll(".hero__col-salary");
const cities = document.querySelectorAll(".hero__col-city");
const links = document.querySelectorAll(".hero__col-link");
const crms = document.querySelectorAll(".hero__col-crm");

const cols = [names, phones, jobs, emails, salaries, cities, links, crms];

for (let i = 0; i < cols.length; i++) {
	cols[i].forEach((hoverElement) => {
		hoverElement.onmouseenter = () => {
			cols[i].forEach((el) => {
				el.classList.add("hero__cell-hovered");
			});
			if (cols[i - 1]) {
				cols[i - 1][0].classList.add("hero__cell-header-hide-after");
			}
			if (cols[i]) {
				cols[i][0].classList.add("hero__cell-header-hide-after");
			}
		};
		hoverElement.onmouseleave = () => {
			cols[i].forEach((el) => {
				el.classList.remove("hero__cell-hovered");
			});
			if (cols[i - 1]) {
				cols[i - 1][0].classList.remove("hero__cell-header-hide-after");
			}
			if (cols[i]) {
				cols[i][0].classList.remove("hero__cell-header-hide-after");
			}
		};
	});
}
