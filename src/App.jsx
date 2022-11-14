import "./styles/main.css";
import photo1 from "./assets/amico.svg";
import logo1 from "./assets/turma-gti.svg";
import logo2 from "./assets/Logo-Fapam.svg";
import logo3 from "./assets/Logo-Giga-Minas.svg";
import logo4 from "./assets/logo-white1.svg";
import vector from "./assets/Vector.svg";
import vector2 from "./assets/Vector2.svg";
import vector3 from "./assets/Vector3.svg";

function App() {
  return (
    <div className="w-screen h-screen text-white">
      <header className="h-12 bg-projeto-blue flex justify-center items-center font-bold text-xs md:text-lg fixed w-screen">
        BOAS PRÁTICAS DE TI APLICADAS NO SEU DIA A DIA
      </header>
      <div className="h-900 bg-background1 bg-projeto-black flex items-center justify-center p-3">
        <div className="sm:flex">
          <div className="max-w-xl">
            <h1 className="font-bold lg:text-7xl text-3xl">
              CARTILHAS DE BOAS{" "}
              <span className="text-projeto-blue">PRÁTICAS DE TI</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg">
              Cartilha desenvolvida para auxiliar e comunicar a comunica
              acadêmica sobre as boas práticas de TI no dia a dia.
            </p>
            <div className="flex md:gap-14 gap-4 mb-10 md:mb-0 mt-20">
              <img src={logo1} alt="" className="md:w-20 w-12" />
              <img src={logo2} alt="" className="md:w-20 w-12" />
              <img src={logo3} alt="" className="md:w-20 w-12" />
              <img src={logo4} alt="" className="md:w-12 w-7" />
            </div>
          </div>
          <div>
            <img src={photo1} alt="" className="sm:w-full w-64" />
          </div>
        </div>
      </div>
      <div className="md:h-768 h-1000 bg-projeto-blue flex flex-col items-center justify-center">
        <div className="flex justify-center pl-2">
          <h1 className="font-bold text-lg lg:text-4xl w-4/12">
            CONHEÇA MAIS SOBRE A{" "}
            <span className="text-projeto-black">LGPD E SEUS DADOS</span>
          </h1>
          <p className="tex-lg max-w-screen-sm text-sm lg:text-2xl md:pl-8 pl-4  ">
            A LGPD, Lei Geral de Proteção de dados entrou em vigência
            recentemente para adequar-se ao tratamento de dados e é composta por
            três tipos de dados, sendo:
          </p>
        </div>
        <div className="md:flex mt-28 justify-between w-7/12">
          <div className="max-w-xs lg:p-9">
            <div className="flex">
              <img src={vector} alt="" className="border-2 p-1 mr-4" />
              <h1 className="font-semibold text-lg">DADOS PESSOAIS</h1>
            </div>
            <p className="mt-6">
              Informações relacionadas a pessoa, seja nome, foto, endereço,
              e-mail, características pessoais, entre outros.
            </p>
          </div>

          <div className="max-w-xs border-dashed border-l-2 border-t-2 border-r-2 lg:pl-9 lg:pt-9 lg:pr-9 mt-2 mb-2 p-2">
            <div className="flex">
              <img src={vector2} alt="" className="border-2 p-1 mr-4" />
              <h1 className="font-semibold text-base">DADO PESSOAL SENSÍVEL</h1>
            </div>
            <p className="mt-6">
            Dados sobre origem racial ou étnica, opinião política, dados genéticos, biométricos.
            </p>
          </div>

          <div className="max-w-xs lg:p-9">
            <div className="flex">
              <img src={vector3} alt="" className="border-2 p-1 mr-4" />
              <h1 className="font-semibold text-lg">DADO ANOMALIZADO</h1>
            </div>
            <p className="mt-6">
              São dados que não podem ser identificados, considerando a
              utilização de meios técnicos razoáveis e disponíveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
