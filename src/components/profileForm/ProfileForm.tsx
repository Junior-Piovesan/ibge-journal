import { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validationForm } from '../../utils/validationForm';
import { userUpdateAction } from '../../redux/actions/userAction';

import styles from './profileFrom.module.css';
import { addLocalStorage } from '../../utils/localStorage';

type PropTypes = {
  profile:{ user:string, email:string }
  setProfile:(profile: { user:string, email:string }) =>void
};

export default function ProfileForm({ profile, setProfile }:PropTypes) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      addLocalStorage('profile', profile);
      setProfile({ user: '', email: '' });
      navigate('/');
    }
  };
  return (
    <form
      className={ styles.container }
      onSubmit={ (event) => {
        onSubmit(event);
      } }
    >

      <label className={ styles.label } htmlFor="name">
        Nome
        <input
          onChange={ onChange }
          name="user"
          value={ profile.user }
          className={ styles.input }
          placeholder="Digite seu primeiro nome"
          id="name"
          type="text"
        />
      </label>

      <label className={ styles.label } htmlFor="email">
        Email
        <input
          onChange={ onChange }
          name="email"
          value={ profile.email }
          className={ styles.input }
          placeholder="Digite seu email"
          id="email"
          type="text"
        />
      </label>
      <button
        disabled={ !validationForm(profile) }
        className={ styles.button }
      >
        Enviar
      </button>
    </form>
  );
}
