import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";



type faqType = {
    question: string,
  answer: string
}

type faqSection = {
  title: string,
  items: faqType[],
}


type faqArray = faqSection[]

export default function GenericFaqSection({faqs} : {faqs: faqArray}) {
  // Use an Array of OBJECTS 
  [

  ]
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openProcedureIndex, setOpenProcedureIndex] = useState<number | null>(
    null,
  );
  const [openAfterProcedureIndex, setOpenAfterProcedureIndex] = useState<
    number | null
  >(null);

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const toggleProcedureQuestion = (index: number) => {
    if (openProcedureIndex === index) {
      setOpenProcedureIndex(null);
    } else {
      setOpenProcedureIndex(index);
    }
  };
  const toggleAfterProcedureQuestion = (index: number) => {
    if (openAfterProcedureIndex === index) {
      setOpenAfterProcedureIndex(null);
    } else {
      setOpenAfterProcedureIndex(index);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 flex flex-col gap-10">
      {/* Mobile version */}
      {faqs.map((faqSection) => 
      
          <div className="md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-normal text-center mb-10 bg-gradient-to-r from-[#EDB930] to-[#c8b68f] bg-clip-text text-transparent">
            {faqSection.title}
          </h2>

          <div className="space-y-4">
            {faqSection.items.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white hover:bg-gray-50"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-[#625046] font-medium">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#625046]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#625046]" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p
                      className="text-[#625046] whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      )}

      {/* Desktop version - Hims inspired */}
      {faqs.map((faqSection) => (
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-normal mb-4 text-[#625046]">
              {faqSection.title}
              </h2>
            </div>

            <div className="space-y-6">
              {faqSection.items.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2     focus:ring-blue-400"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-xl text-[#625046] font-normal">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Collapse FAQ Question ${index}`}
                      />
                    ) : (
                      <ChevronDown
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Expand FAQ Question ${index}`}
                      />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="mt-4 pr-10">
                      <p
                        className="text-[#625046] text-lg whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>))}
    </section>
  );
}
