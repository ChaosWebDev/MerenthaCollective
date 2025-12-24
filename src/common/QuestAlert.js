import { Typography, Alert } from '@mui/material';
import Code from './Code';

const QuestAlert = () => {
  return (
    <Alert severity="warning" sx={{ marginTop: '0.5rem' }}>
      <Typography variant="body2">
        Information related to this item may be considered <Code>Quest Information</Code>.
      </Typography>
      <Typography variant="body2">
        See <Code>help rules</Code> for more information about quest information.
      </Typography>
    </Alert>
  );
};

export default QuestAlert;
