
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Network = () => {
  return (
    <div className="min-h-screen bg-tummytales-cream">
      <Navigation />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="notebook-title text-4xl mb-8 text-center">Your Pregnancy Network</h1>
        
        <Tabs defaultValue="community" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="supporters">Supporters</TabsTrigger>
            <TabsTrigger value="connections">Find Connections</TabsTrigger>
          </TabsList>
          
          <TabsContent value="community">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="notebook-heading text-2xl">Recent Discussions</h2>
              <div className="flex space-x-2">
                <Button variant="outline">Filter</Button>
                <Button>New Post</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <CommunityPost 
                username="MamaJane"
                title="Tips for managing back pain in third trimester?"
                content="I'm 32 weeks and my back is killing me. Any tips or suggestions that worked for you?"
                replies={15}
                likes={24}
              />
              
              <CommunityPost 
                username="FirstTimeMom"
                title="Anyone else have weird food cravings?"
                content="I can't stop eating pickles with ice cream! What's your weirdest craving?"
                replies={42}
                likes={56}
              />
              
              <CommunityPost 
                username="BabyOnBoard"
                title="Recommended prenatal classes in Chicago area"
                content="Looking for good in-person prenatal classes in Chicago. Any recommendations?"
                replies={8}
                likes={12}
              />
              
              <CommunityPost 
                username="TwinMomma"
                title="Twin pregnancy experiences"
                content="Just found out I'm having twins! Would love to hear from other twin moms about their experiences."
                replies={27}
                likes={38}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="supporters">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="notebook-heading text-2xl">Your Support Team</h2>
              <Button>Add Supporter</Button>
            </div>
            
            <div className="space-y-4">
              <SupporterCard
                name="John Smith"
                relationship="Partner"
                email="john@example.com"
                accessLevel="Full Access"
              />
              
              <SupporterCard
                name="Maria Johnson"
                relationship="Mother"
                email="maria@example.com"
                accessLevel="Limited Access"
              />
              
              <SupporterCard
                name="Dr. Sarah Wilson"
                relationship="OB/GYN"
                email="dr.wilson@hospital.com"
                accessLevel="Medical Updates Only"
              />
            </div>
            
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Support Access Management</CardTitle>
                  <CardDescription>Control what information your supporters can see</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Pregnancy Map</span>
                      <Button variant="outline" size="sm">Manage Access</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Calendar Events</span>
                      <Button variant="outline" size="sm">Manage Access</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Health Metrics</span>
                      <Button variant="outline" size="sm">Manage Access</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Meal Plans</span>
                      <Button variant="outline" size="sm">Manage Access</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="connections">
            <div className="mb-6">
              <div className="mb-4">
                <h2 className="notebook-heading text-2xl mb-2">Find Others Like You</h2>
                <p className="text-muted-foreground">Connect with other moms-to-be who share your interests, due date, or location.</p>
              </div>
              
              <div className="flex gap-2 mb-6">
                <Input placeholder="Search by keyword, location, or interest" className="flex-1" />
                <Button>Search</Button>
              </div>
              
              <div className="flex gap-2 mb-6 flex-wrap">
                <Badge variant="outline" className="bg-white">Due Date: July 2025</Badge>
                <Badge variant="outline" className="bg-white">First Time Mom</Badge>
                <Badge variant="outline" className="bg-white">New York City</Badge>
                <Badge variant="outline" className="bg-white">Fitness</Badge>
                <Badge variant="outline" className="bg-white">+ Add Filter</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ConnectionCard
                name="Emma Watson"
                location="Boston, MA"
                dueDate="August 2025"
                interests={["First Time Mom", "Yoga", "Nutrition"]}
              />
              
              <ConnectionCard
                name="Sophia Lee"
                location="San Francisco, CA"
                dueDate="July 2025"
                interests={["Second Pregnancy", "Working Mom", "Fitness"]}
              />
              
              <ConnectionCard
                name="Olivia Smith"
                location="New York, NY"
                dueDate="July 2025"
                interests={["Twin Pregnancy", "Nutrition", "Arts"]}
              />
              
              <ConnectionCard
                name="Isabella Garcia"
                location="Miami, FL"
                dueDate="June 2025"
                interests={["First Time Mom", "Cooking", "Reading"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface CommunityPostProps {
  username: string;
  title: string;
  content: string;
  replies: number;
  likes: number;
}

const CommunityPost = ({ username, title, content, replies, likes }: CommunityPostProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-6 w-6">
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{username}</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{replies} replies</span>
          <span>{likes} likes</span>
        </div>
        <Button variant="ghost" size="sm">View Discussion</Button>
      </CardFooter>
    </Card>
  );
};

interface SupporterCardProps {
  name: string;
  relationship: string;
  email: string;
  accessLevel: string;
}

const SupporterCard = ({ name, relationship, email, accessLevel }: SupporterCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{relationship}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Email:</span>
          <span>{email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Access Level:</span>
          <Badge variant="outline" className="bg-tummytales-purple/10">
            {accessLevel}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="sm">Edit Access</Button>
        <Button variant="destructive" size="sm">Remove</Button>
      </CardFooter>
    </Card>
  );
};

interface ConnectionCardProps {
  name: string;
  location: string;
  dueDate: string;
  interests: string[];
}

const ConnectionCard = ({ name, location, dueDate, interests }: ConnectionCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{location}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground">Due Date:</span>
          <span>{dueDate}</span>
        </div>
        <div>
          <span className="text-sm text-muted-foreground mb-2 block">Interests:</span>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <Badge key={index} variant="outline" className="bg-tummytales-blue/10">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button size="sm">Connect</Button>
      </CardFooter>
    </Card>
  );
};

export default Network;
