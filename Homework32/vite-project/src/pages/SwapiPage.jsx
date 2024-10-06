import { useState } from "react";
import { Button, Typography, Card, CardContent, TextField, Box } from "@mui/material";

function SwapiPage() {
  const [data, setData] = useState(null);
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!inputId.trim()) {
      setError("Будь ласка, введіть ID.");
      return;
    }

    try {
      const response = await fetch(`https://swapi.dev/api/people/${inputId}/`);
      if (!response.ok) {
        throw new Error("Помилка при завантаженні даних.");
      }
      const result = await response.json();
      setData(result);
      setError("");
    } catch (err) {
      setError("Персонажа з таким ID не знайдено.");
      setData(null);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          SWAPI дані
        </Typography>
        <Box display="flex" mb={2}>
          <TextField label="Введіть ID" variant="outlined" value={inputId} onChange={(e) => setInputId(e.target.value)} fullWidth />
          <Button onClick={fetchData} variant="contained" color="primary" sx={{ ml: 1 }}>
            Завантажити
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        {data ? (
          <Typography variant="body1" component="pre">
            {JSON.stringify(data, null, 2)}
          </Typography>
        ) : (
          !error && <Typography variant="body1">Немає даних</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default SwapiPage;
