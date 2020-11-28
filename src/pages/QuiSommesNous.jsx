import React from 'react'
import '../styles/quiSommesNous.css';
import jojoImage from '../images/jonathan-daviau-portrait-2.jpg';
import jojozImage from '../images/jonathan-stab-portrait.jpg';
import atelier001Image from '../images/atelier-la-hutte-001.jpg';


const QuiSommesNous = () => {
    return (
        <div id="quisommesnous-main-container">
            <h1>Qui somme-nous ?</h1>

            <div className="quisommesnous-bloc">
                <div className="image-quisommesnous">
                    <img src={jojoImage} alt="jonathan daviau en train de travailler"/>
                </div>

                <div className="text-quisommesnous">
                    <h2>Jonathan Daviau</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus reprehenderit doloribus ipsum cupiditate nostrum quo voluptatibus optio et placeat, nobis beatae ullam officia sunt nam minus error unde fuga perferendis, a asperiores ipsa doloremque aut voluptatem aspernatur? Maiores quia, doloremque nobis molestiae pariatur tenetur minima repudiandae placeat quisquam perspiciatis nemo?</p>
                    <br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quasi nemo dicta aut sint enim nihil laboriosam. Impedit quos perferendis possimus, labore ab tempore? Rem officiis veritatis architecto harum exercitationem.</p>
                </div>
            </div>

            <div className="quisommesnous-bloc">

                <div className="text-quisommesnous">
                    <h2>Jonathan Stab</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus reprehenderit doloribus ipsum cupiditate nostrum quo voluptatibus optio et placeat, nobis beatae ullam officia sunt nam minus error unde fuga perferendis, a asperiores ipsa doloremque aut voluptatem aspernatur? Maiores quia, doloremque nobis molestiae pariatur tenetur minima repudiandae placeat quisquam perspiciatis nemo?</p>
                    <br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quasi nemo dicta aut sint enim nihil laboriosam. Impedit quos perferendis possimus, labore ab tempore? Rem officiis veritatis architecto harum exercitationem.</p>
                </div>
                <div className="image-quisommesnous">
                    <img src={jojozImage} alt="jonathan daviau en train de travailler"/>
                </div>
            </div>

            <div className="quisommesnous-bloc">

                <div className="image-atelier">
                    <img src={atelier001Image} alt="jonathan daviau en train de travailler" />
                </div>

                <div className="text-atelier">
                    <h2>L'atelier</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus reprehenderit doloribus ipsum cupiditate nostrum quo voluptatibus optio et placeat, nobis beatae ullam officia sunt nam minus error unde fuga perferendis, a asperiores ipsa doloremque aut voluptatem aspernatur? Maiores quia, doloremque nobis molestiae pariatur tenetur minima repudiandae placeat quisquam perspiciatis nemo?</p>
                </div>
            </div>


        </div>
    )
}

export default QuiSommesNous
