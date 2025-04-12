import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(taskText) {
    const newTaskData = {
      text: taskText,
      id: Math.random()
    }

    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTaskData]
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    });
  }

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

    setProjectState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newData]
      }
    });

  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    });
  }

  function handleOnProjectSelect(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }

  const selectedProjectDetails = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content = <SelectedProject
    project={selectedProjectDetails}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
  />;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelectNewProject={handleStartAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onSelectNewProject={handleStartAddNewProject}
        projects={projectState.projects}
        onProjectSelect={handleOnProjectSelect}
        selectedId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
