import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquareText, Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)'); // XS breakpoint
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Accueil', path: '#home' },
    { text: 'À propos', path: '#about' },
    { text: 'Projet', path: '#project' },
  ];

  return (
    <Box sx={{  }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h5" fontWeight={600}>Andry</Typography>
          <Typography variant="h5" fontWeight={600} color={orange[400]}>Itokiana</Typography>
        </Box>

        {/* Menu normal pour desktop */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4 }}>
            {menuItems.map((item) => (
                    <Typography
            key={item.path}
            component="a"
            href={item.path}
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 600,
              '&:hover': { color: orange[400] },
              cursor: 'pointer',
            }}
          >
            {item.text}
          </Typography>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <IconButton sx={{ bgcolor: '#0D0D0D', width: 35, height: 35 }}>
            <MessageSquareText color="white" />
          </IconButton>

          {/* Menu burger pour mobile */}
          {isMobile && (
            <IconButton sx={{ color: 'white' }} onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Drawer mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 200, bgcolor: '#0D0D0D', height: '100%' }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.path} component="a" href={item.path} selected={location.pathname === item.path}>
                <ListItemText primary={item.text} sx={{ color: location.pathname === item.path ? orange[400] : 'white' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
