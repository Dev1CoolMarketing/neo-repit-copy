import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface MedicalImageRequest {
  deviceType: 'dermoscope' | 'microscope' | 'otoscope' | 'consultation_tool' | 'hair_analyzer';
  style: 'apple_minimal' | 'professional_studio' | 'clinical_clean';
  size: '1024x1024' | '1792x1024' | '1024x1792';
  quantity?: number;
}

export interface GeneratedMedicalImage {
  url: string;
  prompt: string;
  deviceType: string;
  style: string;
}

export class MedicalImageGenerator {
  private getDevicePrompt(deviceType: string): string {
    const devicePrompts = {
      dermoscope: "modern digital dermoscope with LED ring light, handheld medical diagnostic device, sleek metallic finish, professional medical equipment",
      microscope: "high-end digital microscope, professional laboratory equipment, modern scientific instrument, precision optics",
      otoscope: "premium digital otoscope, medical examination tool, ergonomic design, professional healthcare device",
      consultation_tool: "advanced hair analysis device, medical consultation equipment, digital diagnostic tool",
      hair_analyzer: "sophisticated hair follicle analysis system, precision medical imaging device, professional trichoscopy equipment"
    };
    
    return devicePrompts[deviceType] || devicePrompts.dermoscope;
  }

  private getStylePrompt(style: string): string {
    const stylePrompts = {
      apple_minimal: "clean white background, soft studio lighting, minimalist Apple-style product photography, premium aesthetic, subtle shadows, professional commercial photography",
      professional_studio: "professional studio lighting setup, seamless white background, commercial product photography, high-end lighting, soft diffused illumination",
      clinical_clean: "clinical white environment, sterile medical setting, professional healthcare photography, clean minimalist background, medical grade lighting"
    };
    
    return stylePrompts[style] || stylePrompts.apple_minimal;
  }

  private buildPrompt(request: MedicalImageRequest): string {
    const devicePrompt = this.getDevicePrompt(request.deviceType);
    const stylePrompt = this.getStylePrompt(request.style);
    
    const basePrompt = `Professional product photography of ${devicePrompt}, ${stylePrompt}`;
    const qualityEnhancers = "photorealistic, sharp focus, high resolution, commercial quality, premium materials, sleek design, modern aesthetic";
    const cameraSettings = "shot with professional camera, macro lens, perfect lighting, color accurate, commercial photography standards";
    
    return `${basePrompt}, ${qualityEnhancers}, ${cameraSettings}`;
  }

  async generateMedicalImages(request: MedicalImageRequest): Promise<GeneratedMedicalImage[]> {
    try {
      const prompt = this.buildPrompt(request);
      const quantity = request.quantity || 1;
      
      console.log(`Generating ${quantity} medical images for ${request.deviceType} in ${request.style} style`);
      console.log(`Prompt: ${prompt}`);
      
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: Math.min(quantity, 1), // DALL-E 3 only supports n=1
        size: request.size || "1024x1024",
        quality: "hd",
        style: "natural"
      });

      const results: GeneratedMedicalImage[] = response.data.map(image => ({
        url: image.url!,
        prompt: prompt,
        deviceType: request.deviceType,
        style: request.style
      }));

      // If quantity > 1, make multiple requests
      if (quantity > 1) {
        const additionalPromises = Array.from({ length: quantity - 1 }, () => 
          openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: request.size || "1024x1024",
            quality: "hd",
            style: "natural"
          })
        );

        const additionalResponses = await Promise.all(additionalPromises);
        
        additionalResponses.forEach(response => {
          if (response.data[0]?.url) {
            results.push({
              url: response.data[0].url,
              prompt: prompt,
              deviceType: request.deviceType,
              style: request.style
            });
          }
        });
      }

      return results;
    } catch (error) {
      console.error('Error generating medical images:', error);
      throw new Error(`Failed to generate medical images: ${error.message}`);
    }
  }

  async generateHairRestorationSet(): Promise<{ [key: string]: string }> {
    const deviceTypes: Array<MedicalImageRequest['deviceType']> = [
      'dermoscope',
      'microscope', 
      'consultation_tool',
      'hair_analyzer'
    ];

    const imageSet: { [key: string]: string } = {};

    try {
      const promises = deviceTypes.map(async (deviceType) => {
        const images = await this.generateMedicalImages({
          deviceType,
          style: 'apple_minimal',
          size: '1024x1024',
          quantity: 1
        });
        
        return { deviceType, url: images[0]?.url };
      });

      const results = await Promise.all(promises);
      
      results.forEach(({ deviceType, url }) => {
        if (url) {
          imageSet[deviceType] = url;
        }
      });

      return imageSet;
    } catch (error) {
      console.error('Error generating hair restoration image set:', error);
      throw error;
    }
  }
}

export const medicalImageGenerator = new MedicalImageGenerator();

// Predefined prompts for common medical devices
export const MEDICAL_DEVICE_PROMPTS = {
  dermoscope_apple: "Professional product photography of modern digital dermoscope with LED ring light, clean white background, soft studio lighting, minimalist Apple-style product photography, premium aesthetic, subtle shadows, photorealistic, sharp focus, high resolution, commercial quality, premium materials, sleek design, shot with professional camera, macro lens, perfect lighting",
  
  microscope_professional: "Professional product photography of high-end digital microscope, professional laboratory equipment, seamless white background, commercial product photography, high-end lighting, soft diffused illumination, photorealistic, sharp focus, modern scientific instrument, precision optics, premium materials, commercial photography standards",
  
  consultation_device: "Professional product photography of advanced hair analysis device, medical consultation equipment, clean white background, soft studio lighting, minimalist Apple-style aesthetic, digital diagnostic tool, photorealistic, sharp focus, professional medical equipment, premium design, commercial quality",
  
  hair_analyzer: "Professional product photography of sophisticated hair follicle analysis system, precision medical imaging device, professional trichoscopy equipment, clean minimalist background, Apple-style lighting, photorealistic, high resolution, medical grade equipment, sleek modern design, commercial photography"
};