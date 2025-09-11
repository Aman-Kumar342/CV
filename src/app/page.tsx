import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCategorySwitcher } from "@/components/project-category-switcher";
import { useState } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; // Import Popover components

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("software");
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-3 pt-4">
              {RESUME_DATA.contact.email && (
                <div className="group relative">
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="inline-flex items-center gap-x-2 rounded-lg bg-white px-3 py-2 text-[13px] font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <MailIcon className="h-4 w-4" />
                    Email
                  </a>
                  <div className="absolute left-0 top-full z-50 mt-2 hidden rounded-md border bg-popover p-2 text-sm text-popover-foreground shadow-md group-hover:block">
                    {RESUME_DATA.contact.email}
                  </div>
                </div>
              )}
              {RESUME_DATA.contact.tel && (
                <div className="group relative">
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    className="inline-flex items-center gap-x-2 rounded-lg bg-white px-3 py-2 text-[13px] font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Phone
                  </a>
                  <div className="absolute left-0 top-full z-50 mt-2 hidden rounded-md border bg-popover p-2 text-sm text-popover-foreground shadow-md group-hover:block">
                    {RESUME_DATA.contact.tel}
                  </div>
                </div>
              )}
              {RESUME_DATA.contact.social.map((social) => (
                <div key={social.name} className="group relative">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-x-2 rounded-lg bg-white px-3 py-2 text-[13px] font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.name}
                  </a>
                  <div className="absolute left-0 top-full z-50 mt-2 hidden rounded-md border bg-popover p-2 text-sm text-popover-foreground shadow-md group-hover:block">
                    {social.url}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold text-base">
                      {work.company}
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="mt-4">
            <ProjectCategorySwitcher
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.projects
                .filter((project) => project.category === activeCategory)
                .map((project) => {
                  return (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description as unknown as string[]}
                      tags={project.techStack}
                      link={"link" in project ? project.link.href : undefined}
                    />
                  );
                })}
            </div>
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.contact.social.find(s => s.name === "Portfolio")?.url || "",
            title: "Portfolio",
          },
          {
            url: RESUME_DATA.contact.social.find(s => s.name === "GitHub")?.url || "",
            title: "GitHub",
          },
          {
            url: RESUME_DATA.contact.social.find(s => s.name === "LinkedIn")?.url || "",
            title: "LinkedIn",
          },
          {
            url: RESUME_DATA.contact.social.find(s => s.name === "Codolio")?.url || "",
            title: "Coding Profile",
          }
        ]}
      />
    </main>
  );
}