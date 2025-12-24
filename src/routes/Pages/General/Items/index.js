import React, { useState, useMemo } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Box, Typography } from '@mui/material';
import QuestAlert from 'common/QuestAlert';
import { items, weapons, armor } from 'data/Items';
import ItemMenu from './ItemMenu';
import { getLevelName } from './helpers';

const Items = () => {
  const DATA_MAP = {
    Armor: armor,
    Weapons: weapons,
    Items: items,
  };

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: 'Items', isActive: true },
  ];

  const [activeCategory, setActiveCategory] = useState('Armor');
  const [activeLetter, setActiveLetter] = useState(null);

  const activeData = DATA_MAP[activeCategory];

  /** Reset letter when category changes */
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveLetter(null);
  };

  /** Available letters (derived) */
  const availableLetters = useMemo(() => {
    return new Set(activeData.map((entry) => (entry.name ?? entry).charAt(0).toUpperCase()));
  }, [activeData]);

  /** Filtered list */
  const filteredData = useMemo(() => {
    if (!activeLetter) return activeData;

    return activeData.filter((entry) => (entry.name ?? entry).toUpperCase().startsWith(activeLetter));
  }, [activeData, activeLetter]);

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <GridContainer>
        {/* MENU */}
        <ItemMenu
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          activeLetter={activeLetter}
          onLetterChange={setActiveLetter}
          availableLetters={availableLetters}
        />

        {/* CONTENT */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
            {filteredData.map((entry, index) => (
              <CmtCard key={index}>
                <CmtCardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      py: 2,
                    }}>
                    <Typography>Name: {entry.name ?? entry}</Typography>
                    <Typography>Level Range: {getLevelName(entry.level ?? 0)}</Typography>
                    <Typography>Found In: {entry.subarea}</Typography>

                    {entry.details && <Typography>Details: {entry.details}</Typography>}

                    {entry.isQuest && <QuestAlert />}
                  </Box>
                </CmtCardContent>
              </CmtCard>
            ))}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Items;
