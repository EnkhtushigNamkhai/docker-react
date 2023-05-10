import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Changing on the feature branch.
          Hi there. I can make a hot change now!! 
          Hot reloading: Whenever you make a change in the file, the server detects it and automatically refreshes the view in the browser.
          <br></br>
          Versus normal saves do not automatically update the view in the browser! You have to save, and then manually refresh the page to see the changes.
          <br></br>
          React server offers this hot reload functionality. 
          Note that react server that we are running to serve the app, supports hot reloading, but it needs to detect the changes in the files itself! 
          When we use Docker containers, we copy over our src files. But for react server to detect the changes, we instead make a reference to our src files for the docker container to use. So, the React server that is running inside the container now sees the change and it updates the page automatically with hot reload! 
          <br></br>
          Docker volume lets us map the container's files to our hosts files.
          So docker volume only references the file at runtime! The image that you use will still have the old copy of the file system (the last time you built the image).
          To push the changes to the image itself, you still have to build to create a new image/edit the image? (not sure which happens)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
