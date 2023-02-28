import React, { useState } from 'react';
import { Box, Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

export const ModalAdd = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip //
        onClick={(event) => setOpen(true)}
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal open={open} onClose={(event) => setOpen(false)} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box //
          width={400}
          height={280}
          bgcolor='white'
          p={3}
          borderRadius={4}
        >
          <Typography //
            variant='h6'
            color='gray'
            textAlign='center'
          >
            Create Post
          </Typography>

          <UserBox>
            <Avatar //
              sx={{ width: 40, height: 40 }}
              alt='Travis Howard'
              src='https://randomuser.me/api/portraits/men/32.jpg'
            />
          </UserBox>

          <TextField //
            id='standard-multiline-static'
            multiline
            rows={4}
            placeholder='I think, therefore I am'
            variant='standard'
            sx={{ width: '100%' }}
          />

          <Stack direction='row' gap={1} mt={2} mb={3}>
            <ImageIcon color='secondary' />
            <VideoCameraBackIcon color='secondary' />
            <EmojiEmotionsIcon sx={{ color: '#ffc400' }} />
          </Stack>

          <Button //
            variant='contained'
            fullWidth
            onClick={(event) => setOpen(false)}
          >
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};
