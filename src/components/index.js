import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import TopItems from "./topItems";
import styles from "./styles.module.css";

export default class Root extends React.Component {
    constructor(props) {
        super(props) 
            this.state = { innnerWidth: null }
            this.basicFunction = this.basicFunction.bind(this)
        
    }
    handleArrowClick(elementName) {
        const element = document.querySelector(`.${elementName}`);
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth", 
        });
      }
      
    resetScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }




    componentDidMount() {
       window.addEventListener('resize', this.basicFunction)
       this.setState({ windowWidth: window.innerWidth })
    }

    basicFunction() {
        this.setState({ windowWidth: window.innerWidth })
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
                <div className={this.state.windowWidth > 1000 ? styles.mainBackground : styles.mainBackgroundMobile}>
                    <TopItems windowWidth={this.state.windowWidth}/>
                    <div className={styles.leftAndRightContainer}>
                        <div className={styles.leftItemsHolder}>
                            <div className={styles.roleArrowContainer}>
                                <div className={this.state.windowWidth > 1000 ? styles.role : styles.roleMobile}>
                                    [Web Developer]
                                </div>
                                <div className={this.state.windowWidth > 1000 ? styles.downwardArrow : styles.downwardArrowMobile}>
                                    <ArrowDownwardIcon
                                        className={this.state.windowWidth > 1000 ? styles.itemThingy : styles.itemThingy}
                                        sx={this.state.windowWidth > 1000 ? {fontSize: 120} : {fontSize: 65}}
                                        onClick={()=> this.handleArrowClick(styles.extraItem)}/>
                                </div>
                            </div>
                            <div className={styles.importantImageHolder}>
                                <img className={styles.importantImage} 
                                    src={"https://media.licdn.com/dms/image/C5603AQGDpqq29SA6KQ/profile-displayphoto-shrink_800_800/0/1653630642508?e=1688601600&v=beta&t=PSNTDC2ZKBMM2uYzKtZEc_doZd5KqZ1PE4YAGoNkJzw"}/>
                                </div>
                            <div className={this.state.windowWidth > 1000 ? styles.arrowInfoHolder : styles.arrowInfoHolderMobile}>
                                <div className={styles.info}>
                                    I am an up-and-coming web developer 👨‍💻 and data scientist! Thank you for checking out my page 😁
                                </div>
                                <div className={this.state.windowWidth > 1000 ? styles.name : styles.smallerName}>
                                    COLIN FITZGERALD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.extraItem}>
                    <div className={styles.topItems}>
                    <div className={this.state.windowWidth > 1000 ? styles.label : styles.smallerLabel}>
                            <strong>
                                [snapshot]
                            </strong>
                            <div className={styles.bottomUnderline}>
                                Who am I?
                            </div>
                    </div>
                    <div className={styles.upArrowHolder}>
                        <ArrowUpwardRoundedIcon
                            className={styles.itemThingyUp}
                            sx={this.state.windowWidth > 1000 ? {fontSize: 120} : {fontSize: 60}}
                            onClick={this.resetScroll} />
                    </div>
                    </div>
                    <div className={styles.bio}>
                        <div className={styles.containerHolder}>
                        <div className={styles.blurb}>
                            My name is Colin FitzGerald and my story begins with a sport I discovered at the age of 7.


                        <br></br>
                        <br></br>
                        
                        Between persistence, consistent dedication and admittedly, genetic talent, my high school running career translated
                        
                        into offers from several world class institutions. 
                        
                        I chose to attend the University of California, Berkeley, where I competed as a track athlete.  
                        

                        <br></br>
                        <br></br>

                        Academically, I majored in economics and minored in data science. 

                        During the pandemic, I decided to learn to code since I didn’t have any prior experience; it was a challenge I had wanted to tackle for many years. 

                        <br></br>
                        <br></br>

                        Quite frankly, I was awful at first. I struggled and couldn’t grasp even the most basic concepts.
                        
                        However, I was persistent and patient with myself.

                        I started small with simple Python projects and dabbled a little bit in R.

                        Slowly, I became more confident in my ability to master new coding languages.

                        <br></br>
                        <br></br>

                        I found that data science and web development projects interested me the most. 

                        As I have continued through the years, I find myself enjoying coding more and more. I know now that the despair I felt when seeing an error is an opportunity to better understand programming.

                        <br></br>
                        <br></br>
                        
                        The first iteration of my personal website was built through cloning a github pages website and modifying it to my liking. 

                        This iteration was built from scratch using Next.js, the language I currently use at RoBhat Labs. 

                        Thanks for reading this small blurb about me and continue on to learn more 😊
                        </div>
                        {
                        this.state.windowWidth > 1300 && 
                        <div className={styles.imageHolder}>
                            <img className={styles.image} src={"https://images.unsplash.com/photo-1668495238352-cdff39bc763f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"}/>
                            <img className={styles.image1} src={"/running_image.jpg"}/>
                        </div>
                        }
                        </div>
                        
                    </div>
                    <div className={styles.alignRight}>
                        <ArrowDownwardIcon
                            className={styles.itemThingy}
                            sx={this.state.windowWidth > 1000 ? {fontSize: 120} : {fontSize: 60}}
                            onClick={()=> this.handleArrowClick(styles.extraItem1)}/>
                    </div>
                </div>
                <div className={styles.extraItem1}>
                    <div className={styles.topItems}>
                    <div className={this.state.windowWidth > 1000 ? styles.label : styles.smallerLabel}>
                            <strong>
                                [focus]
                            </strong>
                       <div className={styles.bottomUnderline}>
                            Photography
                       </div>
                    </div>
                    <div className={styles.upArrowHolder}>
                        <ArrowUpwardRoundedIcon
                            className={styles.itemThingyUp}
                            sx={this.state.windowWidth > 1000 ? {fontSize: 120} : {fontSize: 60}}
                            onClick={()=> this.handleArrowClick(styles.extraItem)}/>
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
                        <ArrowDownwardIcon
                            className={styles.itemThingy}
                            sx={this.state.windowWidth > 1000 ? {fontSize: 120} : {fontSize: 60}}
                            onClick={()=> this.handleArrowClick(styles.extraItem2)}/>
                    </div>
                </div>
                <div className={styles.extraItem2}>
                    <div className={styles.topItems}>
                        <div className={this.state.windowWidth > 1000 ? styles.label : styles.smallerLabel}>
                            <strong>
                                [passion]
                            </strong>
                       <div className={styles.bottomUnderline}>
                            Running
                       </div>
                    </div>
                    <div className={styles.upArrowHolder}>
                        <ArrowUpwardRoundedIcon
                            className={styles.itemThingyUp}
                            sx={this.state.windowWidth > 1000 ? {fontSize: 120} : {fontSize: 60}}
                            onClick={()=> this.handleArrowClick(styles.extraItem1)} />
                    </div>
                    </div>
                    <iframe
                        height='454'
                        width='100%'
                        frameborder='0'
                        allowtransparency='true'
                        src='https://www.strava.com/athletes/84239936/latest-rides/cf9212f274739e26c9e9d7af072e33d80326da4a'>
                    </iframe>
                </div>
            </div>
        )
    }
}
