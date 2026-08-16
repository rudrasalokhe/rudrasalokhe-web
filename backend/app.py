from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ─── Portfolio Data ───────────────────────────────────────────────────────────

PROFILE = {
    "name": "Rudra Salokhe",
    "title": "Creative Developer & Designer",
    "bio": "Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. Currently pursuing MBA Tech at NMIMS, I'm always learning and exploring new ideas.",
    "bio_extended": "The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital landscape. As an MBA Tech student at NMIMS, I combine technical expertise with business acumen.",
    "email": "its.rudwin.23@gmail.com",
    "phone": "+91 8248069086",
    "github": "https://github.com/rudrasalokhe",
    "linkedin": "https://www.linkedin.com/in/rudra-salokhe-12196b250/",
    "avatar": "/rudra.jpg",
}

PROJECTS = [
    {
        "id": 1,
        "title": "DealsInBox",
        "description": "A modern deal-finding web application built with JavaScript",
        "tech": ["JavaScript", "React", "Vercel"],
        "github": "https://github.com/rudrasalokhe/dealinbox",
        "live": "https://dealsinbox.in",
        "color": "#6C5CE7",
    },
    {
        "id": 2,
        "title": "PaySlot",
        "description": "A sleek payment slot application with modern UI",
        "tech": ["JavaScript", "Node.js", "MongoDB"],
        "github": "https://github.com/rudrasalokhe/payslot",
        "live": "https://payslot.in",
        "color": "#00B894",
    },
    {
        "id": 3,
        "title": "WorkMate",
        "description": "Productivity and project management companion tool",
        "tech": ["JavaScript", "React", "Flask"],
        "github": "https://github.com/rudrasalokhe/workmate",
        "live": None,
        "color": "#E17055",
    },
    {
        "id": 4,
        "title": "DocDrop",
        "description": "Document sharing and management platform",
        "tech": ["CSS", "HTML", "JavaScript"],
        "github": "https://github.com/rudrasalokhe/docdrop",
        "live": None,
        "color": "#0984E3",
    },
]

SKILLS = [
    {
        "category": "Front-End Development",
        "description": "Building engaging and user-friendly web interfaces using modern frameworks and technologies.",
        "items": ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Vite"],
    },
    {
        "category": "Styling & Design",
        "description": "Crafting beautiful and responsive designs with advanced styling tools and frameworks.",
        "items": ["Tailwind CSS", "Bootstrap", "Sass", "Figma", "Material UI"],
    },
    {
        "category": "Back-End Development",
        "description": "Building robust server-side logic and APIs to power dynamic web applications.",
        "items": ["Node.js", "Express.js", "Flask", "Python", "REST APIs"],
    },
    {
        "category": "Database Management",
        "description": "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
        "items": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
        "category": "Programming Languages",
        "description": "Proficient in multiple programming languages to implement efficient data structures and algorithms.",
        "items": ["JavaScript", "Python", "Java", "C++", "Kotlin"],
    },
    {
        "category": "Version Control & Collaboration",
        "description": "Using industry-standard tools for collaborative development and project management.",
        "items": ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
        "category": "Cloud & Deployment",
        "description": "Experienced in deploying and managing applications on modern cloud platforms and services.",
        "items": ["Vercel", "Netlify", "AWS", "Docker"],
    },
    {
        "category": "Mobile App Development",
        "description": "Creating cross-platform mobile applications with modern frameworks.",
        "items": ["React Native", "Kotlin", "Android Studio"],
    },
]


# ─── API Routes ───────────────────────────────────────────────────────────────

@app.route("/api/profile", methods=["GET"])
def get_profile():
    return jsonify(PROFILE)


@app.route("/api/projects", methods=["GET"])
def get_projects():
    return jsonify(PROJECTS)


@app.route("/api/skills", methods=["GET"])
def get_skills():
    return jsonify(SKILLS)


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name", "")
    email = data.get("email", "")
    message = data.get("message", "")

    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    # In production, you'd send an email or save to database here
    print(f"Contact form submission: {name} ({email}): {message}")
    return jsonify({"success": True, "message": "Message sent successfully!"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
