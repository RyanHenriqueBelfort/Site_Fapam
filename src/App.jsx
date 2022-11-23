import "./styles/main.css";
import photo1 from "./assets/amico.svg";
import logo1 from "./assets/turma-gti.svg";
import logo2 from "./assets/Logo-Fapam.svg";
import logo3 from "./assets/Logo-Giga-Minas.svg";
import logo4 from "./assets/logo-white1.svg";
import vector from "./assets/Vector.svg";
import vector2 from "./assets/Vector2.svg";
import vector3 from "./assets/Vector3.svg";
import cookies from "./assets/cookies.svg";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import correct from "./assets/correct.svg";
import wrong from "./assets/wrong.svg";
import seguranca from "./assets/seguranca.svg";
import hacker from "./assets/hacker.svg";
import politica from "./assets/politica.svg";
import noConnection from "./assets/noConnection.svg";
import people from "./assets/people.svg";
import wifi from "./assets/wifi.svg";
import web from "./assets/web.svg";
import url from "./assets/url.svg";

function App() {
  return (
    <div className="w-screen h-screen text-white">
      <header className="h-12 bg-projeto-blue flex justify-center items-center font-bold text-xs md:text-lg fixed w-screen">
        BOAS PRÁTICAS DE TI APLICADA NO SEU DIA A DIA
      </header>
      <div className="h-900 bg-background1 bg-projeto-black flex items-center justify-center p-10">
        <div className="sm:flex">
          <div className="max-w-xl">
            <h1 className="font-bold lg:text-7xl text-3xl">
              CARTILHAS DE BOAS{" "}
              <span className="text-projeto-blue">PRÁTICAS DE TI</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg">
              Cartilha desenvolvida para auxiliar e comunicar a comunidade
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

          <div className="max-w-xs lg:border-dashed lg:border-l-2 lg:border-t-2 lg:border-r-2 md:pl-9 md:pt-9 md:pr-9 mt-2 mb-2 lg:p-2">
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
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2">
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
        <div className="lg:w-3/5 mt-48">
          <div className="bg-projeto-blue lg:px-32 px-5 lg:py-10 py-2 rounded-lg text-center">
            <h3 className="lg:text-2xl ">VOCÊ SABIA QUE É UM</h3>
            <h1 className="font-bold lg:text-4xl text-2xl mt-1">
              LICENCIAMENTO DE{" "}
              <span className="text-projeto-black">SOFTWARE</span>
            </h1>
            <p className="mt-3 text-sm lg:text-base">
              Licenciamento de um software é a permissão do fornecedor para a
              sua utilização. Ela significa que o desenvolvedor reconhece que o
              software foi adquirido de forma legal, fornecendo o direito de
              instalar, exibir, acessar e executar o programa.
            </p>
          </div>
          <div className="bg-projeto-gray50 lg:flex justify-between p-14">
            <div className="mt-2">
              <h1 className="text-xl text-center">
                VANTAGENS DE SE USAR UM{" "}
                <span className="text-projeto-blue">SOFTWARE LICENCIADO</span>
              </h1>
              <div className="mt-16">
                <div className="flex items-center">
                  <img src={correct} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Garante atualizações periódicas
                  </span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={correct} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Suporte tecnológico especializado
                  </span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={correct} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Nível alto de segurança
                  </span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={correct} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Inventário e normas de procedimento
                  </span>
                </div>
              </div>
            </div>
            <div className="border-2 border-projeto-gray h-auto lg:mt-0 mt-10"></div>
            <div className="lg:mt-2 mt-10">
              <h1 className="text-xl text-center">
                DESVANTAGENS DE SE USAR UM{" "}
                <span className="text-projeto-blue">
                  SOFTWARE NÃO LICENCIADO
                </span>
              </h1>
              <div className="mt-16 lg:ml-20">
                <div className="flex items-center">
                  <img src={wrong} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Vulnerabilidade dos dados
                  </span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={wrong} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Falta de acesso ao suporte tecnológico
                  </span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={wrong} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Perda de credibilidade da empresa
                  </span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={wrong} alt="" className="w-12" />
                  <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                    Riscos de malwares (vírus)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-projeto-blue lg:px-32 px-5 lg:py-10 py-2 rounded-lg">
            <h3 className="text-2xl font-bold text-center">IMPORTANTE</h3>
            <p className="mt-3 text">
              A prática da pirataria é considerada crime. Cometido tanto por
              quem comercializa e distribui produtos piratas, como também quem
              faz a compra e uso deles. Assim, uma empresa ou um usuário final
              está sujeito a ser incriminado legalmente pelo uso de um software
              pirata.
            </p>
          </div>
        </div>
        <div className="lg:w-3/5 mt-56">
          <h1 className="lg:text-4xl text-3xl font-semibold text-center">
            SEGURANÇA DA <span className="text-projeto-blue">INFORMAÇÃO</span>
          </h1>
          <div className="lg:flex lg:mt-32 mt-16 justify-between">
            <div className="p-10 lg:p-0">
              <h3 className="text-2xl text-center lg:text-left">SENHAS</h3>
              <p className="mt-6">
                É evidente que, cada vez mais, temos contas registradas na
                internet tais como sites, apps, jogos etc… <br />
                <br />
                E é de suma importância termos uma boa senha para nossos logins.
                Aqui vão algumas dicas.
                <br />
                <br />
                Alguns sites, apps dentre outros, permitem a autenticação de
                dois fatores que é: Você só pode logar, trocar senha, trocar
                email se você permitir de algum dispositivo tornando mais
                seguro.
              </p>
            </div>
            <img src={seguranca} alt="" className="lg:w-2/5 lg:ml-32" />
          </div>
        </div>
        <div className="bg-projeto-gray50 lg:flex justify-between p-14 lg:w-3/5 mt-28 rounded-lg">
          <div className="mt-2 lg:w-2/4">
            <h1 className="text-xl text-center">
              ESTRATÉGIAS PARA SE
              <span className="text-projeto-blue"> CRIAR UMA SENHA FORTE</span>
            </h1>
            <div className="mt-16">
              <div className="flex items-center">
                <img src={correct} alt="" className="w-12" />
                <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                  No mínimo 8 caracteres
                </span>
              </div>
              <div className="flex items-center mt-6">
                <img src={correct} alt="" className="w-12" />
                <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                  Use letras maiúsculas e minúsculas, números e, pelo menos, um
                  caracter especial
                </span>
              </div>
              <div className="flex items-center mt-6">
                <img src={correct} alt="" className="w-12" />
                <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                  Invente uma palavra sem significado, mas que seja sonora e
                  fácil de lembrar
                </span>
              </div>
            </div>
          </div>
          <div className="border-2 border-projeto-gray h-auto lg:mt-0 mt-10"></div>
          <div className="mt-2 lg:ml-6">
            <h1 className="text-xl text-center">
              <span className="text-projeto-blue">O QUE NÃO FAZER </span>
              AO SE CRIAR UMA SENHA
            </h1>
            <div className="mt-16">
              <div className="flex items-center">
                <img src={correct} alt="" className="w-12" />
                <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                  Não use o mesmo nome da sua conta
                </span>
              </div>
              <div className="flex items-center mt-6">
                <img src={correct} alt="" className="w-12" />
                <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                  Não use nada relacionado a dados pessoais
                </span>
              </div>
              <div className="flex items-center mt-6">
                <img src={correct} alt="" className="w-12" />
                <span className="lg:ml-5 ml-2 lg:text-xl text-sm font-medium">
                  Não use sequências fáceis de serem decifradas
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 lg:w-3/5">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center">
              BOAS PRÁTICAS NO USO DE SENHAS
            </h1>
            <p className="text-center mt-4 w-1/2">
              Não basta apenas criar uma boa senha. É preciso também saber
              cuidar delas e usá-las corretamente, para que possam cumprir a sua
              função.
            </p>
          </div>
          <div className="flex justify-center mt-16 lg:items-center items-start flex-col lg:flex-row ml-5 lg:ml-0">
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2 mr-8 items-center lg:w-5/12 w-11/12 ">
              <img src={correct} alt="" className="lg:mr-9 mr-2 w-8" />
              <div>
                <h3 className="lg:text-lg text-xs ">
                  Use o bom senso na escolha da senha.
                </h3>
              </div>
            </div>
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2 items-center lg:w-5/12 w-11/12 mt-5 lg:mt-0">
              <img src={correct} alt="" className="lg:mr-9 mr-2 w-8" />
              <div>
                <h3 className="lg:text-lg text-xs">
                  Não "empreste" a sua senha para ninguém.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-9 lg:items-center items-start flex-col lg:flex-row ml-5 lg:ml-0">
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2 mr-8 items-center lg:w-5/12 w-11/12">
              <img src={correct} alt="" className="lg:mr-9 mr-2 w-8" />
              <div>
                <h3 className="lg:text-lg text-xs ">
                  Troque a sua senha periodicamente.
                </h3>
              </div>
            </div>
            <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2 items-center lg:w-5/12 w-11/12 mt-5 lg:mt-0">
              <img src={correct} alt="" className="lg:mr-9 mr-2 w-8" />
              <div>
                <h3 className="lg:text-lg text-xs ">
                  Nunca use a mesma senha em outras contas.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex border-projeto-gray border rounded-lg lg:py-6 py-2 lg:px-5 px-2 items-center mt-9 justify-center w-5/6 lg:w-full ml-5 lg:ml-0">
            <img src={correct} alt="" className="lg:mr-9 mr-2 w-8" />
            <div>
              <h3 className="lg:text-lg text-xs">
                Mantenha seu sistema atualizado e livre de malware (vírus,
                spyware dentre outros).
              </h3>
            </div>
          </div>
          <div className="mt-56">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="lg:w-5/12 lg:mr-24 text-center lg:text-left p-5">
                <h1 className="text-3xl font-semibold">HACKING</h1>
                <p className="mt-7 text-sm lg:text-base">
                  Hacking são as atividades que procuram comprometer
                  dispositivos digitais como computadores, smartphones, tablets
                  e até mesmo redes inteiras.
                  <br />
                  <br />
                  Embora o hacking possa não ser sempre malicioso, atualmente,
                  muitas referências a hacking e hackers os caracterizam como
                  uma atividade ilegal de criminosos cibernéticos motivados por
                  ganhos financeiros, protestos, coleta de informações
                  (espionagem) e, mesmo que seja apenas pela "emoção" do
                  desafio.
                </p>
              </div>
              <img src={hacker} alt="" className="h-64 lg:h-80 mt-10 lg:mt-0" />
            </div>
          </div>
          <div className="mt-56">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">
                PRINCIPAIS{" "}
                <span className="text-projeto-blue">MÉTODOS DE INVASÃO</span>{" "}
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-14">
              <div className="border-2 border-projeto-gray50 lg:px-7 px-2 lg:py-11 py-2 rounded-lg">
                <h3 className="text-xl font-medium">PHISHING</h3>
                <p className="text-base mt-7">
                  O Phishing ocorre quando uma instituição supostamente legítima
                  envia um e-mail falso, induzindo a pessoa a abrir e clicar nos
                  anexos por acreditar que seja algo verídico.
                  <br />
                  <br />
                  Criminosos usam alguns órgãos governamentais para efetuar o
                  Phishing, como a previdência social ou bancos públicos.
                </p>
              </div>
              <div className="border-2 border-projeto-gray50 lg:px-7 px-2 lg:py-11 py-2 rounded-lg">
                <h3 className="text-xl font-medium">VISHING</h3>
                <p className="text-base mt-7 ">
                  Vishing é uma abreviação de Voice Phishing, uma variação de
                  golpe aplicada por áudio. Um exemplo de vishing é quando a
                  pessoa recebe uma ligação para “confirmar” informações. Na
                  verdade, quem está ligando não tem informação nenhuma ou tem
                  muito poucas, mas vai, de alguma forma, te convencer a passar
                  mais dados. Muitas vezes, esse golpe imita a ligação de um
                  call center de banco, ou instituição financeira, para parecer
                  mais verdadeiro. Tem golpistas que incluem até mesmo o
                  barulhinho de espera da ligação.
                </p>
              </div>
              <div className="border-2 border-projeto-gray50 lg:px-7 px-2 lg:py-11 py-2 rounded-lg">
                <h3 className="text-xl font-medium">SMISHING</h3>
                <p className="text-base mt-7">
                  Smishing é outra variação de golpe feita de forma bem
                  específica: por SMS daí o nome: SMS Phishing.
                  <br />
                  <br />O golpe comum é enviar um SMS com uma promoção
                  imperdível, ou oferta de crédito mas, que te dá um link
                  malicioso ou pede informações que o fraudador vai usar depois.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-56">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
              <img
                src={politica}
                alt=""
                className="lg:w-5/12 w-10/12 lg:mr-14"
              />
              <div>
                <h1 className="text-3xl font-semibold text-center lg:text-left">
                  POLÍTICAS DE{" "}
                  <span className="text-projeto-blue">PROTEÇÃO</span>
                </h1>
                <p className="text-sm lg:text-base p-4 lg:p-0">
                  Todas essas variações de ataques induzem você a usar um canal
                  de comunicação que parece ser o da empresa, mas é do
                  fraudador. <br />
                  <br />
                  Adianta prestar atenção, evitar clicar em links ou só acessar
                  páginas com aquele cadeado de segurança ao lado do nome? Olha,
                  até adianta, mas não se iluda: os fraudadores conseguem
                  enganar isso também. <br />
                  <br />A forma efetiva de defesa é controlar o canal de
                  comunicação. Se você controla o canal, o fraudador não tem
                  como induzir nada. E como fazer isso? Bem, checando o canal
                  que você está usando.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-48">
            <div className="bg-projeto-blue rounded-lg lg:p-24 p-5 m-5 lg:m-5">
              <div>
                <h1 className="lg:text-3xl text-xl font-bold text-center lg:text-left">
                  DICAS DE <span className="text-projeto-black">SEGURANÇA</span>
                </h1>
                <p className="mt-6">
                  <span className="text-3xl font-bold">.</span>{" "}
                  <span className="font-semibold">
                    {" "}
                    Recebeu um e-mail do seu banco pedindo alguma ação?
                  </span>
                  <br />
                  <span className="ml-3 text-sm lg:text-base">
                    Abra uma nova aba e acesse direto o site do seu banco, ou
                    abra o app do seu banco para procurar aquela informação,
                    mensagem ou entrar em contato com o atendimento.{" "}
                  </span>
                  <br />
                  <br />
                  <span className="text-3xl font-bold">.</span>{" "}
                  <span className="font-semibold">
                    {" "}
                    Viu um anúncio nas redes sociais falando de uma promoção de
                    empréstimo?
                  </span>
                  <br />
                  <span className="ml-3 text-sm lg:text-base">
                    Acesse o site da instituição em uma nova aba do navegador e
                    confirme que a promoção existe por lá.
                  </span>
                  <br />
                  <br />
                  <span className="text-3xl font-bold">.</span>{" "}
                  <span className="font-semibold">
                    {" "}
                    Recebeu uma ligação do banco oferecendo um produto ou
                    pedindo alguma informação, por exemplo?
                  </span>
                  <br />
                  <span className="ml-3 text-sm lg:text-base">
                    Agradeça, desligue e ligue para o número público fornecido
                    pelo seu banco – jamais ligue para para o número fornecido
                    pela pessoa na ligação, ok?
                  </span>
                  <br />
                  <br />
                  <span className="text-3xl font-bold">.</span>{" "}
                  <span className="font-semibold">
                    {" "}
                    Recebeu um SMS oferecendo promoção ou desconto?
                  </span>
                  <br />
                  <span className="ml-3 text-sm lg:text-base">
                    Acesse o site oficial da loja ou instituição que
                    supostamente enviou a comunicação e procure um telefone para
                    contato.
                  </span>
                  <br />
                  <br />
                  <br />
                  As instituições financeiras têm uma série de barreiras e
                  camadas de proteção – mas é também importante alertar as
                  pessoas sobre o phishing, afinal, nesse tipo de golpe, os
                  criminosos contornam a maioria das barreiras, pois possuem as
                  senhas do usuário.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-44">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-6/12">
                <h1 className="text-3xl font-semibold text-center lg:text-left">
                  VOCÊ SABIA QUE SEU{" "}
                  <span className="text-projeto-blue">
                    WI-FI PODE ESTAR VULNERÁVEL!?
                  </span>
                </h1>
                <p className="mt-9 p-6 lg:p-0">
                  Atente-se em trocar usuário/senha padrão do seu roteador
                  wireless bem como não compartilhar a senha com outras pessoas,
                  crie senhas complexas, disponibilize QR code para autenticação
                  ou se possível crie rede limitada para visitantes.
                </p>
              </div>
              <div className="w-11/12 lg:w-5/12">
                <div className="flex border border-projeto-gray50 rounded-lg lg:p-7 p-4 items-center">
                  <img src={wifi} alt="" className="lg:w-14 w-10" />
                  <span className="lg:ml-7 ml-4 font-medium">
                    Crie senhas complexas
                  </span>
                </div>
                <div className="flex border border-projeto-gray50 rounded-lg lg:p-7 p-4 items-center mt-7">
                  <img src={people} alt="" className="lg:w-14 w-10" />
                  <span className="lg:ml-7 ml-4 font-medium">
                    Crie redes para uso pessoal e outra para visitantes
                  </span>
                </div>
                <div className="flex border border-projeto-gray50 rounded-lg lg:p-7 p-4 items-center mt-7">
                  <img src={noConnection} alt="" className="lg:w-14 w-10" />
                  <span className="lg:ml-7 ml-4 font-medium">
                    Limite a quantidade de Mbps para visitantes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-36">
            <div className="bg-projeto-blue rounded-lg lg:pl-14 pt-14 flex justify-center m-5 lg:m-0">
              <div>
                <h1 className="font-medium lg:text-3xl text-xl text-center pl-5">
                  AO NAVEGAR NA WEB PERCEBA QUE:
                </h1>
                <div className="flex flex-col lg:flex-row lg:justify-between mt-10 items-center">
                  <div className="lg:w-5/12 w-10/12">
                    <h1 className="lg:text-xl text-base mb-4 font-semibold text-center lg:text-left">
                      VOCÊ PODE ESTAR COMPARTILHANDO INFORMAÇÕES COMO:
                    </h1>
                    <span className="mr-2 text-3xl font-semibold">.</span>
                    Dados pessoais
                    <br />
                    <span className="mr-2  text-3xl font-semibold">.</span>
                    Localização do seu dispositivo
                    <br />
                    <span className="mr-2  text-3xl font-semibold">.</span>
                    Senhas
                  </div>
                  <img src={web} alt="" className="lg:w-5/12 w-8/12" />
                </div>
                <div className="mt-24 bg-white lg:mx-14 mx-2 mb-7 text-projeto-textDark lg:px-24 px-4 lg:py-10 py-2 text-center text-lg rounded-lg">
                  <span className="font-bold">
                    NAVEGUE SEMPRE EM SITE SEGUROS,
                  </span>{" "}
                  EVITE SALVAR SENHAS, E-MAILS, PERMITIR LOCALIZAÇÃO DENTRE
                  OUTRAS AÇÕES QUE AO NAVEGAR EM UM SITE POSSA TE SOLICITAR.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-44">
            <h1 className="text-center font-semibold text-2xl">
              COMO SABER SE O SITE É SEGURO?
            </h1>
            <p className="mt-9 text-center">
              Quando você acessa qualquer site inseguro o próprio navegador faz
              um alerta informando que o site não é seguro, caso esse alerta não
              for informado como saber se o site é seguro ou não?
            </p>
            <div className="mt-11 border-2 border-projeto-gray rounded-lg m-5 pb-5 lg:m-5 lg:pb-5">
              <h1 className="text-center mt-10 font-semibold lg:text-xl text-lg">
                CONFIRA O DOMÍNIO E A URL DO SITE
              </h1>
              <div className="flex flex-col lg:flex-row mt-16 items-center text-center lg:text-left lg:ml-16">
                <p className="lg:w-2/5 lg:mr-20">
                  Para que as maquinas possam se comunicar, assim como nós, elas
                  precisam de uma linguagem padrão, dessa forma as empresas
                  definiram o HTTP. Mas como as coisas evoluem, existe hoje uma
                  maneira mais segura dos dispositivos se comunicarem que é
                  usando o HTTPS. FICA A DICA: SEMPRE CONFIRA O “S” A MAIS.
                </p>
                <img src={url} alt="" className="mt-10 lg:mt-0 lg:w-96 w-60" />
              </div>
            </div>
            <span className="text-xs flex justify-center m-5 text-center">
              2022 © FAPAM . All Rights Reserved. CARTILHA DE BOAS PRÁTICAS DE
              TI
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
