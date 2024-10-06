import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLinkIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string[];
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="p-0">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {link && (
            <div className="hidden font-mono text-xs text-muted-foreground underline print:block">
              {link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-2 p-0">
        <CardDescription className="font-mono text-xs">
          <ul className="list-inside list-disc space-y-1">
            {description.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </CardDescription>
      </CardContent>
      <div className="mt-auto flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="px-1 py-0 text-[10px]"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
