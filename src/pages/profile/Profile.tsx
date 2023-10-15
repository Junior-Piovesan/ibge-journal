import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from '../../components/profileForm/ProfileForm';
import { ReduxState } from '../../types';

import styles from './profile.module.css';
import Back from '../../components/back/Back';

const INITIAL_STATE = {
  user: '',
  email: '',
};

export default function Profile() {
  const [profile, setProfile] = useState(INITIAL_STATE);
  const { user, email } = useSelector((state:ReduxState) => state.userReducer);

  return (
    <section className={ styles.container }>
      <div className={ styles.backContainer }>
        <Back route="/" />
      </div>
      <div className={ styles.userInfoContainer }>
        <p className={ styles.user }>{`Nome: ${user}`}</p>
        <p className={ styles.email }>{`email: ${email}`}</p>
      </div>

      <ProfileForm
        profile={ profile }
        setProfile={ setProfile }
      />
    </section>
  );
}
