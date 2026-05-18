import { Bell, Gear, Magnifier } from '@gravity-ui/icons';


const steps = [
  {
    title: "Find a Tutor",
    desc: "Browse our list of verified expert tutors based on your subject and needs.",
    icon: <Magnifier className="text-white text-4xl" />,
    color: "bg-blue-600"
  },
  {
    title: "Book a Slot",
    desc: "Choose a date and time that fits your schedule and book it instantly.",
    icon: <Gear className="text-white text-4xl" />,
    color: "bg-indigo-600"
  },
  {
    title: "Start Learning",
    desc: "Connect with your tutor via our secure platform and start your session.",
    icon: <Bell className="text-white text-4xl" />,
    color: "bg-green-600"
  }
];
const HowToWork = () => {
    return (
        <div>
    <section className="py-20 bg-gray-50 dark:bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">How MediQueue Works</h2>
            <p className="text-gray-500">Your journey to excellence starts with three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className={`w-20 h-20 ${step.color} mx-auto rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:-translate-y-2 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed px-4">
                  {step.desc}
                </p>

                {/* Connector line for Desktop */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-10 -right-6 w-12 border-t-2 border-dashed border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default HowToWork;