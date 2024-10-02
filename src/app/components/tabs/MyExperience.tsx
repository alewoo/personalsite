const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    period: "2020 - Present",
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions",
    period: "2018 - 2020",
  },
  { title: "Intern", company: "Startup Inc.", period: "2017 - 2018" },
];

export default function MyExperience() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Experience</h2>
      <div className="relative border-l-2 border-blue-600">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px]"></div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-blue-400">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
