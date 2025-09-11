"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface ProjectCategorySwitcherProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectCategorySwitcher({
  activeCategory,
  onCategoryChange,
}: ProjectCategorySwitcherProps) {
  return (
    <div className="flex gap-2 mb-4">
      <Button
        variant={activeCategory === "software" ? "default" : "outline"}
        onClick={() => onCategoryChange("software")}
        className="flex-1"
      >
        Software Projects
      </Button>
      <Button
        variant={activeCategory === "electronics" ? "default" : "outline"}
        onClick={() => onCategoryChange("electronics")}
        className="flex-1"
      >
        Electronics Projects
      </Button>
    </div>
  );
}
