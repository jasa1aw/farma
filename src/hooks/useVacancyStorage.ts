
interface Img {
	src: string
}

export interface Vacancy {
	id: string // Unique ID for the vacancy
	logo: Img
	companyName: string
	timeDur: string
	spec: string
	price: string
}

export function useVacancyStorage() {
	const STORAGE_KEY = 'vacancies'

	// Получение вакансий из localStorage
	const getVacancies = (): Vacancy[] => {
		if (typeof window !== 'undefined') {
			const data = localStorage.getItem(STORAGE_KEY)
			return data ? JSON.parse(data) : []
		}
		return []
	}

	// Сохранение вакансий в localStorage
	const saveVacancies = (vacancies: Vacancy[]) => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(vacancies))
	}

	// Добавление новой вакансии
	const addVacancy = (vacancy: Vacancy) => {
		const currentVacancies = getVacancies()
		const updatedVacancies = [...currentVacancies, vacancy]
		saveVacancies(updatedVacancies)
	}

	// Получение вакансии по ID
	const getVacancyById = (id: string): Vacancy | undefined => {
		const currentVacancies = getVacancies()
		return currentVacancies.find((vacancy) => vacancy.id === id)
	}

	// Инициализация хука (сохраняем начальные данные, если localStorage пуст)
	const initializeVacancies = (initialData: Vacancy[]) => {
		const currentVacancies = getVacancies()
		if (currentVacancies.length === 0) {
			saveVacancies(initialData || '')
		}
	}

	return {
		initializeVacancies,
		getVacancies,
		saveVacancies,
		addVacancy,
		getVacancyById
		
	}
}
