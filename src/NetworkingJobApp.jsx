import React, { useState } from "react";

const initialJobs = [
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

const initialProfiles = [
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
  const [jobs, setJobs] = useState(initialJobs);
  const [profiles, setProfiles] = useState(initialProfiles);

  const [showJobForm, setShowJobForm] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);

  const [newJob, setNewJob] = useState({ title: "", company: "", description: "" });
  const [newProfile, setNewProfile] = useState({
    name: "",
    title: "",
    bio: "",
    linkedin: "",
  });

  const handleAddJob = () => {
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    setNewJob({ title: "", company: "", description: "" });
    setShowJobForm(false);
  };

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: Date.now() }]);
    setNewProfile({ name: "", title: "", bio: "", linkedin: "" });
    setShowProfileForm(false);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProfiles = profiles.filter((profile) =>
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

      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <button
          onClick={() => setShowJobForm(!showJobForm)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#FF6B00",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {showJobForm ? "Cancel" : "Add Job"}
        </button>
        <button
          onClick={() => setShowProfileForm(!showProfileForm)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#FF6B00",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {showProfileForm ? "Cancel" : "Add Profile"}
        </button>
      </div>

      {/* Add Job Form */}
      {showJobForm && (
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
          />
          <input
            placeholder="Company"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
          />
          <textarea
            placeholder="Description"
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
          />
          <button
            onClick={handleAddJob}
            style={{
              padding: "8px 16px",
              backgroundColor: "#FFA94D",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit Job
          </button>
        </div>
      )}

      {/* Add Profile Form */}
      {showProfileForm && (
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Name"
            value={newProfile.name}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
            style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
          />
          <input
            placeholder="Title"
            value={newProfile.title}
            onChange={(e) => setNewProfile({ ...newProfile, title: e.target.value })}
            style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
          />
          <textarea
            placeholder="Bio"
            value={newProfile.bio}
            onChange={(e) => setNewProfile({ ...newProfile, bio: e.target.value })}
            style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
          />
          <input
            placeholder="LinkedIn URL"
            value={newProfile.linkedin}
            onChange={(e) => setNewProfile({ ...newProfile, linkedin: e.target.value })}
            style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
          />
          <button
            onClick={handleAddProfile}
            style={{
              padding: "8px 16px",
              backgroundColor: "#FFA94D",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit Profile
          </button>
        </div>
      )}

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
              <h3 style={{ fontSize: "18px", marginBottom: "4px" }}>{job.title}</h3>
              <p style={{ color: "#555", fontSize: "14px" }}>{job.company}</p>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>{job.description}</p>
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
              <h3 style={{ fontSize: "18px", marginBottom: "4px" }}>{profile.name}</h3>
              <p style={{ color: "#555", fontSize: "14px" }}>{profile.title}</p>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>{profile.bio}</p>
              {profile.linkedin && (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
