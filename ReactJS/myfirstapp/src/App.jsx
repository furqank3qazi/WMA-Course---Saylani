import logo from './logo.svg';
import './App.css';
import Button from './components/button';

function App() {
  const name = "Hello World";
  const obj = { name: "Hello World Object" };
  const data = ['We', 'are', 'United'];
  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
  const firstname = [{ secondname: "Furqan" }, { secondname: "Safeer" }, { secondname: "Abdul Moiz" }]

  const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]

  return (
    <div>
      <ul>
        {
          firstname?.map((v, i) => {
            return (
              <li>{v.secondname}</li>
            )
          })
        }
      </ul>
      <Button title={"Haan Milegi"} fathername={"MMMMM..."} />
    </div>

  );
}




export default App;
