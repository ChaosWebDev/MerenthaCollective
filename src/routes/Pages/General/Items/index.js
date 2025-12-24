import React, { useState } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { items, weapons, armor } from 'data/Items';
import ItemMenu from './ItemMenu';
import ItemContent from './ItemContent';

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

  const activeData = DATA_MAP[activeCategory];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <GridContainer>
        {/* MENU */}
        <ItemMenu activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

        {/* CONTENT */}
        <ItemContent items={activeData} />
      </GridContainer>
    </PageContainer>
  );
};

export default Items;
