import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { validationForm } from '../../utils/validationForm';
import { userUpdateAction } from '../../redux/actions/userAction';

const INITIAL_STATE = {
  user: '',
  email: '',
};

export default function Profile() {
  const [profile, setProfile] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const onChange = (
    { target: { name, value } }:ChangeEvent<HTMLInputElement>,
  ) => {
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const onSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validationForm(profile)) {
      dispatch(userUpdateAction(profile));
      setProfile(INITIAL_STATE);
      console.log('oi');
    }
  };

  return (
    <form
      onSubmit={ (event) => {
        console.log('oi');
        onSubmit(event);
      } }
    >

      <label htmlFor="name">
        Nome
        <input
          onChange={ onChange }
          name="user"
          value={ profile.user }
          placeholder="Digite seu primeiro nome"
          id="name"
          type="text"
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          onChange={ onChange }
          name="email"
          value={ profile.email }
          placeholder="Digite seu email"
          id="email"
          type="text"
        />
      </label>
      <button>Enviar</button>
    </form>
  );
}
