import "./styles/main.css";
import photo1 from "/amico.svg";
import logo1 from "/turma-gti.svg";
import logo2 from "/Logo-Fapam.svg";
import logo3 from "/Logo-Giga-Minas.svg";
import logo4 from "/logo-white1.svg";
import vector from "/Vector.svg";
import vector2 from "/Vector2.svg";
import vector3 from "/Vector3.svg";
import cookies from "/cookies.svg";
import icon1 from "/icon1.svg";
import icon2 from "/icon2.svg";
import icon3 from "/icon3.svg";

function App() {
  return (
    <div className="w-screen h-screen text-white">
      <header className="h-12 bg-projeto-blue flex justify-center items-center font-bold text-xs md:text-lg fixed w-screen">
        BOAS PRÁTICAS DE TI APLICADAS NO SEU DIA A DIA
      </header>
      <div className="h-900 bg-background1 bg-projeto-black flex items-center justify-center p-10">
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
        <div className="flex justify-center pl-1 flex-wrap">
          <h1 className="font-bold text-lg lg:text-4xl md:w-4/12 w-8/12 mb-6">
            CONHEÇA MAIS SOBRE A{" "}
            <span className="text-projeto-black">LGPD E SEUS DADOS</span>
          </h1>
          <p className="tex-lg max-w-screen-sm text-sm md:text-2xl md:pl-8 pl-4  ">
            A LGPD, Lei Geral de Proteção de dados entrou em vigência
            recentemente para adequar-se ao tratamento de dados e é composta por
            três tipos de dados, sendo:
          </p>
        </div>
        <div className="md:flex mt-28 justify-between w-7/12">
          <div className="max-w-xs md:p-9">
            <div className="flex">
              <img src={vector} alt="" className="border-2 p-1 mr-4" />
              <h1 className="font-semibold text-lg">DADOS PESSOAIS</h1>
            </div>
            <p className="mt-6">
              Informações relacionadas a pessoa, seja nome, foto, endereço,
              e-mail, características pessoais, entre outros.
            </p>
          </div>

          <div className="max-w-xs border-dashed border-l-2 border-t-2 border-r-2 md:pl-9 md:pt-9 md:pr-9 mt-2 mb-2 p-2">
            <div className="flex">
              <img src={vector2} alt="" className="border-2 p-1 mr-4" />
              <h1 className="font-semibold text-base">DADO PESSOAL SENSÍVEL</h1>
            </div>
            <p className="mt-6">
              Dados sobre origem racial ou étnica, opinião política, dados
              genéticos, biométricos.
            </p>
          </div>

          <div className="max-w-xs md:p-9">
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
      <div className="auto bg-projeto-black flex items-center justify-center flex-col">
        <div className="flex flex-col lg:flex-row lg:w-3/5 mt-36 items-center">
          <div className="lg:w-1/2 p-6 text-center lg:text-left">
            <span className="lg:text-2xl text-lg font-normal ">
              VOCE SABIA QUE OS
            </span>
            <h1 className="lg:text-5xl text-3xl font-bold mt-3 text-center lg:text-left">
              COOKIES PRESENTES EM SITES{" "}
              <span className="text-projeto-blue text-center lg:text-left">
                {" "}
                NÃO SÃO BISCOITOS?
              </span>
            </h1>
            <p className="mt-12 text-sm lg:text-base">
              Tratam-se de arquivos com pequenos fragmentos de dados - como nome
              de um usuário e senha - que são trocados entre o computador de um
              usuário e um servidor Web para identificar usuários específicos e
              melhorar sua experiência de navegação.
              <p className="mt-6">
                Nos cookies é possível visualizar os termos de Política de
                Privacidade, Tratamentos de Dados (LGPD), e saber mais sobre o
                que é coletado de informações dos usuários e como são tratadas
                as informações coletadas.
              </p>
            </p>
          </div>
          <div>
            <img src={cookies} alt="" />
          </div>
        </div>
        <div className="lg:w-3/5 w-4/5 mt-12 bg-projeto-blue rounded-lg lg:py-8 py-2 lg:px-11 px-2 text-center">
          Ao concordar com os cookies, os sites conseguem acesso a algumas
          informações, como por exemplo logins e senhas, números de telefones e
          históricos de sites visitados. Ao contrário do que alguns pensam, os
          cookies não são spam ou vírus, mas apenas informações armazenadas
          temporariamente e cabe a você aceitar todos os cookies ou escolher
          apenas cookies específicos necessários para a navegação.
        </div>
        <div className="mt-48 flex lg:w-3/5 items-center lg:flex-row flex-col">
          <div className="lg:w-1/2 text-center lg:text-left p-6">
            <h1 className="text-5xl font-bold">
              VOCÊ SABE O QUE É{" "}
              <span className="text-projeto-blue">Ti VERDE?</span>
            </h1>
            <p className="mt-7">
              É um conceito que faz da utilização de recursos no setor de
              Tecnologia e Informação uma forma sustentável — seja nos setores
              das empresa que desenvolvem, produzem ou comercializam tecnologias
              e dispositivos tecnológicos.
            </p>
          </div>
          <div className="lg:w-5/6 lg:ml-24 m-4">
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2" >
              <img src={icon1} alt="" className="lg:mr-9 mr-2" />
              <div className="">
                <h3 className="lg:text-lg text-sm font-bold">
                  Você sabia que cerca de 10.000 folhas são produzidas por
                  tronco de árvore?
                </h3>
                <p className="lg:text-sm text-xs">
                  Por esse motivo é muito importante que as pessoas se
                  conscientizem no consumo de papel, trocando a prática de
                  anotações físicas para aplicativo de anotações no computador
                  ou celular ou utilizando folhas de rascunhos para anotações.
                </p>
              </div>
            </div>
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2 mt-7">
              <img src={icon2} alt="" className="lg:mr-9 mr-2 rounded-full" />
              <div className="">
                <h3 className="lg:text-lg text-sm font-bold">
                  Você sabia que ao deixar o carregador na tomada sem um celular
                  conectado consome energia?
                </h3>
                <p className="text-sm">
                  O consumo médio é de 0,26 KWh, por esse motivo é muito
                  importante ter atenção ao finalizar a carga do telefone.
                </p>
              </div>
            </div>
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2 mt-7">
              <img src={icon3} alt="" className="lg:mr-9 mr-2" />
              <div className="">
                <h3 className="lg:text-lg text-sm font-bold ">
                  Você sabia que são descartados mais de 20 milhões de HDs de
                  forma errada?
                </h3>
                <p className="text-sm">
                  Esse é um problema que vem afetando negativamente o meio
                  ambiente nos últimos anos e pode ter vazamento de dados. Uma
                  forma de resolver isso é o uso de ecopontos a fim de fazer o
                  descarte consciente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
