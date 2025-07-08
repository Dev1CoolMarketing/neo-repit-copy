// TreatmentStepCard component
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
// SectionHeader component is moved into it's own file.
```

```typescript
// growth-factors.tsx page (basic structure)
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <SectionHeader title="Growth Factors Treatment Steps" />

      <TreatmentStepCard step={1} title="Consultation">
        This is the first step where you consult with a specialist.
      </TreatmentStepCard>

      <TreatmentStepCard step={2} title="Preparation">
        Preparation for the treatment.
      </TreatmentStepCard>

      <TreatmentStepCard step={3} title="Treatment">
        The actual growth factor treatment process.
      </TreatmentStepCard>

      <TreatmentStepCard step={4} title="Follow-up">
        Post-treatment care and monitoring.
      </TreatmentStepCard>
    </div>
  );
};

export default GrowthFactorsPage;
```

```typescript
// SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```

```typescript
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```

```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```
```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```
```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```

```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```
```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```
```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children:```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;
```
```
// TreatmentStepCard.tsx
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-4">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        <span className="mr-2 text-emerald-600">{step}.</span>{title}
      </h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}
```

```typescript
//SectionHeader.tsx
import React from 'react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
  );
}
```
```typescript
// growth-factors.tsx
import React from 'react';
import TreatmentStepCard from './TreatmentStepCard'; // Assuming TreatmentStepCard is in a separate file
import { SectionHeader } from './SectionHeader';

const GrowthFactorsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <SectionHeader title="Growth Factors Treatment Steps" />

            <TreatmentStepCard step={1} title="Consultation">
                This is the first step where you consult with a specialist.
            </TreatmentStepCard>

            <TreatmentStepCard step={2} title="Preparation">
                Preparation for the treatment.
            </TreatmentStepCard>

            <TreatmentStepCard step={3} title="Treatment">
                The actual growth factor treatment process.
            </TreatmentStepCard>

            <TreatmentStepCard step={4} title="Follow-up">
                Post-treatment care and monitoring.
            </TreatmentStepCard>
        </div>
    );
};

export default GrowthFactorsPage;