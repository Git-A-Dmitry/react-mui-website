import { Box } from '@mui/material';
import { FirstPost } from './FirstPost';
import { Post } from './Post';

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <FirstPost />
      <Post />
    </Box>
  );
};
