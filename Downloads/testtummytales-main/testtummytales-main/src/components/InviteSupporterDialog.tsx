
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

interface InviteSupporterFormData {
  firstName: string;
  lastName: string;
  email: string;
  permissions: {
    appointmentUpdates: boolean;
    milestoneUpdates: boolean;
    healthMetrics: boolean;
  };
}

interface InviteSupporterDialogProps {
  children: React.ReactNode;
}

const InviteSupporterDialog = ({ children }: InviteSupporterDialogProps) => {
  const { toast } = useToast();
  const form = useForm<InviteSupporterFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      permissions: {
        appointmentUpdates: false,
        milestoneUpdates: false,
        healthMetrics: false,
      },
    },
  });

  const onSubmit = (data: InviteSupporterFormData) => {
    console.log("Inviting supporter:", data);
    toast({
      title: "Invitation Sent",
      description: `Invitation sent to ${data.firstName} ${data.lastName}`,
    });
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite Supporter</DialogTitle>
          <DialogDescription>
            Invite someone to join your support network during your pregnancy journey.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-3">
              <Label className="text-sm font-medium">Permissions</Label>
              
              <FormField
                control={form.control}
                name="permissions.appointmentUpdates"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Share Appointment Updates</FormLabel>
                      <p className="text-xs text-muted-foreground">
                        Allow this supporter to see your appointment schedules and updates
                      </p>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="permissions.milestoneUpdates"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Share Milestone Updates</FormLabel>
                      <p className="text-xs text-muted-foreground">
                        Share pregnancy milestones and baby development updates
                      </p>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="permissions.healthMetrics"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Share Health Metrics</FormLabel>
                      <p className="text-xs text-muted-foreground">
                        Allow supporter to view basic health metrics and progress
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                Send Invitation
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default InviteSupporterDialog;
