import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Download, Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MedicalImageRequest {
  deviceType: 'dermoscope' | 'microscope' | 'otoscope' | 'consultation_tool' | 'hair_analyzer';
  style: 'apple_minimal' | 'professional_studio' | 'clinical_clean';
  size: '1024x1024' | '1792x1024' | '1024x1792';
  quantity?: number;
}

interface GeneratedImage {
  url: string;
  prompt: string;
  deviceType: string;
  style: string;
}

export default function MedicalImageGenerator() {
  const [request, setRequest] = useState<MedicalImageRequest>({
    deviceType: 'dermoscope',
    style: 'apple_minimal',
    size: '1024x1024',
    quantity: 1
  });
  
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingSet, setIsGeneratingSet] = useState(false);
  const { toast } = useToast();

  const deviceTypes = [
    { value: 'dermoscope', label: 'Dermoscope' },
    { value: 'microscope', label: 'Digital Microscope' },
    { value: 'otoscope', label: 'Otoscope' },
    { value: 'consultation_tool', label: 'Consultation Tool' },
    { value: 'hair_analyzer', label: 'Hair Analyzer' }
  ];

  const styles = [
    { value: 'apple_minimal', label: 'Apple Minimal' },
    { value: 'professional_studio', label: 'Professional Studio' },
    { value: 'clinical_clean', label: 'Clinical Clean' }
  ];

  const sizes = [
    { value: '1024x1024', label: 'Square (1024x1024)' },
    { value: '1792x1024', label: 'Landscape (1792x1024)' },
    { value: '1024x1792', label: 'Portrait (1024x1792)' }
  ];

  const generateImages = async () => {
    try {
      setIsGenerating(true);
      
      const response = await fetch('/api/generate-medical-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        throw new Error('Failed to generate images');
      }

      const data = await response.json();
      setImages(data.images);
      
      toast({
        title: "Success!",
        description: `Generated ${data.images.length} medical image(s)`,
      });
    } catch (error) {
      console.error('Error generating images:', error);
      toast({
        title: "Error",
        description: "Failed to generate medical images. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateHairRestorationSet = async () => {
    try {
      setIsGeneratingSet(true);
      
      const response = await fetch('/api/generate-hair-restoration-set', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to generate hair restoration set');
      }

      const data = await response.json();
      
      // Convert object to array format
      const imageArray = Object.entries(data.images).map(([deviceType, url]) => ({
        url: url as string,
        prompt: `Hair restoration ${deviceType}`,
        deviceType,
        style: 'apple_minimal'
      }));
      
      setImages(imageArray);
      
      toast({
        title: "Success!",
        description: `Generated complete hair restoration image set`,
      });
    } catch (error) {
      console.error('Error generating hair restoration set:', error);
      toast({
        title: "Error",
        description: "Failed to generate hair restoration set. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingSet(false);
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

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Medical Image Generator</CardTitle>
          <CardDescription>
            Generate high-quality, Apple-style medical equipment images using AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Device Type</label>
              <Select
                value={request.deviceType}
                onValueChange={(value: MedicalImageRequest['deviceType']) =>
                  setRequest(prev => ({ ...prev, deviceType: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {deviceTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Style</label>
              <Select
                value={request.style}
                onValueChange={(value: MedicalImageRequest['style']) =>
                  setRequest(prev => ({ ...prev, style: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {styles.map(style => (
                    <SelectItem key={style.value} value={style.value}>
                      {style.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select
                value={request.size}
                onValueChange={(value: MedicalImageRequest['size']) =>
                  setRequest(prev => ({ ...prev, size: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map(size => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <Select
                value={request.quantity?.toString() || '1'}
                onValueChange={(value) =>
                  setRequest(prev => ({ ...prev, quantity: parseInt(value) }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={generateImages}
              disabled={isGenerating || isGeneratingSet}
              className="flex-1"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate Images
                </>
              )}
            </Button>

            <Button
              onClick={generateHairRestorationSet}
              disabled={isGenerating || isGeneratingSet}
              variant="outline"
              className="flex-1"
            >
              {isGeneratingSet ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Set...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate Hair Restoration Set
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {images.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Images</CardTitle>
            <CardDescription>
              Click on images to view full size, or use the actions below each image
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="space-y-3">
                  <div className="relative overflow-hidden rounded-lg border bg-white">
                    <img
                      src={image.url}
                      alt={`Generated ${image.deviceType}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => window.open(image.url, '_blank')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Badge variant="secondary">
                        {image.deviceType.replace('_', ' ')}
                      </Badge>
                      <Badge variant="outline">
                        {image.style.replace('_', ' ')}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyImageUrl(image.url)}
                        className="flex-1"
                      >
                        <Copy className="mr-2 h-3 w-3" />
                        Copy URL
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => downloadImage(image.url, `${image.deviceType}-${index + 1}.jpg`)}
                        className="flex-1"
                      >
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}