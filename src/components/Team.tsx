
const Team = () => {
  const teamMembers = [
    {
      name: "Alex Urdea",
      title: "Managing Partner",
      image: "/placeholder.svg"
    },
    {
      name: "Jon Kalikow",
      title: "Partner",
      image: "/placeholder.svg"
    },
    {
      name: "Alexey Loganchuk",
      title: "Head of Data",
      image: "/placeholder.svg"
    },
    {
      name: "Daniel Jacobini",
      title: "Head of Product",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
              Experienced leaders combining decades of credit expertise with cutting-edge technology innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="font-montserrat font-bold text-secondary text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-primary text-lg mb-2">
                  {member.name}
                </h3>
                <p className="font-montserrat text-gray-600">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
