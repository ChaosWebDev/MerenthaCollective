import React, { useMemo, useState } from 'react';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import { getLevelName, getComparator, stableSort } from './helpers';

const ItemContent = ({ items }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('level');
  const [filter, setFilter] = useState('');

  const rows = useMemo(
    () =>
      items.map((entry, index) => ({
        id: index,
        name: entry.name ?? entry,
        level: entry.level ?? 0,
        levelName: getLevelName(entry.level ?? 0),
        subarea: entry.subarea ?? '',
        details: entry.details ?? '',
        isQuest: Boolean(entry.isQuest),
      })),
    [items],
  );

  /** Filter by NAME ONLY */
  const filteredRows = useMemo(() => {
    const q = filter.toLowerCase().trim();
    if (!q) return rows;

    return rows.filter((row) => row.name.toLowerCase().includes(q));
  }, [rows, filter]);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Grid item xs={12}>
      {/* FILTER */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          label="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Box>

      {/* TABLE */}
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}>
                  Name
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === 'level'}
                  direction={orderBy === 'level' ? order : 'asc'}
                  onClick={() => handleSort('level')}>
                  Level
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === 'Autoload'}
                  direction={orderBy === 'Autoload' ? order : 'asc'}
                  onClick={() => handleSort('autoload')}>
                  Autoload
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === 'subarea'}
                  direction={orderBy === 'subarea' ? order : 'asc'}
                  onClick={() => handleSort('subarea')}>
                  Found In
                </TableSortLabel>
              </TableCell>

              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stableSort(filteredRows, getComparator(order, orderBy)).map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {row.isQuest && <WarningAmberIcon fontSize="small" color="warning" />}
                    {row.name}
                  </Typography>
                </TableCell>

                <TableCell>{row.levelName}</TableCell>

                <TableCell>{row.subarea}</TableCell>

                <TableCell>{row.details && <Typography variant="caption">{row.details}</Typography>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ItemContent;
