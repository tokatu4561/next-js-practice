import React from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { modalState } from "../atom/modalAtom";

export const UploadModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <div>
      {isOpen && (
        <Modal
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
};
