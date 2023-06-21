import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {

    return (
        <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg" title="A First Meetup" address="Some Street 5, Some City" description="This is a first meetup!"  ></MeetupDetail>
    )
}

// we need to tell next.js how many pages it should pre-generate
// we have to export in page component file if we want to pre-render dynamic pages and we are using getStaticProps

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    // fetch data for a single meetup using meetupId from URL
    const meetupId = context.params.meetupId;

    // fetch data for a single meetup

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg',
                id: meetupId,
                title: 'A First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meetup!'

            }
        }
    }
}

export default MeetupDetails;