import { StyledMenu, MenuItem } from './Menu.styled';
import { Button } from 'components/Button';

const menuData = [
  {
    id: 1,
    name: 'Нова гра',
    path: '/game',
  },
  {
    id: 2,
    name: 'Налаштування',
    path: '/settings',
  },
  {
    id: 3,
    name: 'Правила гри',
    path: '/rules',
  },
];

function Menu() {
  return (
    <StyledMenu>
      <ul>
        {menuData.map(({ id, name, path }) => (
          <MenuItem key={id}>
            <Button anchor path={path}>
              {name}
            </Button>
          </MenuItem>
        ))}
      </ul>
    </StyledMenu>
  );
}

export default Menu;
