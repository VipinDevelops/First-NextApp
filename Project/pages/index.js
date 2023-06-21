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

// This function will run on each request  on the server
// use this is you need to pre-render data frequently or need to fetch data from an API, or authentication 
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // fetch data from an API

//     return {
//         props: { meetups: DUMMY_LIST }
//     }
// }

// This function will run during the build process
// use this if you need to pre-render data for all pages in advance and the data changes infrequently
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

// Two types of pre-rendering
// 1. Static Generation : pre-rendering at build time
// 2. Server-side Rendering : pre-rendering at request time
