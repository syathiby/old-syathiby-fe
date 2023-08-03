import React from 'react';
import { getRole } from '../middleware/auth/authApi';

const UserRoleHidden = ({allowedRole, className, children }) => {
    const userRole = getRole()
  return (
    <>
      {userRole !== allowedRole && <div className={className}>{children}</div>}
    </>
  );
};

export default UserRoleHidden;
