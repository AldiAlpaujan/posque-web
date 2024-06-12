// next react
import { useRef, useState } from 'react';

// MUI
import { useTheme } from '@mui/material/styles';
import { ClickAwayListener } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography/Typography';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';

// thrid party
import { useSession } from "next-auth/react";

// components
import Transitions from '../../../atom/Transition';
import HeaderProfileCard from './HeaderProfileCard';

const HeaderProfile = () => {
  const theme = useTheme();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase ref={btnRef} disableRipple onClick={() => setOpen(!open)}>
        <Stack direction={'row'} alignItems={'center'}>
          <Avatar src={data?.user?.image!} sx={{ mr: '12px', width: 32, height: 32 }} />
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            {data?.user?.firstName!}
          </Typography>
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={btnRef.current}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions position="top-right" in={open} {...TransitionProps}>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Paper sx={{ boxShadow: theme.customShadows.z1, width: 290, minWidth: 240, maxWidth: { xs: 250, md: 290 } }}>
                <HeaderProfileCard />
              </Paper>
            </ClickAwayListener>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}

export default HeaderProfile;