import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddNewProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(newProjectData) {

    const newData = {
      ...newProjectData,
      id: Math.random()
    }

    console.log('newData : ', newData);

    setProjectState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newData]
      }
    });

  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelectNewProject={handleStartAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onSelectNewProject={handleStartAddNewProject} />
      {content}
    </main>
  );
}

export default App;
