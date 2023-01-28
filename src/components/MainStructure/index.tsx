import Screen from '../Screen/index'
import styles from './MainStructure.module.scss'
import cn from 'clsx'
import ControlShape from '../Icons/ControlShape'
import CircleIcon from '../Icons/CircleIcon'
import CrossIcon from '../Icons/CrossIcon'
import TriangleIcon from '../Icons/TriangleIcon'
import SquareIcon from '../Icons/SquareIcon'

const MainStructure = () => {
    return(
        <div className={cn(styles.root)}>
            <img className={styles.referenceImage} src='./psvita_reference.png' alt='imagen de referencia'/>
            <div className={styles.background}>
                <div className={styles.leftStick}>
                    <ControlShape
                        background={'#616161'}
                    />
                    <div className={cn(styles.buttons)}>
                    </div>
                    <div className={styles.analogicContainer}>
                        <div className={styles.analogicBaseGradient}>
                           <div className={styles.analogicItem}></div> 
                        </div>
                    </div>
                    <div className={styles.speakers}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Screen />
                <div className={styles.rightStick}>
                    <ControlShape 
                        background={'#616161'}
                    />
                    <div className={cn(styles.buttons)}>
                        <div className={styles.buttonItem}>
                            <CircleIcon strokeColor='#c5c6c7'/>  
                        </div>
                        <div className={styles.buttonItem}>
                            <TriangleIcon strokeColor='#c5c6c7' />
                        </div>
                        <div className={styles.buttonItem}>
                            <CrossIcon strokeColor='#c5c6c7' />
                        </div>
                        <div className={styles.buttonItem}>
                            <SquareIcon strokeColor='#c5c6c7' />
                        </div>
                    </div>
                    <div className={styles.analogicContainer}>
                        <div className={styles.analogicBaseGradient}>
                           <div className={styles.analogicItem}></div> 
                        </div>
                    </div>
                    <div className={styles.speakers}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainStructure