async function customDataProvider(request) {
  const { url, key } = request;
  
  // Add your authorization header here
  const headers = {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}