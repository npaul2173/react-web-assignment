
export const fetchConfig = async (url: string, options: any) => {
  let data = null;
  let status = null;
  try {
    const response = await fetch(url, options);

    data = await response.json();
    status = response.status;
    return { data, status };
  } catch (error) {
    console.log("error", error);
  }
};
