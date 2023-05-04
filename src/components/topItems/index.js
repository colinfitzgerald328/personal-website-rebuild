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
                    Work, About, Contact 
                </div>
             </div>
        )
    }
}