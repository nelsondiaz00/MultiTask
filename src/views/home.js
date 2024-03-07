import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div id="contenedor_registro" className="home-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="MultiTask" />
      </Helmet>
      <div id="banner" className="home-container01">
        <Link to="/" className="home-navlink">
          <img
            alt="image"
            src="/external/multitask%20-%20logo.svg"
            className="home-image"
          />
        </Link>
        <div id="barra" className="home-container02">
          <a
            href="#contenedor_nosotros"
            id="link_nosotros"
            className="home-link"
          >
            Nosotros
          </a>
          <a
            href="#contenedor_servicios"
            id="link_servicios"
            className="home-link1"
          >
            Servicios
          </a>
          <a
            href="#contenedor_registrate"
            id="link_registrate"
            className="home-link2"
          >
            Regístrate
          </a>
          <Link
            to="/inicio-de-sesin"
            id="botonInicioSesion"
            className="home-navlink1 button"
          >
            Inicia Sesión
          </Link>
        </div>
      </div>
      <div id="contenedor_inicio" className="home-container03">
        <div className="home-container04">
          <h1 className="home-text">
            Tenemos todo lo que buscas.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <animate-on-reveal
            animation="tada"
            duration="5s"
            delay="1s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <h1 data-thq-animate-on-reveal="true" className="home-text01">
              Todo.
            </h1>
          </animate-on-reveal>
        </div>
        <a href="#contenedor_nosotros" className="home-link3">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </a>
      </div>
      <div id="contenedor_nosotros" className="home-container05">
        <div className="home-container06">
          <animate-on-reveal
            animation="fadeInUp"
            duration="600ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <span data-thq-animate-on-reveal="true" className="home-text02">
              QUIÉNES SOMOS
            </span>
          </animate-on-reveal>
          <span className="home-text03">
            En MultiTask, entendemos que cada obra de construcción es única.
          </span>
          <span className="home-text04">
            Nos enorgullece ser tu socio en la búsqueda de soluciones laborales
            eficientes y adaptadas a tus necesidades.
          </span>
        </div>
        <div className="home-container07">
          <span className="home-text05">
            Nuestra misión es satisfacer las necesidades de contratación de
            nuestros clientes y potenciar el crecimiento y desarrollo de
            individuos talentosos al proporcionarles oportunidades de empleo en
            proyectos innovadores y colaborativos. Nos esforzamos por construir
            relaciones sólidas y duraderas, basadas en la confianza y la
            transparencia, tanto con nuestros clientes como con nuestros
            empleados.
          </span>
          <span className="home-text06">
            En Multitask, visualizamos un futuro donde somos reconocidos como el
            referente indiscutible en soluciones de subcontratación de talento
            especializado. Nos esforzamos por ser la primera opción para
            empresas que buscan personal altamente calificado, y para
            profesionales que desean oportunidades laborales enriquecedoras.
            Nuestra visión es ser el motor que impulsa la excelencia en el mundo
            laboral, construyendo equipos y contribuyendo al éxito sostenible de
            nuestros clientes y colaboradores.
          </span>
        </div>
      </div>
      <div className="home-container08"></div>
      <div id="contenedor_servicios" className="home-container09">
        <span className="home-text07">Nuestros servicios</span>
        <span className="home-text08">Para empresas y empleados.</span>
        <div className="home-container10">
          <div id="sectorMetales" className="home-container11">
            <img
              alt="image"
              src="https://img.freepik.com/free-photo/steel-pipes-put-together_1112-903.jpg?w=900&amp;t=st=1708607809~exp=1708608409~hmac=d66e6df87ece010f11c33df6e30864f90a073319211d96e2850a4302a135255c"
              className="home-image1"
            />
            <span className="home-text09">Sector</span>
            <span className="home-text10">Metales</span>
          </div>
          <div id="sectorMateriales" className="home-container12">
            <img
              alt="image"
              src="https://img.freepik.com/free-photo/handyman-construction-site-process-drilling-wall-with-perforator_169016-12114.jpg?t=st=1708689653~exp=1708693253~hmac=e5de360bd78ae5a6ab5789544581435745f4515631164e6902f623aabf6faf6e&amp;w=900"
              className="home-image2"
            />
            <span className="home-text11">Sector</span>
            <span className="home-text12">Materiales</span>
          </div>
          <div id="sectorTransporte" className="home-container13">
            <img
              alt="image"
              src="https://img.freepik.com/free-photo/supply-chain-representation-with-forklift-high-angle_23-2149853164.jpg?t=st=1708688774~exp=1708692374~hmac=fd9946f5435ae3b6b9fbab9f4c83f95d8a02d079477b19c4a221532306ca3289&amp;w=900"
              className="home-image3"
            />
            <span className="home-text13">Sector</span>
            <span className="home-text14">Transporte</span>
          </div>
          <div id="sectorMadera" className="home-container14">
            <img
              alt="image"
              src="https://img.freepik.com/free-photo/carpenter-working-piece-wood-with-pencil_23-2148679125.jpg?t=st=1708689350~exp=1708692950~hmac=223e3642718d1f192c4f0ffb6bc160c2fa01177588c95025500bcb4729f41f6b&amp;w=900"
              className="home-image4"
            />
            <span className="home-text15">Sector</span>
            <span className="home-text16">Madera</span>
          </div>
          <div id="sectorFerrelectrica" className="home-container15">
            <img
              alt="image"
              src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.jpg?t=st=1708689515~exp=1708693115~hmac=bf3f8038d662ef047558bbf3e9151121138db13a749ce32b5dee760a21011c15&amp;w=900"
              className="home-image5"
            />
            <span className="home-text17">Sector</span>
            <span className="home-text18">Ferreléctrica</span>
          </div>
          <div id="sectorOtros" className="home-container16">
            <img
              alt="image"
              src="https://img.freepik.com/free-photo/people-collage-design_23-2148888271.jpg?t=st=1708689707~exp=1708693307~hmac=def6ad3026189e7102c5cb94d203ccfe633d09f746b2a59a36c4aff44d95616c&amp;w=1060"
              className="home-image6"
            />
            <span className="home-text19">Sector</span>
            <span className="home-text20">Otros</span>
          </div>
        </div>
        <span className="home-text21">¿No encuentras lo que buscas?</span>
        <button id="botonPostula" type="button" className="home-button button">
          Postula tu solicitud
        </button>
      </div>
      <div id="contenedor_registrate" className="home-container17">
        <span className="home-text22">¡Trabaja con nosotros!</span>
        <div className="home-container18">
          <div id="divEmpresa" className="home-container19">
            <img
              alt="image"
              src="https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15861.jpg?w=1380&amp;t=st=1709582205~exp=1709582805~hmac=2b5fdd3a2e598ac6d8d043b159ed6fc3467f7c03a117a3378a7f2756dc35a77e"
              className="home-image7"
            />
            <div className="home-container20">
              <span className="home-text23">
                <span>
                  Encuentra el
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text25">personal ideal</span>
                <span> para tu proyecto con MultiTask.</span>
              </span>
              <div className="home-container21">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M768 690.517v-78.976c0-82.347-66.987-149.333-149.333-149.333-35.285 0-64-28.715-64-64v-64.725c49.536-17.707 85.333-64.597 85.333-120.149 0-70.571-57.429-128-128-128s-128 57.429-128 128c0 55.552 35.797 102.443 85.333 120.107v64.768c0 35.285-28.715 64-64 64-82.347 0-149.333 66.987-149.333 149.333v78.976c-49.536 17.707-85.333 64.597-85.333 120.149 0 70.571 57.429 128 128 128s128-57.429 128-128c0-55.552-35.797-102.443-85.333-120.149v-78.976c0-35.285 28.715-64 64-64 41.771 0 79.531-17.365 106.667-45.141 27.136 27.776 64.896 45.141 106.667 45.141 35.285 0 64 28.715 64 64v78.976c-49.536 17.707-85.333 64.597-85.333 120.149 0 70.571 57.429 128 128 128s128-57.429 128-128c0-55.552-35.797-102.443-85.333-120.149zM298.667 853.333c-23.552 0-42.667-19.157-42.667-42.667s19.115-42.667 42.667-42.667 42.667 19.157 42.667 42.667-19.115 42.667-42.667 42.667zM512 170.667c23.552 0 42.667 19.157 42.667 42.667s-19.115 42.667-42.667 42.667-42.667-19.157-42.667-42.667 19.115-42.667 42.667-42.667zM725.333 853.333c-23.552 0-42.667-19.157-42.667-42.667s19.115-42.667 42.667-42.667 42.667 19.157 42.667 42.667-19.115 42.667-42.667 42.667z"></path>
                </svg>
                <div className="home-container22">
                  <span className="home-text27">Diversidad de talento</span>
                  <span className="home-text28">
                    Contamos con una amplia red de profesionales con diversas
                    habilidades y experiencia en el ámbito de la construcción.
                  </span>
                </div>
              </div>
              <div className="home-container23">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M469.333 256c94.123 0 170.667 76.544 170.667 170.667s-76.544 170.667-170.667 170.667c-94.037 0-170.581-76.544-170.581-170.667s76.544-170.667 170.581-170.667M469.333 170.667c-141.397 0-255.915 114.603-255.915 256s114.517 256 255.915 256c141.312 0 256-114.688 256-256 0-141.397-114.688-256-256-256z"></path>
                  <path d="M725.333 853.333h-170.667v-52.48c70.016-15.829 134.229-50.688 186.155-102.656 72.491-72.491 112.512-168.96 112.512-271.488 0-88.192-29.483-171.861-83.968-239.744l28.8-28.715c16.683-16.683 16.683-43.648 0.043-60.373-16.725-16.725-43.691-16.64-60.373-0.043l-87.552 87.424 30.208 30.208c56.405 56.363 87.509 131.413 87.509 211.2s-31.104 154.752-87.509 211.157-131.371 87.509-211.157 87.509-154.752-31.104-211.157-87.509c-16.683-16.683-43.648-16.683-60.331 0-16.683 16.64-16.683 43.648 0 60.331 72.491 72.491 168.917 112.512 271.488 112.512v42.667h-170.667c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h426.667c23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667z"></path>
                </svg>
                <div className="home-container24">
                  <span className="home-text29">Flexibilidad a tu medida</span>
                  <span className="home-text30">
                    Adaptamos nuestros servicios a tus proyectos, ya sea una
                    tarea específica o apoyo general en la obra.
                  </span>
                </div>
              </div>
              <div className="home-container25">
                <svg viewBox="0 0 1024 1024" className="home-icon07">
                  <path d="M469.333 853.333c-34.176 0-66.347-13.312-90.496-37.504l-170.667-170.667c-24.192-24.149-37.504-56.32-37.504-90.496s13.312-66.347 37.504-90.539c48.341-48.341 132.651-48.341 180.992 0l50.688 50.688 130.944-235.648c22.443-40.619 65.408-65.877 111.957-65.877 21.632 0 43.179 5.589 62.123 16.128 29.867 16.64 51.456 43.861 60.885 76.715 9.429 32.896 5.419 67.456-11.221 97.365l-213.333 384c-19.371 34.901-54.571 59.051-94.123 64.597-5.931 0.811-11.819 1.237-17.749 1.237zM298.667 512c-11.435 0-22.101 4.437-30.165 12.501s-12.501 18.731-12.501 30.165 4.437 22.101 12.501 30.165l170.667 170.667c9.515 9.429 22.315 14.080 36.011 12.075 13.312-1.835 25.003-9.899 31.445-21.504l213.333-384c5.547-9.941 6.869-21.461 3.755-32.427-3.115-10.965-10.368-20.053-20.395-25.6-20.181-11.264-46.976-3.328-57.899 16.555l-185.899 334.549-130.645-130.645c-8.107-8.064-18.773-12.501-30.208-12.501z"></path>
                </svg>
                <div className="home-container26">
                  <span className="home-text31">Eficiencia comprobada</span>
                  <span className="home-text32">
                    Hemos demostrado nuestra capacidad para aumentar la
                    productividad y el éxito de proyectos a lo largo del tiempo.
                  </span>
                </div>
              </div>
              <button
                id="botonRegEmp"
                type="button"
                className="home-button1 button"
              >
                Comienza ya
              </button>
            </div>
          </div>
          <div id="divPostulado" className="home-container27">
            <div className="home-container28">
              <span className="home-text33">
                <span>
                  Encuentra
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text35">oportunidades laborales</span>
                <span> excepcionales con MultiTask.</span>
              </span>
              <div className="home-container29">
                <div className="home-container30">
                  <span className="home-text37">Variedad de talentos</span>
                  <span className="home-text38">
                    Accede a una amplia gama de proyectos de construcción en
                    diferentes industrias.
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon09">
                  <path d="M512 597.333c117.931 0 213.333-95.488 213.333-213.333s-95.403-213.333-213.333-213.333-213.333 95.488-213.333 213.333 95.403 213.333 213.333 213.333zM512 256c70.571 0 128 57.429 128 128s-57.429 128-128 128-128-57.429-128-128 57.429-128 128-128z"></path>
                  <path d="M853.333 640c58.923 0 106.667-47.659 106.667-106.667 0-58.923-47.744-106.667-106.667-106.667-58.965 0-106.667 47.744-106.667 106.667 0 59.008 47.701 106.667 106.667 106.667zM853.333 469.333c35.285 0 64 28.715 64 64s-28.715 64-64 64-64-28.715-64-64 28.715-64 64-64z"></path>
                  <path d="M853.333 665.173c-56.789 0-99.499 17.323-124.459 41.344-47.573-39.168-122.795-66.517-216.875-66.517-96.683 0-170.453 27.648-217.259 66.731-25.429-24.107-68.608-41.6-124.075-41.6-93.355 0-149.333 46.549-149.333 93.141 0 23.253 55.979 46.592 149.333 46.592 25.771 0 48.896-2.176 69.248-5.675-0.427 3.84-1.707 7.68-1.707 11.52 0 42.667 102.613 85.333 273.792 85.333 160.512 0 273.792-42.667 273.792-85.333 0-3.627-0.469-7.253-0.896-10.88 19.755 3.115 42.496 5.035 68.437 5.035 87.509 0 149.333-23.339 149.333-46.592 0-46.592-58.581-93.099-149.333-93.099zM170.667 762.155c-55.851 0-88.235-8.832-103.125-15.104 10.197-17.28 42.795-39.253 103.125-39.253 47.232 0 78.379 14.976 94.208 30.123-3.584 4.864-7.211 9.685-10.027 14.677-19.285 5.077-47.275 9.557-84.181 9.557zM512 810.667c-92.288 0-149.376-13.312-178.517-23.936 22.229-28.928 81.835-61.397 178.517-61.397 92.544 0 153.173 32.469 176.981 60.8-32.213 11.52-92.245 24.533-176.981 24.533zM853.333 762.155c-38.997 0-65.963-4.395-84.181-9.088-3.072-5.419-6.613-10.752-10.581-16 15.189-14.72 45.696-29.227 94.763-29.227 56.491 0 91.349 21.376 102.571 38.869-16.64 6.955-51.413 15.445-102.571 15.445z"></path>
                  <path d="M170.667 640c58.923 0 106.667-47.744 106.667-106.667 0-58.837-47.744-106.667-106.667-106.667-58.965 0-106.667 47.829-106.667 106.667 0 58.923 47.701 106.667 106.667 106.667zM170.667 469.333c35.285 0 64 28.715 64 64s-28.715 64-64 64-64-28.715-64-64 28.715-64 64-64z"></path>
                </svg>
              </div>
              <div className="home-container31">
                <div className="home-container32">
                  <span className="home-text39">Crecimiento personal</span>
                  <span className="home-text40">
                    Desarrolla habilidades y experiencia trabajando en equipos
                    dinámicos y proyectos innovadores.
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M255.957 725.333c-28.885 0-57.259-9.984-79.915-28.075-26.709-21.376-43.477-51.84-47.232-85.803-3.797-33.963 5.888-67.413 27.264-94.123l170.667-213.333c41.728-52.267 123.008-62.763 176.768-22.315l71.424 53.504 93.184-116.437c24.363-30.549 60.8-48.085 99.925-48.085 28.971 0 57.301 9.899 79.915 28.032 26.709 21.376 43.563 51.883 47.275 85.888s-5.973 67.413-27.349 94.037l-170.667 213.333c-41.685 52.309-122.965 62.763-176.768 22.443l-71.424-53.589-93.184 116.437c-24.32 30.549-60.757 48.085-99.883 48.085zM426.667 341.333c-13.056 0-25.216 5.845-33.323 15.957l-170.667 213.376c-7.125 8.875-10.368 20.096-9.088 31.317 1.28 11.349 6.869 21.504 15.744 28.587 9.728 7.808 19.84 9.429 26.624 9.429 13.056 0 25.216-5.845 33.365-16.043l144.853-181.077 137.557 103.253c17.92 13.483 45.056 9.856 58.923-7.509l170.667-213.376c7.125-8.875 10.325-20.011 9.088-31.317-1.28-11.349-6.869-21.504-15.744-28.587-9.685-7.765-19.797-9.387-26.624-9.387-13.056 0-25.216 5.845-33.365 16.043l-144.853 180.992-137.557-103.125c-7.467-5.632-16.299-8.533-25.6-8.533z"></path>
                  <path d="M810.667 896h-597.333c-23.552 0-42.667-19.072-42.667-42.667s19.115-42.667 42.667-42.667h597.333c23.552 0 42.667 19.072 42.667 42.667s-19.115 42.667-42.667 42.667z"></path>
                </svg>
              </div>
              <div className="home-container33">
                <div className="home-container34">
                  <span className="home-text41">Flexibilidad laboral</span>
                  <span className="home-text42">
                    Encuentra oportunidades que se adapten a tus habilidades y
                    preferencias.
                  </span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon17">
                  <path d="M682.667 554.667c0-23.467-19.2-42.667-42.667-42.667h-128c-23.467 0-42.667 19.2-42.667 42.667s19.2 42.667 42.667 42.667h128c23.467 0 42.667-19.2 42.667-42.667z"></path>
                  <path d="M512 256c164.651 0 298.667 134.016 298.667 298.667s-134.016 298.667-298.667 298.667-298.667-134.016-298.667-298.667 134.016-298.667 298.667-298.667M512 170.667c-212.096 0-384 171.904-384 384s171.904 384 384 384 384-171.904 384-384-171.904-384-384-384z"></path>
                  <path d="M554.667 426.667c0-23.467-19.2-42.667-42.667-42.667s-42.667 19.2-42.667 42.667v128c0 23.467 19.2 42.667 42.667 42.667s42.667-19.2 42.667-42.667v-128z"></path>
                  <path d="M512 341.333c117.632 0 213.333 95.701 213.333 213.333s-95.701 213.333-213.333 213.333-213.333-95.701-213.333-213.333 95.701-213.333 213.333-213.333M512 298.667c-141.312 0-256 114.603-256 256 0 141.312 114.688 256 256 256s256-114.688 256-256c0-141.397-114.688-256-256-256z"></path>
                </svg>
              </div>
              <button
                id="botonRegPost"
                type="button"
                className="home-button2 button"
              >
                Comienza ya
              </button>
            </div>
            <img
              alt="image"
              src="https://img.freepik.com/foto-gratis/empresaria-joven-sonriente-que-muestra-contrato-al-socio_1262-18108.jpg?w=1380&amp;t=st=1709582166~exp=1709582766~hmac=b152215d5cb9564621d90fdac374c21c8ebc5ca3710f1645d5f8dd48d079a5c5"
              className="home-image8"
            />
          </div>
        </div>
      </div>
      <div className="home-container35">
        <a href="#banner" className="home-link4 button">
          ↑
        </a>
      </div>
    </div>
  )
}

export default Home
