// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        photo: "",
      });
      const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setInput({
          name: "",
          phone: "",
          email: "",
          photo: "",
        });
      };
      return (
        <>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ bgcolor: "#FFE6F7" }}>
              <CssBaseline />
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    value={input.name}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                    value={input.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={input.email}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="photo"
                    label="Photo URL"
                    type="text"
                    id="photo"
                    autoComplete="photo"
                    value={input.photo}
                    onChange={handleChange}
                  />
                  <Button
                    type={"submit"}
                    onClick={() => props.handleClick(input)}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    ADD NEW
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </>
      );
    };

export default ContactForm;