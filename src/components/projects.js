import React, { Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn57.androidauthority.net/wp-content/uploads/2019/08/new-android-logo-2019-robot-head-reactions-animated-2.gif) center / cover'}}>Android Project #1</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"></IconButton>
                    </CardMenu>
                </Card>
      
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn57.androidauthority.net/wp-content/uploads/2019/08/new-android-logo-2019-robot-head-reactions-animated-2.gif) center / cover'}} >Android Project #2</CardTitle>
                  <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </CardText>
                  <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
      
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn57.androidauthority.net/wp-content/uploads/2019/08/new-android-logo-2019-robot-head-reactions-animated-2.gif) center / cover'}} >Android Project #3</CardTitle>
                  <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </CardText>
                  <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Swift</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is Flutter</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }
   
   render() {
       return(
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState( {activeTab: tabId})} ripple>
                    <Tab>Android</Tab>
                    <Tab>Swift</Tab>
                    <Tab>Flutter</Tab>
                    <Tab>MongoDB</Tab>
               </Tabs>

               
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            
           </div>
       )
   } 
}

export default Projects;