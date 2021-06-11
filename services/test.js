const contentType = 'application/json';

export const test = async () => {
  const res = await fetch('/api/test', {
    method: 'GET',
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
    }
  });

  // Throw error with status code in case Fetch API req failed
  if (!res.ok) {
    throw new Error(res.status);
  }

  const { data } = await res.json();
  return data;
};

