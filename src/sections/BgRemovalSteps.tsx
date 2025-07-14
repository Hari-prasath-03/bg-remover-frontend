import { bgRemovalSteps } from "../assets";

const BgRemovalSteps = () => {
  return (
    <section className="text-center">
      <h2 className="page-heading">
        How to remove a background in seconds?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bgRemovalSteps.map((step) => (
          <div
            key={step.id}
            className="bg-[linear-gradient(145deg,var(--color-bg)30%,var(--color-bg-50)90%)] dark:bg-[linear-gradient(145deg,var(--color-dark-bg-50)30%,var(--color-dark-bg)90%)] p-6 sm:p-8 rounded-2xl shadow dark:shadow-dark space-y-4"
          >
            <span className="inline-block bg-gray-200/70 dark:bg-neutral-700 text-primary-accent dark:text-primary text-sm font-semibold px-3 py-1 rounded-full">
              Step {step.id}
            </span>
            <h3 className="text-xl text-gray-900 dark:text-gray-100 font-semibold">{step.title}</h3>
            <p className="text-text-muted dark:text-dark-text-muted leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BgRemovalSteps;
