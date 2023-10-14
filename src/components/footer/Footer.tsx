import { Button, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { countMoreAction } from '../../redux/actions/moreNewsAction';

export default function Footer() {
  const dispatch = useDispatch();
  return (
    <footer>

      <Button
        onClick={ () => { dispatch(countMoreAction()); } }
        variant="outlined"
        size="medium"
      >
        Ver mais notícias
      </Button>

      <Link href="#topo">Voltar ao topo</Link>

    </footer>
  );
}
