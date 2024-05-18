// src/components/CourseList.jsx
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Paper, IconButton, TextField, Box, Button } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './CourseList.css';

function CourseList({ courses, deleteFile, renameFile }) {
  const [editingFile, setEditingFile] = useState({ courseIndex: null, fileIndex: null });
  const [newFileName, setNewFileName] = useState('');

  const handleRenameClick = (courseIndex, fileIndex, fileName) => {
    setEditingFile({ courseIndex, fileIndex });
    setNewFileName(fileName);
  };

  const handleSaveClick = () => {
    renameFile(editingFile.courseIndex, editingFile.fileIndex, newFileName);
    setEditingFile({ courseIndex: null, fileIndex: null });
    setNewFileName('');
  };

  const handleCancelClick = () => {
    setEditingFile({ courseIndex: null, fileIndex: null });
    setNewFileName('');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h5" component="h2">
        File List
      </Typography>
      <List>
        {courses.map((course, courseIndex) => (
          <ListItem key={courseIndex}>
            <ListItemText
              primary={course.name}
              secondary={
                <TransitionGroup>
                  {course.files.map((file, fileIndex) => (
                    <CSSTransition key={fileIndex} timeout={500} classNames="file">
                      <Box display="flex" alignItems="center">
                        {editingFile.courseIndex === courseIndex && editingFile.fileIndex === fileIndex ? (
                          <>
                            <TextField
                              value={newFileName}
                              onChange={(e) => setNewFileName(e.target.value)}
                            />
                            <Button onClick={handleSaveClick} size="small">
                              <SaveIcon />
                            </Button>
                            <Button onClick={handleCancelClick} size="small">
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Typography variant="body2">
                              {file.name}
                            </Typography>
                            <IconButton onClick={() => handleRenameClick(courseIndex, fileIndex, file.name)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => deleteFile(courseIndex, fileIndex)}>
                              <DeleteIcon />
                            </IconButton>
                          </>
                        )}
                      </Box>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default CourseList;
