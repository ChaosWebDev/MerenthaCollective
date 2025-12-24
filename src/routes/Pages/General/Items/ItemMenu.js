import React from 'react';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { Button, Box, Typography } from '@mui/material';
import UpdateAlert from 'common/UpdateAlert';
import Code from 'common/Code';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const CATEGORIES = ['Armor', 'Weapons', 'Items'];

const ItemMenu = ({ activeCategory, onCategoryChange }) => {
  return (
    <Grid item xs={12}>
      <CmtCard>
        <CmtCardHeader title="Armor, Items, and Weapons" />

        <CmtCardContent>
          <UpdateAlert />
        </CmtCardContent>
        <CmtCardContent>
          <Typography>
            <WarningAmberIcon
              fontSize="small"
              sx={{
                color: 'warning.main',
                verticalAlign: 'middle',
                mr: 0.5,
              }}
            />
            shows for items that may involve <Code>Quest Information</Code>.
          </Typography>
          <Typography>
            See <Code>help rules</Code> for information related to quest information.
          </Typography>
        </CmtCardContent>

        {/* CATEGORY BUTTONS */}
        <CmtCardContent>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'contained' : 'outlined'}
                onClick={() => onCategoryChange(cat)}>
                {cat}
              </Button>
            ))}
          </Box>
        </CmtCardContent>
      </CmtCard>
    </Grid>
  );
};

export default ItemMenu;
