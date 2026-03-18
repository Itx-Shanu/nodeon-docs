import { useState } from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  List,
  ListItemText,
  Box,
  Drawer,
  ListItemButton,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "./SmallComponents/Images";
import { StyledText } from "./SmallComponents/AppComponents";
import { ExampleButton } from "./SmallComponents/StyledWalletButton";

const navArray = [
  {
    text: "About",
    link: "#",
  },
  {
    text: "Services",
    link: "#",
  },
  {
    text: "Roadmap",
    link: "#",
  },
  {
    text: "FAQ",
    link: "#",
  },
  {
    text: "Statistic",
    link: "#",
  },
];

export default function Header() {
  const [state, setState] = useState(false);
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display="flex" justifyContent="center">
        <Box component={"img"} width="150px" src={logo} alt="" />
      </Box>
      <List>
        {navArray?.map(({ text }) => (
          <ListItemButton key={text}>
            <ListItemText
              sx={{
                textAlign: "center",
                cursor: "pointer",
                color: "#ffffff",
                ".MuiTypography-root": {
                  fontSize: "20px",
                },
              }}
              primary={text}
            />
          </ListItemButton>
        ))}
      </List>
      <Box mt={1} display="flex" justifyContent="center">
        <ExampleButton />
      </Box>
    </Box>
  );
  return (
    <>
      <Box
        sx={{
          background: "transparent",
        }}
        width="100%"
        py={2}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box component="img" width="60px" src={logo} alt="" />
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
            >
              <Hidden mdDown>
                {navArray?.map(({ text }) => (
                  <StyledText key={text} mr={6}>
                    {text}
                  </StyledText>
                ))}
                <ExampleButton width={"150px"} />
              </Hidden>

              <Hidden mdUp>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon
                    style={{
                      fontSize: "38px",
                      cursor: "pointer",
                      color: "#000000",
                    }}
                  />
                </IconButton>

                <Drawer
                  anchor="left"
                  open={state}
                  onClose={toggleDrawer(false)}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    ".MuiDrawer-paper": {
                      backgroundColor: "#101824",
                    },
                  }}
                >
                  {list()}
                </Drawer>
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
