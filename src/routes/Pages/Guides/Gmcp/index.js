import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Typography, Box, Button } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import Code from 'common/Code';

import GMCPGuideData from 'data/Guides/GMCP';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'GMCP', isActive: true },
];

const Gmcp = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="GMCP Guide">
      <GridContainer>
        {GMCPGuideData.map((item, index) => (
          <Grid item xs={12} key={index}>
            <CmtCard>
              <CmtCardHeader title={item.title} />
              <CmtCardContent>
                <Typography sx={{ whiteSpace: 'pre-wrap' }}>{item.data}</Typography>
              </CmtCardContent>
            </CmtCard>
          </Grid>
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default Gmcp;
