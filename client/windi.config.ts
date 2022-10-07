import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'primary-blue': '#114b5f',
      },
      screens: {
        xs: '300px',
      },
      fontFamily: {
        main: ['EB Garamond', ...defaultTheme.fontFamily.serif],
        body: ['Lato', ...defaultTheme.fontFamily.sans],
        urdu: ['Urdu'],
        arabic: ['MeQuran'],
        quran: ['QalamQuran'],
      },
      fontSize: {
        '3xs': '0.625rem', // 10px
        '2xs': '0.6875rem', // 11px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        md: '1.25rem', // 20px
        lg: '1.5rem', // 24px
        xl: '2.125rem', // 34px
        '2xl': '3rem', // 48px
        '3xl': '3.75rem', // 60px
      },
    },
  },
});
