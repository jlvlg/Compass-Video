import React from "react";
import "./index.css";

type User = {
  avatar: string;
  username: string;
};

type UserMenuProps = {
  users: User[];
  isOpen: boolean;
  onClose: () => void;
};

const UserMenu: React.FC<UserMenuProps> = ({ users, isOpen, onClose }) => {
  const handleMenuItemClick = (menuItem: string) => {
    console.log(`Clicou em: ${menuItem}`);
    onClose();
  };

  return (
    isOpen && (
      <div className="svg" style={{position:'absolute'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          id="svgdrop"
        >
          <path
            d="M9.24324 0L0 14H18L9.24324 0Z"
            fill="var(--neutral-700, #101116)"
          />
        </svg>
        <div className="user-menu">
          <div className="user-section">
            {users.map((user, index) => (
              <div className="user-item" key={index}>
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  width={48}
                  height={48}
                />
                <span>{user.username}</span>
              </div>
            ))}
          </div>

          <div className="menu-section">
            <div
              className="menu-item"
              onClick={() => handleMenuItemClick("Editar perfis")}
            >
              Editar perfis
            </div>
            <div
              className="menu-item"
              onClick={() => handleMenuItemClick("Preferências")}
            >
              Preferências
            </div>
            <div
              className="menu-item"
              onClick={() => handleMenuItemClick("Minha assinatura")}
            >
              Minha assinatura
            </div>
            <div
              className="menu-item"
              onClick={() => handleMenuItemClick("Minha conta")}
            >
              Minha conta
            </div>
            <div
              className="menu-item"
              onClick={() => handleMenuItemClick("Ajuda")}
            >
              Ajuda
            </div>
            <div
              className="menu-item"
              onClick={() => handleMenuItemClick("Sair")}
            >
              Sair
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserMenu;
