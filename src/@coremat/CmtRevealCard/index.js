import React, { createRef, useEffect, useState } from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { CmtTitle } from '../CmtTypography';
import RevealEffect from '../CmtTransitions/RevealEffect';
import CmtCard from '../CmtCard';

const useStyles = makeStyles(theme => ({
  revealHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    '& + .Cmt-card-content': {
      paddingTop: 0,
    },
  },
  revealArea: {
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    overflowY: 'auto',
    left: 0,
    top: '100%',
    width: '100%',
    height: '100%',
    zIndex: 3,
    boxSizing: 'border-box',
  },
}));
const contentRef = createRef();

const CmtRevealCard = ({ revealed, onClose, revealComponentTitle, titleProps, revealComponent, children, ...rest }) => {
  const classes = useStyles();
  const [contentHeight, setContentHeight] = useState(0);

  const windowReSized = () => {
    if (contentRef.current) setContentHeight(contentRef.current.clientHeight);
  };

  useEffect(() => {
    windowReSized();
  }, [revealed]);

  return (
    <CmtCard {...rest}>
      <div style={{ width: '100%' }} ref={contentRef}>
        {children}
      </div>
      <RevealEffect in={revealed}>
        <div className={clsx(classes.revealArea)}>
          <PerfectScrollbar style={{ height: contentHeight }}>
            <div className={classes.revealHeader}>
              <Box flex={1}>{revealComponentTitle && <CmtTitle content={revealComponentTitle} {...titleProps} />}</Box>
              <Box my={-3}>
                <IconButton onClick={onClose} size="large">
                  <CloseIcon />
                </IconButton>
              </Box>
            </div>
            {revealComponent}
          </PerfectScrollbar>
        </div>
      </RevealEffect>
    </CmtCard>
  );
};

CmtRevealCard.propTypes = {
  revealed: PropTypes.bool,
  onClose: PropTypes.func,
  revealComponentTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  revealComponent: PropTypes.element,
};

CmtRevealCard.defaultProps = {
  revealed: false,
  revealComponentTitle: '',
  titleProps: {
    variant: 'h2',
    component: 'div',
  },
};

export default CmtRevealCard;
