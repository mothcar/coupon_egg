import { useEffect, useState } from "react";
import axios from "../api/axios";
import { BsCameraFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const navigate = useNavigate();

  const [file, setFile] = useState();
  const [hide, setHide] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [tradeType, setTradeType] = useState("TAKE");
  const [title, setTitle] = useState("");
  const [shopName, setShopName] = useState("");
  const [content, setContent] = useState("");
  const [cloudUrl, setCloudUrl] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const uploadInput = document.getElementById("upload");
    const filenameLabel = document.getElementById("filename");
    const imagePreview = document.getElementById("image-preview");
    // Check if the event listener has been added before
    let isEventListenerAdded = false;

    uploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];

      async function fetchAndSetUser(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "khtvl2yr");
        // w_100,h_100,c_fill,g_face,r_max/v1696000091/wcpdivzy1hqubvhvefdy.png
        await axios
          .post(
            "https://api.cloudinary.com/v1_1/mothcar/image/upload",
            formData
          )
          .then(async (imageData) => {
            let url = imageData.data.url;
            // console.log("이미지 저장됐나? :", url);
            // this.$root.progressBar.show({ activate: false });
            // return url;
            setCloudUrl(url);
          });
      }

      if (file) {
        fetchAndSetUser(file);
        setFile(file);
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

  const upload = async (e) => {
    setIsDisabled(true);
    e.preventDefault();
    console.log("Image url : ", cloudUrl);

    try {
      const url = import.meta.env.VITE_LOCAL;
      // console.log('File : ', file)
      // const formData = new FormData();
      // formData.append("file", file);
      // formData.append("title", title);
      // formData.append("type", tradeType); // GIVE, TAKE
      // formData.append("userId", "test001asdf");
      // formData.append("userName", "테스트");
      // formData.append("addressDepth1", "서울");
      // formData.append("addressDepth2", "동작구");
      // formData.append("addressDepth3", "신대방동");
      // formData.append("shopName", shopName);
      // formData.append("shopLocation", {});
      // formData.append("content", content);
      // formData.append("price", 500);

      const params = {
        url: cloudUrl,
        title: title,
        type: tradeType,
        userId: "test001asd",
        userName: "테스트",
        addressDepth1: "서울",
        addressDepth2: "동작구",
        addressDepth3: "신대방",
        shopName: shopName,
        shopLocation: {},
        content: content,
        price: 500,
      };

      const picture = await axios.post(url + "/saveCoupon", params);
      if (picture) {
        console.log("Response : ", picture.data);
        setIsDisabled(false);
        navigate(-1);
      }
      // .then((res) => {console.log("Response : ", res.data)})
      // .catch((err) => console.log(err));
      // alert("등록완료");
    } catch (err) {
      setIsDisabled(false); // <--- here
      console.log(err);
    }
  };

  function changedRadio(e) {
    if (e.target.value == "TAKE") setHide(true);
    else {
      setHide(false);
      setTradeType(e.target.value);
    }
  }

  function titleChange(e) {
    setTitle(e.target.value);
  }

  function shopNameChange(e) {
    setShopName(e.target.value);
  }

  function contentChange(e) {
    setContent(e.target.value);
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
          value={title}
          onChange={titleChange}
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

        <div className="flex">
          <div className="grid grid-cols-2 items-center">
            <input
              type="number"
              id="title"
              className="border text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
              placeholder="0"
            />
            <span className="ml-3">장</span>
          </div>

          <div className={hide ? "hidden" : "grid grid-cols-2 items-center"}>
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
        <label className="block text-base mt-4 mb-2">상점명</label>
        <input
          type="text"
          id="title"
          onChange={shopNameChange}
          value={shopName}
          className="border w-full text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
          placeholder="상점이름을 입력해주세요"
        />
      </div>

      <div className="mb-10">
        <label className="block text-base mt-4 mb-2">설명</label>
        <textarea
          type="text"
          rows="4"
          id="desc"
          onChange={contentChange}
          value={content}
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
          disabled={isDisabled}
          className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 rounded"
        >
          등록
        </button>
      </div>
    </div>
  );
}
