import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import theme from './theme';

interface IProps {}

export const ThemeProvider: FC<
  PropsWithChildren<IProps>
> = ({ children }) => {
  return (
    <OriginalThemeProvider theme={theme}>
      {children}
    </OriginalThemeProvider>
  );
};
