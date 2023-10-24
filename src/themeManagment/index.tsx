
import { MantineThemeOverride, rem, Checkbox } from '@mantine/core';
export const myTheme: MantineThemeOverride = {
  fontFamily:
    'Noto Sans Ethiopic,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  defaultRadius: 'sm',
  primaryColor: 'primary',
  primaryShade: 7,
  breakpoints: {
    xs: '36rem',
    sm: '48rem',
    md: '62rem',
    lg: '75rem',
    xl: '87.5rem',
  },
  colors: {
    primary: [
      "#eef3ff",
      "#dde4f4",
      "#b9c7e2",
      "#93a8d1",
      "#738dc1",
      "#5e7cb9",
      "#5274b6",
      "#4363a0",
      "#395790",
      "#2c4b81"
    ],
  },

  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
    Button: {
      defaultProps: {
        size: 'sm',
      },
    },

    Input: {
      defaultProps: {
        size: 'sm',
      },
    },
    TextInput: {
      defaultProps: {
        size: 'sm',
      },
    },
    NumberInput: {
      defaultProps: {
        size: 'sm',
      },
    },
    Select: {
      defaultProps: {
        size: 'sm',
      },
    },
    PasswordInput: {
      defaultProps: {
        size: 'sm',
      },
    },
    Checkbox:{
      defaultProps: {
      },
    }
  },
};

