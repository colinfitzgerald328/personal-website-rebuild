import React from "react";
import styles from "./styles.module.css"

export default class TopItems extends React.Component {
    render() {
        console.log(this.props.windowWidth)
        return (
            <div className={this.props.windowWidth > 1308 ? styles.itemsHolder : styles.itemsHolderMobile}>
                <div className={this.props.windowWidth > 1308 ? styles.leftItems : styles.leftItemsHoldeMobile}>
                    <div className={this.props.windowWidth > 1308 ? styles.item : styles.itemMobile}>
                        Colin FitzGerald
                    </div>
                    <div className={this.props.windowWidth > 1308 ? styles.item : styles.itemMobile}>
                        Currently data engineer at RoBhat Labs 
                    </div>
                    <div className={this.props.windowWidth > 1308 ? styles.item : styles.itemMobile}>
                        Based in Berkeley, California
                    </div>
                </div>
                <div className={this.props.windowWidth > 1308 ? styles.item : styles.itemMobile}>
                    <div className={styles.imageHolder}>
                        <img onClick={()=> window.open("https://www.instagram.com/colinfitzgerald328/")} className={styles.iconImage} src={"/instagram.png"}>
                        </img>
                    </div>
                    <div className={styles.imageHolder}>
                        <img onClick={()=> window.open("https://www.github.com/colinfitzgerald328/")} className={styles.iconImage} src={"/github.png"}>
                        </img>
                    </div>
                    <div className={styles.imageHolder}>
                        <img onClick={()=> window.open("https://www.strava.com/athletes/84239936")} className={styles.iconImage} src={"/strava.png"}>
                        </img>
                    </div>
                </div>
             </div>
        )
    }
}