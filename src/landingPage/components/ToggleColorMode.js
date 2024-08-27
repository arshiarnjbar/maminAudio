import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
  return (
    <Box sx={{ }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', p: '4px' }}
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="large" />
        ) : (
          <ModeNightRoundedIcon fontSize="large" />
        )}
      </Button>
    </Box>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
