import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Project1 from './src/Project1.js';
import Project2 from './src/Project2.js';
import Project3 from './src/Project3.js';
import Project4 from './src/Project4.js';
import Project5 from './src/Project5.js';
import Project6 from './src/Project6.js';
import Project7 from './src/Project7.js';
import Project8 from './src/Project8.js';

const App = () => {
  const [currentProject, setCurrentProject] = useState(1);

  const nextProject = () => {
    setCurrentProject(currentProject === 8 ? 1 : currentProject + 1);
  };

  const previousProject = () => {
    setCurrentProject(currentProject === 1 ? 8 : currentProject - 1);
  };

  const renderProject = () => {
    switch (currentProject) {
      case 1:
        return <Project1 />;
      case 2:
        return <Project2 />;
      case 3:
        return <Project3 />;
      case 4:
        return <Project4 />;
      case 5:
        return <Project5 />;
      case 6:
        return <Project6 />;
      case 7:
        return <Project7 />;
      case 8:
        return <Project8 />;
      default:
        return null;
    }
  };

  const projectTitle = () => {
    switch (currentProject) {
      case 1:
        return "Project 1";
      case 2:
        return "Project 2";
      case 3:
        return "Project 3";
      case 4:
        return "Project 4";
      case 5:
        return "Project 5";
      case 6:
        return "Project 6";
      case 7:
        return "Project 7";
      case 8:
        return "Project 8";
      default:
        return "";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{projectTitle()}</Text>
      <View style={styles.projectContainer}>{renderProject()}</View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={previousProject}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextProject}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  projectContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
