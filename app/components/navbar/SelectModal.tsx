import React from "react";

type SelectModalProps = {
  options: string[];
  onClose: () => void;
};

const SelectModal: React.FC<SelectModalProps> = ({ options, onClose }) => {
  return (
    <div className="select-modal">
      <div className="modal-content">
        <ul className="modal-options">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectModal;
