import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  List,
  ListItem,
  ListItemButton,
  Divider,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Link from "next/link";

const AppContainer = styled(AppBar)`
  background: #fff;
`;
const NavContainer = styled(Box)`
  max-width: 60rem;
  margin: 0 auto;
  width: 100%;
  color: #01579b;
`;
const navItems = ["Contact", "Events", "TimeTable", "Fees"];
const drawerWidth = 240;

type Props = {
  showNav?: boolean;
};

const NavBar = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EDU-LIBERIA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const { showNav } = props;

  return (
    <>
      <AppContainer position="static">
        <NavContainer>
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{ display: { xs: "none", md: "flex" }, fontWeight: "bold" }}
            >
              <Link href={`/`} passHref>
                <a style={{ textDecoration: "none" }}> EDU-LIBERIA</a>
              </Link>
            </Typography>

            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                fontWeight: "bold",
                p: 1,
                py: 3,
              }}
            >
              <Link href={`/`} passHref>
                <a style={{ textDecoration: "none" }}> EDU-LIBERIA</a>
              </Link>
            </Typography>
            {showNav && (
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  marginLeft: "auto",
                  fontWeight: "bold",
                }}
              >
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#01579b" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </NavContainer>
      </AppContainer>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
