import NavBar from "../../NavBar/NavBar";

const AboutUs = () => {
  return (
    <div className="bg-bgGreen md:min-h-screen">
      <NavBar />
      <h2 className="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        Sobre Nosotros
      </h2>
      <div className="md:container">
        <div className="mx-auto flex max-w-[1280px] flex-col-reverse items-center md:mt-10 md:flex-row md:items-start md:gap-10 md:pb-10">
          <div className="container mt-5 px-4">
            <p className="text-justify text-gray-500 md:text-left lg:text-lg">
              <span className="font-bold">&#9642; Bienvenidos</span> a nuestra
              clínica veterinaria, donde la salud y el bienestar de tu amigo
              peludo es nuestra principal prioridad. Nuestro equipo experimentado
              y compasivo de profesionales veterinarios está dedicado a brindar
              atención de alta calidad y completa para todas las necesidades de tu
              mascota. En nuestra clínica, ofrecemos una amplia gama de servicios
              para satisfacer las diversas necesidades de nuestros pacientes,
              incluyendo chequeos de rutina, vacunaciones, pruebas de diagnóstico,
              procedimientos quirúrgicos y mucho más. Nuestras instalaciones de
              última generación están equipadas con la tecnología y herramientas
              más avanzadas para garantizar la mejor atención posible para tu
              mascota. Entendemos el vínculo especial que existe entre una mascota
              y su dueño, y estamos comprometidos a construir relaciones fuertes
              y duraderas con todos nuestros clientes.
            </p>
          </div>
          <div className="container w-full px-4">
            <img
              src="/assets/about-us/dog.jpg"
              alt="perro"
              className="rounded-md opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
