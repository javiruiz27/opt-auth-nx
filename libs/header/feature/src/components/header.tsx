import { Typography } from '@mui/material';
import { useHeaderDepsContext } from '@onboarding/header-data';

export const Header = () => {
  const headerDepsContext = useHeaderDepsContext();
  const subtitleEnabled =
    headerDepsContext.enabled && headerDepsContext.features.showSubtitle;

  const headerStyle = {
    background: '#1abc9c',
    color: 'white',
    width: '100vw',
  };

  return (
    <div style={headerStyle}>
      <Typography variant="h2">Title</Typography>
      {subtitleEnabled && <Typography variant="h5">Subtitle</Typography>}
    </div>
  );
};
