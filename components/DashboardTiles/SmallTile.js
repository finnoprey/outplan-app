import { Component } from 'react';
import styles from './DashboardTiles.module.scss';

export class SmallTile extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.nTasks = this.props.nTasks;
    }
    render() {
        let subtitle = 'tasks';
        if (this.nTasks == 1) {
            subtitle = 'task'
        }

        return (
            <div className={styles.smallTile}>
                <h3>{this.name}</h3>
                <h1>{this.nTasks}</h1>
                <h3>{subtitle}</h3>
            </div>
        )
    }
}

export default SmallTile