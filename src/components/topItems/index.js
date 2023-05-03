import React from "react";
import styles from "./styles.module.css"

export default class TopItems extends React.Component {
    render() {
        return (
            <div className={styles.itemsHolder}>
                <div className={styles.leftItems}>
                    <div className={styles.item}>
                        Colin FitzGerald
                    </div>
                    <div className={styles.item}>
                        Currently data engineer at RoBhat Labs 
                    </div>
                    <div className={styles.item}>
                        Based in Berkeley, California
                    </div>
                </div>
                <div className={styles.lastItem}>
                    Work, About, Contact 
                </div>
             </div>
        )
    }
}