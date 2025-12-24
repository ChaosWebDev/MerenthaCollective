import React, { Fragment } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Link, Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import Code from 'common/Code';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Items', isActive: true },
];

const Items = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <Typography>Item Page Placeholder</Typography>
    </PageContainer>
  );
};

export default Items;
