import React from 'react';
import Main_Page_Header from './main_page_header';
import { NextArrow, BackArrow, Rec } from './health_recs_fx';

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
                    description: 'Reading books benefits both your physical and mental health, and those benefits can last a lifetime. They begin in early childhood and continue through the senior years.'
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
            ],
            activeIndex: 0
        }
        this.goToNextRec = this.goToNextRec.bind(this);
        this.goToPrevRec = this.goToPrevRec.bind(this);
        this.shuffleRecArray = this.shuffleRecArray.bind(this);
    }

    componentDidMount() {
        this.shuffleRecArray();
      }

    shuffleRecArray() {
        const shuffledArray = this.state.recs;
        for (let index = shuffledArray.length - 1; index > 0; index--) {
          const tempIndex = Math.floor(Math.random() * (index + 1));
          [shuffledArray[index], shuffledArray[tempIndex]] = [shuffledArray[tempIndex], shuffledArray[index]];
        }
        this.setState({
          recs: shuffledArray
        });
      }

    goToNextRec() {
        let index = this.state.activeIndex;
        const length = this.state.recs.length;
        if (index === length - 1) {
          this.shuffleRecArray();
          index = 0;
        } else {
          index++;
        }
        this.setState({
          activeIndex: index
        });
      }

    goToPrevRec() {
        let index = this.state.activeIndex;
        const length = this.state.recs.length;
        if (index < 1) {
          this.shuffleRecArray();
          index = length - 1;
        } else {
          index--;
        }
        this.setState({
          activeIndex: index
        });
      }

    render() {
        return (
            <div>
                <Main_Page_Header setView = {this.props.setView}/>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
        
                <h2 className='title22 mt-4 mb-4'>Health Recommendations</h2>
                <div className='recsRow mb-5'>
                    <BackArrow className='col-1 ar' goToPrevRec={() => this.goToPrevRec()}/>
                    <div style={{ width: "100%", margin: "auto"}}>
                        {this.state.recs.map((rec, index) =>
                        <Rec
                            className='col-10'
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            rec={rec}
                        />
                        )}
                    </div>
                    <NextArrow className='col-1 ar' goToNextRec={() => this.goToNextRec()}/>
                </div>
            </div>
        )
    }
}