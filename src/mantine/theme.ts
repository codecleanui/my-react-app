import type { MantineThemeOverride } from '@mantine/core';

export const theme: Partial<MantineThemeOverride> = {
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
      "#f3edff",
      "#e0d7fa",
      "#beabf0",
      "#9a7ce6",
      "#7c56de",
      "#683dd9",
      "#5f2fd8",
      "#4f23c0",
      "#451eac",
      "#3a1899"
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
        size: 'xs',
      },
      styles: {
        section: {
          marginRight: 4,
          marginLeft: 1,
        },
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
    Breadcrumbs: {
      styles: {
        breadcrumb: {
          fontSize: '14px',
        },
      },
    },
    AppShell: {
      styles: {
        main: {
          backgroundColor: '#F3F4F6',
        },
        header: {
          height: 40,
        },
      },
    },
  },
};