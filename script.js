let posts = [
  {
    title: "Web Dev Internship",
    description: "React internship at a startup.",
    tags: ["react", "frontend"]
  },
  {
    title: "Math Tutoring EC",
    description: "Volunteer as a peer tutor.",
    tags: ["math", "tutoring"]
  }
];

function renderPosts(filter = "") {
  const postList = document.getElementById("postList");
  postList.innerHTML = "";

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(filter) ||
    p.description.toLowerCase().includes(filter) ||
    p.tags.join(" ").toLowerCase().includes(filter)
  );

  if (filtered.length === 0) {
    postList.innerHTML = "<p>No matching opportunities found.</p>";
  } else {
    filtered.forEach(p => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <small>Tags: ${p.tags.join(", ")}</small>
