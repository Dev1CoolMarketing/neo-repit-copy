import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Download, Copy, RefreshCw, Syringe, Microscope, TestTube, Beaker, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GeneratedImage {
  url: string;
  prompt: string;
  deviceType: string;
  style: string;
}

export default function GrowthFactorsImageGenerator() {
  const [images, setImages] = useState<{ [key: string]: GeneratedImage }>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingStep, setGeneratingStep] = useState<string | null>(null);
  const { toast } = useToast();

  const growthFactorSteps = [
    {
      id: "blood_draw",
      title: "Blood Collection",
      deviceType: "consultation_tool",
      icon: <Syringe className="w-6 h-6" />,
      description: "Professional blood collection equipment for PRP extraction"
    },
    {
      id: "centrifuge",
      title: "Centrifuge Process",
      deviceType: "microscope",
      icon: <TestTube className="w-6 h-6" />,
      description: "High-speed centrifuge for platelet separation"
    },
    {
      id: "preparation",
      title: "Growth Factor Preparation",
      deviceType: "hair_analyzer",
      icon: <Beaker className="w-6 h-6" />,
      description: "Precision preparation of growth factor serum"
    },
    {
      id: "application",
      title: "Scalp Application",
      deviceType: "dermoscope",
      icon: <Microscope className="w-6 h-6" />,
      description: "Professional application device for scalp treatment"
    }
  ];

  const generateStepImage = async (step: any) => {
    try {
      setIsGenerating(true);
      setGeneratingStep(step.id);
      
      const response = await fetch('/api/generate-medical-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          deviceType: step.deviceType,
          style: "apple_minimal",
          size: "1024x1024",
          quantity: 1
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      const generatedImage = data.images[0];
      
      setImages(prev => ({
        ...prev,
        [step.id]: generatedImage
      }));
      
      toast({
        title: "Success!",
        description: `Generated image for ${step.title}`,
      });
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: "Error",
        description: `Failed to generate image for ${step.title}`,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
      setGeneratingStep(null);
    }
  };

  const generateAllImages = async () => {
    try {
      setIsGenerating(true);
      
      const promises = growthFactorSteps.map(async (step) => {
        setGeneratingStep(step.id);
        
        const response = await fetch('/api/generate-medical-images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            deviceType: step.deviceType,
            style: "apple_minimal",
            size: "1024x1024",
            quantity: 1
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to generate image for ${step.title}`);
        }

        const data = await response.json();
        return { stepId: step.id, image: data.images[0] };
      });

      const results = await Promise.all(promises);
      
      const newImages: { [key: string]: GeneratedImage } = {};
      results.forEach(result => {
        newImages[result.stepId] = result.image;
      });
      
      setImages(newImages);
      
      toast({
        title: "Success!",
        description: `Generated all ${growthFactorSteps.length} images for Growth Factors process`,
      });
    } catch (error) {
      console.error('Error generating images:', error);
      toast({
        title: "Error",
        description: "Failed to generate some images. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
      setGeneratingStep(null);
    }
  };

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Copied!",
      description: "Image URL copied to clipboard",
    });
  };

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyImageCode = (stepId: string, imageUrl: string) => {
    const code = `// Growth Factors ${stepId} image
const ${stepId}Image = "${imageUrl}";

// Use in your FueStyleTreatmentCard component:
<FueStyleTreatmentCard
  title="${growthFactorSteps.find(s => s.id === stepId)?.title}"
  description="${growthFactorSteps.find(s => s.id === stepId)?.description}"
  image={${stepId}Image}
  learnMoreContent="..."
/>`;
    
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied!",
      description: "React component code copied to clipboard",
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Beaker className="w-6 h-6" />
            Growth Factors "How It Works" Image Generator
          </CardTitle>
          <CardDescription>
            Generate Apple-style medical equipment images for each step of the Growth Factors process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Button
              onClick={generateAllImages}
              disabled={isGenerating}
              className="flex-1"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating All Images...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate All Process Images
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {growthFactorSteps.map((step) => (
              <Card key={step.id} className="border-l-4 border-l-yellow-400">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    {step.icon}
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-sm">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {images[step.id] ? (
                    <div className="space-y-3">
                      <div className="relative overflow-hidden rounded-lg border bg-white">
                        <img
                          src={images[step.id].url}
                          alt={`${step.title} equipment`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => window.open(images[step.id].url, '_blank')}
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {images[step.id].deviceType.replace('_', ' ')}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Apple Style
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyImageUrl(images[step.id].url)}
                          className="text-xs"
                        >
                          <Copy className="mr-1 h-3 w-3" />
                          URL
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => downloadImage(images[step.id].url, `${step.id}-equipment.jpg`)}
                          className="text-xs"
                        >
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyImageCode(step.id, images[step.id].url)}
                          className="text-xs"
                        >
                          <Code className="mr-1 h-3 w-3" />
                          Code
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                        {generatingStep === step.id ? (
                          <div className="flex items-center gap-2 text-gray-500">
                            <Loader2 className="h-6 w-6 animate-spin" />
                            <span>Generating...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-gray-400">
                            {step.icon}
                            <span>Click to generate</span>
                          </div>
                        )}
                      </div>
                      
                      <Button
                        onClick={() => generateStepImage(step)}
                        disabled={isGenerating}
                        variant="outline"
                        className="w-full"
                      >
                        {generatingStep === step.id ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Generate {step.title} Image
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {Object.keys(images).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Implementation Guide</CardTitle>
            <CardDescription>
              Use these generated images in your Growth Factors "How It Works" section
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Step 1: Save Images</h4>
                <p className="text-sm text-gray-600">
                  Download each generated image and save them in your <code>public/images/growth-factors/</code> directory
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Step 2: Update Treatment Cards</h4>
                <p className="text-sm text-gray-600">
                  Replace the placeholder images in your FueStyleTreatmentCard components with the generated images
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Step 3: Optimize for Web</h4>
                <p className="text-sm text-gray-600">
                  Compress images using tools like TinyPNG and create WebP versions for better performance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

