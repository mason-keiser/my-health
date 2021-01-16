import React from 'react';
import Main_Page_Header from './main_page_header';
import { Carousel } from 'react-responsive-carousel';

export default class Health_Recs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recs: [
                {
                    id: 1,
                    image: '/images/meditation.jpg',
                    alt: 'Meditation image',
                    name: 'Meditation',
                    description: 'Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.'
                },
                {
                    id: 2,
                    image: '/images/yoga.jpg',
                    alt: 'Yoga image',
                    name: 'Yoga',
                    description: 'A Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation.'
                },
                {
                    id: 3,
                    image: '/images/reading.png',
                    alt: 'Reading image',
                    name: 'Reading',
                    description: 'A Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation.'
                },
                {
                    id: 4,
                    image: '/images/newhike.jpg',
                    alt: 'Hiking image',
                    name: 'Hiking',
                    description: 'Hiking is good for you both physically and mentally. It provides a great cardiovascular workout, improves balance, and is a natural stress reliever.'
                },
                {
                    id: 5,
                    image: '/images/painting.jpg',
                    alt: 'Painting image',
                    name: 'Painting',
                    description: 'Taking up a hobby like painting isn’t just for the creative types. The more analytical left-brainers can stimulate and nurture their creative growth by painting as well. Practice and focus, two skills inherent in left-brain individuals, allow these people to learn creative skills at their own pace.'
                },
            ]
        }
    }

    render() {
        const list = (this.state.recs !== undefined) 
        ?  (this.state.recs.map((rec, index) => {
                return(
                    <div className='recs' key={rec.id}>
                        <img
                        className="recImg p-0"
                        src={rec.image}
                        alt={`${rec.name} poster`}
                        />
                        <h3 className='mt-3'>{rec.name}</h3>
                        <h5 className='mb-3 pr-2 pl-2'>{rec.description}</h5>
                    </div>
                );
            })
        )
        : null
        return (
            <div>
                <Main_Page_Header setView = {this.props.setView}/>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-2">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: "white"}} onClick={() => this.props.setView('journal_history',{})}></h4>
                </div>
                <h2 className='title22 mt-4 mb-4'>Health Recommendations</h2>
                <div style={{ width: "100%", margin: "auto"}}>
                    {list}
                </div>
            </div>
        )
    }
}