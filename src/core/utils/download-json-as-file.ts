export const downloadJsonAsFile = (jsonData: JSONValue[], fileName: string) => {
  if (!Array.isArray(jsonData) || !jsonData.length) {
    return;
  }

  const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
    type: 'application/json',
  });

  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = objectUrl;
  link.download = fileName;

  link.click();

  URL.revokeObjectURL(objectUrl);
};
