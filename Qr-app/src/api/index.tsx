interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  token?: string;
}

const users: User[] = [
  { id: 1, username: "admin", password: "123123", email: "admin@example.com" },
  { id: 2, username: "user1", password: "123123", email: "user1@example.com" },
  { id: 3, username: "user2", password: "123123@e", email: "test@1" },
];

let currentUser: User | null = null;

export function login(email: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(email, password);
    // Simulate authentication API delay of 1 second
    setTimeout(() => {
      // Find the user with the provided username
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Generate a random token for the user
        const token = Math.random().toString(36).substr(2);
        currentUser = { ...user, token };
        resolve(token);
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
}

export function logout(): Promise<void> {
  return new Promise((resolve) => {
    localStorage.removeItem("token");
    localStorage.removeItem("acceptPolicy");
    currentUser = null;
    window.location.href = "/";
    resolve();
  });
}

export function getCurrentUser(): User | null {
  return currentUser;
}

/// data.ts

// Region table as a constant
// data.ts

// Region table as a constant
export const regionTable: { id: number; name: string }[] = [
  { id: 1, name: "MP" },
  { id: 2, name: "CP" },
  { id: 3, name: "RP" },
  { id: 4, name: "TD" },
];

// Process type table as a constant
export const locationTable: { id: number; name: string }[] = [
  { id: 1, name: "123 N main st,   New York, NY 55311 - MAJ123" },
  { id: 2, name: "1244 NE Edmond Av, Seattle WA 99120   -  TEM223" },
  { id: 3, name: "5012 Seminary Rd, Miami Fl 33103  -  SEN82D" },
];

// Fields table as a constant
export const fieldsTable: {
  id: number;
  name: string;
  type: string;
  placeholder?: string;
  tooltip?: string;
  data?:string[];
}[] = [

  { id: 1, name: "Agent Id", type: "TextInput", placeholder: "Enter agent id",tooltip: "Clients agent id"},
  {
    id: 2,
    name: "Location",
    type: "Select",
    placeholder: "Select location",
    tooltip:"Location",
    data:["123 N main st,   New York, NY 55311 - MAJ123","1244 NE Edmond Av, Seattle WA 99120   -  TEM223","5012 Seminary Rd, Miami Fl 33103  -  SEN82D"]
  },
  {
    id: 3,
    name: "Customer Type",
    type: "Checkbox",
    placeholder: "Select customer type",
    data:["Personal","Corp"]   
  }, 
  { id: 4, name: "ON", type: "TextInput"},
  {
    id: 5,
    name: "DV",
    type: "Checkbox",
    data:["Yes","No"]   
  },
  {
    id: 6,
    name: "EV",
    type: "Checkbox",
    data:["Yes","No"]   
  },
  {
    id: 7,
    name: "Reclaim",
    type: "Checkbox",
    data:["Yes","No"]   
  },
  {
    id: 8,
    name: "Member Id",
    type: "TextInput",
  },
  {
    id: 9,
    name: "Type",
    type: "Checkbox",
    data:["Extension","Settlement"]   
  },
  {
    id: 10,
    name: "Voucher",
    type: "Select",
    placeholder: "Select voucher",
  },
  {
    id: 11,
    name: "Partial",
    type: "Checkbox",
    data:["Extension","Settlement"]   
  },
];
// Many-to-many mapping table for fields and fieldsets
export const fieldFieldsetMapping: { fieldId: number; fieldsetId: number }[] = [
  { fieldId: 1, fieldsetId: 10 }, // Name is part of User Details
  { fieldId: 2, fieldsetId: 10 }, // Address is part of User Details
  { fieldId: 3, fieldsetId: 10 }, // Phone Number is part of User Details
  { fieldId: 4, fieldsetId: 11 }, // Location is part of Location Details
  // Add more mappings as needed
];

// Form table as a constant
export const formTable: {
  id: number;
  regionId: number;
  locationId: number;
}[] = [
  { id: 1, regionId: 1, locationId: 1 },
  { id: 2, regionId: 2, locationId: 2 },
  { id: 3, regionId: 3, locationId: 3 },
  { id: 4, regionId: 4, locationId: 3 },


  // Add more form configurations as needed
];

// Many-to-many mapping table for forms and fields
export const formFieldsMapping: {
  formId: number;
  fieldId: number;
  index: number;
}[] = [

  //MP
  { formId: 1, fieldId: 1, index: 1 }, 
  { formId: 1, fieldId: 2, index: 2 }, 
  
  //CP
  { formId: 2, fieldId: 3, index: 1 }, 
  { formId: 2, fieldId: 1, index: 2 }, 
  { formId: 2, fieldId: 4, index: 3 }, 
  { formId: 2, fieldId: 2, index: 4 }, 
  { formId: 2, fieldId: 5, index: 5 }, 
  { formId: 2, fieldId: 6, index: 6 }, 
  { formId: 2, fieldId: 7, index: 7 }, 
  { formId: 2, fieldId: 8, index: 8 }, 
  { formId: 2, fieldId: 9, index: 9 }, 
  { formId: 2, fieldId: 10, index: 10 }, 


    //TP
    { formId: 3, fieldId: 3, index: 1 }, 
    { formId: 3, fieldId: 1, index: 2 }, 
    { formId: 3, fieldId: 4, index: 3 }, 
    { formId: 3, fieldId: 2, index: 4 }, 
    { formId: 3, fieldId: 5, index: 5 }, 
    { formId: 3, fieldId: 6, index: 6 }, 
    { formId: 3, fieldId: 7, index: 7 }, 
    { formId: 3, fieldId: 8, index: 8 }, 
    { formId: 3, fieldId: 11, index: 9 }, 
    { formId: 3, fieldId: 10, index: 10 }, 

    //RP
    { formId: 4, fieldId: 3, index: 1 }, 
    { formId: 4, fieldId: 1, index: 2 }, 
    { formId: 4, fieldId: 4, index: 3 }, 
    { formId: 4, fieldId: 2, index: 4 }, 
    { formId: 4, fieldId: 5, index: 5 }, 
    { formId: 4, fieldId: 6, index: 6 }, 
    { formId: 4, fieldId: 7, index: 7 }, 
    { formId: 4, fieldId: 8, index: 8 }, 
    { formId: 4, fieldId: 11, index: 9 }, 
    { formId: 4, fieldId: 10, index: 10 }, 

];

// Generic function to get all data for a table by id
export function getAllDataForTableById(tableName: string): { id: number }[] {
  switch (tableName) {
    case "regionTable":
      return regionTable;
    case "locationTable":
      return locationTable;
    case "fieldsTable":
      return fieldsTable;
    // Add more cases for other tables as needed
    default:
      throw new Error(`Table with name '${tableName}' not found.`);
  }
}

// Function to get a form by ID
export function getFormById(
  formId: number
): { id: number; regionId: number; locationId: number; fields: any[] } | undefined {
  const form = formTable.find((form) => form.id === formId);

  if (form) {
    const fields = formFieldsMapping
      .filter((mapping) => mapping.formId === formId)
      .sort((a, b) => a.index - b.index) // Sort by index
      .map((mapping, index) => {
        const field = fieldsTable.find((f) => f.id === mapping.fieldId);
        if (field?.type === "FieldSet") {
          const fieldsetFields = fieldFieldsetMapping
            .filter((fm) => fm.fieldsetId === field.id)
            .map((fm) => {
              const fieldInSet = fieldsTable.find((f) => f.id === fm.fieldId);
              return fieldInSet
                ? {
                    id: fieldInSet.id,
                    name: fieldInSet.name,
                    placeholder: fieldInSet.placeholder ?? null,
                    data: fieldInSet.data ?? null,
                    type: fieldInSet.type,
                  }
                : null;
            })
            .filter((field) => field !== null);

          return {
            id: field?.id,
            name: field?.name,
            placeholder: field?.placeholder ?? null,
            data: field?.data ?? null,
            type: field?.type,
            children: fieldsetFields,
            index,
          };
        } else {
          return {
            id: field?.id,
            name: field?.name,
            placeholder: field?.placeholder ?? null,
            data: field?.data ?? null,
            type: field?.type,
            index,
          };
        }
      })
      .filter((field) => field !== null);

    return { ...form, fields };
  }

  return undefined;
}

// Function to get all forms
export function getAllForms(): { id: number; regionId: number; locationId: number; fields: any[] }[] {
  return formTable.map((form) => {
    const fields = formFieldsMapping
      .filter((mapping) => mapping.formId === form.id)
      .sort((a, b) => a.index - b.index) // Sort by index
      .map((mapping, index) => {
        const field = fieldsTable.find((f) => f.id === mapping.fieldId);
        if (field?.type === "FieldSet") {
          const fieldsetFields = fieldFieldsetMapping
            .filter((fm) => fm.fieldsetId === field.id)
            .map((fm) => {
              const fieldInSet = fieldsTable.find((f) => f.id === fm.fieldId);
              return fieldInSet
                ? {
                    id: fieldInSet.id,
                    name: fieldInSet.name,
                    placeholder: fieldInSet.placeholder,
                    type: fieldInSet.type,
                  }
                : null;
            })
            .filter((field) => field !== null);

          return {
            id: field?.id,
            name: field?.name,
            placeholder: field?.placeholder,
            type: field?.type,
            children: fieldsetFields,
            index,
          };
        } else {
          return {
            id: field?.id,
            name: field?.name,
            placeholder: field?.placeholder,
            type: field?.type,
            index,
          };
        }
      })
      .filter((field) => field !== null);

    return { ...form, fields };
  });
}
