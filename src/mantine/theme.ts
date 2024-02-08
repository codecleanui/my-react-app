import type { MantineThemeOverride } from '@mantine/core';

export const theme: Partial<MantineThemeOverride> = {
  defaultRadius: "sm",
  primaryColor: "primary",
  primaryShade: 9,

  
  fontSizes: {
    xs: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  colors: {
    primary: [
      "#f1f3f9",
      "#e0e4ec",
      "#bdc7d9",
      "#98a8c7",
      "#798db8",
      "#667daf",
      "#5a74ad",
      "#4a6398",
      "#415888",
      "#344c79"
    ]
    ,
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
        size: "xs",
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
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    TextInput: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    // TextInput: TextInput.extend({
    //   classNames: InputClasses
    // }),
    NumberInput: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Select: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    MultiSelect: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    DatePickerInput: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Checkbox: {
      defaultProps: {
        size: "xs",
        miw: 60,
      },
    },
    CheckboxGroup: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Radio: {
      defaultProps: {
        size: "xs",
        miw: 60,
        labelPosition: "left",
      },
    },
    RadioGroup: {
      defaultProps: {
        size: "xs",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Textarea: {
      defaultProps: {
        size: "xs",
        miw: 100,
        maw: 300,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Breadcrumbs: {
      styles: {
        breadcrumb: {
          fontSize: "14px",
        },
      },
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: "var(--card-color-body)",
        },
      },
    },
    AppShell: {
      styles: {
        main: {
          backgroundColor: "#F3F4F10",
        },
        header: {
          height: 40,
        },
      },
    },
  },

};

// AppShell: {
//   styles: {
//     main: {
//       backgroundColor: "#F3F4F6",
//     },
//     header: {
//       height: 40,
//     },
//   },
// },