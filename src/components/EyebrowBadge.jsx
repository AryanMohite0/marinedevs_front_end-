import React from 'react';

export const EyebrowBadge = ({ children, icon: Icon }) => {
  return (
    <span className="eyebrow-badge">
      {Icon && <Icon size={13} style={{ marginRight: '6px' }} />}
      {children}
    </span>
  );
};

export default EyebrowBadge;
