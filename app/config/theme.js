import { useSelector } from 'react-redux';
import { useDarkMode } from 'react-native-dark-mode';

/**
 * Define Const color use for whole application
 */
 export const BaseColor = {
  grayColor: '#9B9B9B',
  dividerColor: '#BDBDBD',
  whiteColor: '#FFFFFF',
  fieldColor: '#F5F5F5',
  yellowColor: '#FDC60A',
  navyBlue: '#3C5A99',
  kashmir: '#5D6D7E',
  orangeColor: '#E5634D',
  pinkColor: '#A569BD',
  blueColor: '#4285F4',
  greenColor: '#34A853',
  yellowColor: '#FBBC05',
  redColor: '#EA4335',
};

/**
 * Define Const list theme use for whole application
 */
 export const ThemeSupport = [
  {
    theme: 'red',
    light: {
      dark: false,
      colors: {
        primary: '#C31C0D',
        primaryDark: '#E5634D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        border: '#c7c7cc',
        icon: 'gray',
        backgroundHighlight: '#f1f1f1'
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#C31C0D',
        primaryDark: '#E5634D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        border: '#272729',
        icon: 'gray',
        backgroundHighlight: '#101010'
      },
    },
  },
  {
    theme: 'pink',
    light: {
      dark: false,
      colors: {
        primary: '#C2185B',
        primaryDark: '#A569BD',
        primaryLight: '#F8BBD0',
        accent: '#8BC34A',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        border: '#c7c7cc',
        icon: 'gray',
        backgroundHighlight: '#f1f1f1'
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#C2185B',
        primaryDark: '#A569BD',
        primaryLight: '#F8BBD0',
        accent: '#8BC34A',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        border: '#272729',
        icon: 'gray',
        backgroundHighlight: '#101010'
      },
    },
  },
  {
    theme: 'blue',
    light: {
      dark: false,
      colors: {
        primary: '#1281ac',
        primaryDark: '#5DADE2',
        primaryLight: '#68c9ef',
        accent: '#FF8A65',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        border: '#c7c7cc',
        icon: 'gray',
        backgroundHighlight: '#f1f1f1'
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#1281ac',
        primaryDark: '#5DADE2',
        primaryLight: '#68c9ef',
        accent: '#FF8A65',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        border: '#272729',
        icon: 'gray',
        backgroundHighlight: '#101010'
      },
    },
  },
  {
    theme: 'green',
    light: {
      dark: false,
      colors: {
        primary: '#388E3C',
        primaryDark: '#58D68D',
        primaryLight: '#C8E6C9',
        accent: '#607D8B',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        border: '#c7c7cc',
        icon: 'gray',
        backgroundHighlight: '#f1f1f1'
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#388E3C',
        primaryDark: '#58D68D',
        primaryLight: '#C8E6C9',
        accent: '#607D8B',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        border: '#272729',
        icon: 'gray',
        backgroundHighlight: '#101010'
      },
    },
  },
  {
    theme: 'yellow',
    light: {
      dark: false,
      colors: {
        primary: '#FFA000',
        primaryDark: '#FDC60A',
        primaryLight: '#FFECB3',
        accent: '#795548',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        border: '#c7c7cc',
        icon: 'gray',
        backgroundHighlight: '#f1f1f1'
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#FFA000',
        primaryDark: '#FDC60A',
        primaryLight: '#FFECB3',
        accent: '#795548',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        border: '#272729',
        icon: 'gray',
        backgroundHighlight: '#101010'
      },
    },
  },
];

/**
 * Define default theme use for whole application
 */
export const DefaultTheme = {
  theme: 'blue',
  light: {
    dark: false,
    colors: {
      primary: '#0984E3',
      primaryDark: '#0660A6',
      primaryLight: '#309EF2',
      accent: '#FF8A65',
      background: 'white',
      card: '#F5F5F5',
      text: '#212121',
      border: '#c7c7cc',
      icon: 'gray',
      backgroundHighlight: '#f1f1f1'
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: '#0984E3',
      primaryDark: '#0660A6',
      primaryLight: '#68c9ef',
      accent: '#FF8A65',
      background: '#010101',
      card: '#121212',
      text: '#e5e5e7',
      border: '#272729',
      icon: 'gray',
      backgroundHighlight: '#101010'
    },
  },
};

/**
 * Define list font use for whole application
 */
export const FontSupport = ['MPLUSRounded1c', 'Raleway', 'Roboto', 'Merriweather'];

/**
 * Define font default use for whole application
 */
export const DefaultFont = 'MPLUSRounded1c';

/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const isDarkMode = useDarkMode();
  // const forceDark = true;
  const forceDark = useSelector(state => state.application.force_dark);
  const themeStorage = useSelector(state => state.application.theme);
  const listTheme = ThemeSupport.filter(item => item.theme == themeStorage);
  const theme = listTheme.length > 0 ? listTheme[0] : DefaultTheme;

  if (forceDark) {
    return { theme: theme.dark, colors: theme.dark.colors };
  }
  if (forceDark == false) {
    return { theme: theme.light, colors: theme.light.colors };
  }
  return isDarkMode
    ? { theme: theme.dark, colors: theme.dark.colors }
    : { theme: theme.light, colors: theme.light.colors };
};

/**
 * export font for application
 * @returns font
 */
export const useFont = () => {
  const font = useSelector(state => state.application.font);
  return font ?? DefaultFont;
};
