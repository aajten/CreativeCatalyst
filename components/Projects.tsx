interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title:"Manufacturing Excellence",
    description:
      "Optimized production workflows and quality systems."
  },

  {
    title:"Supplier Development",
    description:
      "Improved supplier performance and capability."
  },

  {
    title:"Industry 4.0",
    description:
      "Digital transformation and KPI automation."
  }
];

export default function Projects() {

  return (

    <section className="projects">

      <div className="container">

        <h2>
          Case Studies
        </h2>

        <div className="grid">

          {projects.map((project)=>(
            <div
             key={project.title}
             className="card"
            >

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>

  );

}