declare global {
  type JSONValue = {
    [key: string]: string | number | boolean;
  };
}

export {};
