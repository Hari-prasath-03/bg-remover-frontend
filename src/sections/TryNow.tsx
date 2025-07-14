import ImageUploader from "../components/ImageUploader";

const TryNow = () => {
  return (
    <section className="relative flex flex-col items-center justify-">
      <h2 className="page-heading">Remove image Background.</h2>

      <p className="mx-auto text-[12px] sm:text-base max-w-2xl text-text-muted dark:text-dark-text-muted mb-10">
        Get a transparent background for your image in seconds.
      </p>
      <ImageUploader />
    </section>
  );
};

export default TryNow;
