import { useEffect } from 'react'
import { useVacancyStorage} from '@/hooks/useVacancyStorage'
import { initialVacancies } from '@/data/allVacancy'

export function useInitializeVacancies() {
	const { initializeVacancies } = useVacancyStorage()

	useEffect(() => {
		initializeVacancies(initialVacancies) // Run once when the hook is used
	}, [initializeVacancies])
}
