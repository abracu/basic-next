import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialState) => {

  const [state, setState] = useState(initialState);

    // Obtenemos datos del LocalStorage
    useEffect(() => {
      const item = localStorage.getItem(key);
      if (item) setState( JSON.parse(item))
    }, []);

    // Guardamos datos en el LocalStorage
    useEffect(() => {
    
        localStorage.setItem(key, JSON.stringify(state));
      
    }, [state]);

    return [state, setState];

}