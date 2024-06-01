// third-party
import { merge } from 'lodash';

// project import
import Badge from './component/Badge';
import Button from './component/Button';
import CardContent from './component/CardContent';
import Checkbox from './component/Checkbox';
import Chip from './component/Chip';
import IconButton from './component/IconButton';
import InputLabel from './component/InputLabel';
import LinearProgress from './component/LinearProgress';
import Link from './component/Link';
import ListItemIcon from './component/ListItemIcon';
import OutlinedInput from './component/OutlinedInput';
import Tab from './component/Tab';
import TableCell from './component/TableCell';
import Tabs from './component/Tabs';
import Typography from './component/Typography';
import { Theme } from '@mui/material';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme:Theme) {
  return merge(
    Button(theme),
    Badge(theme),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    IconButton(theme),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemIcon(),
    OutlinedInput(theme),
    Tab(theme),
    TableCell(theme),
    Tabs(),
    Typography()
  );
}
