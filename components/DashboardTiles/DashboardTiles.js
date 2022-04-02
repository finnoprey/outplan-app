import { Component } from 'react';
import styles from './DashboardTiles.module.scss';
import LargeTile from './LargeTile';
import SmallTile from './SmallTile';

class DashboardTiles extends Component {
    constructor(props) {
        super(props);

        this.subjects = [
            {
                name: "Physics",
                tasks: [
                    {
                        name: "Practice Exam",
                        due: "03/04/2022",
                        description: "Complete the Unit 3 Practice Exam"
                    },
                    {
                        name: "Edrolo",
                        due: "04/04/2022",
                        description: "Complete Edrolo section 5A"
                    },
                    {
                        name: "Checkpoints",
                        due: "06/04/2022",
                        description: "Complete checkpoints questions"
                    }
                ]
            },
            {
                name: "Chemistry",
                tasks: [
                    {
                        name: "Practice SAC",
                        due: "03/04/2022",
                        description: "Complete the AOS2 Practice SACs"
                    },
                    {
                        name: "Chapter 4-6",
                        due: "08/04/2022",
                        description: "Complete summaries of chapters 4-6"
                    }
                ]
            },
            {
                name: "English",
                tasks: [
                    {
                        name: "Article Annotation",
                        due: "05/04/2022",
                        description: "Annotate the practice persuasive article."
                    }
                ]
            }
        ];
    }
    render() {
        // SORT THE SUBJECTS BY NUMBER OF TASKS
        let sortedSubjects = this.subjects.sort((a,b) => {
            if (a.tasks.length < b.tasks.length) return 1;
            if (a.tasks.length > b.tasks.length) return -1;
            return 0;
        });

        return (
            <div className={styles.dashboardtileslayout}>
                <LargeTile nTasks={9} />
                {
                    sortedSubjects.slice(0,2).map((e) => {
                        return <SmallTile key={e.name} name={e.name} nTasks={e.tasks.length} />
                    })
                }
            </div>
        )
    }
}

export default DashboardTiles;