import styles from './header.module.css'
import Image from 'next/image'
import logo from '@/../public/assets/Logo.png'
import lines from '@/../public/assets/icons/three_line.png'

export function Header(){
    return(
        <header className={styles['main-header']}>
            <Image 
                src={lines}
                alt="/"
                width='40'
            />
            <Image 
                src={logo}
                alt="/"
                width='50'
            />
        </header>
    )
}