import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquareText, Menu as MenuIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { text: 'Accueil', path: '#home' },
    { text: 'À propos', path: '#about' },
    { text: 'Projet', path: '#project' },
  ];

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        bgcolor: scrolled ? 'rgba(15, 23, 42, 0.95)' : '#0f172a',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 138, 101, 0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
          <Typography variant="h5" fontWeight={700} sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Andry
          </Typography>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Itokiana
          </Typography>
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4 }}>
            {menuItems.map((item) => (
              <Typography
                key={item.path}
                component="a"
                href={item.path}
                sx={{
                  textDecoration: 'none',
                  color: '#b0b9c6',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: 2,
                    background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    color: '#ff8a65',
                    '&::after': {
                      width: '100%',
                    },
                  },
                }}
              >
                {item.text}
              </Typography>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <IconButton
            sx={{
              bgcolor: 'rgba(255, 138, 101, 0.1)',
              width: 40,
              height: 40,
              '&:hover': {
                bgcolor: 'rgba(255, 138, 101, 0.2)',
              },
            }}
          >
            <MessageSquareText color="#ff8a65" size={20} />
          </IconButton>

          {isMobile && (
            <IconButton sx={{ color: '#ff8a65' }} onClick={() => setDrawerOpen(true)}>
              <MenuIcon size={24} />
            </IconButton>
          )}
        </Box>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, bgcolor: '#1a2847', height: '100%' }} role="presentation">
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#ff8a65', mb: 3 }}>
              Menu
            </Typography>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.path}
                component="a"
                href={item.path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(255, 138, 101, 0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: '#b0b9c6',
                    '& .MuiTypography-root': {
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
