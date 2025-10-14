import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import styles from "@/styles/Frame_82.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import TagMultiSelect from "@/components/ui/MultiSelectTag";
import {
  ChevronLeft,
  ChevronRight,
  HandCoins,
  HeartPulse,
  Microscope,
  TestTubeDiagonal,
  Book,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const differenceCards = [
  {
    title: "Comprehensive Hair Loss Assessment",
    icon: <TestTubeDiagonal className="h-20 w-20 text-[white]" />,
  },
  {
    title: "Digital microscopic scalp analysis",
    icon: <Microscope className="h-20 w-20 text-[white]" />,
  },
  {
    title: "Personalized treatment recommendations",
    icon: <HeartPulse className="h-20 w-20 text-[white]" />,
  },
  {
    title: "Transparent pricing and financing options",
    icon: <HandCoins className="h-20 w-20 text-[white]" />,
  },
  {
    title: "No pressure, educational approach",
    icon: <Book className="h-20 w-20 text-[white]" />,
  },
];
import { CircleCheck, ArrowRight } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  location: z.string().optional(),
  message: z.string().optional(),
  treatments: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

// What to expect items
const expectationItems = [
  "Comprehensive hair loss assessment",
  "Digital microscopic scalp analysis",
  "Personalized treatment recommendations",
  "Transparent pricing and financing options",
  "No pressure, educational approach",
];

export default function ContactSection() {
  const { toast } = useToast();
  const [api, setApi] = useState<any>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      consent: false,
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", values);

      toast({
        title: "Consultation Request Submitted",
        description:
          "Thank you! We will contact you shortly to schedule your consultation.",
        variant: "default",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#f8f6f3]">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#625046] mb-4">
            Start Your Hair Restoration Journey
          </h2>
          <p className="text-lg text-[#625046] max-w-2xl mx-auto">
            Schedule your personalized consultation today and discover how Dr.
            Neo can help you achieve natural, lasting results.
          </p>
        </div>

        {/* Two-column layout for form and expectations */}
        <div className="lg:flex flex-col lg:items-center lg:gap-12 max-w-6xl mx-auto">
          {/* Form column */}
          <div className="lg:w-7/12 mb-12 lg:mb-0">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-normal text-[#625046] mb-4">
                Book your free consultation
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <legend className="sr-only">Full Name</legend>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#625046]">
                            First Name*
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="p-3 border border-gray-300 rounded-lg"
                              placeholder="Your first name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#625046]">
                            Last Name*
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="p-3 border border-gray-300 rounded-lg"
                              placeholder="Your last name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </fieldset>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#625046]">
                          Email Address*
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="p-3 border border-gray-300 rounded-lg"
                            placeholder="your.email@example.com"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#625046]">
                          Phone Number*
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="p-3 border border-gray-300 rounded-lg"
                            placeholder="(123) 456-7890"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="location-select"
                          className="text-sm font-medium text-[#625046]"
                        >
                          Preferred Location
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              id="location-select"
                              className="p-3 border border-gray-300 rounded-lg"
                            >
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="irvine">Irvine</SelectItem>
                            <SelectItem value="elsegundo">
                              El Segundo
                            </SelectItem>
                            <SelectItem value="solanabeach">
                              Encinitas
                            </SelectItem>
                            <SelectItem value="palmdesert">
                              Palm Desert
                            </SelectItem>

                            <SelectItem value="temecula">Temecula</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#625046]">
                          Tell us about your hair concerns
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={3}
                            className="p-3 border border-gray-300 rounded-lg resize-none"
                            placeholder="What are your hair restoration goals?"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  /> */}
                  <FormField
                    control={form.control}
                    name="treatments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="treatment-select"
                          className="text-sm font-medium text-[#625046]"
                        >
                          Preferred Medical Services
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              id="treatment-select"
                              className="p-3 border border-gray-300 rounded-lg"
                            >
                              <SelectValue placeholder="Select a medical service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="HyperPRP">Hyper PRP</SelectItem>
                            <SelectItem value="exosomes">Hypersomes</SelectItem>

                            <SelectItem value="hair-transplant">
                              Hair Transplant
                            </SelectItem>
                            <SelectItem value="multple">
                              Multiple Medical Services
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            id="consent"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 data-[state=checked]:bg-[#A87B23] data-[state=checked]:text-white border-gray-300"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="consent"
                          className="text-sm text-[#575757] font-normal"
                        >
                          I consent to receive communications from Dr. NEO. I
                          understand I can unsubscribe at any time.*
                        </FormLabel>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#141414] hover:bg-[#2a2a2a] text-white py-6 font-medium rounded-full transition-all hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Request My Free Consultation"}
                    </Button>

                    <p className="text-xs text-[#575757] mt-4 text-center">
                      Your information is secure and will never be shared with
                      third parties.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
