// src/App.jsx
import React, { useState, useContext } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import CourseList from './components/CourseList';
import AddCourseForm from './components/AddCourseForm';
import { ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const deleteFile = (courseIndex, fileIndex) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex].files.splice(fileIndex, 1);
    setCourses(updatedCourses);
  };

  const renameFile = (courseIndex, fileIndex, newName) => {
    const updatedCourses = [...courses];
    const updatedFile = { ...updatedCourses[courseIndex].files[fileIndex], name: newName };
    updatedCourses[courseIndex].files[fileIndex] = updatedFile;
    setCourses(updatedCourses);
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: darkMode ? '#303030' : '#fafafa', minHeight: '100vh', paddingTop: '20px' }}>
      <Box my={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Core : Online File Storage
        </Typography>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <AddCourseForm addCourse={addCourse} />
        <CourseList courses={courses} deleteFile={deleteFile} renameFile={renameFile} />
      </Box>
    </Container>
  );
}

export default App;
