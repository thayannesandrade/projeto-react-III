import { useEffect, useState } from "react" 
import axios from 'axios'


import Header from '../../components/Header/Header'
import Title from "../../components/Title/Title"

import { BsArrowReturnRight } from 'react-icons/bs'


import './portfolio.css'

import IMAGE from '../../assets/about-me.svg'
import DIARIO from "../../assets/meu-diario-reprograma.png"
import GIT from "../../assets/github-search.png"
import LIST from "../../assets/todo-list.png"
import MARAVILHOSA from "../../assets/mãe-beata-de-yemoja.png"


const listOfProjects = [
  {
    id: 1,
    name: 'Meu diário {reprograma}',
    description: 'Um site com conteúdos que aprendi ao logo do bootcamp do {reprograma}.',
    techs: 'Feito com React: fundamentos, componentes, props e children.',
    image: DIARIO,
    link: 'https://github.com/thayannesandrade/diario-react'
  },
  {
    id: 2,
    name: 'Github Search',
    description: 'Uma aplicação em feita com vanilla js para buscar usuário na api do github.',
    techs: 'Feito com html 5, css 3, vanilla js e api do github.',
    image: GIT,
    link: 'https://github.com/thayannesandrade/github-search'
  },
  {
    id: 3,
    name: 'ToDo List',
    description: 'Uma aplicação feita com vanilla js que permite a gestão de tarefas do dia a dia.',
    techs: 'Feito com html 5, css 3 e vanilla js (eventos).',
    image: LIST,
    link: 'https://github.com/thayannesandrade/todo-list'
  },
  {
    id: 4,
    name: 'M de Maravilhosa',
    description: 'Um site sobre a história de mãe Beata de Yemoja.',
    techs: 'Feito com html 5 e css 3.',
    image: MARAVILHOSA,
    link: 'https://github.com/thayannesandrade/m-de-maravilhosa'
  }
]


function Portfolio() {
    const [repository, setRepository] = useState([])
    const url = 'https://api.github.com/users/thayannesandrade/repos'
  
    useEffect(() => {
      axios
      .get(url)
      .then((response) => setRepository(response.data))
    })
    
return(
    <>
        <Header image={IMAGE} description="">
            Meus projetos
        </Header>

        <Title title="4 projetos feitos na reprograma" class="title"/>

        <div className="wrapper_cards">
        {
        listOfProjects.map(project => {
            return(
            <div className="card" key={project.id}>
                <h3>{project.name}</h3>
                <img src={project.image} alt={project.name} />
                <p>{project.description}</p>
                <a href={project.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#111"/>
                </a>
            </div>
            )
        })
        }
        </div>

        <Title title="Mais projetos no meu Github" class="title"/>

        <div className="wrapper_gitCards">
        {
        repository.map(repo => {
            return(
            <div className="gitCard" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#111"/>
                </a>
            </div>
            )
        })
        }
        </div>
    </>
  )
}

export default Portfolio