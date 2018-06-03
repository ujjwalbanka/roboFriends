import React,{Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots';
import {connect} from 'react-redux';
import {searchRobot, getRobot} from './action';

const mapStateToProps = (state) => {
    return{
        searchfield: state.searchingRobot.searchfield

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(searchRobot(event.target.value))
    }
}
class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            robots : robots
        }
    }
    render()
    {
        const{ robots} = this.state;
        const {searchfield, onSearchChange}=this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.includes(searchfield);
        })
        console.log(this.props);
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox searchChange={onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)