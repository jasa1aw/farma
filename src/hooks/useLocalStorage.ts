type LocalStorageHook<T> = {
	saveData: (data: T) => void;
	getData: () => T | null;
	deleteData: () => void;
	addData: (data: T) => void;
  };
  
  function useLocalStorage<T>(key: string): LocalStorageHook<T> {
	const saveData = (data: T) => {
	  localStorage.setItem(key, JSON.stringify(data));
	};
  
	const getData = (): T | null => {
	  const storedData = localStorage.getItem(key);
	  return storedData ? JSON.parse(storedData) : null;
	};
  
	const deleteData = () => {
	  localStorage.removeItem(key);
	};
  
	const addData = (data: T) => {
	  const existingData = getData();
  
	  if (Array.isArray(existingData)) {
		// Append the new data if existing data is an array
		saveData([...existingData, data] as T);
	  } else if (existingData) {
		// If existing data is not an array, replace it with a new array containing both
		saveData([existingData, data] as unknown as T);
	  } else {
		// If no existing data, save the new data as is
		saveData(data);
	  }
	};
  
	return { saveData, getData, deleteData, addData };
  }
  
  export default useLocalStorage;
  