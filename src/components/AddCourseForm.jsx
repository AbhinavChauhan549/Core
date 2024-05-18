// src/components/AddCourseForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';

function AddCourseForm({ addCourse }) {
  const [courseName, setCourseName] = useState('');
  const [files, setFiles] = useState([]);

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({ name: courseName, files });
    setCourseName('');
    setFiles([]);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h5" component="h2">
        Add new file
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="File Name"
            variant="outlined"
            fullWidth
            value={courseName}
            onChange={handleCourseNameChange}
            required
          />
        </Box>
        <Box mb={2}>
          <Button
            variant="contained"
            component="label"
          >
            Upload Files
            <input
              type="file"
              hidden
              multiple
              onChange={handleFileChange}
              required
            />
          </Button>
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add File
        </Button>
      </form>
    </Paper>
  );
}

export default AddCourseForm;
