
import styles from './header.module.css'
export default function Header({children}) {
  return (
    <header className={`${styles.header} d-flex justify-content-center flex-column align-items-center`}>
      {children}
    </header>
  )
}
