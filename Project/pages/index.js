import MeetupList from '../components/meetups/MeetupList'

const DUMMY_LIST = [{
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first, amazing meetup!'
},
{
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second, amazing meetup!'

}]

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_LIST
        },
        revalidate: 10
    }
}

export default HomePage;