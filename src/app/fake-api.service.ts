import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let skills = [
      { id: 1, name: 'Communication', description: 'Sou um comunicador habilidoso e eficaz, com um forte histórico de sucesso na comunicação com uma variedade de públicos. Posso articular minhas ideias de forma clara e concisa, tanto verbalmente quanto por escrito. Também sou um bom ouvinte e posso entender e responder às necessidades dos outros.', pic: 'https://cdn.pixabay.com/photo/2016/10/25/18/41/design-1769698_960_720.png', likes: 1 },
      { id: 2, name: 'Coding', description: 'Sou um programador com experiência na criação em desenvolvimento web e mobile. Tenho experiência em uma variedade de linguagens e plataformas, incluindo Javascript, Angular, C# e .NET.', pic: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg', likes: 1 },
      { id: 3, name: 'Time Management', description: 'Sou uma pessoa organizada e eficiente, com um forte histórico de sucesso no gerenciamento de tempo. Sou capaz de definir metas e prazos, priorizar tarefas e gerenciar minha carga de trabalho de forma eficaz. Também sou capaz de identificar e gerenciar distrações, e sou capaz de trabalhar de forma independente e em equipe.', pic: 'https://cdn.pixabay.com/photo/2016/11/19/00/12/wave-1837426_960_720.png', likes: 1 },
      { id: 4, name: 'Problem Solving', description: 'Sou um solucionador de problemas habilidoso e eficaz, com um forte histórico de sucesso na resolução de problemas complexos. Sou capaz de identificar a raiz do problema, gerar soluções criativas e implementar soluções de forma eficaz. Também sou capaz de trabalhar de forma eficaz com outros para resolver problemas.', pic: 'https://cdn.pixabay.com/photo/2017/02/01/20/14/retro-2031321_960_720.png', likes: 1 },
      { id: 5, name: 'UX Design', description: 'Tenho experiência em uma variedade de disciplinas, incluindo pesquisa de usuário, design de interface, design de interação e usabilidade. Sou também um jogador em equipe e sou capaz de trabalhar de forma eficaz com outros designers, desenvolvedores e gerentes de produto.', pic: 'https://cdn.pixabay.com/photo/2014/12/11/22/10/board-564815_960_720.jpg', likes: 1 },
      { id: 6, name: 'Collaboration', description: 'Sou capaz de ouvir e entender as perspectivas dos outros, e sou capaz de trabalhar com eles para alcançar objetivos comuns.', pic: 'https://cdn.pixabay.com/photo/2018/10/04/13/55/note-3723689_960_720.jpg', likes: 1 }
    ];

    return { skills };
  }
}
