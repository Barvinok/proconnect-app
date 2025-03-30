import React, { useState } from "react";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSpark",
    description: "Build UI components using React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataNexus",
    description: "Develop APIs and manage cloud infrastructure.",
  },
];

const mockProfiles = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Full Stack Developer",
    bio: "Passionate about building scalable web apps.",
    linkedin: "https://www.linkedin.com/in/alice-johnson-dev",
  },
  {
    id: 2,
    name: "Bob Lee",
    title: "Product Manager",
    bio: "Specializes in agile and cross-functional teams.",
    linkedin: "https://www.linkedin.com/in/bob-lee-pm",
  },
];

export default function NetworkingJobApp() {
  const [search, setSearch] = useState("");

  const filteredJobs = mockJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProfiles = mockProfiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#FF6B00",
        }}
      >
        ProConnect
      </h1>

      <input
        type="text"
        placeholder="Search for jobs or professionals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          margin: "20px 0",
          fontSize: "16px",
          border: "2px solid #FFA94D",
          borderRadius: "6px",
        }}
      />

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {/* Job Posts */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px", color: "#FF6B00" }}>
            Job Posts
          </h2>
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              style={{
                border: "1px solid #FFA94D",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "16px",
                backgroundColor: "#FFF8F0",
              }}
            >
              <h3 style={{ fontSize: "18px", marginBottom: "4px" }}>
                {job.title}
              </h3>
              <p style={{ color: "#555", fontSize: "14px" }}>{job.company}</p>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                {job.description}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Profiles */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px", color: "#FF6B00" }}>
            Professional Profiles
          </h2>
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              style={{
                border: "1px solid #FFA94D",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "16px",
                backgroundColor: "#FFF8F0",
              }}
            >
              <h3 style={{ fontSize: "18px", marginBottom: "4px" }}>
                {profile.name}
              </h3>
              <p style={{ color: "#555", fontSize: "14px" }}>{profile.title}</p>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>{profile.bio}</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "8px 12px",
                  backgroundColor: "#FF6B00",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              >
                View LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
