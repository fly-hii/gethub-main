import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import InviteSupporterForm from "@/components/InviteSupporterForm";

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showInviteForm, setShowInviteForm] = useState(false);
  
  return (
    <div className="min-h-screen bg-tummytales-cream">
      <Navigation />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-3xl">JD</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="notebook-title text-4xl">Jane Doe</h1>
              <p className="text-muted-foreground">Week 18 • Due July 15, 2025</p>
              
              <div className="flex gap-4 mt-4">
                <Button>Edit Profile</Button>
                <Button variant="outline">Change Avatar</Button>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="pregnancy-status">Pregnancy Status</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
              <TabsTrigger value="support-system">Support System</TabsTrigger>
              <TabsTrigger value="supporters">Supporters</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Jane" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Date of Birth</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? (
                              format(selectedDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            className="p-3"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="(555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="addressLine1">Address Line 1</Label>
                      <Input id="addressLine1" defaultValue="123 Main St" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="addressLine2">Address Line 2</Label>
                      <Input id="addressLine2" defaultValue="" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="NY" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="New York" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zipcode">Zipcode</Label>
                      <Input id="zipcode" defaultValue="10001" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pregnancy-status" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pregnancy Status</CardTitle>
                  <CardDescription>Your current pregnancy details and history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Current Pregnancy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Are you currently pregnant?</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="trying">Trying to conceive</option>
                          <option value="not-sure">Not sure</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>When was your last menstrual period?</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              October 8, 2024
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={new Date(2024, 9, 8)} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Due Date (if known)</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              July 15, 2025
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={new Date(2025, 6, 15)} />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold mb-4">Pregnancy History</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Have you ever experienced any pregnancy loss?</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Would this be your first child?</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="healthcare" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Healthcare Information</CardTitle>
                  <CardDescription>Your healthcare providers and medical information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Healthcare Providers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Do you have a Primary Care Physician (PCP)?</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Do you have an OB/GYN?</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Insurance Provider</Label>
                        <Input defaultValue="Blue Cross Blue Shield" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Do you have a midwife?</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold mb-4">Medical Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Current medications or supplements</Label>
                        <Input defaultValue="Prenatal vitamins, Folic acid" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Do you smoke or drink alcohol?</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="">Select an option</option>
                          <option value="neither">Neither</option>
                          <option value="smoke-only">Smoke only</option>
                          <option value="drink-only">Drink alcohol only</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Any known allergies?</Label>
                        <textarea 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          rows={3}
                          placeholder="List any known allergies"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Any chronic conditions?</Label>
                        <textarea 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          rows={3}
                          placeholder="List any chronic conditions"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="lifestyle" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lifestyle Information</CardTitle>
                  <CardDescription>Your lifestyle habits and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>How often do you exercise?</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select frequency</option>
                        <option value="daily">Daily</option>
                        <option value="few-times-week">A few times a week</option>
                        <option value="weekly">Weekly</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>How would you describe your diet?</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select diet type</option>
                        <option value="balanced">Balanced</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="keto">Keto</option>
                        <option value="paleo">Paleo</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>How would you rate your sleep quality?</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select quality</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>How would you rate your stress level?</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select stress level</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                        <option value="very-high">Very High</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>What is your work environment like?</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select environment</option>
                        <option value="office">Office</option>
                        <option value="remote">Remote</option>
                        <option value="physical">Physical/Manual</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Do you have any hobbies or special interests?</Label>
                      <Input placeholder="Enter your hobbies" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support-system" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Support System</CardTitle>
                  <CardDescription>Your support network and expectations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>What do you expect most from the Platform?</Label>
                      <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={4}
                        placeholder="Enter your expectations"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Are there any specific challenges or concerns you would like support with?</Label>
                      <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={4}
                        placeholder="Enter challenges or concerns"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Would you like to receive personalized resources, tips, or reminders based on your profile?</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Who is your primary support person during pregnancy?</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select an option</option>
                        <option value="partner">Partner/Spouse</option>
                        <option value="family">Family Member</option>
                        <option value="friend">Friend</option>
                        <option value="healthcare">Healthcare Provider</option>
                        <option value="none">No primary support</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Any additional comments or feedback for us?</Label>
                      <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={4}
                        placeholder="Enter additional comments"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="supporters" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Supporters</CardTitle>
                  <CardDescription>Manage your network of family and friends supporting your pregnancy journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">Connected Supporters</h3>
                    <Button onClick={() => setShowInviteForm(!showInviteForm)}>
                      {showInviteForm ? 'Hide Form' : 'Invite Supporter'}
                    </Button>
                  </div>
                  
                  {showInviteForm && (
                    <InviteSupporterForm onCancel={() => setShowInviteForm(false)} />
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">Spouse • Connected 6 months ago</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Partner</Badge>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Mary Smith</p>
                          <p className="text-sm text-muted-foreground">Mother • Connected 4 months ago</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Family</Badge>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>EJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Emily Johnson</p>
                          <p className="text-sm text-muted-foreground">Best Friend • Connected 3 months ago</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Friend</Badge>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold mb-4">Sharing Permissions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Appointment Updates</p>
                          <p className="text-sm text-muted-foreground">Allow supporters to see your appointment schedules and updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Milestone Updates</p>
                          <p className="text-sm text-muted-foreground">Share pregnancy milestones and baby development updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Health Metrics</p>
                          <p className="text-sm text-muted-foreground">Allow supporters to view basic health metrics and progress</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive important updates via email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">App Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive push notifications</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Appointment Reminders</p>
                          <p className="text-sm text-muted-foreground">Get reminders before scheduled appointments</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Weekly Summaries</p>
                          <p className="text-sm text-muted-foreground">Receive weekly pregnancy updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold mb-4">Subscription</h3>
                    <div className="bg-tummytales-purple/10 p-4 rounded-md mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold">Premium Plan</p>
                          <p className="text-sm">$9.99/month • Renews on Jun 1, 2025</p>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline">Change Plan</Button>
                      <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">Cancel Subscription</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold mb-4">Data & Privacy</h3>
                    <div className="space-y-4">
                      <Button variant="outline">Download My Data</Button>
                      <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
