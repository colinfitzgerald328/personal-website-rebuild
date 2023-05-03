import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import styles from "./styles.module.css";

export default class Root extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {scrollheight: 0}
    }
    handleArrowClick = () => {
        const element = document.querySelector(`.${styles.extraItem}`);
        this.setState({ scrollheight: element.offsetTop })
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }

    handleArrowClick1 = () => {
        const element = document.querySelector(`.${styles.extraItem1}`);
        this.setState({ scrollheight: element.offsetTop })
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }

    handleArrowClick2 = () => {
        const element = document.querySelector(`.${styles.extraItem2}`);
        this.setState({ scrollheight: element.offsetTop })
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }



    resetScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    
    

    render() {
        const images = [
            'https://images.unsplash.com/photo-1668495238352-cdff39bc763f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1668495251365-c0cb1f0a37da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1668495245755-8d294174768c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1668495238460-67876b192fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1632000781988-f2894640cdd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1610854848272-f154823ff4af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          ];
        return (
            <div className={styles.main}>
                <div className={styles.mainBackground}>
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
                    <div className={styles.leftAndRightContainer}>
                        <div className={styles.leftItemsHolder}>
                            <div className={styles.roleArrowContainer}>
                            <div className={styles.role}>
                                [Web Developer]
                            </div>
                            <div className={styles.downwardArrow}>
                        <ArrowDownwardIcon className={styles.itemThingy} sx={{fontSize: 120}} onClick={this.handleArrowClick} />
                        </div>
                        </div>
                            <div className={styles.importantImageHolder}>
                                <img className={styles.importantImage} 
                                src={"https://media.licdn.com/dms/image/C5603AQGDpqq29SA6KQ/profile-displayphoto-shrink_800_800/0/1653630642508?e=1688601600&v=beta&t=PSNTDC2ZKBMM2uYzKtZEc_doZd5KqZ1PE4YAGoNkJzw"}/>
                            </div>
                            <div className={styles.arrowInfoHolder}>
                                <div className={styles.info}>
                                    I am an up-and-coming web developer 👨‍💻 and data scientist! Thank you for checking out my page 😁
                                </div>
                                <div className={styles.name}>
                                    COLIN FITZGERALD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.extraItem}>
                    <div className={styles.topItems}>
                    <div className={styles.label}>
                        <strong>[snapshot]</strong>
                        <div className={styles.bottomUnderline}>
                            Who am I?
                       </div>
                    </div>
                    <div className={styles.upArrowHolder}>
                        <ArrowUpwardRoundedIcon className={styles.itemThingyUp} sx={{fontSize: 120}} onClick={this.resetScroll} />
                    </div>
                    </div>

                    <div className={styles.bio}>
                        My name is Colin FitzGerald.

                        My story started with running. Ever since I was a little kid, I loved to run. I brought intense passion and dedication to the sport I loved so dearly, and I was lucky enough to have it translate into acceptance into virtually any university of my choice.

                        jpeg

                        I chose to attend the University of California, Berkeley, where I am currently a student-athlete.

                        My major is Economics while my minor is in Data Science.

                        During quarantine, I decided to learn to code since I didn’t have any prior experience.

                        I was awful at first. I struggled and couldn’t grasp even the most basic concepts. However, I was persistent and patient with myself.

                        Slowly, I am becoming more confident in my ability to code. I find it interesting; to me, it’s one huge puzzle.

                        I started small with simple Python projects and dabbled a little bit in R.

                        As I have continued through the years, I find myself enjoying coding more and more. One day, I hope to contribute to projects that can change the world. Until then, I’m working hard to learn as much as I can.

                        My time in coding is split between Website projects and Data Science.

                        The inspiration for my website was from one of my friends who is also a current U.C. Berkeley Student. I learned to and took inspiration from his workflow. Here is a link to Ravi’s website.
                    </div>
                    <div className={styles.alignRight}>
                    <ArrowDownwardIcon className={styles.itemThingy} sx={{fontSize: 120}} onClick={this.handleArrowClick1} />
                    </div>


                </div>
                <div className={styles.extraItem1}>
                    <div className={styles.topItems}>
                    <div className={styles.label}>
                       <strong>[focus]</strong>
                       <div className={styles.bottomUnderline}>
                        Photography
                       </div>
                    </div>
                    <div className={styles.upArrowHolder}>
                        <ArrowUpwardRoundedIcon className={styles.itemThingyUp} sx={{fontSize: 120}} onClick={this.handleArrowClick} />
                    </div>
                    </div>

                    <div className={styles.imageContainer}>
                        {images.map((image)=> 
                        <div key={image} className={styles.holder}>
                        <img className={styles.regularImage}
                        src={image}/>
                        </div>)}
                    </div>
                    <div className={styles.alignRight}>
                    <ArrowDownwardIcon className={styles.itemThingy} sx={{fontSize: 120}} onClick={this.handleArrowClick2} />
                    </div>

                </div>
                <div className={styles.extraItem2}>
                    <div className={styles.topItems}>
                    <div className={styles.label}>
                       <strong>[passion]</strong>
                       <div className={styles.bottomUnderline}>
                        Running
                       </div>
                    </div>
                    <div className={styles.upArrowHolder}>
                        <ArrowUpwardRoundedIcon className={styles.itemThingyUp} sx={{fontSize: 120}} onClick={this.resetScroll} />
                    </div>
                    </div>
                    <iframe height='454' width='100%' frameborder='0' allowtransparency='true' src='https://www.strava.com/athletes/84239936/latest-rides/cf9212f274739e26c9e9d7af072e33d80326da4a'></iframe>
                </div>
            </div>
        )
    }
}