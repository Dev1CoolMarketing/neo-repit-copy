export function HotlineVersus() {
  const versus = [
    {
      name: "Wait",
      hotline: "Hours",
      clinic: "2-6 weeks",
    },
    {
      name: "Privacy",
      hotline: "100%",
      clinic: "Awkward lobby",
    },
  ];
  return (
    <section className="text-white mt-5 pb-10 section-content">
      {/* Bold Apple Fitness-style Hero with Growth Factor twist */}
      <div className="flex flex-row justify-centerflex flex-row justify-center">
        <h1 className="font-[600] text-xl">
          Hairline Hotline vs. Typical Clinic
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-auto mb-2">
        <div className="col-span-1"></div>
        <div className="col-span-1 px-2">Hotline</div>
        <div className="col-span-1 px-2">Typical Clinic</div>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-4">
        {versus.map((reason) => (
          <>
            <div className="col-span-1">{reason.name}</div>
            <div className="col-span-1 w-fit h-fit text-black rounded-full px-2 py-1 bg-[#32d74b]">
              {reason.hotline}
            </div>
            <div className="col-span-1 px-2">{reason.clinic}</div>
          </>
        ))}
      </div>
    </section>
  );
}
