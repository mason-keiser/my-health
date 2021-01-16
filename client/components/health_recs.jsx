import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

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
                    image: '/images/hiking.jpg',
                    alt: 'Hiking image',
                    name: 'Hiking',
                    description: 'Hiking is good for you both physically and mentally. It provides a great cardiovascular workout, improves balance, and is a natural stress reliever.'
                },
                {
                    id: 5,
                    image: '/images/reading.png',
                    alt: 'Reading image',
                    name: 'Reading',
                    description: 'There’s nothing like the smell of old books or the crack of a new one’s spine. (Plus, you’ll never run low on battery.) As it turns out, diving into a page-turner can also offer benefits toward your health and happiness.'
                },
            ]
        }
    }

    render() {
        return (
            null
        )
    }
}