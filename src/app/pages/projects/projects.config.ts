import { ProjectOptions } from 'src/app/types/projectOptions';

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
  }
];
