export function formDataToJson(data: FormData) {
  const json: { [key: string]: any } = {};
  
  data.forEach((value,key) => {
    json[key] = value;
  });

  return json;
}