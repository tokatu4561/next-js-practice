import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { modalState } from "../atom/modalAtom";
import { CameraIcon } from "@heroicons/react/outline";

export const UploadModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  const addImageToPost = (event: any) => {
    const reader = new FileReader();

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div>
      {isOpen && (
        <Modal
          className="max-w-lg p-8 w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt=""
                className="w-full max-h-[250px] object-cover"
              />
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="cursor-pointer h-14 bg-red-200 p-2 rounded-full text-red-500"
              />
            )}

            <input
              onChange={addImageToPost}
              type="file"
              name=""
              hidden
              ref={filePickerRef}
            />
            <input
              type="text"
              name=""
              className="m-4 border-none text-center w-full focus:ring-0"
              placeholder="コメントを入力してください"
            />
            <button
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
              disabled
            >
              投稿
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
