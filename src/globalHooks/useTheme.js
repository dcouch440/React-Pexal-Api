import { useContext } from 'react';
import { Context } from '../Context';

export const useTheme = (themeOne = 'dark', themeTwo = 'light') => {
    const { setTheme, setIsDarkTheme } = useContext(Context);
    const handleTheme = () => {
        setTheme(prevTheme => prevTheme === themeOne ? themeTwo : themeOne);
        setIsDarkTheme(prevBool => !prevBool);
    };
    return { handleTheme };
};
