import Header from '../../components/Header/Header'
import Card from "../../components/Card/Card"
import Title from "../../components/Title/Title"
import Image from "../../components/Image/Image"
import Text from "../../components/Text/Text"


import "./sobre.css"

import image from '../../assets/project1.svg'
import DOLORESGIT from "../../assets/dolores-git.webp"
import DOLORESHTML from "../../assets/dolores-html.gif"
import DOLORESCSS from "../../assets/dolores-css.gif"
import DOLORESJS from "../../assets/dolores-js.gif"

import ABOUTHAY from "../../assets/imgthay.jpg"



function Sobre() {
    return(
    <>
        <Header image={image} description="">
            Sobre
        </Header>

        <hr />

        <Card>
            <div className="aboutme_card">
                  <Image url={ABOUTHAY} description='No imagem contém: Thayanne, uma jovem negra, de cabelo crespo e curto, na altura do ombro. Usando brincos em formato de argola e blusa branca. Esbanja em seu rosto um sorriso largo.' />
                  <div className="aboutme_card-text">
                        <Title title="Prazer, Thay"/>
                        <Text text="Aluna da {reprograma} do curso de front-end, 25 anos, do Rio de Janeiro. Sou uma tecnologista entusiasmada, dando os primeiros passos na jornada de desenvolvimento de software." />
                  </div>
            </div>
      </Card>

      <hr />

      <div className="container">
            <Card class="information_card">
                  <Title title="GIT"/>
                  <Image url={DOLORESGIT} description='No gif contém: Dolores, uma jovem latina com expressão questionadora e surpresa, cabelos cacheado no tom castanho e preso em um coque, com um turbante meia cabeça vermelho formando um laço no topo. Brincos dourados em formato de coração, no pescoço uma gargantilha vermelha com um pingente no mesmo tom com detalhes em amarelo. Uma blusa ciganinha em tons de marrom e bege com detalhes em vermelho e Mirabel com seus cabelos curto, preto e encaracolados, óculos arredondados e expressão de susto. Além disto, contém a legenda: Do you understand?' />
                  <Text text="É uma ferramenta de versionamento de código utilizada para garantir que ao longo de projetos todas as alterações sejam salvas. Utilizando o sistema de commits para documentar as alterações feitas, é uma ótima forma de controlar e seguir as alterações realizadas durante o processo." />
            </Card>

            <Card class="information_card">
                  <Title title="HTML"/>
                  <Image url={DOLORESHTML} description='No gif contém: Dolores, uma jovem latina com expressão apaixonada, cabelos cacheado no tom castanho e preso em um coque, com um turbante meia cabeça vermelho formando um laço no topo. Brincos dourados em formato de coração, no pescoço uma gargantilha vermelha com um pingente no mesmo tom com detalhes em amarelo. Uma blusa ciganinha em tons de marrom e bege com detalhes em vermelho e saia vermelha. Além disto, Dolores encontra-se com a mão encostada no peito, na direção do coração e suspirando.' />
                  <Text text="O HTML não é em si uma linguagem de programação mas sim uma linguagem de marcação em hipertexto. Através do html é possível criar a estrutura para uma aplicação ou página web. Vale resaltar que com HTML é possível apenas criar páginas ou aplicações estáticas, sendo necessário uma linguagem de programação (como JavaScript, por exemplo) para transforma-la em dinâmica. " />
            </Card>

            <Card class="information_card">
                  <Title title="CSS"/>
                  <Image url={DOLORESCSS} description='No gif contém: Dolores, uma jovem latina com expressão entusiasmada e animada, cabelos cacheado no tom castanho e preso em um coque, com um turbante meia cabeça vermelho formando um laço no topo. Brincos dourados em formato de coração, no pescoço uma gargantilha vermelha com um pingente no mesmo tom com detalhes em amarelo. Uma blusa ciganinha em tons de marrom e bege com detalhes em vermelho. Além disto, Dolores encontra-se com a mão esquerda na cintura e a mão direita livre ao lado do corpo.' />
                  <Text text="O CSS não é uma linguagem de programação e sim de estilização. Através do CSS, é possível definir estilos para páginas HTML, como por exemplo alterar o tipo de fonte do texto, aplicar cor de fundo em um elemento, inserir animações... trazendo várias possibilidades para o estilo da aplicação." />
            </Card>

            <Card class="information_card">
                  <Title title="JAVASCRIPT"/>
                  <Image url={DOLORESJS} description='No gif contém: Dolores, uma jovem latina com expressão apreensiva, cabelos cacheado no tom castanho e preso em um coque, com um turbante meia cabeça vermelho formando um laço no topo. Brincos dourados em formato de coração, no pescoço uma gargantilha vermelha com um pingente no mesmo tom com detalhes em amarelo. Uma blusa ciganinha em tons de marrom e bege com detalhes em vermelho. Além disto, Dolores encontra-se sentada em uma cadeira amarela, segurando uma taça de vinho e a sua frente encontra-se Mirabel, com seus cabelos curto, preto e encaracolados, óculos arredondados e expressão apreensiva também. Mirabel veste uma blusa ciganinha com detalhes em preto, rosa, verde e lilás..' />
                  <Text text="Criado em 1995, criado pelo programador Brendan Eich para adicionar interatividade ao Netscape, o JavaScript (que inicialmente se chamava Mocha) e uma das linguagens de programação mais famosas atualmente,  que permite desenvolver aplicações tanto em front, como em backend (através do Node). É a partir do JavaScript que conseguimos transformar uma página HTML em dinâmica, por exemplo." />
            </Card>
      </div>
    </>
    )
}

export default Sobre