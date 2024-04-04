import { ProjectOptions } from 'src/app/@backoffice/models/projectOptions';

const gitBaseUrl: string = 'https://viniciusbernardo22.github.io/';
const imagePath: string = '../../../assets/imgs/';
export const projectsConfig: ProjectOptions[] = [
  {
    id: 1,
    githubLink: gitBaseUrl + 'BateriaJS',
    src: imagePath + 'bateria.png',
    projectTitle: 'Bateria',
  },
  {
    id: 2,
    githubLink: gitBaseUrl + 'RelogioJS',
    src: imagePath + 'relogio.png',
    projectTitle: 'Relógio Analógico',
  },
  {
    id: 3,
    githubLink: gitBaseUrl + 'CargaFacil',
    src: imagePath + 'carga.png',
    projectTitle: 'Carga Fácil',
  },
  {
    id: 4,
    githubLink: gitBaseUrl + 'crachanlw',
    src: imagePath + 'cracha.png',
    projectTitle: 'Crachá NLW',
  },
  {
    id: 5,
    githubLink: gitBaseUrl + 'OpenWeather',
    src: imagePath + 'openWeather.png',
    projectTitle: 'Consulta de Clima',
  },
  {
    id: 6,
    githubLink: gitBaseUrl + 'Javax-mail-Service',
    src: 'https://www.jscape.com/hubfs/464.png',
    projectTitle: 'Serviço de Envio de e-mail',
  },
  {
    id: 7,
    githubLink: gitBaseUrl + 'CleanArchMvc',
    src: "https://miro.medium.com/v2/resize:fit:880/1*O4pMWCi5kZi20SNOR6V33Q.png",
    projectTitle: "CleanArchMvc"
  },
  {
    id: 8,
    githubLink: gitBaseUrl + 'JwtAuth_AspNet',
    src: "https://t4.ftcdn.net/jpg/06/09/34/39/360_F_609343994_YZvLlJSVHMLQ7H7S68QnbTQ85sYOqmln.jpg",
    projectTitle: "JwtAuth_AspNet"
  },
];
