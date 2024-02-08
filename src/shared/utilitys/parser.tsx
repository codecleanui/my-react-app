export function camelCase(str: string): string {
  const words = str.split(/\s+/);
  const camelCaseStr = words
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

  return camelCaseStr;
}
export function transformKeys(
  inputObject: Record<string, string>
): Record<string, string> {
  const transformedObject: Record<string, string> = {};

  for (const key in inputObject) {
    if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
      // Convert the key to camelCase
      const camelCaseKey = camelCase(key);

      transformedObject[camelCaseKey] = inputObject[key];
    }
  }

  return transformedObject;
}
