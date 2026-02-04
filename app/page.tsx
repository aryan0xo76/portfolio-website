import Section from "@/components/Section";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-teal-400/30">
      {/* NAVIGATION */}
      <nav className="fixed w-full backdrop-blur-md bg-slate-900/80 z-50 py-6 px-10 flex justify-between items-center border-b border-white/5">
        <div className="text-2xl font-bold text-teal-400 font-mono">{`{A}`}</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#experience" className="hover:text-teal-300 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-teal-300 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-teal-300 transition">
            Skills
          </a>
          <a href="#education" className="hover:text-teal-300 transition">
            Education
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* INTRO CARD */}
        <Section>
          <div className="pt-20">
            <h1 className="text-6xl font-bold text-slate-100 mb-4">
              Hi, I'm <span className="text-teal-400">Aryan Singh</span>
            </h1>
            <h2 className="text-2xl text-slate-300 mb-6">
              Generative AI Researcher | Full Stack Developer
            </h2>
            <p className="max-w-xl text-lg mb-8 leading-relaxed text-slate-400">
              B.Tech student at <strong>IIT Roorkee</strong> interested in Web
              Development and ML/Generative AI roles. <br></br>I enjoy building
              functional applications and exploring ML architectures through
              research and personal projects.
            </p>

            <div className="flex gap-4 mb-10 text-slate-400">
              <a
                href="https://github.com/aryan0xo76"
                target="_blank"
                className="p-2 hover:text-teal-400 transition"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-singh-86951a300/"
                target="_blank"
                className="p-2 hover:text-teal-400 transition"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:aryan.singh4565@gmail.com"
                className="p-2 hover:text-teal-400 transition"
              >
                <Mail />
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/12UNWRQI92J1En_9U5sbe8vsaVUsr-xFt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit" /* This limits the clickable area to the button's width */
            >
              <button className="border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400/10 transition flex items-center gap-2 cursor-pointer">
                <FileText size={18} /> View Resume
              </button>
            </a>
          </div>
        </Section>

        {/* EXPERIENCE SECTION */}
        <Section delay={0.1}>
          <h3
            id="experience"
            className="text-3xl font-bold text-slate-100 mb-10"
          >
            Experience
          </h3>
          <div className="relative border-l border-slate-700 ml-3 space-y-12">
            {/* Yuan Ze University */}
            <div className="relative pl-8">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-teal-400"></span>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-slate-200">
                  Research Intern - Generative AI
                </h4>
                <span className="text-xs font-mono text-slate-500">
                  June – August 2025
                </span>
              </div>
              <p className="text-teal-400 mb-2 font-medium">
                Yuan Ze University • Taoyuan, Taiwan
              </p>
              <ul className="list-disc ml-4 space-y-2 text-sm text-slate-400">
                <li>
                  Analyzed 3D architectures (VoTr, PVCNN etc.) to understand
                  voxel-based representation methods.
                </li>
                <li>
                  Contributed to internal, proprietary generative AI workflows
                  for procedural 3D scenery generation and developed an
                  independent Text-to-3D prototype where Shap-E (Latent
                  Diffusion) was integrated with a text300M Transformer encoder
                  to generate Implicit Neural Representations (SDFs) from
                  natural language.
                </li>
                <li>
                  Orchestrated the conversion of SDFs into renderable polygonal
                  meshes using differentiable Marching Cubes algorithms and
                  Trimesh for lighting enhancement and K-Means texture
                  quantization
                </li>
                <li>
                  Developed a full-stack interface with a Flask backend and
                  Three.js for real-time 3D model visualization
                </li>
              </ul>
            </div>

            {/* AlgoUniversity */}
            <div className="relative pl-8">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-500"></span>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-slate-200">
                  Software Development Intern
                </h4>
                <span className="text-xs font-mono text-slate-500">
                  May – July 2024
                </span>
              </div>
              <p className="text-teal-400 mb-2 font-medium">
                AlgoUniversity (Y-Combinator) • Remote
              </p>
              <ul className="list-disc ml-4 space-y-2 text-sm text-slate-400">
                <li>
                  Built an end-to-end Online Judge platform using MERN stack
                  with a Dockerized compiler backend on AWS.
                </li>
                <li>
                  Implemented authentication, CRUD operations and test-case
                  validation for codes in C++, Java, JavaScript and Python.
                </li>
                <li>
                  Designed architecture for horizontal scaling, handling 100+
                  code submissions post-deployment.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* PROJECTS SECTION */}
        <Section delay={0.2}>
          <h3 id="projects" className="text-3xl font-bold text-slate-100 mb-10">
            Projects
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {/* Project: Assets3D */}
            <div className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800 transition group border border-transparent hover:border-teal-400/30">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition">
                  Assets3D (Text-to-3D Generator)
                </h4>
                {/* ADD YOUR PROJECT LINK IN THE HREF BELOW */}
                <a
                  href="https://github.com/aryan0xo76/Assets3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-teal-400 transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <ul className="text-sm mb-6 text-slate-400 space-y-3">
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Engineered a complete Text-to-3D system integrating Shap-E
                    (Latent Diffusion) and a Transformer-based text encoder
                    (text300M) to generate complex 3D assets from natural
                    language prompts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Orchestrated the conversion of generated Implicit Neural
                    Representations (SDFs) into renderable polygonal meshes
                    using differentiable Marching Cubes algorithms.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Implemented a geometry processing engine using Trimesh and
                    Scikit-Learn that implements K-Means Clustering for texture
                    quantization and vertex-normal analysis for lighting
                    enhancement.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Developed full-stack web application with Flask backend and
                    Three.js visualization for real-time 3D model viewing.
                  </span>
                </li>
              </ul>

              <div className="flex gap-2 text-xs font-mono text-teal-400/80">
                <span>Shap-E</span> • <span>Three.js</span> • <span>Flask</span>
              </div>
            </div>

            {/* Project: Multi-PDF Analysis */}
            <div className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800 transition group border border-transparent hover:border-teal-400/30">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition">
                  Multi-PDF Analysis System
                </h4>
                {/* ADD YOUR PROJECT LINK IN THE HREF BELOW */}
                <a
                  href="https://github.com/aryan0xo76/adobe_hackathon_1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-teal-400 transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <ul className="text-sm mb-6 text-slate-400 space-y-3">
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Built an heading (H1-H4) extraction system using XGBoost and
                    DBSCAN spatial clustering.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Implemented persona-based filtering via Sentence
                    Transformers for semantic similarity and relevance analysis.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Engineered a structural parsing pipeline to improve
                    classification accuracy across complex multi-page PDF
                    layouts.
                  </span>
                </li>
              </ul>

              <div className="flex gap-2 text-xs font-mono text-teal-400/80">
                <span>XGBoost</span> • <span>Sentence Transformers</span> •{" "}
                <span>DBSCAN</span>
              </div>
            </div>

            {/* Project: Meesho Prediction */}
            <div className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800 transition group border border-transparent hover:border-teal-400/30">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition">
                  Meesho Micro-Moment Prediction Engine
                </h4>
                {/* ADD YOUR PROJECT LINK IN THE HREF BELOW */}
                <a
                  href="https://github.com/aryan0xo76/meesho_project2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-teal-400 transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <ul className="text-sm mb-6 text-slate-400 space-y-3">
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Architected a personalization engine using FastAPI to
                    generate context-aware WhatsApp campaigns.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Engineered a 2-stage RecSys pipeline: Co-visitation Matrix
                    (Recall) + CatBoost Reranker (Precision) for product
                    sorting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">▹</span>
                  <span>
                    Implemented Send-Time Optimization (STO) algorithms to
                    predict peak engagement windows from 50k+ synthetic
                    GA4-style events.
                  </span>
                </li>
              </ul>

              <div className="flex gap-2 text-xs font-mono text-teal-400/80">
                <span>Scikit-Learn.</span> • <span>CatBoost</span>
              </div>
            </div>
          </div>
        </Section>

        {/* TECHNICAL SKILLS SECTION */}
        <Section delay={0.3}>
          <h3 id="skills" className="text-3xl font-bold text-slate-100 mb-10">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <span className="text-teal-400 font-mono text-sm">
                  Languages:
                </span>
                <p className="text-slate-200">C++, Python, Java, JavaScript</p>
              </div>
              <div>
                <span className="text-teal-400 font-mono text-sm">
                  ML Tech:
                </span>
                <p className="text-slate-200">PyTorch, Scikit-learn, SciPy</p>
              </div>
              <div>
                <span className="text-teal-400 font-mono text-sm">
                  Frameworks:
                </span>
                <p className="text-slate-200">
                  Node.js, Express.js, React, Flask, Three.js, FastAPI
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-teal-400 font-mono text-sm">DevOps:</span>
                <p className="text-slate-200">Docker, AWS, GitHub, Postman</p>
              </div>
              <div>
                <span className="text-teal-400 font-mono text-sm">
                  Databases:
                </span>
                <p className="text-slate-200">MongoDB, MySQL</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ACHIEVEMENTS SECTION */}
        <Section delay={0.4}>
          <h3 className="text-3xl font-bold text-slate-100 mb-10">
            Achievements
          </h3>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-teal-400 mt-1">▹</span>
              <span>
                <strong>Meta HackerCup 2025:</strong> World Rank 190 (Round 3)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-400 mt-1">▹</span>
              <span>
                <strong>Competitive Programming:</strong> Expert on Codeforces
                (1704) and 4 Star on CodeChef (1903)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-400 mt-1">▹</span>
              <span>
                <strong>JEE Advanced 2022:</strong> All India Rank 3176
              </span>
            </li>
          </ul>
        </Section>

        {/* EDUCATION SECTION */}
        <Section delay={0.5}>
          <h3
            id="education"
            className="text-3xl font-bold text-slate-100 mb-10"
          >
            Education
          </h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-xl font-bold text-slate-200">
                  Indian Institute of Technology (IIT), Roorkee
                </h4>
                <span className="text-sm font-mono text-slate-500">
                  2022 – 2026
                </span>
              </div>
              <p className="text-teal-400">B.Tech in Mechanical Engineering</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-xl font-bold text-slate-200">
                  The Shri Ram School, Aravali
                </h4>
                <span className="text-sm font-mono text-slate-500">
                  Graduated 2022
                </span>
              </div>
              <p className="text-slate-400">
                ISC 12th Board: 98.25% | ICSE 10th Board: 95%
              </p>
            </div>
          </div>
        </Section>

        <footer className="mt-32 text-center text-sm text-slate-600 pb-10">
          <p>© 2026 Aryan Singh</p>
        </footer>
      </main>
    </div>
  );
}
