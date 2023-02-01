import Screen from '../Screen/index'
import styles from './MainStructure.module.scss'
import cn from 'clsx'
import ControlShape from '../Icons/ControlShape'
import CircleIcon from '../Icons/CircleIcon'
import CrossIcon from '../Icons/CrossIcon'
import TriangleIcon from '../Icons/TriangleIcon'
import SquareIcon from '../Icons/SquareIcon'
import Structure from './Structure'
import StickIcon from '../Icons/StickIcon'

const MainStructure = () => {
    return(
        <div className={cn(styles.root)}>
            <div className={styles.triggers}>
                <button></button>
                <button></button>
            </div>
            <Structure strokeColor='#c7c9c9' strokeSize={8} />
            <img className={styles.referenceImage} src='./psvita_reference.png' alt='imagen de referencia'/>
            <div className={styles.background}>
                <img src={'./sony-logo.png'} className={styles.sonyLogo} />
                <div className={styles.leftStick}>
                    <ControlShape
                        background={'#616161'}
                    />
                    <div className={cn(styles.buttons, styles.crossButtons)}>
                        <div className={styles.arrowBtn}>
                            <StickIcon strokeColor='#adaeb0' strokeSize={2}/>
                            <div className={styles.shadowElement}>
                                <span className={styles.sparkleBtn}></span>
                            </div>
                        </div>
                        <div className={styles.arrowBtn}>
                            <StickIcon strokeColor='#adaeb0' strokeSize={2}/>
                            <div className={styles.shadowElement}></div>
                        </div>
                        <div className={styles.arrowBtn}>
                            <StickIcon strokeColor='#adaeb0' strokeSize={2}/>
                            <div className={styles.shadowElement}>
                                <span className={styles.sparkleBtn}></span>
                            </div>
                        </div>
                        <div className={styles.arrowBtn}>
                            <StickIcon strokeColor='#adaeb0' strokeSize={2}/>
                            <div className={styles.shadowElement}>
                                <span className={styles.sparkleBtn}></span>
                            </div>
                        </div>
                        <div className={styles.shadowCross}>
                        </div>
                        <div className={styles.shadowCross}>
                            <span className={styles.innerShadow}></span>
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
                    <button className={cn(styles.ovalButton, styles.ovalPrimeButton)}>
                        <img src={'./ps-logo.png'} className={styles.psLogo} />
                    </button>
                </div>
                <Screen />
                <img className={styles.psVitaLogo} src={'./logo.svg'} />
                <div className={styles.rightStick}>
                    <div className={styles.camContainer}>
                        <div className={styles.webCam}>
                            <div></div>
                        </div>
                    </div>
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
                    <div className={styles.groupButtons}>
                        <button className={styles.ovalButton}>Select</button>
                        <button className={styles.ovalButton}>Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainStructure