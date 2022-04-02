import { Component } from 'react';
import BallScene from '../BallScene/BallScene';
import styles from './DashboardTiles.module.scss';

class LargeTile extends Component {
    constructor(props) {
        super(props);
        this.nTasks = this.props.nTasks;

    }
    render() {
        return (
            <div className={styles.largeTile}>
                <h1>{this.nTasks}</h1>
                <h2>Tasks this week</h2>
                <div className={styles.largeTileBallContainer}>
                    {/* <BallScene /> */}
                </div>
            </div>
        )
    }
}

export default LargeTile;