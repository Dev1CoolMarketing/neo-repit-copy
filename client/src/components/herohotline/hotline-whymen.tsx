export function HotlineWhyMen() {
  const whyMen = [
    {
      title: "Private.",
      description: "Just you and your export - no one else sees a thing",
    },
    {
      title: "Expert-only.",
      description:
        "You text. A real licensed provider replies. No bots. No reps.",
    },
    {
      title: "Zero Pressure.",
      description: 'No "book now" poiz-ups.  Just facts - when you want them.',
    },
  ];
  return (
    <section className="text-white mt-5 pb-10">
      {/* Bold Apple Fitness-style Hero with Growth Factor twist */}
      <div className="mb-10 section-content">
        <h1 className="font-[600] text-xl">Why men trust the Hotline</h1>
      </div>
      <div className="flex flex-row gap-4 px-2 pt-5 ">
        {whyMen.map((reason) => {
          return (
            <div className="bg-[#1A1F22] col-span-1 rounded-md text-left px-2 pb-5">
              <h2 className="text-sm text-center font-bold">{reason.title}</h2>
              <p className="text-xs pt-5">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
