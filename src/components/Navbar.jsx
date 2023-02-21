import React from 'react';

import { Typography, AppBar, Toolbar, styled, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}));

export const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          My Page
        </Typography>
        <AutoAwesomeIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search...'></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar //
            sx={{ width: 40, height: 40 }}
            alt='Travis Howard'
            src='https://randomuser.me/api/portraits/men/32.jpg'
            // onClick={(e) => setOpen(true)}
            onClick={handleClick}
          />
        </Icons>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
