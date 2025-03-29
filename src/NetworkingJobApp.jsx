import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSpark",
    description: "Build UI components using React and Tailwind CSS."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataNexus",
    description: "Develop APIs and manage cloud infrastructure."
  }
];

const mockProfiles = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Full Stack Developer",
    bio: "Passionate about building scalable web apps."
  },
  {
    id: 2,
    name: "Bob Lee",
    title: "Product Manager",
    bio: "Specializes in agile and cross-functional teams."
  }
];

export default function NetworkingJobApp() {
  const [search, setSearch] = useState("");

  const filteredJobs = mockJobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProfiles = mockProfiles.filter(profile =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">ProConnect</h1>

      <Input
        placeholder="Search for jobs or professionals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Job Posts</h2>
          {filteredJobs.map((job) => (
            <Card key={job.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
                <p className="mt-2 text-sm">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Professional Profiles</h2>
          {filteredProfiles.map((profile) => (
            <Card key={profile.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">{profile.name}</h3>
                <p className="text-sm text-gray-500">{profile.title}</p>
                <p className="mt-2 text-sm">{profile.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

