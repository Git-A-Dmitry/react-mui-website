import { Box, Stack } from '@mui/system';

import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Box>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
