import { Button } from 'components/Button';
import { Wrapper, Text } from './PageNotFound.styled';

function PageNotFound() {
  return (
    <Wrapper>
      <Text>
        Такої сторінки поки що не існує. Або її ніколи не буде існувати.
        Поверніться будь ласка до меню.
      </Text>
      <Button anchor path="/">
        Назад до меню
      </Button>
    </Wrapper>
  );
}

export default PageNotFound;
