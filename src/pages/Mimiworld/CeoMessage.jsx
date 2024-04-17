function CeoMessage() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <h2 className="font-mimi text-3xl">CEO 인사말</h2>
      <article className="w-[100%] lg:h-[80vh] md:h-[50vh]">
        <p className="bg-ceo-story bg-contain bg-no-repeat bg-center w-full h-full"></p>
      </article>
    </section>
  );
}

export default CeoMessage;
