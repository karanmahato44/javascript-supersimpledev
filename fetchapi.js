async function fetchData() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    if (!response.ok) {
      console.log('nw response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();