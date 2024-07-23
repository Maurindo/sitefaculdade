import styles from './quemsomos.module.css';

function QuemSomos() {
    return(
        <div className={styles.corpo}>
            <h2 className={styles.titulo}>Quem somos</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                sit amet mollis nisl. Aliquam sit amet diam ac quam dignissim lobortis 
                vel ac sapien. Proin placerat cursus risus. Duis blandit varius hendrerit. 
                Vivamus sed placerat turpis, vel viverra neque. Duis at tempor magna, sit 
                amet gravida purus. Nulla facilisi. Vivamus accumsan risus vitae risus blandit 
                venenatis. Sed sed nisl tempor, tincidunt elit sit amet, facilisis neque. 
                Donec rutrum mauris odio, gravida vestibulum nulla cursus vitae. Cras vestibulum 
                lectus sed augue viverra ultrices ac nec lectus. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. In vestibulum cursus elit, vitae placerat lectus laoreet a.
            </p>
            
            <div className={styles.tabela}>
            <h2>5 motivos para estudar</h2>
                <ol>
                    <li>Material sempre atualizado</li>
                    <li>Tablets em sala de aula</li>
                    <li>Professores renomeados</li>
                    <li>Universidade bem avaliada</li>
                    <li>Ótima localização</li>
                </ol>
            </div>

            <p><hr/></p>

            <h2 className={styles.titulo}>Objetivos</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet 
                mollis nisl. Aliquam sit amet diam ac quam dignissim lobortis vel ac sapien. 
                Proin placerat cursus risus. Duis blandit varius hendrerit. Vivamus sed placerat 
                turpis, vel viverra neque. Duis at tempor magna, sit amet gravida purus. Nulla facilisi. 
                Vivamus accumsan risus vitae risus blandit venenatis. Sed sed nisl tempor, tincidunt 
                elit sit amet, facilisis neque. Donec rutrum mauris odio, gravida vestibulum nulla 
                cursus vitae. Cras vestibulum lectus sed augue viverra ultrices ac nec lectus. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum cursus elit, 
                vitae placerat lectus laoreet a.
            </p>


            <div>
                <h4>Todos os direitos reservados</h4>
            </div>
              
        </div>
    );
}

export default QuemSomos;