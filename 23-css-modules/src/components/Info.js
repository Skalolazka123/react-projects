import './Info.css'
import styles from './Info.module.css'

console.log(styles)
// {
//     "info": "Info_info__FjG1F",
//     "myOtherButton": "Info_myOtherButton__g9Ung"
// }

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <h2>Blue heading</h2>
            <button className={'my-button ' + styles.myOtherButton}>
                Click me in the Info component Other Button
            </button>
            <button className="my-button">
                Click me in the Info component
            </button>
        </div>
    )
}

export default Info
