
import React from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  id,
  title,
  isOpen,
  onClick,
  children,
}) => {
  return (
    <Collapsible open={isOpen} className="border border-gray-300 rounded-md overflow-hidden">
      <CollapsibleTrigger asChild onClick={onClick}>
        <Button 
          variant="ghost" 
          className="w-full justify-between rounded-none bg-tummytales-gray/30 hover:bg-tummytales-gray/50"
        >
          <span className="notebook-heading">{title}</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleSection;
