import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link: String) => {
    navigate(`/${link}`);
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed" >
        <Toolbar>
          <Button
            id="fade-button"
            style={{backgroundColor: 'transparent', color: 'white'}}
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Todo
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={() => handleClose('')}>Todo</MenuItem>
            <MenuItem onClick={() => handleClose('privacyandpolicy')}>Privacy Policy</MenuItem>
            <MenuItem onClick={() => handleClose('termsandconditions')}>Terms & Conditions</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}