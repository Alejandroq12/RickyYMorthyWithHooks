import { createContext, useState } from 'react';

export const AppContext = createContext(); 

const Provider = (props) => {
    const[dataApi, setDataApi] = useState();

    return (
        <div>
            <AppContext.Provider value={[dataApi, setDataApi]}>
                {props.children}
            </AppContext.Provider>
        </div>
    )


}

export default Provider;


