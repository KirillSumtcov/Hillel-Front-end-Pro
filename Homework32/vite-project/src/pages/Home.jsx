import { Avatar, Card, CardContent, Typography, Divider, Box } from "@mui/material";

function Home() {
  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        {/* About me section */}
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ mr: 2 }}>K</Avatar>
          <Typography variant="h5">{`Ім'я: Кирило Сумцов`}</Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus cupiditate aperiam suscipit animi pariatur veritatis quo, distinctio ducimus
          iusto saepe enim? Consequuntur voluptatem culpa ut est delectus asperiores similique dolor!
        </Typography>

        <Divider />

        {/* Skills section */}
        <Typography variant="h6" mt={3} mb={1}>
          Skills
        </Typography>
        <Typography variant="body2">- HTML5, CSS3, SASS, BEM</Typography>
        <Typography variant="body2">- JavaScript (ES6+), React, Redux, MUI</Typography>
        <Typography variant="body2">- Webpack, Node.js</Typography>
        <Typography variant="body2" mb={3}>
          - MongoDB, RESTful APIs
        </Typography>

        <Divider />

        {/* Employment history section */}
        <Typography variant="h6" mt={3} mb={1}>
          Employment History
        </Typography>
        <Typography variant="body2">
          <strong>COMFY</strong> - HTML Coder (July 2023 – Present)
        </Typography>
        <Typography variant="body2">
          Creation of cross-browser layouts, adaptation of websites for different devices, implementation of dynamic elements.
        </Typography>
        <Typography variant="body2" mt={1}>
          <strong>COMFY</strong> - Sales Support Specialist (November 2022 – July 2023)
        </Typography>
        <Typography variant="body2">Improvement of sales processes, ensuring high quality of internal customer service.</Typography>
        <Typography variant="body2" mt={1}>
          <strong>COMFY</strong> - Consumer Relations Specialist (September 2021 – November 2022)
        </Typography>
        <Typography variant="body2" mb={3}>
          Providing advice and identifying customer needs.
        </Typography>

        <Divider />

        {/* Certifications section */}
        <Typography variant="h6" mt={3} mb={1}>
          Certifications
        </Typography>
        <Typography variant="body2">- Introduction Java (2021)</Typography>
        <Typography variant="body2">- Front End Basic (2021)</Typography>
        <Typography variant="body2" mb={3}>- Java Script 2021 - a complete guide from zero to professional (2021)</Typography>

        <Divider />

        {/* Languages section */}
        <Typography variant="h6" mt={3} mb={1}>
          Languages
        </Typography>
        <Typography variant="body2" mb={1}>
          - Ukrainian (Native)
        </Typography>
        <Typography variant="body2">- English (B1)</Typography>
      </CardContent>
    </Card>
  );
}

export default Home;
