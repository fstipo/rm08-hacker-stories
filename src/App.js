import './App.css';

function App() {
  const welcome = {
    greeting: "Hey",
    title: "React"
  }

  const getTitle = (title) => title
  return (
    <div className="App">
      <h1>{welcome.greeting} {welcome.title}</h1>
      <h1>Hello {getTitle("my friend")}</h1>
      <label htmlFor='search'>Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
