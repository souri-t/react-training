import React from 'react';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, styled } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const CustomRoot = styled('div')({
  // backgroundColor: '#e0e0e0',
  // // height: '100vh',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
});
const CustomRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: '1rem',
});
const CustomAppBar = styled(AppBar)({
  marginBottom: '1rem',
});

const CustomIcon = styled('div')({
  fontSize: '4rem',
});

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const IconButton: React.FC<Props> = ({ children, title }) => {

  const CustomButton = styled(Button)({
    width: '10rem',
    height: '10rem',
    margin: '0.5rem',
  });
  return (
    <CustomButton variant="contained">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
        <span>{title}</span>
      </div>
    </CustomButton>
  );
};


const TestPage: React.FC = () => {

  return (
    <CustomRoot>
      {/* <CustomAppBar position="static">
        <Toolbar>
          <Button color="inherit">Menu 1</Button>
          <Button color="inherit">Menu 2</Button>
          <Button color="inherit">Menu 3</Button>
        </Toolbar>
      </CustomAppBar> */}
      <CustomRow>
        <IconButton title='test1'>
          <AccessAlarmIcon style={{ fontSize: '4rem' }} />
        </IconButton>
        <IconButton title='test2'>
          <AccessAlarmIcon style={{ fontSize: '4rem' }} />
        </IconButton>
      </CustomRow>
      <CustomRow>
        <IconButton title='test3'>
          <AccessAlarmIcon style={{ fontSize: '4rem' }} />
        </IconButton>
        <IconButton title='test4'>
          <AccessAlarmIcon style={{ fontSize: '4rem' }} />
        </IconButton>
      </CustomRow>
      <CustomRow>
        <IconButton title='test5'>
          <AccessAlarmIcon style={{ fontSize: '4rem' }} />
        </IconButton>
        <IconButton title='test6'>
          <AccessAlarmIcon style={{ fontSize: '4rem' }} />
        </IconButton>
      </CustomRow>
    </CustomRoot>
  );
};

export default TestPage;