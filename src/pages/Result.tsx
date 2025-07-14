import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Result = () => {
  const { image, resultImage } = useAuthContext();
  const navigate = useNavigate();
  console.log("Result image:", resultImage);

  return (
    <section className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="rounded-lg px-8 py-6 shadow-md dark:shadow-neutral-500">
        {/* image preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* left */}
          <div className="flex flex-col">
            <p className="font-semibold mb-2 text-text-muted dark:text-dark-text-muted">
              Original Image
            </p>
            <img
              src={image ? URL.createObjectURL(image) : ""}
              className="w-full object-cover rounded-md"
            />
          </div>

          {/* right */}
          <div className="flex flex-col">
            <p className="font-semibold mb-2 text-text-muted dark:text-dark-text-muted">
              Result Image
            </p>
            <div className="rounded-md border border-gray-300/50 h-full bg-layer relative overflow-hidden">
              <img
                src={
                  resultImage
                    ? `data:image/png;base64,${resultImage}`
                    : undefined
                }
                className="w-full object-cover"
              />
              {!resultImage && image && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="border-4 border-primary rounded-full size-12 border-t-transparent animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button
            onClick={() => navigate("/")}
            className="btn border text-primary-accent border-primary-accent dark:text-primary dark:border-primary"
          >
            Try another image
          </button>
          <a
            href={resultImage as string | undefined}
            download
            className="btn bg-gradient-to-r from-primary to-amber-400 text-white"
          >
            Download image
          </a>
        </div>
      </div>
    </section>
  );
};

export default Result;
