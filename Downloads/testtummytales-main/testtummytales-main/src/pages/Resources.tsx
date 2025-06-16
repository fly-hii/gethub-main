
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  return (
    <div className="min-h-screen bg-tummytales-cream">
      <Navigation />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="notebook-title text-4xl mb-8 text-center">Resources</h1>
        
        <Tabs defaultValue="articles" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceCard 
                title="Nutrition During First Trimester" 
                description="Learn about the essential nutrients needed during the critical first months of pregnancy."
                category="Nutrition"
                time="5 min read"
              />
              
              <ResourceCard 
                title="Managing Morning Sickness" 
                description="Practical tips and natural remedies to help manage morning sickness symptoms."
                category="Symptoms"
                time="8 min read"
              />
              
              <ResourceCard 
                title="Exercise Safety Guidelines" 
                description="Safe and effective exercises to maintain fitness throughout your pregnancy."
                category="Fitness"
                time="7 min read"
              />
              
              <ResourceCard 
                title="Understanding Prenatal Tests" 
                description="A guide to all the prenatal tests you might encounter during your journey."
                category="Health"
                time="10 min read"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VideoResourceCard 
                title="Prenatal Yoga Basics" 
                description="A gentle yoga routine specifically designed for expectant mothers."
                duration="15 minutes"
              />
              
              <VideoResourceCard 
                title="Understanding Ultrasounds" 
                description="An OB/GYN explains what to expect during different types of ultrasound appointments."
                duration="8 minutes"
              />
              
              <VideoResourceCard 
                title="Birth Plan Workshop" 
                description="Learn how to create a comprehensive birth plan that works for you."
                duration="25 minutes"
              />
              
              <VideoResourceCard 
                title="Baby-Proofing Your Home" 
                description="A step-by-step guide to making your home safe for your new arrival."
                duration="12 minutes"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="downloads">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DownloadResourceCard 
                title="Pregnancy Shopping Checklist" 
                description="A comprehensive list of essentials for mother and baby."
                fileType="PDF"
                fileSize="1.2 MB"
              />
              
              <DownloadResourceCard 
                title="Weekly Meal Planner" 
                description="Plan your nutritious meals with this handy template."
                fileType="PDF"
                fileSize="0.8 MB"
              />
              
              <DownloadResourceCard 
                title="Hospital Bag Checklist" 
                description="Never forget an essential item when packing for the hospital."
                fileType="PDF"
                fileSize="0.5 MB"
              />
              
              <DownloadResourceCard 
                title="Pregnancy Journal Template" 
                description="Document your pregnancy journey with this printable journal."
                fileType="PDF"
                fileSize="2.1 MB"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="classes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ClassResourceCard 
                title="Childbirth Education" 
                description="A comprehensive course covering labor, delivery, and postpartum care."
                duration="6 weeks"
                format="Online"
              />
              
              <ClassResourceCard 
                title="Infant CPR & Safety" 
                description="Learn essential safety techniques for your newborn."
                duration="3 hours"
                format="In-person"
              />
              
              <ClassResourceCard 
                title="Breastfeeding Basics" 
                description="Guidance and support for successful breastfeeding."
                duration="4 weeks"
                format="Hybrid"
              />
              
              <ClassResourceCard 
                title="Newborn Care" 
                description="Practical skills for caring for your baby in the first weeks."
                duration="2 weeks"
                format="Online"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  time: string;
}

const ResourceCard = ({ title, description, category, time }: ResourceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <span className="text-xs px-2 py-1 bg-tummytales-purple/20 text-tummytales-purple rounded-full">
            {category}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{time}</span>
        <Button variant="outline">Read Article</Button>
      </CardFooter>
    </Card>
  );
};

interface VideoResourceCardProps {
  title: string;
  description: string;
  duration: string;
}

const VideoResourceCard = ({ title, description, duration }: VideoResourceCardProps) => {
  return (
    <Card>
      <div className="h-40 bg-gray-200 flex items-center justify-center">
        <svg className="h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{duration}</span>
        <Button variant="outline">Watch Video</Button>
      </CardFooter>
    </Card>
  );
};

interface DownloadResourceCardProps {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
}

const DownloadResourceCard = ({ title, description, fileType, fileSize }: DownloadResourceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <span className="text-xs px-2 py-1 bg-tummytales-blue/20 text-tummytales-blue rounded-full">
            {fileType}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{fileSize}</span>
        <Button variant="outline">Download</Button>
      </CardFooter>
    </Card>
  );
};

interface ClassResourceCardProps {
  title: string;
  description: string;
  duration: string;
  format: string;
}

const ClassResourceCard = ({ title, description, duration, format }: ClassResourceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <span className="text-xs px-2 py-1 bg-tummytales-green/20 text-tummytales-green rounded-full">
            {format}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{duration}</span>
        <Button variant="outline">Enroll</Button>
      </CardFooter>
    </Card>
  );
};

export default Resources;
