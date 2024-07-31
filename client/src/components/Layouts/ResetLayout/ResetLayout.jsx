import React from 'react';
import './resetLayout.css';
import Reset from '../../Reset/Reset';
import { useNavigate } from 'react-router-dom';

export default function ResetLayout() {
  const navigate = useNavigate();

  return (
    <div className="authLayout">
      {/* logo */}
      <div className="authLayout_Logo">
        <img src="../../assets/img/spaceship.svg" alt="auth_logo" />
      </div>
      {/* form */}
      <Reset />
      {/* actions */}
      <p className="reset_p" onClick={() => navigate('/')}>Login ?</p>
    </div>
  );
}
