import { List, ListItem, ListItemText, Button, TextField, Box } from "@mui/material";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>

      <Box display="flex" mt={2} mb={2}>
        <TextField label="add task" variant="outlined" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} fullWidth />
        <Button variant="contained" color="primary" onClick={handleAddTodo} sx={{ ml: 2 }}>
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default TodoList;
