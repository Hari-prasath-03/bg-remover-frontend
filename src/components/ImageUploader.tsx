import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const ImageUploader = () => {
  const { removeBg } = useAuthContext();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current++;
    const { items } = e.dataTransfer;
    if (items && items.length > 0) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current--;
    if (dragCounter.current === 0) setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);
    if (e.dataTransfer.files.length) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (file) {
      removeBg(file);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <div className="relative p-6 rounded-2xl max-w-lg mx-auto shadow-box bg-bg dark:bg-dark-bg-50 dark:shadow-dark">
      {isDragging && (
        <div className="absolute inset-0 rounded-2xl bg-white/85 dark:bg-black/85 pointer-events-none flex items-center justify-center">
          <p className="text-primary-accent animate-pulse text-2xl font-semibold">
            Drop your image here
          </p>
        </div>
      )}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className="border-4 border-dashed border-neutral-400/75 dark:border-neutral-700 rounded-2xl p-8 text-center"
      >
        <p className="text-2xl sm:text-3xl font-semibold">
          Drag and drop an image or{" "}
          <span className="text-primary">browse to upload.</span>
        </p>

        <label className="mt-6 inline-block bg-primary hover:bg-primary-accent text-white font-semibold px-6 py-2 rounded-full cursor-pointer transition">
          Upload your photo
          <input
            type="file"
            accept="image/jpg,image/png,image/webp"
            className="hidden"
            onChange={handleBrowse}
          />
        </label>

        <p className="text-xs text-gray-500 mt-3.5">
          File must be JPG, PNG or WebP and up to 15MB
        </p>

        {file && (
          <p className="mt-4 text-sm text-green-600 dark:text-green-400">
            Selected:{" "}
            <strong>
              {file.name.substring(0, 25)}
              {file.name.length > 25 ? "..." + file.type.split("/")[1] : ""}
            </strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
