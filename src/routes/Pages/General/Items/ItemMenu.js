import React from 'react';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { Button, Box } from '@mui/material';
import UpdateAlert from 'common/UpdateAlert';

const CATEGORIES = ['Armor', 'Weapons', 'Items'];
const ALPHABET = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const ItemMenu = ({ activeCategory, onCategoryChange, activeLetter, onLetterChange, availableLetters }) => {
  return (
    <Grid item xs={12}>
      <CmtCard>
        <CmtCardHeader title="Armor, Items, and Weapons" />

        <CmtCardContent>
          <UpdateAlert />
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

        {/* A–Z FILTER */}
        <CmtCardContent>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            <Button
              size="small"
              variant={activeLetter === null ? 'contained' : 'outlined'}
              onClick={() => onLetterChange(null)}>
              All
            </Button>

            {ALPHABET.map((letter) => {
              const enabled = availableLetters.has(letter);

              return (
                <Button
                  key={letter}
                  size="small"
                  disabled={!enabled}
                  variant={activeLetter === letter ? 'contained' : 'outlined'}
                  onClick={() => onLetterChange(letter)}
                  sx={{
                    minWidth: 36,
                    opacity: enabled ? 1 : 0.4,
                  }}>
                  {letter}
                </Button>
              );
            })}
          </Box>
        </CmtCardContent>
      </CmtCard>
    </Grid>
  );
};

export default ItemMenu;
