export default function SectionHeader({ title, subtitle, align = "center" }: {
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
}) {
  return (
    <header className={`text-${align} mb-10`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </header>
  );
}
```// TreatmentStepCard Component
interface TreatmentStepCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  stepNumber: number;
}

function TreatmentStepCard({ title, description, imageSrc, altText, stepNumber }: TreatmentStepCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8">
      <div className="md:w-1/3">
        <img src={imageSrc} alt={altText} className="rounded-lg shadow-md" />
      </div>
      <div className="md:w-2/3 md:ml-8">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">Step {stepNumber}: {title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

// growth-factors.tsx Page Content
// Assuming this is a Next.js page

export default function GrowthFactorsPage() {
  return (
    <div className="container mx-auto py-12">
      <SectionHeader
        title="Understanding Growth Factors"
        subtitle="Explore how growth factors can revitalize your skin and hair."
        align="center"
      />

      <section className="mb-16">
        <SectionHeader title="What are Growth Factors?" align="left" />
        <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
          Growth factors are naturally occurring substances capable of stimulating cellular growth, proliferation, healing, and differentiation. In skincare and hair treatments, they play a crucial role in rejuvenation and repair.
        </p>
      </section>

      <section className="mb-16">
        <SectionHeader title="Our Treatment Steps" align="center" />
        <TreatmentStepCard
          title="Consultation and Analysis"
          description="We begin with a thorough consultation to understand your specific needs and assess your skin or hair condition."
          imageSrc="https://via.placeholder.com/400x300" // Replace with actual image URL
          altText="Consultation"
          stepNumber={1}
        />
        <TreatmentStepCard
          title="Growth Factor Application"
          description="Our specialized growth factor serum is carefully applied to the targeted areas."
          imageSrc="https://via.placeholder.com/400x300" // Replace with actual image URL
          altText="Application"
          stepNumber={2}
        />
        <TreatmentStepCard
          title="Post-Treatment Care"
          description="We provide detailed aftercare instructions to ensure optimal results and long-term maintenance."
          imageSrc="https://via.placeholder.com/400x300" // Replace with actual image URL
          altText="Post-Care"
          stepNumber={3}
        />
      </section>

      <section>
        <SectionHeader title="benefits of growth factor therapy" align="left" />
        <ul className="list-disc list-inside text-lg text-slate-700">
          <li>Reduces the appearance of fine lines and wrinkles</li>
          <li>Improves skin texture and elasticity</li>
          <li>Stimulates hair growth and thickness</li>
          <li>Enhances overall skin radiance</li>
        </ul>
      </section>
    </div>
  );
}