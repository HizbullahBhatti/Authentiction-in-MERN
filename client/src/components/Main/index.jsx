import styles from './styles.module.css';

const Main = ()=>{

    const handleLogout =()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }
    return(
        <div className={styles.main_container}>
            <div className={styles.navbar}>
                <h1>Facebook</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Main;