import { useEffect, useState } from "react";
import axios from "../api/axios";
import { BsCameraFill } from "react-icons/bs";

export default function AddPost() {
  const [file] = useState();

  useEffect(() => {
    const uploadInput = document.getElementById("upload");
    const filenameLabel = document.getElementById("filename");
    const imagePreview = document.getElementById("image-preview");
    // Check if the event listener has been added before
    let isEventListenerAdded = false;

    uploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];

      if (file) {
        filenameLabel.textContent = file.name;

        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.innerHTML = `<img src="${e.target.result}" class="max-h-48 rounded-lg mx-auto" alt="Image preview" />`;
          imagePreview.classList.remove(
            "border-dashed",
            "border-2",
            "border-gray-400"
          );

          // Add event listener for image preview only once
          if (!isEventListenerAdded) {
            imagePreview.addEventListener("click", () => {
              uploadInput.click();
            });

            isEventListenerAdded = true;
          }
        };
        reader.readAsDataURL(file);
      } else {
        filenameLabel.textContent = "";
        imagePreview.innerHTML = `<div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">No image preview</div>`;
        imagePreview.classList.add(
          "border-dashed",
          "border-2",
          "border-gray-400"
        );

        // Remove the event listener when there's no image
        imagePreview.removeEventListener("click", () => {
          uploadInput.click();
        });

        isEventListenerAdded = false;
      }
    });

    uploadInput.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }, []);

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:3000/upload", formData)
      .then(() => {})
      .catch((err) => console.log(err));
    alert("등록완료");
  };

  const [hide, setHide] = useState("")

  function changedRadio(e) {
    // setHide
    if(e.target.value == "change") setHide("hidden")
    else setHide("grid grid-cols-2 items-center")
  }

  return (
    <div className="common">
      <div className="mb-5">
        <div
          id="image-preview"
          className="max-w-sm h-full p-2 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
        >
          <label className="cursor-pointer flex flex-col justify-center items-center">
            <BsCameraFill className="pt-3" style={{ fontSize: 40 }} />
            <input
              id="upload"
              type="file"
              className="hidden"
              accept="image/*"
            />
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-700">
              쿠폰 업로드
            </h5>
          </label>
        </div>
        <div id="filename" className="text-right text-gray-500 z-50"></div>
      </div>

      <div className="mb-10">
        <label className="block text-base mt-4 mb-2">제목</label>
        <input
          type="text"
          id="title"
          className="border w-full text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
          placeholder="제목을 입력해주세요"
        />
      </div>

      <div className="mb-10">
        <label className="block text-base mt-4 mb-2">판매방식</label>
        <div className="flex mb-2">
          <div className="flex items-center me-4">
            <input
              id="inline-radio"
              type="radio"
              value="sold"
              name="inline-radio-group"
              onChange={changedRadio}
              defaultChecked
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              판매
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="inline-2-radio"
              type="radio"
              value="change"
              name="inline-radio-group"
              onChange={changedRadio}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              교환
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div className="grid grid-cols-2 items-center">
            <input
              type="number"
              id="title"
              className="border text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
              placeholder="0"
            />
            <span className="ml-3">장</span>
          </div>

          <div className={hide}>
            <input
              type="number"
              id="title"
              className="border text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
              placeholder="w"
            />
            <span className="ml-3">원</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <label className="block text-base mt-4 mb-2">설명</label>
        <textarea
          type="text"
          rows="4"
          id="desc"
          className="border w-full text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
          placeholder="쿠폰 내용을 작성해주세요."
        />
      </div>

      <div className="mb-20">
        <label className="block text-base mt-4 mb-2">
          직거래는 어디서 할까요?
        </label>
        <input
          type="text"
          id="place"
          className="border w-full text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
          placeholder="거래장소"
        />
      </div>

      <div className="fixed inset-x-0 bottom-0 text-center">
        <button
          type="button"
          onClick={upload}
          className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded mb-3"
        >
          등록
        </button>
      </div>
    </div>
  );
}
