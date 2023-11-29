

function App() {

  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  return (
    <h1>test</h1>

  );
}

export default App;
